#!/usr/bin/env node

/**
 * Migration Helper Script
 * Opens Supabase SQL Editor and displays the migration SQL
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const migrationPath = path.join(__dirname, '../supabase/migrations/20241206000000_create_contacts_table.sql');

console.log('\n🚀 Supabase Migration Helper\n');
console.log('═'.repeat(80));

// Read and display migration SQL
try {
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  
  console.log('\n📋 Migration SQL (Ready to Copy):\n');
  console.log('─'.repeat(80));
  console.log(migrationSQL);
  console.log('─'.repeat(80));
  
  console.log('\n📝 Instructions:\n');
  console.log('1. Copy the SQL above (select all and copy)');
  console.log('2. Open Supabase SQL Editor:');
  console.log('   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql');
  console.log('3. Paste the SQL into the editor');
  console.log('4. Click "RUN" button');
  console.log('5. Wait for success message ✅\n');
  
  // Try to open browser (optional)
  const platform = process.platform;
  const sqlEditorUrl = 'https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql';
  
  console.log('🌐 Opening Supabase SQL Editor in browser...\n');
  
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
