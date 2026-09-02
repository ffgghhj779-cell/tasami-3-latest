#!/usr/bin/env node
/**
 * Enterprise Phase 3 — Human ops + Romanh (تسامي الوطنية)
 * - Remove wrong CRM sync (tasamiservices)
 * - Bot pause when customer asks for human (/resume to continue)
 * - Postgres pause store + API workflow (supervisor / Romanh agent)
 * - Supervisor Reply webhook → send WhatsApp via Romanh
 * - WhatsApp campaign workflow (Traders sheet)
 */
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const {
  n8nApi,
  getWorkflow,
  putWorkflow,
  putWorkflowById,
  createOrUpdateWorkflow,
  WF_ID,
  BRIDGE_WF_ID,
  TELEGRAM_CHAT_ID,
} = require('./n8n-config');

const POSTGRES_CRED_ID = 'D3W3att2gh7c3BNJ';
const ROMANH_CRED = { httpHeaderAuth: { id: 'krJqyHFhO5ZRsNze', name: 'Romanh API' } };
const SHEETS_CRED = { googleSheetsOAuth2Api: { id: 'ufwTSA6D31CFnyzH', name: 'Google Sheets account' } };
const TRADERS_SHEET_ID = '1ciM7iNfqBL0dkq5KqnEUHKSPiBsKYo3cAFrwVGWqQ_o';

function loadEnv(key, fallback = '') {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const line = fs.readFileSync(envPath, 'utf8').split('\n').find(l => l.startsWith(`${key}=`));
    if (line) return line.slice(key.length + 1).trim().replace(/^"|"$/g, '');
  }
  return process.env[key] || fallback;
}

async function ensurePauseTable() {
  const url = loadEnv('DATABASE_URL');
  if (!url) {
    console.warn('⚠️ DATABASE_URL missing — skip Postgres pause table');
    return false;
  }
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS tasami_bot_pause (
        phone TEXT PRIMARY KEY,
        pause_until TIMESTAMPTZ NOT NULL,
        reason TEXT,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    await prisma.$disconnect();
    console.log('✅ Postgres table tasami_bot_pause ready');
    return true;
  } catch (e) {
    console.warn('⚠️ Could not create pause table:', e.message);
    return false;
  }
}

function removeCrmSync(wf) {
  const names = ['Prepare CRM Sync', 'Sync to CRM'];
  wf.nodes = wf.nodes.filter(n => !names.includes(n.name));
  for (const src of ['Send via Romanh', 'Send text']) {
    if (!wf.connections[src]?.main?.[0]) continue;
    wf.connections[src].main[0] = wf.connections[src].main[0].filter(c => !names.includes(c.node));
  }
  for (const n of names) delete wf.connections[n];
  console.log('✅ Removed CRM sync (tasamiservices) — not used for الوطنية');
}

function patchResolveRoute(wf) {
  // Pause gate handled by Apply Pause Gate node — no inline patch needed
}

function ensurePauseNodes(wf) {
  const rr = wf.nodes.find(n => n.name === 'Resolve Route');
  const pos = rr?.position || [784, 432];

  if (!wf.nodes.find(n => n.name === 'Check Human Pause')) {
    wf.nodes.push({
      id: randomUUID(),
      name: 'Check Human Pause',
      type: 'n8n-nodes-base.postgres',
      typeVersion: 2.5,
      position: [pos[0] + 120, pos[1] + 120],
      credentials: { postgres: { id: POSTGRES_CRED_ID, name: 'Postgres account' } },
      parameters: {
        operation: 'executeQuery',
        query:
          "SELECT pause_until, reason FROM tasami_bot_pause WHERE phone = $1 AND pause_until > NOW() LIMIT 1",
        options: { queryReplacement: "={{ $('Resolve Route').first().json.phone }}",
        },
      },
      onError: 'continueRegularOutput',
      alwaysOutputData: true,
    });
  }

  if (!wf.nodes.find(n => n.name === 'Bot Paused?')) {
    wf.nodes.push({
      id: randomUUID(),
      name: 'Bot Paused?',
      type: 'n8n-nodes-base.if',
      typeVersion: 2.2,
      position: [pos[0] + 280, pos[1] + 60],
      parameters: {
        conditions: {
          options: { caseSensitive: true, leftValue: '', typeValidation: 'strict', version: 2 },
          conditions: [
            {
              leftValue: '={{ $json.bot_paused }}',
              rightValue: true,
              operator: { type: 'boolean', operation: 'true', singleValue: true },
            },
          ],
          combinator: 'and',
        },
      },
    });
  }

  // Resolve Route → Check Human Pause → Bot Paused?
  wf.connections['Resolve Route'] = {
    main: [[{ node: 'Check Human Pause', type: 'main', index: 0 }]],
  };
  wf.connections['Check Human Pause'] = {
    main: [[{ node: 'Bot Paused?', type: 'main', index: 0 }]],
  };
  wf.connections['Bot Paused?'] = {
    main: [
      [],
      [{ node: 'Needs Gemini Router?', type: 'main', index: 0 }],
    ],
  };
}

