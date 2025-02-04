/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.mdx": ["mdx-loader"], // Use glob patterns for loaders
      },
    },
  },
  async rewrites() {
    console.log('Rewrites are being applied!');
    return [
      {
        source: '/api/:path*',
        destination: 'http://local.openedx.io:8000/:path*', // Proxy to the backend
      },
    ];
  },
};

export default nextConfig;
