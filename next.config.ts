import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Windows dev: persistent webpack cache can corrupt and cause obscure client errors like
  // "Cannot read properties of undefined (reading 'call')". Memory cache avoids bad pack renames.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  }
};

export default nextConfig;