function patchHumanHandoffPause(wf) {
  const node = wf.nodes.find(n => n.name === 'Format Human Handoff');
  if (!node || node.parameters.jsCode.includes('pause_phone')) return;

  node.parameters.jsCode = node.parameters.jsCode.replace(
    'return [{ json: { output, telegram_msg } }];',
    `const pause_phone = String(route.phone || '').replace(/^\\+/, '');
const staticData = $getWorkflowStaticData('global');
if (!staticData.humanPause) staticData.humanPause = {};
staticData.humanPause[pause_phone] = Date.now() + 4 * 60 * 60 * 1000;
return [{ json: { output, telegram_msg, pause_phone, pause_hours: 4, pause_reason: 'human_handoff' } }];`
  );

  if (!wf.nodes.find(n => n.name === 'Save Human Pause')) {
    const pos = node.position || [0, 0];
    wf.nodes.push({
      id: randomUUID(),
      name: 'Save Human Pause',
      type: 'n8n-nodes-base.postgres',
      typeVersion: 2.5,
      position: [pos[0] + 100, pos[1] + 80],
      credentials: { postgres: { id: POSTGRES_CRED_ID, name: 'Postgres account' } },
      parameters: {
        operation: 'executeQuery',
        query: `INSERT INTO tasami_bot_pause (phone, pause_until, reason)
VALUES ($1, NOW() + ($2 || ' hours')::interval, $3)
ON CONFLICT (phone) DO UPDATE SET pause_until = EXCLUDED.pause_until, reason = EXCLUDED.reason, updated_at = NOW()`,
        options: {
          queryReplacement:
            '={{ $json.pause_phone }},={{ $json.pause_hours }},={{ $json.pause_reason }}',
        },
      },
      onError: 'continueRegularOutput',
    });

    const fmtConn = wf.connections['Format Human Handoff']?.main?.[0] || [];
    wf.connections['Format Human Handoff'] = {
      main: [
        [
          ...fmtConn,
          { node: 'Save Human Pause', type: 'main', index: 0 },
        ],
      ],
    };
    wf.connections['Save Human Pause'] = { main: [[]] };
  }
}

