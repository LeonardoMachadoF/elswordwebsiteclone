/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://elsword.koggames.com/', 'elsword.koggames.com'],
  },
}

module.exports = nextConfig
