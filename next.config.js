/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
  // ضروري لأنك تستخدم هيكلة src/app
  },
};

module.exports = nextConfig;