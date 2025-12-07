#!/usr/bin/env node

/**
 * Direct migration runner using Supabase PostgREST API
 * This attempts to execute the migration SQL directly
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
  process.exit(1);
}

// Read migration file
const migrationPath = path.join(__dirname, '../supabase/migrations/20241206000000_create_contacts_table.sql');
const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

console.log('🚀 Attempting to run migration via Supabase API...\n');

// Split SQL into individual statements
const statements = migrationSQL
  .split(';')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--'));

console.log(`📝 Found ${statements.length} SQL statements to execute\n`);

// Note: Supabase REST API doesn't support arbitrary SQL execution
// We need to use the Supabase SQL Editor or Management API
console.log('⚠️  Direct SQL execution via REST API is not supported.');
console.log('📋 Please use one of these methods:\n');

console.log('METHOD 1: Supabase SQL Editor (Recommended)');
console.log('1. Open: https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql');
console.log('2. Copy SQL from: supabase/migrations/20241206000000_create_contacts_table.sql');
console.log('3. Paste and click RUN\n');

console.log('METHOD 2: Supabase CLI');
console.log('1. Install: npm install -g supabase');
console.log('2. Run: supabase db push\n');

console.log('METHOD 3: Copy SQL below and run manually:\n');
console.log('─'.repeat(80));
console.log(migrationSQL);
console.log('─'.repeat(80));
