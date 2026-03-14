/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: process.env.WP_IMAGES_URL },
      { protocol: 'https', hostname: process.env.WP_IMAGES_URL },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
