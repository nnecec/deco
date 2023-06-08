/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ['@nextui-org/react', '@nextui-org/theme'],
}
