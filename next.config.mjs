/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menghasilkan folder 'out' yang berisi file statis
  output: 'export',

  // (Opsional) Nonaktifkan optimisasi gambar bawaan Next.js
  // Ini diperlukan untuk static export agar komponen <Image> berfungsi
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
