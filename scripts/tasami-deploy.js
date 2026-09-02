#!/usr/bin/env node
/**
 * Unified Tasami deploy pipeline — single entry point.
 *
 * Usage:
 *   node scripts/tasami-deploy.js          # all phases
 *   node scripts/tasami-deploy.js phase1   # foundation only
 *   node scripts/tasami-deploy.js phase2   # CRM + sheets + weekly
 *   node scripts/tasami-deploy.js qa       # run QA suite
 */
const { spawnSync } = require('child_process');
const path = require('path');

const SCRIPTS = path.join(__dirname);

const PHASES = {
  phase1: 'enterprise-phase1.js',
  phase2: 'enterprise-phase2.js',
  phase3: 'enterprise-phase3.js',
  phase4: 'enterprise-phase4.js',
  scrub: 'scrub-hardcoded-keys.js',
  qa: 'qa-post-upgrade.js',
};

function run(script) {
  const file = path.join(SCRIPTS, script);
  console.log(`\n${'═'.repeat(60)}\n▶ ${script}\n${'═'.repeat(60)}\n`);
  const r = spawnSync(process.execPath, [file], { stdio: 'inherit', cwd: path.join(SCRIPTS, '..') });
  if (r.status !== 0) process.exit(r.status || 1);
}

const arg = (process.argv[2] || 'all').toLowerCase();

if (arg === 'all') {
  run(PHASES.phase1);
  run(PHASES.phase2);
  run(PHASES.phase3);
  run(PHASES.phase4);
  run(PHASES.scrub);
  run(PHASES.qa);
} else if (PHASES[arg]) {
  run(PHASES[arg]);
} else {
  console.error(`Unknown phase: ${arg}`);
  console.error('Use: all | phase1 | phase2 | phase3 | phase4 | scrub | qa');
  process.exit(1);
}

console.log('\n✅ Tasami deploy finished.');
