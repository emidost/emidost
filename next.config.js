/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: 'export',
  images: { unoptimized: true },
  // NOTE: next.config headers() do not apply to a static `output: export`.
  // Security + cache headers are set at the edge instead — see vercel.json
  // (Vercel) and public/_headers (Cloudflare Pages).
};
module.exports = nextConfig;
