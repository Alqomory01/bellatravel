"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Link
        href="https://wa.me/23452360408?text=Hello%20Bella%20Travel,%20I%20need%20assistance"
        target="_blank"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </Link>
    </div>
  );
}
