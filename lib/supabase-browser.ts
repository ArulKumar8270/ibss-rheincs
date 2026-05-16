'use client'

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Supabase is not configured. Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Restart the dev server after updating .env.'
    )
  }
  return createBrowserClient(
    url,
    anonKey
  )
}

// export function createClientFile() {
//   return createBrowserClient(
//     process.env.NEXT_LIVE_SUPABASE_URL!,
//     process.env.NEXT_LIVE_SUPABASE_ANON_KEY!
//   )
// }
