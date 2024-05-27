/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-atl3-2.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      }
    ],
  },
};

export default nextConfig;
