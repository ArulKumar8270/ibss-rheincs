#!/usr/bin/env node

/**
 * Script to run Supabase migration
 * This script executes the migration SQL file directly via Supabase REST API
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌ Error: Missing environment variables');
  console.error('Make sure .env.local contains:');
  console.error('  - NEXT_PUBLIC_SUPABASE_URL');
  console.error('  - SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Read migration file
const migrationPath = path.join(__dirname, '../supabase/migrations/20241206000000_create_contacts_table.sql');
let migrationSQL;

try {
  migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  console.log('✅ Migration file loaded');
} catch (error) {
  console.error('❌ Error reading migration file:', error.message);
  process.exit(1);
}

// Extract project ID from URL
const projectId = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
if (!projectId) {
  console.error('❌ Error: Could not extract project ID from Supabase URL');
  process.exit(1);
}

// Supabase Management API endpoint
const apiUrl = `https://api.supabase.com/v1/projects/${projectId}/database/migrations`;

console.log('\n🚀 Running migration...');
console.log('📁 Migration file:', migrationPath);
console.log('🔗 Supabase URL:', SUPABASE_URL);
console.log('');

// Note: Supabase Management API requires different authentication
// For now, we'll provide instructions to run manually
console.log('⚠️  Automatic migration via API requires Supabase Management API token.');
console.log('📋 Please run the migration manually in Supabase SQL Editor:\n');
console.log('1. Go to: https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql');
console.log('2. Copy the SQL from: supabase/migrations/20241206000000_create_contacts_table.sql');
console.log('3. Paste and click RUN\n');

// Alternative: Use Supabase REST API directly (PostgREST)
// This requires the SQL to be executed via a function or we can use the SQL editor API
console.log('💡 Alternative: Using Supabase REST API to execute SQL...\n');

// Execute SQL via Supabase REST API using rpc (if we had a function)
// Or we can try using the SQL endpoint directly
const sqlEndpoint = `${SUPABASE_URL}/rest/v1/rpc/exec_sql`;

// Since we can't directly execute arbitrary SQL via REST API,
// we'll create a helper that shows the SQL to run
console.log('📝 Migration SQL to execute:\n');
console.log('─'.repeat(80));
console.log(migrationSQL);
console.log('─'.repeat(80));
console.log('\n✅ Copy the SQL above and run it in Supabase SQL Editor\n');
