/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
