"use client";
import Link from "next/link"
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
export default function Header () {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <header>
            {/* top bar */}
<div className="bg-white text-sm py-5 px-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-4 text-gray-700">
          <div className="flex items-center justify-center leading-none gap-1">
            <span><MdOutlineMailOutline className="text-lg" /></span>
            <a href="mailto:bellamariatravels.com">bellamariatravels.com</a>
          </div>
          <div className="flex items-center gap-1 leading-none">
            <span><MdCall className="text-lg" /></span>
            <span>+(805) 236 0408</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <select className="border-none bg-transparent focus:outline-none text-gray-700">
            <option>EN</option>
            <option>Italy</option>
            <option>France</option>
            <option>Qatar</option>
          </select>
          <Link href="/login" className="flex items-center gap-1 text-gray-700 leading-none">
            <span><CgProfile className="text-lg" /></span>
            <span>Login</span>
          </Link>
        </div>
      </div>
      <hr className="border-gray-900"/>
{/* Main Navbar */}
<div className={`w-full z-50 transition-all duration-300 bg-white ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : ''}`}>
        <div className="flex justify-between items-center px-4 py-3 md:py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-pink-600">
            <span className="text-3xl"><Image src="/images/logo.png" alt="bella maria logo" width={120} height={60}/></span>
            
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-6 text-gray-800 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/room">Room</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pages">Pages</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 border px-2 py-1 rounded-md">
              <span><FaSearch /></span>
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-none text-sm bg-transparent"
              />
            </div>
            <Link
              href="/booking"
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
     
     

        </header>
    )
}