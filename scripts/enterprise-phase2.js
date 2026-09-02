#!/usr/bin/env node
/**
 * Enterprise Phase 2 — Customer experience + CRM sync
 * - Save orders to Google Sheets (if missing)
 * - CRM sync webhook after WhatsApp reply
 * - Weekly metrics report workflow (scheduled)
 */
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const {
  n8nApi,
  getWorkflow,
  putWorkflow,
  createOrUpdateWorkflow,
  TELEGRAM_CHAT_ID,
} = require('./n8n-config');

const ORDERS_SHEET_ID = '1gphnCD_7zCqliAE211fApB92Ia0XSB84muIr9WR8xnM';
const SYNC_URL =
  process.env.TASAMI_SYNC_WEBHOOK_URL ||
  (process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')}/api/webhooks/n8n-sync`
    : '');

function buildCrmSyncCode(secret) {
  return `const route = $('Resolve Route').first().json;
const pick = (...nodes) => {
  for (const n of nodes) {
    try {
      const j = $(n).first()?.json;
      if (j?.output) return j.output;
    } catch (e) {}
  }
  return '';
};
const botReply = pick(
  'Tag — سارة',
  'Tag — أحمد',
  'AI Agent - ترحيب عام',
  'Format Tracking Reply',
  'Format Human Handoff',
  'Reset Memory'
);
const wh = $('Webhook - رسالة جاية من Evolution API').first().json.body || {};
return [{
  json: {
    type: 'whatsapp_message',
    phone: String(route.phone || '').replace(/^\\+/, ''),
    name: wh.data?.pushName || wh.romanh?.contact_name || '',
    customerMessage: route.message_text || '',
    botReply,
    agent: route.target_agent || 'UNKNOWN',
    routeSource: route.route_source || '',
    channel: 'WHATSAPP',
    secret: '${secret.replace(/'/g, "\\'")}',
  },
}];`;
}

async function ensureSaveOrderToSheets(wf) {
  const sheetNodeName = 'Save Order to Sheets';
  if (wf.nodes.find(n => n.name === sheetNodeName)) {
    console.log('   Save Order to Sheets — already exists');
    return;
  }

  const ref = wf.nodes.find(n => n.name === 'Build Order Message') || { position: [0, 0] };
  wf.nodes.push({
    parameters: {
      operation: 'append',
      documentId: { value: ORDERS_SHEET_ID, mode: 'id' },
      sheetName: { value: 'Sheet1', mode: 'name' },
      columns: {
        mappingMode: 'defineBelow',
        value: {
          التاريخ: "={{ $now.setZone('Asia/Riyadh').toFormat('yyyy-MM-dd HH:mm') }}",
          الجوال: "={{ $('Resolve Route').first().json.phone }}",
          'رسالة العميل': "={{ $('Resolve Route').first().json.message_text }}",
          'تأكيد سارة': "={{ $('Tag — سارة').first().json.output }}",
          الحالة: 'تم الاستلام',
        },
      },
      options: {},
    },
    id: randomUUID(),
    name: sheetNodeName,
    type: 'n8n-nodes-base.googleSheets',
    typeVersion: 4.5,
    position: [ref.position[0] + 200, ref.position[1] + 80],
    credentials: { googleSheetsOAuth2Api: { id: 'ufwTSA6D31CFnyzH', name: 'Google Sheets account' } },
    onError: 'continueRegularOutput',
  });

  // Build Order → Sheets → Telegram (customer reply still parallel from Order Confirmed?)
  const orderConn = wf.connections['Order Confirmed?']?.main?.[0] || [];
  const hasSheet = orderConn.some(c => c.node === sheetNodeName);
  if (!hasSheet) {
    const bomIdx = orderConn.findIndex(c => c.node === 'Build Order Message');
    if (bomIdx >= 0) {
      wf.connections['Build Order Message'] = {
        main: [[{ node: sheetNodeName, type: 'main', index: 0 }]],
      };
      wf.connections[sheetNodeName] = {
        main: [[{ node: 'Order Alert — Telegram', type: 'main', index: 0 }]],
      };
    }
  }
  console.log('✅ Save Order to Sheets node added');
}

