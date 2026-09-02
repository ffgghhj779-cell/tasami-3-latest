#!/usr/bin/env node
/**
 * Test manager WhatsApp (+966 56 443 9652) via supervisor webhook + full Sara flow.
 */
const fs = require('fs');
const path = require('path');

function loadEnv(key) {
  const envPath = path.join(__dirname, '..', '.env');
  const line = fs.readFileSync(envPath, 'utf8').split('\n').find(l => l.startsWith(`${key}=`));
  return line ? line.replace(`${key}=`, '').trim() : process.env[key] || '';
}

const SECRET = loadEnv('SUPERVISOR_WEBHOOK_SECRET');
const MANAGER = '966564439652';
const { n8nApi, NOTIFY_SUB_WF_ID, WF_ID } = require('./n8n-config');

async function testSupervisorWebhook() {
  console.log('\n── Test 1: Direct supervisor webhook → manager WhatsApp ──');
  const res = await fetch('https://n8n.esteemmediaa.com/webhook/tasami-supervisor-reply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: SECRET,
      phone: MANAGER,
      message:
        '🧪 *اختبار تسامي الوطنية*\n\nالسلام عليكم، هذه رسالة تجريبية من نظام سارة.\nلو وصلتك، إشعار الموظف شغال ✅',
    }),
  });
  const text = await res.text();
  console.log('HTTP', res.status, text.slice(0, 400));
  return res.ok;
}

async function testSaraFlow() {
  console.log('\n── Test 2: Customer asks unavailable item → Sara notify_supervisor ──');
  const msgId = Date.now();
  const body = {
    event: 'conversation_updated',
    id: 999001,
    account: { id: 118 },
    meta: { sender: { phone_number: '+966501234567', name: 'اختبار عميل' } },
    conversation: { id: 888001 },
    messages: [
      {
        id: msgId,
        content: 'عندكم لحم بقر طازج؟ أبغى 50 كجم للرياض',
        message_type: 0,
        sender: { type: 'contact', phone_number: '+966501234567', name: 'اختبار عميل' },
      },
    ],
  };
  const res = await fetch('https://n8n.esteemmediaa.com/webhook/roman-whatsapp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  console.log('Bridge HTTP', res.status);
  await new Promise(r => setTimeout(r, 35000));

  const ex = await n8nApi(`/executions?workflowId=${WF_ID}&limit=1`);
  const mainId = ex.data?.[0]?.id;
  console.log('Main exec:', mainId, ex.data?.[0]?.status);
  if (!mainId) return;

  const detail = await n8nApi(`/executions/${mainId}?includeData=true`);
  const rd = detail.data?.resultData?.runData || {};
  const sara = rd['AI Agent']?.[0];
  console.log('Sara:', sara?.executionStatus, (sara?.data?.main?.[0]?.[0]?.json?.output || '').slice(0, 200));

  const notifyRuns = Object.entries(rd).filter(([k]) => /notify/i.test(k));
  console.log('Notify nodes in main:', notifyRuns.map(([k, v]) => `${k}:${v[0]?.executionStatus}`));

  const subEx = await n8nApi(`/executions?workflowId=${NOTIFY_SUB_WF_ID}&limit=3`);
  for (const e of subEx.data || []) {
    const d = await n8nApi(`/executions/${e.id}?includeData=true`);
    const srd = d.data?.resultData?.runData || {};
    console.log(`\nSub exec ${e.id} (${e.status}):`);
    for (const [name, runs] of Object.entries(srd)) {
      const r = runs[0];
      const st = r?.executionStatus;
      if (st === 'error') console.log('  ❌', name, r.error?.message);
      else if (/WhatsApp|Manager|Telegram|Format/i.test(name)) {
        const j = r?.data?.main?.[0]?.[0]?.json;
        console.log('  ✓', name, st, j ? JSON.stringify(j).slice(0, 180) : '');
      }
    }
  }
}

async function main() {
  if (!SECRET) throw new Error('SUPERVISOR_WEBHOOK_SECRET missing in .env');
  await testSupervisorWebhook();
  await testSaraFlow();
  console.log('\n✅ Tests finished — check manager WhatsApp + Telegram');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
