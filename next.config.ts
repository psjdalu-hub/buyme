import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',               // 🚀 CRITICAL: Tells Next.js to build static HTML/CSS files
  images: { unoptimized: true },   // Required for images to work on a static export
  basePath: '/buyme',             // Tells Next.js your app sits at the /buyme folder on GitHub
  assetPrefix: '/buyme',          // Ensures CSS and JS assets load from the correct path
};

export default nextConfig;