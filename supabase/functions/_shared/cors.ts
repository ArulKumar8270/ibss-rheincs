// Minimal list - Supabase can truncate long Access-Control-Allow-Headers on OPTIONS
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
  'Vary': 'Origin',
}

/** Build CORS headers for every response. Reflects request Origin so browser accepts the response. */
export function corsHeadersForRequest(req: Request): Record<string, string> {
  const origin = req.headers.get('origin')
  return {
    ...corsHeaders,
    'Access-Control-Allow-Origin': origin && /^https?:\/\//.test(origin) ? origin : '*',
  }
}
