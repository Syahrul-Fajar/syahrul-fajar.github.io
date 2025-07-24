/** @type {import('next').NextConfig} */

const nextConfig = {
  // Mengaktifkan mode ekspor statis
  output: 'export',

  // Karena deploy ke root (syahrul-fajar.github.io),
  // basePath dan assetPrefix TIDAK DIPERLUKAN. Hapus atau komentari baris ini.

  // Nonaktifkan optimisasi gambar bawaan Next.js
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;