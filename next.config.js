/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["academic-horse.flywheelstaging.com"],
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