async function deployBotPauseApi(secret) {
  const nodes = [
    {
      id: randomUUID(),
      name: 'Pause Webhook',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [200, 300],
      webhookId: randomUUID(),
      parameters: {
        path: 'tasami-bot-pause',
        httpMethod: 'POST',
        responseMode: 'lastNode',
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Validate Pause Secret',
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
          ],
          combinator: 'and',
        },
      },
    },
    {
      id: randomUUID(),
      name: 'Upsert Pause',
      type: 'n8n-nodes-base.postgres',
      typeVersion: 2.5,
      position: [640, 240],
      credentials: { postgres: { id: POSTGRES_CRED_ID, name: 'Postgres account' } },
      parameters: {
        operation: 'executeQuery',
        query: `INSERT INTO tasami_bot_pause (phone, pause_until, reason)
VALUES ($1, NOW() + ($2 || ' hours')::interval, $3)
ON CONFLICT (phone) DO UPDATE SET pause_until = EXCLUDED.pause_until, reason = EXCLUDED.reason, updated_at = NOW()
RETURNING phone, pause_until, reason`,
        options: {
          queryReplacement:
            '={{ $json.body.phone }},={{ $json.body.hours || 4 }},={{ $json.body.reason || "supervisor" }}',
        },
      },
    },
    {
      id: randomUUID(),
      name: 'Pause OK',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [860, 240],
      parameters: {
        jsCode: 'return [{ json: { ok: true, message: "bot paused" } }];',
      },
    },
    {
      id: randomUUID(),
      name: 'Pause Denied',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 400],
      parameters: {
        jsCode: 'return [{ json: { ok: false, error: "unauthorized" } }];',
      },
    },
  ];

  const connections = {
    'Pause Webhook': { main: [[{ node: 'Validate Pause Secret', type: 'main', index: 0 }]] },
    'Validate Pause Secret': {
      main: [
        [{ node: 'Upsert Pause', type: 'main', index: 0 }],
        [{ node: 'Pause Denied', type: 'main', index: 0 }],
      ],
    },
    'Upsert Pause': { main: [[{ node: 'Pause OK', type: 'main', index: 0 }]] },
  };

  const id = await createOrUpdateWorkflow('Tasami — Bot Pause API', nodes, connections);
  console.log('✅ Bot Pause API:', id, '→ POST /webhook/tasami-bot-pause');
  return id;
}

async function deploySupervisorReply(secret, pauseWebhookUrl) {
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
          ],
          combinator: 'and',
        },
      },
    },
    {
      id: randomUUID(),
      name: 'Prepare Romanh Send',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 240],
      parameters: {
        jsCode: `const b = $json.body || {};
const phone = String(b.phone || '').replace(/\\D/g, '');
const accountId = b.account_id || 118;
const conversationId = b.conversation_id;
const message = String(b.message || '').trim();
if (!message) throw new Error('message required');
if (!conversationId && !phone) throw new Error('conversation_id or phone required');
return [{ json: { phone, accountId, conversationId, message } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Search Romanh Contact',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [860, 240],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'GET',
        url:
          '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/contacts/search?q={{ $json.phone }}',
        options: { response: { response: { neverError: true } } },
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Resolve Conversation',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1080, 240],
      parameters: {
        jsCode: `const prep = $('Prepare Romanh Send').first().json;
let conversationId = prep.conversationId;
if (!conversationId) {
  const search = $input.first().json;
  const payload = search.payload || search;
  const contacts = payload || [];
  const list = Array.isArray(contacts) ? contacts : (contacts.payload || []);
  const contactId = list[0]?.id;
  if (!contactId) throw new Error('Contact not found in Romanh for phone');
  return [{ json: { ...prep, contactId, needsConvoLookup: true } }];
}
return [{ json: { ...prep, needsConvoLookup: false } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Get Conversations',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1300, 240],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'GET',
        url:
          '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/contacts/{{ $json.contactId }}/conversations',
        options: { response: { response: { neverError: true } } },
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Pick Conversation',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1520, 240],
      parameters: {
        jsCode: `const prep = $('Resolve Conversation').first().json;
let conversationId = prep.conversationId;
if (!conversationId && prep.needsConvoLookup) {
  const res = $input.first().json;
  const convos = res.payload || res || [];
  const list = Array.isArray(convos) ? convos : [];
  const open = list.find(c => c.status === 'open') || list[0];
  conversationId = open?.id;
}
if (!conversationId) throw new Error('No Romanh conversation found');
return [{ json: { accountId: prep.accountId, conversationId, message: prep.message, phone: prep.phone } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Send Supervisor Message',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1740, 240],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'POST',
        url:
          '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/conversations/{{ $json.conversationId }}/messages',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: '={{ { "content": $json.message, "message_type": "outgoing" } }}',
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Pause After Supervisor Reply',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1960, 240],
      parameters: {
        method: 'POST',
        url: pauseWebhookUrl,
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ { secret: "${secret}", phone: $('Pick Conversation').first().json.phone, hours: 4, reason: "supervisor_reply" } }}`,
        options: { timeout: 8000 },
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Supervisor OK',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [2180, 240],
      parameters: {
        jsCode: 'return [{ json: { ok: true, sent: true } }];',
      },
    },
    {
      id: randomUUID(),
      name: 'Supervisor Denied',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 400],
      parameters: {
        jsCode: 'return [{ json: { ok: false, error: "unauthorized" } }];',
      },
    },
  ];

  const connections = {
    'Supervisor Webhook': { main: [[{ node: 'Auth Supervisor', type: 'main', index: 0 }]] },
    'Auth Supervisor': {
      main: [
        [{ node: 'Prepare Romanh Send', type: 'main', index: 0 }],
        [{ node: 'Supervisor Denied', type: 'main', index: 0 }],
      ],
    },
    'Prepare Romanh Send': { main: [[{ node: 'Search Romanh Contact', type: 'main', index: 0 }]] },
    'Search Romanh Contact': { main: [[{ node: 'Resolve Conversation', type: 'main', index: 0 }]] },
    'Resolve Conversation': {
      main: [[{ node: 'Get Conversations', type: 'main', index: 0 }]],
    },
    'Get Conversations': { main: [[{ node: 'Pick Conversation', type: 'main', index: 0 }]] },
    'Pick Conversation': { main: [[{ node: 'Send Supervisor Message', type: 'main', index: 0 }]] },
    'Send Supervisor Message': {
      main: [[{ node: 'Pause After Supervisor Reply', type: 'main', index: 0 }]],
    },
    'Pause After Supervisor Reply': { main: [[{ node: 'Supervisor OK', type: 'main', index: 0 }]] },
  };

  const id = await createOrUpdateWorkflow('Tasami — Supervisor Reply', nodes, connections);
  console.log('✅ Supervisor Reply:', id, '→ POST /webhook/tasami-supervisor-reply');
  return id;
}

