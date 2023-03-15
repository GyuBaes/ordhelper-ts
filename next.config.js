/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ['next-js-ord-helper.s3-website.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
