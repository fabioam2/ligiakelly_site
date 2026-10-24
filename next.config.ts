import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // A Hostinger bloqueia portas locais; roda o PostCSS do Turbopack em
    // worker threads em vez de processos filhos conectados por porta.
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ligiakelly.ntr.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
