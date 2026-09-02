/**
 * Shared n8n API config — reads N8N_API_KEY from environment or .env file.
 * Usage: node scripts/tasami-deploy.js phase1
 */
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvFile();

const BASE = process.env.N8N_BASE_URL || 'https://n8n.esteemmediaa.com/api/v1';
const WF_ID = process.env.N8N_WORKFLOW_ID || 'PCnTQ3GBju27SSO2';
const BRIDGE_WF_ID = process.env.N8N_BRIDGE_WORKFLOW_ID || 'o676P9XUpgcsbXnS';
const KEY = process.env.N8N_API_KEY;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_OPS_CHAT_ID || '8929452910';
const NOTIFY_SUB_WF_ID = process.env.N8N_NOTIFY_SUB_WORKFLOW_ID || 'cF2G49DT9O9wCmW3';

function requireKey() {
  if (!KEY) {
    console.error('Missing N8N_API_KEY. Set it in .env or environment.');
    process.exit(1);
  }
  return KEY;
}

async function n8nApi(path, options = {}) {
  const key = requireKey();
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'X-N8N-API-KEY': key,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${options.method || 'GET'} ${path} → ${res.status}: ${text.slice(0, 800)}`);
  return text ? JSON.parse(text) : null;
}

async function getWorkflow() {
  return n8nApi(`/workflows/${WF_ID}`);
}

async function putWorkflow(wf, extraSettings = {}) {
  const result = await n8nApi(`/workflows/${WF_ID}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: wf.name,
      nodes: wf.nodes,
      connections: wf.connections,
      settings: { executionOrder: 'v1', ...extraSettings },
    }),
  });
  await n8nApi(`/workflows/${WF_ID}/activate`, { method: 'POST' });
  return result;
}

async function putWorkflowById(id, wf, extraSettings = {}) {
  const result = await n8nApi(`/workflows/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: wf.name,
      nodes: wf.nodes,
      connections: wf.connections,
      settings: { executionOrder: 'v1', ...extraSettings },
    }),
  });
  await n8nApi(`/workflows/${id}/activate`, { method: 'POST' });
  return result;
}

async function findWorkflowByName(name) {
  const res = await n8nApi('/workflows?limit=100');
  return (res.data || []).find(w => w.name === name) || null;
}

async function createOrUpdateWorkflow(name, nodes, connections, extraSettings = {}) {
  const existing = await findWorkflowByName(name);
  const body = { name, nodes, connections, settings: { executionOrder: 'v1', ...extraSettings } };
  if (existing) {
    await n8nApi(`/workflows/${existing.id}`, { method: 'PUT', body: JSON.stringify(body) });
    await n8nApi(`/workflows/${existing.id}/activate`, { method: 'POST' });
    return existing.id;
  }
  const created = await n8nApi('/workflows', { method: 'POST', body: JSON.stringify(body) });
  await n8nApi(`/workflows/${created.id}/activate`, { method: 'POST' });
  return created.id;
}

module.exports = {
  BASE,
  WF_ID,
  BRIDGE_WF_ID,
  TELEGRAM_CHAT_ID,
  NOTIFY_SUB_WF_ID,
  n8nApi,
  getWorkflow,
  putWorkflow,
  putWorkflowById,
  createOrUpdateWorkflow,
  loadEnvFile,
};
