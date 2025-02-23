"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

import { usePathname } from 'next/navigation'; 
import { StrapiImage } from "./StrapiImage";

interface hlinks {
  id: number;
  text: string;
  url: string;
}

interface HeaderProps {
  data: {
    logo: {
      url: string;
    };
    headerlinks: hlinks[];
  };
}

export function Header({ data }: Readonly<HeaderProps>) {
  const { logo,headerlinks } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const [isScrolled, setIsScrolled] = useState(false); 
  const headerRef = useRef<HTMLDivElement>(null); 


  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        (pathname === '/' ) || pathname !== '/' ? 'bg-black dark:bg-gray-800' : 'bg-transparent' 
      }`}
    >
      <div className="  px-[11%] py-2 flex items-center justify-between">
        <StrapiImage
              alt={ "no alternative text"}
              className="w-[103.68] h-[32]"
              height={32}
              src={logo.url}
              width={50.68}
            />
        {/* Mobile menu toggle button (hidden on md and larger screens) */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
       
        <nav className="hidden md:flex space-x-4">
        
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300 px-3"
             
            >
              {hlinks.text}
            </Link>
          ))}

        </nav>
       <button className="px-2 py-2 bg-white rounded">contact us</button>
        <nav
          className={`md:hidden absolute top-full left-0 w-full py-4 px-6 bg-black dark:bg-gray-800 transition duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          
          {headerlinks.map((hlinks) => (
            <Link
              key={hlinks.id}
              href={hlinks.url}
              className="text-white hover:text-gray-300 block mb-2"
            >
              {hlinks.text}
            </Link>
          ))}
        
        </nav>
      </div>
    </header>
  );
}