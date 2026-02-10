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


// Split SQL into individual statements
const statements = migrationSQL
  .split(';')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('--'));


