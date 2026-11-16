import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projects/ophrah-tech-portfolio",
        destination: "/projects/eroh-tech-portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
