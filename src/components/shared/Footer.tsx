"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
            <a href="#" className="hover:text-pink-500">
              Things To Do
            </a>
            <a href="#" className="hover:text-pink-500">
              Services
            </a>
            <a href="#" className="hover:text-pink-500">
              Rooms & Suites
            </a>
            <a href="#" className="hover:text-pink-500">
              Popular Destination
            </a>
            <a href="#" className="hover:text-pink-500">
              About Us
            </a>
            <a href="#" className="hover:text-pink-500">
              Pricing Plan
            </a>
            <a href="#" className="hover:text-pink-500">
              Book Now
            </a>
            <a href="#" className="hover:text-pink-500">
              Gallery
            </a>
            <a href="#" className="hover:text-pink-500">
              Testimonials
            </a>
            <a href="#" className="hover:text-pink-500">
              Restaurant
            </a>
            <a href="#" className="hover:text-pink-500">
              Contact
            </a>
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
              className="p-2 rounded-l-lg w-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-4 rounded-r-lg hover:bg-pink-700"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-pink-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-500">
              <RxCross2 />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 mx-auto  pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center px-12">
        <p>Copyright © 2024 <span className="font-semibold">Bellamariatravels.</span> All Rights Reserved.</p>
        <p>
          Developed by:{" "}
          <a href="#" className="text-pink-500 hover:underline">
            Alqomorytech
          </a>
        </p>
      </div>
    </footer>
    )
}