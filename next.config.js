/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hoorimedia.com"
      }
    ]
  },
  reactStrictMode: true
};

module.exports = nextConfig;
