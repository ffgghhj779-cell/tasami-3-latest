#!/usr/bin/env node
/**
 * Enterprise Phase 1 — Foundation
 * - Error monitoring workflow + link to main/bridge
 * - Human handoff route (كلم موظف / talk to human)
 * - Harden notify_supervisor tool
 * - Professional order confirmation copy in Build Order Message
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
  NOTIFY_SUB_WF_ID,
} = require('./n8n-config');

const BACKUP = path.join(__dirname, `workflow-backup-pre-enterprise-p1-${new Date().toISOString().slice(0, 10)}.json`);

const HUMAN_DETECTION = `
// ── Human handoff: customer wants a real person ──
const wantsHuman = /كلم موظف|موظف حقيقي|أكلم شخص|اتصل بي|ابغى اكلم|ابي اكلم|human agent|talk to human|speak to (a )?person|real person|manager please|مشرف|مدير|تصعيد|شكوى رسمية/i.test(message);
if (wantsHuman) target = 'HUMAN';
`;

const FORMAT_HUMAN_CODE = `const route = $('Resolve Route').first().json;
const phone = route.phone || 'غير معروف';
const wh = $('Webhook - رسالة جاية من Evolution API').first().json.body || {};
const name = wh.data?.pushName || wh.romanh?.contact_name || 'عميل';
const msg = route.message_text || '';

const output = [
  'أبشر طال عمرك 🌿',
  'حوّلت طلبك لفريقنا الآن، وراح يتواصل معك موظف بأقرب وقت إن شاء الله.',
  '',
  'لو الاستعجال: +966 56 443 9652',
  'ولا يهمك، أنت بأمان مع تسامي الوطنية 🤝',
].join('\\n');

const telegram_msg = [
  '🆘 *طلب تحويل لموظف — تسامي*',
  '',
  '👤 ' + name,
  '📱 +' + String(phone).replace(/^\\+/, ''),
  '💬 ' + msg.substring(0, 400),
  '',
  '⏰ ' + new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' }),
  '⚡ يحتاج متابعة بشرية',
].join('\\n');

return [{ json: { output, telegram_msg } }];`;

const BUILD_ORDER_ENHANCED = `const route = $('Resolve Route').first().json;
const phone = route.phone || route.factory_phone || 'غير معروف';
const wh = $('Webhook - رسالة جاية من Evolution API').first().json.body || {};
const pushName = wh.data?.pushName || wh.romanh?.contact_name || 'عميل';
const custMsg = route.message_text || '';
const saraReply = $('Tag — سارة').first().json.output || '';

const now = new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' });

const msg = [
  '📦 *طلب جديد — تسامي الوطنية*',
  '',
  '👤 العميل: ' + pushName,
  '📱 الجوال: +' + String(phone).replace(/^\\+/, ''),
  '',
  '🛍️ *تفاصيل الطلب:*',
  custMsg.substring(0, 600),
  '',
  '💬 *تأكيد سارة:*',
  saraReply.substring(0, 400),
  '',
  '⏰ ' + now,
  '✅ الحالة: تم الاستلام — بانتظار التوصيل',
  '📍 التوصيل: 24–48 ساعة داخل المملكة',
].join('\\n');

return [{ json: { telegram_msg: msg } }];`;

const NOTIFY_DESC =
  'استدعي فوراً عند: (1) صنف غير متوفر، (2) شكوى، (3) طلب آجل، (4) طلب تحويل لموظف. **يجب** تضمين رقم جوال العميل + اسم المؤسسة + ملخص الطلب في الرسالة.';

async function deployErrorWorkflow() {
  const nodes = [
    {
      id: randomUUID(),
      name: 'Error Trigger',
      type: 'n8n-nodes-base.errorTrigger',
      typeVersion: 1,
      position: [240, 300],
      parameters: {},
    },
    {
      id: randomUUID(),
      name: 'Format Error Alert',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [460, 300],
      parameters: {
        jsCode: `const e = $json.execution || {};
const wf = e.workflowData?.name || e.workflowId || 'unknown';
const node = e.lastNodeExecuted || 'unknown';
const err = e.error?.message || JSON.stringify(e.error || {}).slice(0, 300);
const msg = [
  '🚨 *خطأ في بوت تسامي*',
  '',
  '📋 Workflow: ' + wf,
  '🔧 Node: ' + node,
  '❌ ' + err,
  '',
  '🆔 Exec: ' + (e.id || 'n/a'),
  '⏰ ' + new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' }),
].join('\\n');
return [{ json: { message: msg } }];`,
      },
    },
    {
      id: randomUUID(),
      name: 'Send Error Telegram',
      type: 'n8n-nodes-base.telegram',
      typeVersion: 1.2,
      position: [680, 300],
      credentials: { telegramApi: { id: 'iBs8LfCbvt39sN1T', name: 'Telegram account' } },
      parameters: {
        chatId: TELEGRAM_CHAT_ID,
        text: '={{ $json.message }}',
        additionalFields: {},
      },
      onError: 'continueRegularOutput',
    },
  ];

  const connections = {
    'Error Trigger': { main: [[{ node: 'Format Error Alert', type: 'main', index: 0 }]] },
    'Format Error Alert': { main: [[{ node: 'Send Error Telegram', type: 'main', index: 0 }]] },
  };

  const id = await createOrUpdateWorkflow('Tasami — Error Alerts', nodes, connections);
  console.log('✅ Error monitoring workflow:', id);
  return id;
}

function patchRouterHumanHandoff(wf) {
  const router = wf.nodes.find(n => n.name === 'Parse Router JSON');
  if (!router) throw new Error('Parse Router JSON not found');

  let code = router.parameters.jsCode || '';
  if (!code.includes("target = 'HUMAN'")) {
    if (code.includes("target = 'TRACKING'")) {
      code = code.replace(
        /\/\/ Order tracking override[\s\S]*?if \(isTracking\) target = 'TRACKING';/,
        match => match + HUMAN_DETECTION
      );
    } else {
      code = code.replace(/let target = String/, HUMAN_DETECTION + '\nlet target = String');
    }
    router.parameters.jsCode = code;
  }

  if (!code.includes("'HUMAN'") && router.parameters.jsCode.includes("target = 'HUMAN'")) {
    code = router.parameters.jsCode;
  }

  // Sheet override should not block HUMAN/TRACKING/RESET
  router.parameters.jsCode = router.parameters.jsCode.replace(
    /if \(target !== 'RESET' && target !== 'TRACKING'\)/,
    "if (target !== 'RESET' && target !== 'TRACKING' && target !== 'HUMAN')"
  );
}

function ensureHumanHandoffNodes(wf) {
  const route = wf.nodes.find(n => n.name === 'Route to Agent');
  if (!route) throw new Error('Route to Agent not found');

  const hasHumanRule = (route.parameters.rules?.values || []).some(
    v => v.conditions?.conditions?.[0]?.rightValue === 'HUMAN'
  );
  if (!hasHumanRule) {
    const trackingIdx = route.parameters.rules.values.findIndex(
      v => v.conditions?.conditions?.[0]?.rightValue === 'TRACKING'
    );
    const humanRule = {
      conditions: {
        conditions: [
          {
            leftValue: '={{ $json.target_agent }}',
            rightValue: 'HUMAN',
            operator: { type: 'string', operation: 'equals' },
          },
        ],
        combinator: 'and',
        options: { caseSensitive: true, leftValue: '', typeValidation: 'strict', version: 1 },
      },
    };
    if (trackingIdx >= 0) {
      route.parameters.rules.values.splice(trackingIdx + 1, 0, humanRule);
    } else {
      route.parameters.rules.values.push(humanRule);
    }
  }

  const humanIdx = route.parameters.rules.values.findIndex(
    v => v.conditions?.conditions?.[0]?.rightValue === 'HUMAN'
  );

  if (!wf.nodes.find(n => n.name === 'Format Human Handoff')) {
    wf.nodes.push({
      id: randomUUID(),
      name: 'Format Human Handoff',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [route.position[0] + 200, route.position[1] + 280],
      parameters: { jsCode: FORMAT_HUMAN_CODE },
    });
  } else {
    wf.nodes.find(n => n.name === 'Format Human Handoff').parameters.jsCode = FORMAT_HUMAN_CODE;
  }

  if (!wf.nodes.find(n => n.name === 'Human Handoff — Telegram')) {
    wf.nodes.push({
      id: randomUUID(),
      name: 'Human Handoff — Telegram',
      type: 'n8n-nodes-base.telegram',
      typeVersion: 1.2,
      position: [route.position[0] + 420, route.position[1] + 280],
      credentials: { telegramApi: { id: 'iBs8LfCbvt39sN1T', name: 'Telegram account' } },
      parameters: {
        chatId: TELEGRAM_CHAT_ID,
        text: '={{ $json.telegram_msg }}',
        additionalFields: {},
      },
      onError: 'continueRegularOutput',
    });
  }

  // Wire: Route[HUMAN] → Format → Telegram (alert) + Romanh (customer reply in parallel)
  const conn = wf.connections['Route to Agent']?.main || [];
  while (conn.length <= humanIdx) conn.push([]);
  conn[humanIdx] = [
    { node: 'Format Human Handoff', type: 'main', index: 0 },
  ];
  wf.connections['Route to Agent'] = { main: conn };

  wf.connections['Format Human Handoff'] = {
    main: [
      [
        { node: 'Human Handoff — Telegram', type: 'main', index: 0 },
        { node: 'Romanh source?', type: 'main', index: 0 },
      ],
    ],
  };
  wf.connections['Human Handoff — Telegram'] = { main: [[]] };
}

function patchNotifySupervisor(wf) {
  const notify = wf.nodes.find(n => n.name === 'notify_supervisor');
  if (!notify) return;
  notify.parameters.description = NOTIFY_DESC;
  if (notify.parameters.workflowId) {
    notify.parameters.workflowId = { __rl: true, value: NOTIFY_SUB_WF_ID, mode: 'id' };
  }
}

function patchBuildOrder(wf) {
  const bom = wf.nodes.find(n => n.name === 'Build Order Message');
  if (bom) bom.parameters.jsCode = BUILD_ORDER_ENHANCED;
}

function patchTelegramDebug(wf) {
  const tg = wf.nodes.find(n => n.name === '📊 Routing Debug (Telegram)');
  if (!tg) return;
  tg.parameters.text =
    `={{ $json.target_agent === 'SARA' ? '🛒 سارة — مبيعات' : $json.target_agent === 'AHMED' ? '🏭 أحمد — مشتريات' : $json.target_agent === 'GENERAL' ? '🌿 استقبال عام' : $json.target_agent === 'TRACKING' ? '📦 تتبع طلب' : $json.target_agent === 'HUMAN' ? '🆘 تحويل موظف' : '🔧 ' + $json.target_agent }}\\n\\n` +
    '📱 {{ $json.phone }}\\n💬 {{ ($json.message_text || "").substring(0, 120) }}';
}

async function main() {
  console.log('🚀 Enterprise Phase 1 — Foundation\\n');

  const errorWfId = await deployErrorWorkflow();

  const wf = await getWorkflow();
  fs.writeFileSync(BACKUP, JSON.stringify(wf, null, 2));
  console.log('💾 Backup:', path.basename(BACKUP));

  patchRouterHumanHandoff(wf);
  ensureHumanHandoffNodes(wf);
  patchNotifySupervisor(wf);
  patchBuildOrder(wf);
  patchTelegramDebug(wf);

  await putWorkflow(wf, { errorWorkflow: errorWfId });
  console.log('✅ Main workflow: errorWorkflow linked');

  try {
    const bridge = await n8nApi(`/workflows/${BRIDGE_WF_ID}`);
    await putWorkflowById(BRIDGE_WF_ID, bridge, { errorWorkflow: errorWfId });
    console.log('✅ Bridge workflow: errorWorkflow linked');
  } catch (e) {
    console.warn('⚠️ Bridge errorWorkflow:', e.message);
  }

  console.log('\\n🎉 Phase 1 complete:');
  console.log('   • Error alerts → Telegram on any workflow failure');
  console.log('   • Human handoff: كلم موظف / talk to human → supervisor alert');
  console.log('   • notify_supervisor hardened (phone required)');
  console.log('   • Order Telegram template upgraded');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
