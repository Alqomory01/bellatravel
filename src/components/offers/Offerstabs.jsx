"use client";

import { useState } from "react";
import FlightOffers from "./Flightoffers";
import HotelOffers from "./Hoteloffers";

export default function OffersTabs() {
  const [activeTab, setActiveTab] = useState("flight");

  return (
    <section className="bg-[#DBE9F4] rounded-xl p-6 sm:p-8 lg:p-16 pt-14 sm:pt-20 pb-14 sm:pb-20 text-black shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-6 border-b mb-6">
        <h2 className="text-3xl sm:text-2xl font-bold mr-6">Offers</h2>

        <button
          onClick={() => setActiveTab("flight")}
          className={`pb-3 text-lg sm:text-base font-medium transition ${
            activeTab === "flight"
              ? "text-blue-500 border-b-2 border-blue-650"
              : "text-gray-500"
          }`}
        >
          Flight
        </button>

        <button
          onClick={() => setActiveTab("hotel")}
          className={`pb-2 font-medium transition ${
            activeTab === "hotel"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          Hotel
        </button>
      </div>

     
      {activeTab === "flight" && <FlightOffers />}
      {activeTab === "hotel" && <HotelOffers />}
    </section>
  );
}
