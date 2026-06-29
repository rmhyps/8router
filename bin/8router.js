#!/usr/bin/env node

// 8Router CLI Entry Point
// This script runs the full CLI with tray support, menu, and all features

const path = require('path');
const fs = require('fs');

// Get the CLI directory
const cliDir = path.join(__dirname, '..', 'cli');
const cliJs = path.join(cliDir, 'cli.js');

// Check if CLI exists
if (!fs.existsSync(cliJs)) {
  console.error('Error: CLI not found at', cliJs);
  console.error('Please run "pnpm install" first.');
  process.exit(1);
}

// Run the CLI
require(cliJs);
