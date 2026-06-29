#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const dir = path.join(__dirname, '..');
const dataDir = path.join(os.homedir(), '.8router');

// Create data directory if not exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Build if not built yet
if (!fs.existsSync(path.join(dir, '.next'))) {
  console.log('Building 8router for first time...');
  execSync('pnpm run build', { cwd: dir, stdio: 'inherit' });
}

// Set environment
process.env.DATA_DIR = dataDir;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Start server
const port = process.env.PORT || 3003;
process.env.PORT = port;

console.log(`\n  8Router v0.5.12`);
console.log(`  Dashboard: http://localhost:${port}`);
console.log(`  API: http://localhost:${port}/v1\n`);

execSync('node server.js', { cwd: dir, stdio: 'inherit' });
