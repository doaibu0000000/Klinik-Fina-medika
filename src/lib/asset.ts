/**
 * Prefix asset URLs with the configured base path.
 *
 * Needed because `next/image` with `images.unoptimized: true` does NOT
 * apply `basePath` to its `src`. `NEXT_PUBLIC_BASE_PATH` is inlined at
 * build time, so this stays correct in every deployment target:
 * - Vercel (no base path)  → "/images/x.jpg"
 * - GitHub Pages           → "/<repo>/images/x.jpg"
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
