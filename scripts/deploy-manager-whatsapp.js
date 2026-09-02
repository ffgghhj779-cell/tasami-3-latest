#!/usr/bin/env node
/**
 * Sara → Manager WhatsApp (+966 56 443 9652)
 */
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const { n8nApi, getWorkflow, putWorkflow, NOTIFY_SUB_WF_ID } = require('./n8n-config');

const MANAGER_E164 = '+966564439652';
const ROMANH_ACCOUNT = 118;
const ROMANH_INBOX_ID = 1;
const ROMANH_CRED = { httpHeaderAuth: { id: 'krJqyHFhO5ZRsNze', name: 'Romanh API' } };
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_OPS_CHAT_ID || '8929452910';

const FORMAT_MANAGER_MSG = `const j = $input.first().json;
const phone = String(j.customer_phone || '').replace(/\\D/g, '');
const name = String(j.customer_name || 'عميل').trim();
const request = String(j.request_summary || j.message || '').trim();
let body = String(j.message || '').trim();
const looksComplete = body.length > 40 && /تقدر|توفر|جوال|0?5\\d{8}|9665/i.test(body);
if (!looksComplete) {
  body = [
    'السلام عليكم 🌿',
    '',
    'معك سارة من المبيعات.',
    'في عميل طلب: ' + (request || '—'),
    'اسمه/مؤسسته: ' + name,
    phone ? ('جواله: +' + phone.replace(/^\\+/, '')) : '⚠️ الجوال: ما وصلني',
    '',
    'تقدر توفرها له؟ ردّ عليّ أو تواصل معاه مباشرة.',
  ].join('\\n');
}
return [{
  json: {
    accountId: ${ROMANH_ACCOUNT},
    inboxId: ${ROMANH_INBOX_ID},
    whatsappBody: body,
    telegramBody: '📲 *سارة → الموظف*\\n\\n' + body,
  },
}];`;

const RESOLVE_CONTACT = `const prep = $('Format Manager Message').first().json;
const filter = $input.first().json;
if (filter.error) throw new Error('Romanh: ' + filter.error.message);
if (filter.errors) throw new Error('Romanh auth: ' + JSON.stringify(filter.errors));
const contactId = (filter.payload || [])[0]?.id || null;
return [{ json: { ...prep, contactId, needsCreate: !contactId } }];`;

const AFTER_CREATE_CONTACT = `const prep = $('Resolve Manager Contact').first().json;
const created = $input.first().json;
if (created.error) throw new Error('Romanh create contact: ' + created.error.message);
const contactId = prep.contactId
  || created.payload?.contact?.id
  || created.payload?.id
  || created.id;
if (!contactId) throw new Error('Could not create manager contact: ' + JSON.stringify(created).slice(0,200));
return [{ json: { ...prep, contactId } }];`;

const PICK_CONVO = `const prep = $('Final Manager Contact').first().json;
const res = $input.first().json;
if (res.errors) throw new Error('Romanh: ' + JSON.stringify(res.errors));
const list = Array.isArray(res.payload) ? res.payload : (Array.isArray(res) ? res : []);
const open = list.find(c => c.status === 'open') || list[0];
if (open?.id) {
  return [{ json: { accountId: prep.accountId, conversationId: open.id, message: prep.whatsappBody, done: true } }];
}
return [{ json: { ...prep, needsNewConvo: true } }];`;

const AFTER_CREATE_CONVO = `const prep = $('Pick Manager Conversation').first().json;
const res = $input.first().json;
const conversationId = res.id || res.payload?.id;
if (!conversationId) throw new Error('Could not create conversation for manager');
return [{ json: { accountId: prep.accountId, conversationId, message: prep.whatsappBody } }];`;

const NOTIFY_TOOL_DESC =
  'أرسلي واتساب للموظف (+966 56 443 9652) عند: صنف غير متوفر، طلب خاص، شكوى. أسلوب زميلة عمل. لازم customer_phone + request_summary.';

