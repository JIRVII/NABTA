 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... أي إعدادات أخرى لديك
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, 'react-leaflet', 'leaflet'];
    }
    return config;
  },
};

module.exports = nextConfig;