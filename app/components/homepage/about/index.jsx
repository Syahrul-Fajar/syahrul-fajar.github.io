// app/components/homepage/about/index.jsx
// @flow strict

"use client"; // <--- PENTING: Menjadikan ini Client Component

import { personalData } from "@/utils/data/personal-data";
import ProfileCard from "./ProfileCard"; // Pastikan jalur ini benar

function AboutSection() {
  // Fungsi onContactClick harus didefinisikan di dalam Client Component
  const handleContactClick = () => {
    console.log('Contact clicked from AboutSection!');
    // Anda bisa menambahkan logika navigasi, membuka modal, atau lainnya di sini.
    // Contoh: window.location.href = `mailto:${personalData.email}`;
  };

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          {Array.isArray(personalData.description) ? (
            personalData.description.map((paragraph, index) => (
              <p key={index} className="text-gray-200 text-sm lg:text-lg text-justify mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-200 text-sm lg:text-lg text-justify">
              {personalData.description}
            </p>
          )}
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <ProfileCard
            name={personalData.name}
            title={personalData.designation}
            handle={personalData.instagram.split('/').filter(Boolean).pop()}
            avatarUrl={personalData.profile}
            iconUrl={personalData.icon}
            grainUrl={personalData.icon}
            status="Online"
            contactText="Hubungi Saya"
            onContactClick={handleContactClick} // Meneruskan fungsi yang didefinisikan di sini
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;