import type { NextConfig } from "next";

console.log("🚀 NODE_ENV in Vercel:", process.env.NODE_ENV); // Debugging

const nextConfig: NextConfig = {
  reactStrictMode: true, // Keep this for better debugging
};

export default nextConfig;
