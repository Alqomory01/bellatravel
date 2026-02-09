"use client";
import {useState, useEffect} from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoSearch, IoAdd } from "react-icons/io5";

const slides = [
  {
    video: "/videos/bella1.mp4",
    title: 'Indulge in a Luxurious Hotel Experience',
  subtitle: 'Best Choice for Family',

  },
  {video: "/videos/bella2.mp4",
    title: 'Indulge in a Life you will always love to be',
  subtitle: 'Best Choice for Family',
}

]

export default function Bookings (){
    const [current, setCurrent] = useState(0);
    
      useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    
      return () => clearInterval(interval); 
    }, []);
      const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
      const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    
     const [tripType, setTripType] = useState<"oneway" | "roundtrip" | "multicity">("oneway");
      const [multiCityFlights, setMultiCityFlights] = useState([
        { from: "", to: "", departDate: "" },
      ]);
    
      const handleAddFlight = () => {
        setMultiCityFlights([...multiCityFlights, { from: "", to: "", departDate: "" }]);
      };
    return(
        <div>
          <main className="relative min-h-screen md:h-[90vh] w-full overflow-hidden text-white px-4 sm:px-6">
            
            {/* Background Video */}
            <div
              key={slides[current].video}
              className="absolute inset-0 w-full h-full z-0"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slides[current].video} type="video/mp4" />
              </video>
            </div>
          
            {/* Overlay */}
            <div id="booking-form" className="absolute inset-0 bg-black/50 z-10" />
          
            {/* Slide Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen md:h-full text-center">
              <p className="text-sm sm:text-lg mb-2">
                {slides[current].subtitle}
              </p>
          
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {slides[current].title}
              </h1>
          
              <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
                Explore More →
              </button>
          
              {/* Booking Form */}
              <div  className="mt-8 bg-white text-black rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-5xl font-poppins">
                
                {/* Trip Type Selector */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
                  {["oneway", "roundtrip", "multicity"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTripType(type as "oneway" | "roundtrip" | "multicity")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        tripType === type
                          ? "bg-blue-800 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type === "oneway"
                        ? "One Way"
                        : type === "roundtrip"
                        ? "Round Trip"
                        : "Multi-City"}
                    </button>
                  ))}
                </div>
          
                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          
                  {/* One Way */}
                  {tripType === "oneway" && (
                    <>
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Flying From</label>
                        <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                      </div>
          
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Flying To</label>
                        <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                      </div>
          
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Depart Date</label>
                        <input type="date" className="border rounded p-2" />
                      </div>
                    </>
                  )}
          
                  {/* Round Trip */}
                  {tripType === "roundtrip" && (
                    <>
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Flying From</label>
                        <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                      </div>
          
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Flying To</label>
                        <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                      </div>
          
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Depart Date</label>
                        <input type="date" className="border rounded p-2" />
                      </div>
          
                      <div className="flex flex-col">
                        <label className="text-xs font-semibold mb-1">Return Date</label>
                        <input type="date" className="border rounded p-2" />
                      </div>
                    </>
                  )}
          
                  {/* Multi-City */}
                  {tripType === "multicity" && (
                    <div className="col-span-full">
                      {multiCityFlights.map((flight, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 items-end"
                        >
                          <div className="flex flex-col">
                            <label className="text-xs font-semibold mb-1">Flying From</label>
                            <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                          </div>
          
                          <div className="flex flex-col">
                            <label className="text-xs font-semibold mb-1">Flying To</label>
                            <input type="text" className="border rounded p-2" placeholder="City or Airport" />
                          </div>
          
                          <div className="flex flex-col">
                            <label className="text-xs font-semibold mb-1">Depart Date</label>
                            <input type="date" className="border rounded p-2" />
                          </div>
                        </div>
                      ))}
          
                      <button
                        type="button"
                        onClick={handleAddFlight}
                        className="flex items-center gap-2 text-blue-800 font-medium"
                      >
                        <IoAdd /> Add Another Flight
                      </button>
                    </div>
                  )}
          
                  {/* Search Button */}
                  <button className="bg-blue-800 text-white px-6 py-3 rounded flex items-center justify-center gap-2 col-span-full md:col-span-1">
                    <IoSearch /> Search
                  </button>
                </div>
              </div>
            </div>
          
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white z-20"
            >
              <FaArrowLeft size={26} />
            </button>
          
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white z-20"
            >
              <FaArrowRight size={26} />
            </button>
          </main>
        </div>
    )
}