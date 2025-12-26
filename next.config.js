/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "ui-avatars.com",
      },
      {
        hostname: "camo.githubusercontent.com"
      }
    ]
  }
}

module.exports = nextConfig
