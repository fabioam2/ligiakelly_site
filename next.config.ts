import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
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
