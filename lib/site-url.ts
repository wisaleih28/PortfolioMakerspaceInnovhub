const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Safe base URL for metadata, sitemap, and robots.
 * Empty/invalid NEXT_PUBLIC_SITE_URL would break `new URL()` and can surface as obscure runtime errors.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;
  try {
    const parsed = new URL(raw);
    return parsed.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}
