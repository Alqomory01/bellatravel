"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
export default function Footer (){
    return(
        <footer className="bg-[#000000] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Bellamariatravels.</h2>
          <p className="mb-2">36 Tafawa Balewa Square, Lagos Island Lagos, Nigeria</p>

          <p className="text-sm uppercase font-semibold text-gray-300">
            Call For Reservations
          </p>
          <p className="text-2xl font-bold text-blue-500 mb-2">
            +234 805 236 0408
          </p>
          <a
            href="#"
            className="text-sm text-white underline hover:text-pink-500"
          >
            View Map →
          </a>
        </div>

        {/* Middle Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            
            <Link href="#" className="hover:text-pink-500">
              Services
            </Link>
            <Link href="/room" className="hover:text-pink-500">
              Rooms & Suites
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Popular Destination
            </Link>
            <Link href="/about" className="hover:text-pink-500">
              About Us
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Pricing Plan
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Book Now
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Gallery
            </Link>
            <Link href="#" className="hover:text-pink-500">
              Testimonials
            </Link>
            <Link href="/bookings" className="hover:text-pink-500">
              Manage Booking
            </Link>
            <Link href="/contact" className="hover:text-pink-500">
              Contact
            </Link>
          </div>
        </div>

        {/* Right Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-2">Don’t miss</h3>
          <p className="mb-4 text-sm">Sign up to our newsletter for exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 rounded-l-lg w-full bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-pink-700"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <Link href="https://web.facebook.com/p/BellaMaria-Travels-Tours-61579035354304/?_rdc=1&_rdr#" className="hover:text-pink-500">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/bellamariatravels/" className="hover:text-pink-500">
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/bellamaria-travels-and-tours-602a6b254/?originalSubdomain=ng" className="hover:text-pink-500">
              <FaLinkedinIn />
            </Link>
            <Link href="https://x.com/BellamariaTour/status/1156660216475410433" className="hover:text-pink-500">
              <RxCross2 />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 mx-auto  pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center px-12">
        <p>Copyright © {new Date().getFullYear()}{" "} <span className="font-semibold">Bellamariatravels.</span> All Rights Reserved.</p>
        <p>
          Developed by:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Alqomorytech
          </a>
        </p>
      </div>
    </footer>
    )
}