/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" }],
  },
};

export default nextConfig;
