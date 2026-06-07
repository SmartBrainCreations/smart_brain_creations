/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a static export into `/out` when running `next build`.
  // Next 14 removed the `next export` CLI in favor of this config option.
  output: 'export',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: false
  }
};

module.exports = nextConfig;
