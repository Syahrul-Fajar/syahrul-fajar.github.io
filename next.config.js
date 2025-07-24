// next.config.js
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Penting: Ini akan menghasilkan file statis ke folder 'out'
  images: {
    unoptimized: true, // Ini akan menonaktifkan Image Optimization bawaan Next.js
    remotePatterns: [{
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**'
      },
    ],
  },
}

module.exports = nextConfig