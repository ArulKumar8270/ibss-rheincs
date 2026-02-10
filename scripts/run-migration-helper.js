#!/usr/bin/env node

/**
 * Migration Helper Script
 * Opens Supabase SQL Editor and displays the migration SQL
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const migrationPath = path.join(__dirname, '../supabase/migrations/20241206000000_create_contacts_table.sql');


// Read and display migration SQL
try {
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  
  
  // Try to open browser (optional)
  const platform = process.platform;
  const sqlEditorUrl = 'https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql';
  
  
  let command;
  if (platform === 'darwin') {
    command = `open "${sqlEditorUrl}"`;
  } else if (platform === 'win32') {
    command = `start "${sqlEditorUrl}"`;
  } else {
    command = `xdg-open "${sqlEditorUrl}"`;
  }
  
  exec(command, (error) => {
    if (error) {
      console.log('⚠️  Could not open browser automatically.');
      console.log('   Please manually visit:', sqlEditorUrl);
    } else {
      console.log('✅ Browser opened!');
    }
    console.log('\n💡 Tip: The SQL is displayed above - just copy and paste it!\n');
  });
  
} catch (error) {
  console.error('❌ Error reading migration file:', error.message);
  process.exit(1);
}