async function deployNotifySubWorkflow() {
  const nodes = [
    {
      id: 'aaa00001-0000-0000-0000-000000000001',
      name: 'Execute Workflow Trigger',
      type: 'n8n-nodes-base.executeWorkflowTrigger',
      typeVersion: 1.1,
      position: [160, 320],
      parameters: {
        workflowInputs: {
          values: [
            { name: 'message', type: 'string' },
            { name: 'customer_phone', type: 'string' },
            { name: 'customer_name', type: 'string' },
            { name: 'request_summary', type: 'string' },
          ],
        },
      },
    },
    {
      id: randomUUID(),
      name: 'Format Manager Message',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [380, 320],
      parameters: { jsCode: FORMAT_MANAGER_MSG },
    },
    {
      id: randomUUID(),
      name: 'Filter Manager Contact',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [600, 320],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'POST',
        url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/contacts/filter`,
        authentication: 'genericCredentialType',
        genericAuthType: 'httpHeaderAuth',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ { "payload": [{ "attribute_key": "phone_number", "filter_operator": "equal_to", "values": ["${MANAGER_E164}"] }] } }}`,
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Resolve Manager Contact',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [820, 320],
      parameters: { jsCode: RESOLVE_CONTACT },
    },
    {
      id: randomUUID(),
      name: 'Needs Create Contact?',
      type: 'n8n-nodes-base.if',
      typeVersion: 2.2,
      position: [1040, 320],
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
      name: 'Create Manager Contact',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1260, 240],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'POST',
        url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/contacts`,
        authentication: 'genericCredentialType',
        genericAuthType: 'httpHeaderAuth',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: `={{ { "inbox_id": ${ROMANH_INBOX_ID}, "name": "مدير المبيعات - تسامي", "phone_number": "${MANAGER_E164}" } }}`,
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Merge Created Contact',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1480, 240],
      parameters: { jsCode: AFTER_CREATE_CONTACT },
    },
    {
      id: randomUUID(),
      name: 'Final Manager Contact',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1480, 400],
      parameters: {
        jsCode: 'return [{ json: $input.first().json }];',
      },
    },
    {
      id: randomUUID(),
      name: 'Get Manager Conversations',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [1700, 320],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'GET',
        url:
          '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/contacts/{{ $json.contactId }}/conversations',
        authentication: 'genericCredentialType',
        genericAuthType: 'httpHeaderAuth',
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Pick Manager Conversation',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [1920, 320],
      parameters: { jsCode: PICK_CONVO },
    },
    {
      id: randomUUID(),
      name: 'Needs New Convo?',
      type: 'n8n-nodes-base.if',
      typeVersion: 2.2,
      position: [2140, 320],
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
      name: 'Create Manager Conversation',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2360, 400],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'POST',
        url: `https://app.romanh.net/api/v1/accounts/${ROMANH_ACCOUNT}/conversations`,
        authentication: 'genericCredentialType',
        genericAuthType: 'httpHeaderAuth',
        sendBody: true,
        specifyBody: 'json',
        jsonBody:
          '={{ { "contact_id": $json.contactId, "inbox_id": $json.inboxId } }}',
        options: {},
      },
      onError: 'continueRegularOutput',
    },
    {
      id: randomUUID(),
      name: 'Merge New Conversation',
      type: 'n8n-nodes-base.code',
      typeVersion: 2,
      position: [2580, 400],
      parameters: { jsCode: AFTER_CREATE_CONVO },
    },
    {
      id: randomUUID(),
      name: 'WhatsApp to Manager',
      type: 'n8n-nodes-base.httpRequest',
      typeVersion: 4.2,
      position: [2800, 280],
      credentials: ROMANH_CRED,
      parameters: {
        method: 'POST',
        url:
          '=https://app.romanh.net/api/v1/accounts/{{ $json.accountId }}/conversations/{{ $json.conversationId }}/messages',
        authentication: 'genericCredentialType',
        genericAuthType: 'httpHeaderAuth',
        sendBody: true,
        specifyBody: 'json',
        jsonBody: '={{ { "content": $json.message, "message_type": "outgoing" } }}',
        options: {},
      },
    },
    {
      id: randomUUID(),
      name: 'Telegram Backup',
      type: 'n8n-nodes-base.telegram',
      typeVersion: 1.2,
      position: [600, 520],
      credentials: { telegramApi: { id: 'iBs8LfCbvt39sN1T', name: 'Telegram account' } },
      parameters: {
        chatId: TELEGRAM_CHAT_ID,
        text: '={{ $("Format Manager Message").first().json.telegramBody }}',
        additionalFields: {},
      },
      onError: 'continueRegularOutput',
    },
  ];

  const connections = {
    'Execute Workflow Trigger': { main: [[{ node: 'Format Manager Message', type: 'main', index: 0 }]] },
    'Format Manager Message': {
      main: [
        [
          { node: 'Filter Manager Contact', type: 'main', index: 0 },
          { node: 'Telegram Backup', type: 'main', index: 0 },
        ],
      ],
    },
    'Filter Manager Contact': { main: [[{ node: 'Resolve Manager Contact', type: 'main', index: 0 }]] },
    'Resolve Manager Contact': { main: [[{ node: 'Needs Create Contact?', type: 'main', index: 0 }]] },
    'Needs Create Contact?': {
      main: [
        [{ node: 'Create Manager Contact', type: 'main', index: 0 }],
        [{ node: 'Final Manager Contact', type: 'main', index: 0 }],
      ],
    },
    'Create Manager Contact': { main: [[{ node: 'Merge Created Contact', type: 'main', index: 0 }]] },
    'Merge Created Contact': { main: [[{ node: 'Final Manager Contact', type: 'main', index: 0 }]] },
    'Final Manager Contact': { main: [[{ node: 'Get Manager Conversations', type: 'main', index: 0 }]] },
    'Get Manager Conversations': { main: [[{ node: 'Pick Manager Conversation', type: 'main', index: 0 }]] },
    'Pick Manager Conversation': { main: [[{ node: 'Needs New Convo?', type: 'main', index: 0 }]] },
    'Needs New Convo?': {
      main: [
        [{ node: 'WhatsApp to Manager', type: 'main', index: 0 }],
        [{ node: 'Create Manager Conversation', type: 'main', index: 0 }],
      ],
    },
    'Create Manager Conversation': { main: [[{ node: 'Merge New Conversation', type: 'main', index: 0 }]] },
    'Merge New Conversation': { main: [[{ node: 'WhatsApp to Manager', type: 'main', index: 0 }]] },
  };

  await n8nApi(`/workflows/${NOTIFY_SUB_WF_ID}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: 'Notify Supervisor — WhatsApp Manager',
      nodes,
      connections,
      settings: { executionOrder: 'v1' },
    }),
  });
  await n8nApi(`/workflows/${NOTIFY_SUB_WF_ID}/activate`, { method: 'POST' });
  console.log('✅ Notify sub-workflow: filter/create contact + WhatsApp');
}

async function main() {
  console.log('🚀 Deploy manager WhatsApp (fixed)\n');
  await deployNotifySubWorkflow();
  console.log('Done');
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