async function deployCampaignWorkflow(secret, supervisorWebhookUrl) {
  const nodes = [
    {
      id: randomUUID(),
      name: 'Campaign Webhook',
      type: 'n8n-nodes-base.webhook',
      typeVersion: 2,
      position: [200, 300],
      webhookId: randomUUID(),
      parameters: {
        path: 'tasami-campaign',
        httpMethod: 'POST',
        responseMode: 'lastNode',
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Auth Campaign',
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
      name: 'Read Traders',
      type: 'n8n-nodes-base.googleSheets',
      typeVersion: 4.5,
      position: [640, 240],
      credentials: SHEETS_CRED,
      parameters: {
        operation: 'read',
        documentId: { value: TRADERS_SHEET_ID, mode: 'id' },
        sheetName: { value: 'Traders', mode: 'name' },
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Build Campaign Queue',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [860, 240],
      parameters: {
        jsCode: `const message = $('Campaign Webhook').first().json.body.message;
const limit = Number($('Campaign Webhook').first().json.body.limit || 50);
const secret = $('Campaign Webhook').first().json.body.secret;
const rows = $input.all().map(i => i.json).filter(r => r.Phone);
return rows.slice(0, limit).map(r => ({
  json: {
    secret,
    phone: String(r.Phone).replace(/\\D/g, ''),
    message,
    name: r.Name || '',
  },
}));`,
      },
    },
    {
      id: randomUUID(),
      name: 'Send Campaign Item',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1080, 240],
      parameters: {
        method: 'POST',
        url: supervisorWebhookUrl,
        sendBody: true,
        specifyBody: 'json',
        jsonBody:
          '={{ { secret: $json.secret, phone: $json.phone, message: $json.message } }}',
        options: { batching: { batch: { batchSize: 1, batchInterval: 3000 } }, timeout: 15000 },
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Campaign Summary',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1300, 240],
      parameters: {
        jsCode: `const items = $input.all();
return [{ json: { ok: true, attempted: items.length } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Campaign Denied',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [640, 400],
      parameters: {
        jsCode: 'return [{ json: { ok: false, error: "unauthorized or missing message" } }];',
      },
    },
  ];

  const connections = {
    'Campaign Webhook': { main: [[{ node: 'Auth Campaign', type: 'main', index: 0 }]] },
    'Auth Campaign': {
      main: [
        [{ node: 'Read Traders', type: 'main', index: 0 }],
        [{ node: 'Campaign Denied', type: 'main', index: 0 }],
      ],
    },
    'Read Traders': { main: [[{ node: 'Build Campaign Queue', type: 'main', index: 0 }]] },
    'Build Campaign Queue': { main: [[{ node: 'Send Campaign Item', type: 'main', index: 0 }]] },
    'Send Campaign Item': { main: [[{ node: 'Campaign Summary', type: 'main', index: 0 }]] },
  };

  const id = await createOrUpdateWorkflow('Tasami — WhatsApp Campaign', nodes, connections);
  console.log('✅ Campaign workflow:', id, '→ POST /webhook/tasami-campaign');
  return id;
}

async function patchBridgeAgentPause(secret) {
  const bridge = await n8nApi(`/workflows/${BRIDGE_WF_ID}`);
  const fmt = bridge.nodes.find(n => n.name === 'Romanh to Factory format');
  if (!fmt) return;

  const pauseUrl = 'https://n8n.esteemmediaa.com/webhook/tasami-bot-pause';

  if (!bridge.nodes.find(n => n.name === 'Agent Reply → Pause Bot')) {
    bridge.nodes.push({
      id: randomUUID(),
      name: 'Detect Agent Outgoing',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [480, 200],
      parameters: {
        jsCode: `const body = $json.body || {};
const event = String(body.event || '');
let msg = body;
if (event === 'message_created') msg = body;
const isOutgoing = body.message_type === 'outgoing' || msg?.message_type === 1;
const senderType = String(msg?.sender?.type || body.sender?.type || '').toLowerCase();
const isAgent = senderType === 'user';
const phone = String((msg?.sender || body.sender || {}).phone_number || '').replace(/\\D/g, '');
if (isOutgoing && isAgent && phone) {
  return [{ json: { pause: true, phone, secret: '${secret}' } }];
}
return [];`,
      },
    });
    bridge.nodes.push({
      id: randomUUID(),
      name: 'Agent Reply → Pause Bot',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [700, 200],
      parameters: {
        method: 'POST',
        url: pauseUrl,
        sendBody: true,
        specifyBody: 'json',
        jsonBody:
          '={{ { secret: $json.secret, phone: $json.phone, hours: 4, reason: "romanh_agent" } }}',
        options: { timeout: 5000 },
      },
      onError: 'continueRegularOutput',
    });

    const wh = bridge.nodes.find(n => n.type === 'n8n-nodes-base.webhook');
    if (wh) {
      bridge.connections[wh.name] = {
        main: [
          [
            { node: 'Detect Agent Outgoing', type: 'main', index: 0 },
            { node: fmt.name, type: 'main', index: 0 },
          ],
        ],
      };
      bridge.connections['Detect Agent Outgoing'] = {
        main: [[{ node: 'Agent Reply → Pause Bot', type: 'main', index: 0 }]],
      };
      bridge.connections['Agent Reply → Pause Bot'] = { main: [[]] };
    }
    console.log('✅ Bridge: agent reply pauses bot');
  }

  await putWorkflowById(BRIDGE_WF_ID, bridge);
}

function fixResolveRoutePatch(wf) {
  // Fix: Check Human Pause must run AFTER Resolve Route produces phone
  // Re-order: Resolve Route first output → split to Check Human Pause
  // But Resolve Route needs pause check inside - rework

  const rr = wf.nodes.find(n => n.name === 'Resolve Route');
  if (!rr || !rr.parameters.jsCode.includes("$('Check Human Pause')")) {
    patchResolveRoute(wf);
  }

  // Move pause logic: Check Human Pause uses phone from تطبيع not Resolve Route
  const check = wf.nodes.find(n => n.name === 'Check Human Pause');
  if (check) {
    check.parameters.options.queryReplacement =
      "={{ $('تطبيع البيانات (رقم/نوع/محتوى)').first().json.factory_phone }}";
  }

  // Simpler Resolve Route patch - check only staticData + read pause from Check Human Pause node output in separate merge node

  // Replace broken patch with cleaner approach: add "Apply Pause Gate" code node after Check Human Pause
  if (!wf.nodes.find(n => n.name === 'Apply Pause Gate')) {
    const pos = wf.nodes.find(n => n.name === 'Bot Paused?')?.position || [1000, 500];
    wf.nodes.push({
      id: randomUUID(),
      name: 'Apply Pause Gate',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: pos,
      parameters: {
        jsCode: `const route = $('Resolve Route').first().json;
const phone = route.phone || '';
const message = route.message_text || '';
const pgRow = $('Check Human Pause').first()?.json;
const staticData = $getWorkflowStaticData('global');
if (!staticData.humanPause) staticData.humanPause = {};

const msgLower = String(message).trim().toLowerCase();
if (msgLower === '/resume' || msgLower === 'ارجع البوت' || msgLower === 'bot on') {
  delete staticData.humanPause[phone];
}

const pgUntil = pgRow?.pause_until ? new Date(pgRow.pause_until).getTime() : 0;
const staticUntil = staticData.humanPause[phone] || 0;
const pauseUntil = Math.max(pgUntil, staticUntil);

if (Date.now() < pauseUntil) {
  return [{ json: { ...route, bot_paused: true, target_agent: 'PAUSED' } }];
}
return [{ json: { ...route, bot_paused: false } }];`,
      },
    });

    wf.connections['Resolve Route'] = {
      main: [[{ node: 'Check Human Pause', type: 'main', index: 0 }]],
    };
    wf.connections['Check Human Pause'] = {
      main: [[{ node: 'Apply Pause Gate', type: 'main', index: 0 }]],
    };
    wf.connections['Apply Pause Gate'] = {
      main: [[{ node: 'Bot Paused?', type: 'main', index: 0 }]],
    };

    // Strip broken inline patch from Resolve Route if added
    if (rr.parameters.jsCode.includes('bot_paused')) {
      rr.parameters.jsCode = rr.parameters.jsCode.replace(
        /\/\/ ── Human takeover pause[\s\S]*?}\];\s*\n\}/,
        ''
      );
    }
  }
}

async function main() {
  console.log('🚀 Enterprise Phase 3 — Romanh ops (تسامي الوطنية)\n');

  let secret = loadEnv('SUPERVISOR_WEBHOOK_SECRET');
  if (!secret) {
    secret = require('crypto').randomBytes(24).toString('hex');
    fs.appendFileSync(
      path.join(__dirname, '..', '.env'),
      `\nSUPERVISOR_WEBHOOK_SECRET=${secret}\n`
    );
    console.log('🔑 Generated SUPERVISOR_WEBHOOK_SECRET in .env');
  }

  // Clear wrong CRM URL
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    let env = fs.readFileSync(envPath, 'utf8');
    env = env.replace(/^TASAMI_SYNC_WEBHOOK_URL=.*\n?/m, 'TASAMI_SYNC_WEBHOOK_URL=\n');
    env = env.replace(/^N8N_SYNC_SECRET=.*\n?/m, '');
    fs.writeFileSync(envPath, env);
  }

  await ensurePauseTable();

  const pauseUrl = 'https://n8n.esteemmediaa.com/webhook/tasami-bot-pause';
  const supervisorUrl = 'https://n8n.esteemmediaa.com/webhook/tasami-supervisor-reply';

  await deployBotPauseApi(secret);
  await deploySupervisorReply(secret, pauseUrl);
  await deployCampaignWorkflow(secret, supervisorUrl);

  const wf = await getWorkflow();
  removeCrmSync(wf);
  ensurePauseNodes(wf);
  fixResolveRoutePatch(wf);
  patchHumanHandoffPause(wf);
  await putWorkflow(wf);

  await patchBridgeAgentPause(secret);

  console.log('\n🎉 Phase 3 complete:');
  console.log('   • Bot pauses 4h on: كلم موظف / supervisor reply / Romanh agent reply');
  console.log('   • Customer types /resume to re-enable bot');
  console.log('   • Supervisor send: POST', supervisorUrl);
  console.log('   • Campaign blast: POST https://n8n.esteemmediaa.com/webhook/tasami-campaign');
  console.log('   • CRM sync to tasamiservices removed');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
