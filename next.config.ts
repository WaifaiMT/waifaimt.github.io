import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server)
  output: "export",
  trailingSlash: true,
  typedRoutes: true,
  images: {
    // The image optimizer needs a server; serve images as-is
    unoptimized: true,
  },
};

export default nextConfig;
