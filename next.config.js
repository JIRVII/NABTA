/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // هذا الكود يخبر Next.js بتجاهل تحميل حزم الخرائط على جانب الخادم (Server Side)
    if (isServer) {
      config.externals = [...config.externals, 'react-leaflet', 'leaflet'];
    }
    return config;
  },
};

module.exports = nextConfig;