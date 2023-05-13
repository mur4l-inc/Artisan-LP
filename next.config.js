/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
      // styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
