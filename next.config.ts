import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows a production build next to a running `next dev` (e.g. NEXT_DIST_DIR=.next-build)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Pin the workspace root to this app (a stray lockfile in the parent dir confuses root inference)
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
