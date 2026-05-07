import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: process.env.WP_IMAGES_URL },
      { protocol: 'https', hostname: process.env.WP_IMAGES_URL },
      ...(process.env.PAYLOAD_IMAGES_URL
        ? [{ protocol: 'https', hostname: process.env.PAYLOAD_IMAGES_URL }]
        : []),
    ],
  },
  eslint: {
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
    })
    return config
  },
}

export default withPayload(nextConfig)
