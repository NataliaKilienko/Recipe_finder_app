/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
