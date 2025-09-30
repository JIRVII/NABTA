/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // ضروري لأنك تستخدم هيكلة src/app
  },
};

module.exports = nextConfig;