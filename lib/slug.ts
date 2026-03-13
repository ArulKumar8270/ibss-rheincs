/**
 * Normalize a slug for use in URLs: spaces → hyphens, remove/replace special chars.
 * Use this when building links and in generateStaticParams so URLs are consistent.
 */
export function slugToUrl(slug: string): string {
  if (!slug || typeof slug !== 'string') return ''
  return slug
    .trim()
    .replace(/\u2013/g, '-')  // en-dash → hyphen
    .replace(/\u2014/g, '-')  // em-dash → hyphen
    .replace(/\+/g, '-')      // plus → hyphen (e.g. 21+)
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Like slugToUrl but keeps en-dash (U+2013). Use in generateStaticParams so both
 * hyphen and en-dash URL variants are pre-generated (browsers/links may send either).
 */
export function slugToUrlWithEnDash(slug: string): string {
  if (!slug || typeof slug !== 'string') return ''
  return slug
    .trim()
    .replace(/\u2014/g, '-')  // em-dash → hyphen
    .replace(/\s+/g, '-')
    .replace(/[^\w\-\u2013]/g, '')  // allow en-dash
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Same as slugToUrlWithEnDash but with U+2013 replaced by literal "%E2%80%93".
 * Next.js may compare the path segment in percent-encoded form.
 */
export function slugToUrlEncodedEnDash(slug: string): string {
  if (!slug || typeof slug !== 'string') return ''
  const withEnDash = slugToUrlWithEnDash(slug)
  return withEnDash.replace(/\u2013/g, '%E2%80%93')
}
