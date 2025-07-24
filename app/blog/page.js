// @flow strict

// import BlogCard from "../components/homepage/blog/blog-card"; // <--- HAPUS ATAU KOMENTARI BARIS INI
// import { personalData } from "@/utils/data/personal-data"; // Anda mungkin tidak lagi memerlukannya jika tidak digunakan di homepage

// Jika Anda tidak ingin fitur blog sama sekali di halaman utama:
// HAPUS seluruh fungsi `getBlogs` ini:
/*
async function getBlogs() {
  const res = await fetch(`https://syahrulfajar.xyz`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};
*/

async function page() { // <-- Ini adalah default export untuk app/page.js
  // const blogs = await getBlogs(); // <--- HAPUS ATAU KOMENTARI BARIS INI

  return (
    <div className="py-8">
      {/* HAPUS/KOMENTARI seluruh bagian "All Blog" jika Anda tidak ingin menampilkannya */}
      {/*
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      */}

      {/* HAPUS/KOMENTARI bagian rendering blogs ini */}
      {/*
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
      */}

      {/* Anda perlu menempatkan KONTEN UTAMA portofolio Anda di sini */}
    </div>
  );
};
export default page;