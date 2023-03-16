/** @type {import('next').NextConfig} */
const next_config = {
  reactStrictMode: true,
  env: {
    build_time: new Date().toISOString(),
  },
};

/* eslint-disable-next-line no-undef */
module.exports = next_config;
