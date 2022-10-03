/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://elsword.koggames.com/', 'elsword.koggames.com', 'img.koggames.com', 'https://img.koggames.com'],
  },
}

module.exports = nextConfig
