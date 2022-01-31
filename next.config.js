/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    build_time: new Date().toISOString(),
  },
};

module.exports = nextConfig;
