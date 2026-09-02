#!/usr/bin/env node
/**
 * Enterprise Phase 4 — Remaining items (تسامي الوطنية)
 * A) Auto-inject customer phone in notify_supervisor
 * B) Fix Supervisor Reply webhook (Romanh auth)
 * C) Postgres orders table + sync node
 * D) Enhanced weekly KPI report
 */
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const {
  n8nApi,
  getWorkflow,
  putWorkflow,
  createOrUpdateWorkflow,
  NOTIFY_SUB_WF_ID,
  TELEGRAM_CHAT_ID,
} = require('./n8n-config');

const POSTGRES_CRED_ID = 'D3W3att2gh7c3BNJ';
const ROMANH_ACCOUNT = 118;
const ROMANH_INBOX_ID = 1;
const ROMANH_CRED = { httpHeaderAuth: { id: 'krJqyHFhO5ZRsNze', name: 'Romanh API' } };
const SUPERVISOR_WF_NAME = 'Tasami — Supervisor Reply';
const WEEKLY_WF_NAME = 'Tasami — Weekly Report';
const ORDERS_SHEET_ID = '1gphnCD_7zCqliAE211fApB92Ia0XSB84muIr9WR8xnM';

function loadEnv(key) {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return process.env[key] || '';
  const line = fs.readFileSync(envPath, 'utf8').split('\n').find(l => l.startsWith(`${key}=`));
  return line ? line.replace(`${key}=`, '').trim() : process.env[key] || '';
}

function romanAuthParams(extra = {}) {
  return {
    authentication: 'genericCredentialType',
    genericAuthType: 'httpHeaderAuth',
    ...extra,
  };
}

