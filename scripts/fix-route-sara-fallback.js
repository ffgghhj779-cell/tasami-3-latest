#!/usr/bin/env node
/** Fix Route to Agent — restore SARA fallback output (broken when HUMAN was added) */
const { getWorkflow, putWorkflow } = require('./n8n-config');

async function main() {
  const wf = await getWorkflow();
  const conn = wf.connections['Route to Agent']?.main || [];
  const rules =
    wf.nodes.find(n => n.name === 'Route to Agent')?.parameters?.rules?.values?.length || 5;

  while (conn.length <= rules) conn.push([]);
  conn[rules] = [{ node: 'AI Agent', type: 'main', index: 0 }];

  wf.connections['Route to Agent'] = { main: conn };
  await putWorkflow(wf);

  console.log('✅ Route to Agent fallback → AI Agent (سارة) restored');
  console.log(
    '   outputs:',
    conn.map((o, i) => `${i}:${o[0]?.node || 'empty'}`).join(' | ')
  );
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
