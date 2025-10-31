import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    // If an API base is provided, proxy /api/* to that backend to avoid CORS
    if (apiBase) {
      return [
        {
          source: "/api/:path*",
          destination: `${apiBase}/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