async function ensureOrdersTable() {
  const url = loadEnv('DATABASE_URL');
  if (!url) {
    console.warn('⚠️ DATABASE_URL missing — skip orders table');
    return false;
  }
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS tasami_orders (
      id SERIAL PRIMARY KEY,
      phone TEXT NOT NULL,
      customer_name TEXT,
      customer_message TEXT,
      sara_reply TEXT,
      status TEXT DEFAULT 'received',
      source TEXT DEFAULT 'whatsapp',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  await prisma.$executeRawUnsafe(
    `CREATE INDEX IF NOT EXISTS idx_tasami_orders_phone ON tasami_orders(phone)`
  );
  await prisma.$executeRawUnsafe(
    `CREATE INDEX IF NOT EXISTS idx_tasami_orders_created ON tasami_orders(created_at)`
  );
  await prisma.$disconnect();
  console.log('✅ Postgres table tasami_orders ready');
  return true;
}

function patchNotifyTool(wf) {
  const tool = wf.nodes.find(n => n.name === 'notify_supervisor');
  if (!tool) throw new Error('notify_supervisor not found');

  tool.parameters.description =
    'واتساب للموظف +966 56 443 9652 عند: صنف غير متوفر، طلب خاص، شكوى. اكتبي request_summary + message بأسلوب زميلة عمل. الجوال والاسم يُحقَنان تلقائياً من المحادثة.';

  tool.parameters.workflowInputs = {
    mappingMode: 'defineBelow',
    value: {
      message: {
        type: 'string',
        value: '={{ $fromAI("message", "رسالة داخلية للموظف (أسلوب زميلة عمل)", "string") }}',
      },
      request_summary: {
        type: 'string',
        value: '={{ $fromAI("request_summary", "ملخص طلب العميل بالضبط", "string") }}',
      },
      customer_phone: {
        type: 'string',
        value: "={{ $('Resolve Route').first().json.phone }}",
      },
      customer_name: {
        type: 'string',
        value:
          "={{ $('Webhook - رسالة جاية من Evolution API').first().json.body?.data?.pushName || $('Webhook - رسالة جاية من Evolution API').first().json.body?.romanh?.contact_name || 'عميل' }}",
      },
    },
  };
  console.log('✅ notify_supervisor: phone/name auto-injected from conversation');
}

function ensurePostgresOrderNode(wf) {
  const name = 'Save Order to Postgres';
  if (wf.nodes.find(n => n.name === name)) {
    console.log('   Save Order to Postgres — exists');
    return;
  }

  const sheet = wf.nodes.find(n => n.name === 'Save Order to Sheets') || { position: [0, 0] };
  wf.nodes.push({
    id: randomUUID(),
    name,
    type: 'n8n-nodes-base.postgres',
    typeVersion: 2.5,
    position: [sheet.position[0] + 200, sheet.position[1] + 100],
    credentials: { postgres: { id: POSTGRES_CRED_ID, name: 'Postgres account' } },
    parameters: {
      operation: 'executeQuery',
      query: `INSERT INTO tasami_orders (phone, customer_name, customer_message, sara_reply, status, source)
VALUES ($1, $2, $3, $4, 'received', 'whatsapp')
RETURNING id, phone, created_at`,
      options: {
        queryReplacement:
          "={{ $('Resolve Route').first().json.phone }},={{ $('Webhook - رسالة جاية من Evolution API').first().json.body?.data?.pushName || $('Webhook - رسالة جاية من Evolution API').first().json.body?.romanh?.contact_name || '' }},={{ $('Resolve Route').first().json.message_text }},={{ $('Tag — سارة').first().json.output }}",
      },
    },
    onError: 'continueRegularOutput',
  });

  const sheetConn = wf.connections['Save Order to Sheets']?.main?.[0] || [];
  const teleNode = sheetConn.find(c => c.node === 'Order Alert — Telegram');
  wf.connections['Save Order to Sheets'] = {
    main: [[{ node: name, type: 'main', index: 0 }]],
  };
  wf.connections[name] = {
    main: [[teleNode || { node: 'Order Alert — Telegram', type: 'main', index: 0 }]],
  };
  console.log('✅ Save Order to Postgres wired after Sheets');
}

/** Reusable Romanh send chain nodes for any E.164 phone */
function buildRomanhSendNodes(prefix, phoneExpr, messageExpr, prepNodeName, startX = 640) {
  const y = 300;
  return {
    nodes: [
      {
        id: randomUUID(),
        name: `${prefix} Filter Contact`,
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.2,
        position: [startX, y],
        credentials: ROMANH_CRED,
        parameters: {
          method: 'POST',
          url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/contacts/filter`,
          ...romanAuthParams(),
          sendBody: true,
          specifyBody: 'json',
          jsonBody: `={{ { "payload": [{ "attribute_key": "phone_number", "filter_operator": "equal_to", "values": [${phoneExpr}] }] } }}`,
          options: {},
        },
        onError: 'continueRegularOutput',
      },
      {
        id: randomUUID(),
        name: `${prefix} Resolve Contact`,
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [startX + 220, y],
        parameters: {
          jsCode: `const prep = $('${prepNodeName}').first().json;
const filter = $input.first().json;
if (filter.error) throw new Error('Romanh: ' + filter.error.message);
const contactId = (filter.payload || [])[0]?.id || null;
return [{ json: { ...prep, contactId, needsCreate: !contactId, accountId: ${ROMANH_ACCOUNT}, inboxId: ${ROMANH_INBOX_ID} } }];`,
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Needs Create?`,
        type: 'n8n-nodes-base.if',
        typeVersion: 2.2,
        position: [startX + 440, y],
        parameters: {
          conditions: {
            conditions: [
              {
                leftValue: '={{ $json.needsCreate }}',
                rightValue: true,
                operator: { type: 'boolean', operation: 'true', singleValue: true },
              },
            ],
            combinator: 'and',
          },
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Create Contact`,
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.2,
        position: [startX + 660, y - 80],
        credentials: ROMANH_CRED,
        parameters: {
          method: 'POST',
          url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/contacts`,
          ...romanAuthParams(),
          sendBody: true,
          specifyBody: 'json',
          jsonBody: `={{ { "inbox_id": ${ROMANH_INBOX_ID}, "name": "Contact", "phone_number": ${phoneExpr} } }}`,
          options: {},
        },
        onError: 'continueRegularOutput',
      },
      {
        id: randomUUID(),
        name: `${prefix} Merge Contact`,
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [startX + 880, y - 80],
        parameters: {
          jsCode: `const prep = $('${prefix} Resolve Contact').first().json;
const created = $input.first().json;
const contactId = prep.contactId || created.payload?.contact?.id || created.id;
if (!contactId) throw new Error('No contact id');
return [{ json: { ...prep, contactId } }];`,
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Final Contact`,
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [startX + 880, y + 80],
        parameters: { jsCode: 'return [{ json: $input.first().json }];' },
      },
      {
        id: randomUUID(),
        name: `${prefix} Get Conversations`,
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.2,
        position: [startX + 1100, y],
        credentials: ROMANH_CRED,
        parameters: {
          method: 'GET',
          url:
            '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/contacts/{{ $json.contactId }}/conversations',
          ...romanAuthParams(),
          options: {},
        },
        onError: 'continueRegularOutput',
      },
      {
        id: randomUUID(),
        name: `${prefix} Pick Conversation`,
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [startX + 1320, y],
        parameters: {
          jsCode: `const prep = $('${prefix} Final Contact').first().json;
const res = $input.first().json;
const list = Array.isArray(res.payload) ? res.payload : [];
const open = list.find(c => c.status === 'open') || list[0];
if (open?.id) {
  return [{ json: { accountId: prep.accountId, conversationId: open.id, message: prep.message, done: true } }];
}
return [{ json: { ...prep, needsNewConvo: true, message: prep.message } }];`,
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Has Convo?`,
        type: 'n8n-nodes-base.if',
        typeVersion: 2.2,
        position: [startX + 1540, y],
        parameters: {
          conditions: {
            conditions: [
              {
                leftValue: '={{ $json.done }}',
                rightValue: true,
                operator: { type: 'boolean', operation: 'true', singleValue: true },
              },
            ],
            combinator: 'and',
          },
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Create Conversation`,
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.2,
        position: [startX + 1760, y + 80],
        credentials: ROMANH_CRED,
        parameters: {
          method: 'POST',
          url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/conversations`,
          ...romanAuthParams(),
          sendBody: true,
          specifyBody: 'json',
          jsonBody: '={{ { "contact_id": $json.contactId, "inbox_id": $json.inboxId } }}',
          options: {},
        },
        onError: 'continueRegularOutput',
      },
      {
        id: randomUUID(),
        name: `${prefix} Merge Convo`,
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [startX + 1980, y + 80],
        parameters: {
          jsCode: `const prep = $('${prefix} Pick Conversation').first().json;
const res = $input.first().json;
const conversationId = res.id || res.payload?.id;
if (!conversationId) throw new Error('No conversation');
return [{ json: { accountId: prep.accountId, conversationId, message: prep.message } }];`,
        },
      },
      {
        id: randomUUID(),
        name: `${prefix} Send WhatsApp`,
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.2,
        position: [startX + 2200, y],
        credentials: ROMANH_CRED,
        parameters: {
          method: 'POST',
          url:
            '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/conversations/{{ $json.conversationId }}/messages',
          ...romanAuthParams(),
          sendBody: true,
          specifyBody: 'json',
          jsonBody: '={{ { "content": $json.message, "message_type": "outgoing" } }}',
          options: {},
        },
      },
    ],
    connections: {
      [`${prefix} Filter Contact`]: {
        main: [[{ node: `${prefix} Resolve Contact`, type: 'main', index: 0 }]],
      },
      [`${prefix} Resolve Contact`]: {
        main: [[{ node: `${prefix} Needs Create?`, type: 'main', index: 0 }]],
      },
      [`${prefix} Needs Create?`]: {
        main: [
          [{ node: `${prefix} Create Contact`, type: 'main', index: 0 }],
          [{ node: `${prefix} Final Contact`, type: 'main', index: 0 }],
        ],
      },
      [`${prefix} Create Contact`]: {
        main: [[{ node: `${prefix} Merge Contact`, type: 'main', index: 0 }]],
      },
      [`${prefix} Merge Contact`]: {
        main: [[{ node: `${prefix} Final Contact`, type: 'main', index: 0 }]],
      },
      [`${prefix} Final Contact`]: {
        main: [[{ node: `${prefix} Get Conversations`, type: 'main', index: 0 }]],
      },
      [`${prefix} Get Conversations`]: {
        main: [[{ node: `${prefix} Pick Conversation`, type: 'main', index: 0 }]],
      },
      [`${prefix} Pick Conversation`]: {
        main: [[{ node: `${prefix} Has Convo?`, type: 'main', index: 0 }]],
      },
      [`${prefix} Has Convo?`]: {
        main: [
          [{ node: `${prefix} Send WhatsApp`, type: 'main', index: 0 }],
          [{ node: `${prefix} Create Conversation`, type: 'main', index: 0 }],
        ],
      },
      [`${prefix} Create Conversation`]: {
        main: [[{ node: `${prefix} Merge Convo`, type: 'main', index: 0 }]],
      },
      [`${prefix} Merge Convo`]: {
        main: [[{ node: `${prefix} Send WhatsApp`, type: 'main', index: 0 }]],
      },
    },
    entryNode: `${prefix} Filter Contact`,
  };
}

async function deploySupervisorWorkflow() {
  const secret = loadEnv('SUPERVISOR_WEBHOOK_SECRET');
  if (!secret) throw new Error('SUPERVISOR_WEBHOOK_SECRET missing in .env');

  const pauseUrl = 'https://n8n.esteemmediaa.com/webhook/tasami-bot-pause';
  const P = 'Sup';

  const roman = buildRomanhSendNodes(P, '$json.e164', '$json.message', 'Prepare Send', 820);

  const nodes = [
    {
      id: randomUUID(),
      name: 'Supervisor Webhook',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [200, 300],
      webhookId: randomUUID(),
      parameters: {
        path: 'tasami-supervisor-reply',
        httpMethod: 'POST',
        responseMode: 'lastNode',
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Auth Supervisor',
      type: 'n8n-nodes-base.if',
      typeVersion: 2.2,
      position: [420, 300],
      parameters: {
        conditions: {
          conditions: [
            {
              leftValue: '={{ $json.body.secret }}',
              rightValue: secret,
              operator: { type: 'string', operation: 'equals' },
            },
            {
              leftValue: '={{ $json.body.message }}',
              rightValue: '',
              operator: { type: 'string', operation: 'notEmpty' },
            },
          ],
          combinator: 'and',
        },
      },
    },
    {
      id: randomUUID(),
      name: 'Prepare Send',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 240],
      parameters: {
        jsCode: `const b = $json.body || {};
let phone = String(b.phone || '').replace(/\\D/g, '');
if (phone.startsWith('966')) phone = '+' + phone;
else if (phone.startsWith('0')) phone = '+966' + phone.slice(1);
else if (phone.startsWith('5')) phone = '+966' + phone;
else if (!phone.startsWith('+')) phone = '+' + phone;
const message = String(b.message || '').trim();
if (!message) throw new Error('message required');
return [{ json: { e164: phone, message, accountId: ${ROMANH_ACCOUNT}, inboxId: ${ROMANH_INBOX_ID} } }];`,
      },
    },
    ...roman.nodes,
    {
      id: randomUUID(),
      name: 'Pause Bot',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2440, 240],
      parameters: {
        method: 'POST',
        url: pauseUrl,
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ { secret: "${secret}", phone: $('Prepare Send').first().json.e164.replace(/^\\+/, ''), hours: 4, reason: "supervisor_reply" } }}`,
        options: { timeout: 8000 },
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Supervisor OK',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [2660, 240],
      parameters: { jsCode: 'return [{ json: { ok: true, sent: true } }];' },
    },
    {
      id: randomUUID(),
      name: 'Supervisor Denied',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 400],
      parameters: { jsCode: 'return [{ json: { ok: false, error: "unauthorized" } }];' },
    },
  ];

  const connections = {
    'Supervisor Webhook': { main: [[{ node: 'Auth Supervisor', type: 'main', index: 0 }]] },
    'Auth Supervisor': {
      main: [
        [{ node: 'Prepare Send', type: 'main', index: 0 }],
        [{ node: 'Supervisor Denied', type: 'main', index: 0 }],
      ],
    },
    'Prepare Send': { main: [[{ node: `${P} Filter Contact`, type: 'main', index: 0 }]] },
    ...roman.connections,
    [`${P} Send WhatsApp`]: { main: [[{ node: 'Pause Bot', type: 'main', index: 0 }]] },
    'Pause Bot': { main: [[{ node: 'Supervisor OK', type: 'main', index: 0 }]] },
  };

  await createOrUpdateWorkflow(SUPERVISOR_WF_NAME, nodes, connections);
  console.log('✅ Supervisor Reply webhook — Romanh auth fixed');
}

async function deployWeeklyKpi() {
  const nodes = [
    {
      id: randomUUID(),
      name: 'Every Monday 9am',
      type: 'n8n-nodes-base.scheduleTrigger',
      typeVersion: 1.2,
      position: [200, 300],
      parameters: { rule: { interval: [{ field: 'cronExpression', expression: '0 9 * * 1' }] } },
    },
    {
      id: randomUUID(),
      name: 'Read Orders Sheet',
      type: 'n8n-nodes-base.googleSheets',
      typeVersion: 4.5,
      position: [420, 200],
      credentials: { googleSheetsOAuth2Api: { id: 'ufwTSA6D31CFnyzH', name: 'Google Sheets account' } },
      parameters: {
        operation: 'read',
        documentId: { value: ORDERS_SHEET_ID, mode: 'id' },
        sheetName: { value: 'Sheet1', mode: 'name' },
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Count Postgres Orders',
      type: 'n8n-nodes-base.postgres',
      typeVersion: 2.5,
      position: [420, 400],
      credentials: { postgres: { id: POSTGRES_CRED_ID, name: 'Postgres account' } },
      parameters: {
        operation: 'executeQuery',
        query: `SELECT COUNT(*)::int AS week_orders FROM tasami_orders
WHERE created_at >= NOW() - INTERVAL '7 days'`,
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Build KPI Report',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [700, 300],
      parameters: {
        jsCode: `const sheetRows = $('Read Orders Sheet').all().map(i => i.json).filter(r => r['الجوال']);
const pg = $('Count Postgres Orders').first()?.json?.week_orders;
const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
const sheetWeek = sheetRows.filter(r => {
  const d = new Date(r['التاريخ'] || 0);
  return !isNaN(d) && d.getTime() >= weekAgo;
}).length;
const msg = [
  '📊 *تقرير أسبوعي — تسامي الوطنية*',
  '',
  '📦 طلبات الأسبوع (Sheets): ' + sheetWeek,
  pg != null ? '🗄️ طلبات الأسبوع (Postgres): ' + pg : '🗄️ Postgres: —',
  '📋 إجمالي السجل (Sheets): ' + sheetRows.length,
  '',
  '⏰ ' + new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' }),
  '🌿 البوت: chat with Factory',
].join('\\n');
return [{ json: { message: msg } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Send KPI Telegram',
      type: 'n8n-nodes-base.telegram',
      typeVersion: 1.2,
      position: [920, 300],
      credentials: { telegramApi: { id: 'iBs8LfCbvt39sN1T', name: 'Telegram account' } },
      parameters: {
        chatId: TELEGRAM_CHAT_ID,
        text: '={{ $json.message }}',
        additionalFields: {},
      },
    },
  ];

  const connections = {
    'Every Monday 9am': {
      main: [
        [
          { node: 'Read Orders Sheet', type: 'main', index: 0 },
          { node: 'Count Postgres Orders', type: 'main', index: 0 },
        ],
      ],
    },
    'Read Orders Sheet': { main: [[{ node: 'Build KPI Report', type: 'main', index: 0 }]] },
    'Count Postgres Orders': { main: [[{ node: 'Build KPI Report', type: 'main', index: 0 }]] },
    'Build KPI Report': { main: [[{ node: 'Send KPI Telegram', type: 'main', index: 0 }]] },
  };

  await createOrUpdateWorkflow(WEEKLY_WF_NAME, nodes, connections);
  console.log('✅ Weekly KPI report upgraded (Sheets + Postgres)');
}

async function main() {
  console.log('🚀 Enterprise Phase 4\n');

  await ensureOrdersTable();

  const wf = await getWorkflow();
  patchNotifyTool(wf);
  ensurePostgresOrderNode(wf);
  await putWorkflow(wf);

  await deploySupervisorWorkflow();
  await deployWeeklyKpi();

  console.log('\n🎉 Phase 4 complete');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
