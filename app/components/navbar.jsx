"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCode, BsFileEarmarkCode } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar - Fixed on Scroll */}
      <nav className={`${scrolled ? "fixed top-0 left-0 right-0 z-[100] bg-transparent shadow-lg" : "bg-transparent relative z-[100]"} transition-all duration-300 hidden md:block`}>
        <div className="flex items-center justify-between py-5 mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-red-500 text-3xl font-bold">
              SYAHRUL FAJAR
            </Link>
          </div>

          <ul className="flex flex-row space-x-1">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-transparent border-t border-[#353951] md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center">
            <AiOutlineHome className="text-xl text-white" />
            <span className="text-xs text-white mt-1">Home</span>
          </Link>
          <Link href="/#about" className="flex flex-col items-center">
            <BsPerson className="text-xl text-white" />
            <span className="text-xs text-white mt-1">About</span>
          </Link>
          <Link href="/#skills" className="flex flex-col items-center">
            <BsCode className="text-xl text-white" />
            <span className="text-xs text-white mt-1">Skills</span>
          </Link>
          <Link href="/#education" className="flex flex-col items-center">
            <MdOutlineSchool className="text-xl text-white" />
            <span className="text-xs text-white mt-1">Education</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;