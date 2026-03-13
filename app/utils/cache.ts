// Client-side cache for blog data
const cache: Record<string, any> = {};

/**
 * Get data from cache for a specific key (e.g., language)
 */
export const getCache = (key: string) => {
  if (typeof window === 'undefined') return null;
  return cache[key] || null;
};

/**
 * Set data to cache for a specific key
 */
export const setCache = (key: string, data: any) => {
  if (typeof window === 'undefined') return;
  cache[key] = data;
};

/**
 * Clear the entire cache
 */
export const clearCache = () => {
  Object.keys(cache).forEach(key => delete cache[key]);
};
