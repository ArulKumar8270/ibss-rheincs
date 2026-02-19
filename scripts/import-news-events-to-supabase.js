#!/usr/bin/env node

/**
 * Import NewsEvents from SQL Server export into Supabase news_events.
 *
 * SQL Server [dbo].[NewsEvents] column mapping:
 *   Title → title
 *   Description → content
 *   ThumbnailImage / NewsImage → featured_image
 *   MetaTagDescription → excerpt
 *   NewsEventsDate → event_date
 *   Status → published
 *   CreatedOn → created_at
 *   slug → derived from title (required)
 *   type → 'news'
 *
 * Usage:
 *   node scripts/import-news-events-to-supabase.js [path/to/NewsEvents.csv]
 *
 * CSV should have header row with SQL Server column names (e.g. Title, Description,
 * ThumbnailImage, NewsImage, MetaTagDescription, NewsEventsDate, Status, CreatedOn).
 * Export from SQL Server as CSV (e.g. "Save Results As" or SSMS Export).
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

function loadEnv(dir) {
  const envPath = path.join(dir, '.env');
  const localPath = path.join(dir, '.env.local');
  for (const p of [envPath, localPath]) {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      content.split('\n').forEach((line) => {
        const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
      });
    }
  }
}
loadEnv(path.join(__dirname, '..'));

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

function slugify(text) {
  if (!text || typeof text !== 'string') return 'news-' + Date.now();
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 200) || 'news-' + Date.now();
}

function parseCSVLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (!inQuotes && c === ',') {
      out.push(cur.trim());
      cur = '';
      continue;
    }
    cur += c;
  }
  out.push(cur.trim());
  return out;
}

function parseCSV(content) {
  const lines = content.split(/\r?\n/).filter((l) => l.length > 0);
  if (lines.length < 2) return { headers: [], rows: [] };
  const headers = parseCSVLine(lines[0]).map((h) => h.replace(/^\s*|\s*$/g, ''));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};
    headers.forEach((h, j) => (row[h] = values[j] != null ? values[j] : ''));
    rows.push(row);
  }
  return { headers, rows };
}

function mapRow(row) {
  const title = row.Title || row.title || '';
  const description = row.Description || row.content || row.description || '';
  const thumbnail = row.ThumbnailImage || row.NewsImage || row.ThumbnailImage || null;
  const excerpt = row.MetaTagDescription || row.excerpt || null;
  let eventDate = row.NewsEventsDate || row.event_date || null;
  if (eventDate) {
    const d = new Date(eventDate);
    if (!isNaN(d.getTime())) eventDate = d.toISOString();
    else eventDate = null;
  }
  const status = row.Status ?? row.published;
  const published = status === true || status === '1' || String(status).toLowerCase() === 'true';
  let createdOn = row.CreatedOn || row.created_at || null;
  if (createdOn) {
    const d = new Date(createdOn);
    createdOn = !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
  } else createdOn = new Date().toISOString();

  let slug = slugify(title);
  return {
    title: title || 'Untitled',
    slug,
    content: description || title || ' ',
    excerpt: excerpt || null,
    type: 'news',
    event_date: eventDate,
    location: null,
    featured_image: thumbnail || null,
    published,
    created_at: createdOn,
  };
}

async function main() {
  const csvPath = process.argv[2] || path.join(__dirname, '../supabase/Backup/news_events_rows.csv');
  if (!fs.existsSync(csvPath)) {
    console.error('CSV not found:', csvPath);
    console.error('Usage: node scripts/import-news-events-to-supabase.js [path/to/NewsEvents.csv]');
    process.exit(1);
  }

  const content = fs.readFileSync(csvPath, 'utf8');
  const { rows } = parseCSV(content);
  if (rows.length === 0) {
    console.log('No data rows in CSV.');
    process.exit(0);
  }

  const toInsert = rows.map(mapRow);
  const seen = new Set();
  const deduped = toInsert.filter((r) => {
    if (seen.has(r.slug)) {
      r.slug = r.slug + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    }
    seen.add(r.slug);
    return true;
  });

  console.log('Inserting', deduped.length, 'rows into public.news_events...');
  const BATCH = 20;
  let ok = 0;
  let err = 0;
  for (let i = 0; i < deduped.length; i += BATCH) {
    const batch = deduped.slice(i, i + BATCH);
    const { data, error } = await supabase.from('news_events').upsert(batch, {
      onConflict: 'slug',
      ignoreDuplicates: false,
    });
    if (error) {
      console.error('Batch error:', error.message);
      err += batch.length;
    } else {
      ok += batch.length;
    }
  }
  console.log('Done. Inserted/updated:', ok, 'Errors:', err);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
