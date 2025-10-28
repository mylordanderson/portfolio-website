import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to use stable webpack bundler
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
