#!/usr/bin/env node
/**
 * Remove hardcoded n8n JWT from scripts/*.js — use N8N_API_KEY from .env
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);
let fixed = 0;
let skipped = 0;

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.js')) continue;
  if (['n8n-config.js', 'scrub-hardcoded-keys.js'].includes(file)) continue;

  const fp = path.join(dir, file);
  let code = fs.readFileSync(fp, 'utf8');
  if (!code.includes('eyJhbGciOiJIUzI1Ni')) continue;

  const before = code;
  code = code.replace(/const KEY = ['"]eyJ[^'"]+['"];?\r?\n?/g, '');
  code = code.replace(/const NEW_KEY = ['"]eyJ[^'"]+['"];?\r?\n?/g, '');
  code = code.replace(/const API_KEY = ['"]eyJ[^'"]+['"];?\r?\n?/g, '');

  if (!code.includes("require('./n8n-config')") && !code.includes('require("./n8n-config")')) {
    code = `const { n8nApi, loadEnvFile } = require('./n8n-config');\nloadEnvFile();\n${code}`;
  }

  code = code.replace(/'X-N8N-API-KEY':\s*KEY\b/g, "'X-N8N-API-KEY': process.env.N8N_API_KEY");
  code = code.replace(/"X-N8N-API-KEY":\s*KEY\b/g, '"X-N8N-API-KEY": process.env.N8N_API_KEY');
  code = code.replace(/'X-N8N-API-KEY':\s*NEW_KEY\b/g, "'X-N8N-API-KEY': process.env.N8N_API_KEY");
  code = code.replace(/headers:\s*h\b/g, "headers: { 'X-N8N-API-KEY': process.env.N8N_API_KEY, Accept: 'application/json', 'Content-Type': 'application/json' }");

  if (code !== before) {
    fs.writeFileSync(fp, code, 'utf8');
    fixed++;
    console.log('  scrubbed', file);
  } else {
    skipped++;
  }
}

console.log(`\n✅ Scrubbed ${fixed} files (${skipped} unchanged)`);
