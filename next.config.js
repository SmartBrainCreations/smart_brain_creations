/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a static export into `/out` when running `next build`.
  // Next 14 removed the `next export` CLI in favor of this config option.
  // Set basePath/assetPrefix from env when provided to support subpath deployments
  basePath: process.env.NEXT_BASE_PATH || '',
  assetPrefix: process.env.NEXT_ASSET_PREFIX || '',
  output: 'export',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: false
  }
};

module.exports = nextConfig;

// Notes:
// - For deployments to a subpath (e.g. GitHub Pages project site), set
//   the environment variables `NEXT_BASE_PATH` and `NEXT_ASSET_PREFIX`.
//   Example for GitHub Pages at https://<user>.github.io/smart_brain_creations:
//     NEXT_BASE_PATH=/smart_brain_creations NEXT_ASSET_PREFIX=/smart_brain_creations/ npm run build
// - When these are not set, the app will continue to use root-relative
//   paths (e.g. `/logo.png`).
