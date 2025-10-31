import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrites to external URLs (HTTPS) are not supported in Next.js production builds
  // The frontend calls the backend directly via CORS (already configured in Django)
};

export default nextConfig;
