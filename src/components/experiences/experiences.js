// src/components/experiences/Experiences.js

import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./experiences.css"; 

import p2mw from "../../assets/images/p2mw.jpg";
import bemkm from "../../assets/images/bemkm.jpg";
import bemftik from "../../assets/images/bemftik.jpeg";



const experiencesData = [
  // ... (data pengalaman Anda tetap di sini)
  {
    id: 1,
    title: "BEM KM UNIMUS",
    organization: "Universitas Muhammadiyah Semarang",
    date: "2024 - 2025",
    description: "Kementrian Advokasi, Menjabat sebagai Staff Dirjen Kesejahteraan Mahasiswa.",
    image: bemkm,
  },
  {
    id: 2,
    title: "P2MW-Bisnis Digital",
    organization: "Program Pembinaan Mahasiswa Wirausaha",
    date: "2025",
    description: "FullStack Web Developer",
    image: p2mw,
  },
  {
    id: 3,
    title: "BEM FTIK",
    organization: "BEM Fakultas",
    date: "2024",
    description: "Menjadi staff BEM FTIK.",
    image: bemftik,
  },
];

const Experiences = () => {
  const { theme } = useContext(ThemeContext); // <-- 2. Ambil tema dari context

  // Pengaturan untuk slider react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Render kartu sebagai variabel agar bisa digunakan ulang
  const renderCards = () =>
    experiencesData.map((exp, index) => (
      <div className="experience-card-wrapper" key={exp.id}>
        <div 
          className="experience-card"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <img src={exp.image} alt={exp.title} className="experience-card-img" />
          <div className="experience-card-content">
            <h3 className="experience-card-title">{exp.title}</h3>
            <p className="experience-card-org">{exp.organization}</p>
            <p className="experience-card-date">{exp.date}</p>
            <p className="experience-card-desc">{exp.description}</p>
          </div>
        </div>
      </div>
    ));

  return (
    // <-- 3. Tambahkan class 'dark' atau 'light' berdasarkan tema
    <section id="experiences" className={`experience-section ${theme}`}>
      <div className="experience-container">
        <h2 className="experience-title" data-aos="fade-down">
          Pengalaman Saya
        </h2>
        
        {/* <-- 4. Logika kondisional: jika lebih dari 2, gunakan slider --> */}
        {experiencesData.length > 2 ? (
          <Slider {...sliderSettings}>{renderCards()}</Slider>
        ) : (
          <div className="experience-grid">{renderCards()}</div>
        )}
      </div>
    </section>
  );
};

export default Experiences;