import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for free hosting
  images: {
    unoptimized: true,   // Fixes the blank image issue
  },
};

export default nextConfig;