"use client";
import Link from "next/link"
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ManageBookingModal from "../booking"
// import  poppins  from '../../app/layout';
export default function Header () {
    const [isSticky, setIsSticky] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

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
const [open, setOpen] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className="w-full">

  {/* Top Bar */}
  <div className="bg-white text-xs sm:text-sm py-3 sm:py-4 px-4">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">

      {/* Left Info */}
      <div className="flex justify-between sm:flex-row gap-2 sm:gap-6 text-gray-700">
        <div className="flex items-center gap-1">
          <MdOutlineMailOutline className="text-base sm:text-lg" />
          <a href="mailto:bellamariatravels.com" className="hover:text-pink-600">
            bellamariatravels.com
          </a>
        </div>

        <div className="flex items-center gap-1">
          <MdCall className="text-base sm:text-lg" />
          <span>+(805) 236 0408</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <select className="bg-transparent text-gray-700 focus:outline-none text-xs sm:text-sm">
          <option>EN</option>
          <option>Italy</option>
          <option>France</option>
          <option>Qatar</option>
        </select>

        <Link
          href="/login"
          className="flex items-center gap-1 text-gray-700 hover:text-shadow-blue-600"
        >
          <CgProfile className="text-base sm:text-lg" />
          <span className="text-xs sm:text-sm">Login</span>
        </Link>
      </div>

    </div>
  </div>

  <hr className="border-gray-200" />

  {/* Main Navbar */}
  <div
    className={`w-full z-50 bg-white transition-all duration-300 ${
      isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
    }`}
  >
    <div className="relative max-w-7xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Bella Maria Travels Logo"
          width={110}
          height={55}
          className="w-auto h-10 sm:h-12"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-6 text-gray-800 text-base font-semibold">
        <Link className="hover:text-[#0356a9]" href="/">Home</Link>
        <Link className="hover:text-[#0356a9]" href="/about">About Us</Link>
        <Link className="hover:text-[#0356a9]" href="/room">Room</Link>
        {/* <Link className="hover:text-[#0356a9]" href="/gallery">Gallery</Link> */}
        <Link className="hover:text-[#0356a9]" href="/blog">Blog</Link>
        <Link className="hover:text-[#0356a9]" href="/bookings">  <button
        onClick={() => setBookingOpen(true)}
        className="font-medium"
      >
        Manage Booking
      </button></Link>
        <Link className="hover:text-[#0356a9]" href="/contact">Contact</Link>
      </nav>
      {/* mobile dropdown nav */}
      {menuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-screen bg-white shadow-lg z-999">
    <nav className="flex flex-col gap-4 p-6 text-gray-800 font-semibold">

      <Link onClick={() => setMenuOpen(false)} href="/">Home</Link>
      <Link onClick={() => setMenuOpen(false)} href="/about">About Us</Link>
      <Link onClick={() => setMenuOpen(false)} href="/room">Room</Link>
      <Link onClick={() => setMenuOpen(false)} href="/blog">Blog</Link>

      <button
        onClick={() => {
          setBookingOpen(true);
          setMenuOpen(false);
        }}
        className="text-left hover:text-[#0356a9]"
      >
        Manage Booking
      </button>

      <Link onClick={() => setMenuOpen(false)} href="/contact">Contact</Link>

    </nav>
  </div>
)}

      {/* Right Actions */}
      <div className="flex items-center gap-3 sm:gap-4">

        {/* Search (Desktop Only) */}
        <div
          className="hidden md:flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FaSearch className="text-lg" />
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "w-40 border-b border-gray-400" : "w-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none px-2"
              onBlur={() => setOpen(false)}
            />
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/#booking-form"
          className="bg-black text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-900 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button (Optional Hook) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
          ☰
        </button>
      </div>

    </div>
  </div>
<ManageBookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
</header>

    )
}