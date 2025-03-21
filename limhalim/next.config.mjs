/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
