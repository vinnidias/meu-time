/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media-1.api-sports.io",
      "media-2.api-sports.io",
      "media-3.api-sports.io",
      "media-4.api-sports.io",
      "media-5.api-sports.io",
      "media-6.api-sports.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
      {
        protocol: "https",
        hostname: "media-2.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
      {
        protocol: "https",
        hostname: "media-3.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
      {
        protocol: "https",
        hostname: "media-4.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
      {
        protocol: "https",
        hostname: "media-5.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
      {
        protocol: "https",
        hostname: "media-6.api-sports.io",
        port: "",
        pathname: "/football/**",
      },
    ],
  },
};

module.exports = nextConfig;
