#!/usr/bin/env node
const { n8nApi } = require('./n8n-config');

async function main() {
  const w = await n8nApi('/workflows/PCnTQ3GBju27SSO2');
  const names = w.nodes.map(x => x.name);
  const route = w.nodes.find(x => x.name === 'Route to Agent');
  const parse = w.nodes.find(x => x.name === 'Parse Router JSON');
  console.log('Human nodes:', names.filter(x => /human/i.test(x)));
  console.log('Route rules:', route.parameters.rules.values.map(v => v.conditions.conditions[0].rightValue));
  console.log('errorWorkflow:', w.settings?.errorWorkflow);
  console.log('HUMAN in router:', parse.parameters.jsCode.includes("target = 'HUMAN'"));
  console.log('Save Order to Sheets:', names.includes('Save Order to Sheets'));
  console.log('CRM sync:', names.includes('Sync to CRM'));
}

main().catch(e => { console.error(e.message); process.exit(1); });
