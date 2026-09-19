import type { NextConfig } from "next";

/**
 * Deployment modes:
 * 1. Vercel (default)          → `bun run build`        (standard Next.js build)
 * 2. GitHub Pages (static)     → `NEXT_EXPORT=true NEXT_PUBLIC_BASE_PATH=/<repo> bun run build`
 * 3. Local production check    → NEXT_BUILD_DIR can isolate the build output (optional)
 */
const isStaticExport = process.env.NEXT_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath } : {}),
  // Local AI/stock photos are pre-sized; unoptimized keeps static export simple
  images: { unoptimized: true },
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  reactStrictMode: false,
  devIndicators: false,
};

export default nextConfig;
