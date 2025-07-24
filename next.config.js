// next.config.js
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- Pengaturan untuk GitHub Pages (User/Organization Page) ---
  output: 'export', // Penting: Ini akan menghasilkan file statis ke folder 'out'

  // Anda TIDAK MEMBUTUHKAN basePath atau assetPrefix
  // karena ini akan menjadi root dari syahrul-fajar.github.io

  // --- Akhir Pengaturan untuk GitHub Pages ---

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // Catatan: Next.js Image Optimization TIDAK AKAN BEKERJA dengan 'output: export' di GitHub Pages.
    // Anda bisa menonaktifkannya untuk mencegah error.
    unoptimized: true, // Ini akan menonaktifkan Image Optimization bawaan Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig