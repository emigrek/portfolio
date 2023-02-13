/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'cdn.sanity.io', 'ui-avatars.com'],
  }
}

module.exports = nextConfig
