import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rewrites to external URLs (HTTPS) are not supported in Next.js
  // The frontend will call the backend directly via CORS
  // CORS is already configured in Django settings with ALLOWED_HOSTS
};

export default nextConfig;
