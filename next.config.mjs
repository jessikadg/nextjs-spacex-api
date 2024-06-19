import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
