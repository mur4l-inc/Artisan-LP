/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  compiler: {
    // styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // hostname: "image.tmdb.org",
      },
    ],
    unoptimized: true

  },
}

module.exports = nextConfig