function ensureCrmSyncNodes(wf) {
  const secret = process.env.N8N_SYNC_SECRET || '';
  if (!SYNC_URL) {
    console.log('⚠️ TASAMI_SYNC_WEBHOOK_URL not set — skipping CRM sync nodes');
    return;
  }
  if (!secret) {
    console.log('⚠️ N8N_SYNC_SECRET not set — skipping CRM sync nodes');
    return;
  }

  const prepName = 'Prepare CRM Sync';
  const httpName = 'Sync to CRM';
  const syncCode = buildCrmSyncCode(secret);

  let prep = wf.nodes.find(n => n.name === prepName);
  if (!prep) {
    prep = {
      id: randomUUID(),
      name: prepName,
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [2100, 600],
      parameters: { jsCode: syncCode },
    };
    wf.nodes.push(prep);
  } else {
    prep.parameters.jsCode = syncCode;
  }

  let http = wf.nodes.find(n => n.name === httpName);
  if (!http) {
    http = {
      id: randomUUID(),
      name: httpName,
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2320, 600],
      parameters: {
        method: 'POST',
        url: SYNC_URL,
        sendBody: true,
        specifyBody: 'json',
        jsonBody: '={{ $json }}',
        options: { timeout: 8000 },
      },
      onError: 'continueRegularOutput',
    };
    wf.nodes.push(http);
  } else {
    http.parameters.url = SYNC_URL;
    http.onError = 'continueRegularOutput';
  }

  wf.connections[prepName] = { main: [[{ node: httpName, type: 'main', index: 0 }]] };
  wf.connections[httpName] = { main: [[]] };

  for (const src of ['Send via Romanh', 'Send text']) {
    const existing = wf.connections[src]?.main?.[0] || [];
    if (!existing.some(c => c.node === prepName)) {
      wf.connections[src] = {
        main: [[...existing, { node: prepName, type: 'main', index: 0 }]],
      };
    }
  }
  console.log('✅ CRM sync wired after WhatsApp send →', SYNC_URL);
}

async function deployWeeklyReport() {
  const nodes = [
    {
      id: randomUUID(),
      name: 'Every Monday 9am',
      type: 'n8n-nodes-base.scheduleTrigger',
      typeVersion: 1.2,
      position: [240, 300],
      parameters: {
        rule: { interval: [{ field: 'cronExpression', expression: '0 9 * * 1' }] },
      },
    },
    {
      id: randomUUID(),
      name: 'Read Orders Sheet',
      type: 'n8n-nodes-base.googleSheets',
      typeVersion: 4.5,
      position: [460, 300],
      credentials: { googleSheetsOAuth2Api: { id: 'ufwTSA6D31CFnyzH', name: 'Google Sheets account' } },
      parameters: {
        operation: 'read',
        documentId: { value: ORDERS_SHEET_ID, mode: 'id' },
        sheetName: { value: 'Sheet1', mode: 'name' },
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Build Weekly Report',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [680, 300],
      parameters: {
        jsCode: `const rows = $input.all().map(i => i.json).filter(r => r['الجوال']);
const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
const recent = rows.filter(r => {
  const d = new Date(r['التاريخ'] || 0);
  return !isNaN(d) && d.getTime() >= weekAgo;
});
const msg = [
  '📊 *تقرير أسبوعي — بوت تسامي*',
  '',
  '📦 طلبات الأسبوع: ' + recent.length,
  '📋 إجمالي السجل: ' + rows.length,
  '',
  '⏰ ' + new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' }),
].join('\\n');
return [{ json: { message: msg } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Send Weekly Telegram',
      type: 'n8n-nodes-base.telegram',
      typeVersion: 1.2,
      position: [900, 300],
      credentials: { telegramApi: { id: 'iBs8LfCbvt39sN1T', name: 'Telegram account' } },
      parameters: {
        chatId: TELEGRAM_CHAT_ID,
        text: '={{ $json.message }}',
        additionalFields: {},
      },
    },
  ];

  const connections = {
    'Every Monday 9am': { main: [[{ node: 'Read Orders Sheet', type: 'main', index: 0 }]] },
    'Read Orders Sheet': { main: [[{ node: 'Build Weekly Report', type: 'main', index: 0 }]] },
    'Build Weekly Report': { main: [[{ node: 'Send Weekly Telegram', type: 'main', index: 0 }]] },
  };

  const id = await createOrUpdateWorkflow('Tasami — Weekly Report', nodes, connections);
  console.log('✅ Weekly report workflow:', id, '(Mondays 9am Riyadh)');
  return id;
}

async function main() {
  console.log('🚀 Enterprise Phase 2 — Experience + CRM\\n');

  const wf = await getWorkflow();
  await ensureSaveOrderToSheets(wf);
  ensureCrmSyncNodes(wf);
  await putWorkflow(wf);

  await deployWeeklyReport();

  console.log('\\n🎉 Phase 2 complete:');
  console.log('   • Orders saved to Google Sheets on confirm');
  console.log('   • CRM sync after every WhatsApp reply (if webhook URL set)');
  console.log('   • Weekly Telegram metrics (Mondays 9am)');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
