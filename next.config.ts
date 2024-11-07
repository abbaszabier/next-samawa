import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "samawabedummy-main.test",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
  webpack: (config) => {
    config.module?.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
