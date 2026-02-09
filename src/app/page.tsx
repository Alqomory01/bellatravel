"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import { MdSmokingRooms } from "react-icons/md";
import { IoSearch, IoAdd } from "react-icons/io5";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Offerstabs from "../components/offers/Offerstabs";
import AnimatedSection from "@/app/animatedsection"
import AuthModal from "../components/Authmodal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { SiHiltonhotelsandresorts } from "react-icons/si";
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
const rooms = [
  {
    name: "Millan City",
    destination: "Italy",
    departure: 'Main Square, Old Town',
    price: 1230,
    img: "/images/millancity.jpg",
    description:"Experience ultimate luxury in the heart of Rome with an exclusive private spa.",
  },
  {
    name: "Vatican City",
      destination: "Italy",
      departure: 'Main Square, Old Town',
      price: 860,
      img: "/images/vatican city.jpg",
      description:
        "Experience ultimate luxury in the heart of Rome with an exclusive private spa.",
  },
  {
    name: "magic of Italy",
    destination: "Italy",
    departure: 800,
    price: 1100,
    img: "/images/magicofitaly.jpg",
    description:
        "Experience ultimate luxury in the heart of Rome with an exclusive private spa.",
  },
  {
    name: "Business class Room",
    destination: 2,
    departure: 800,
    price: 375,
    img: "/images/newdeluxe.webp",
    description:
    "perfect for business travelers offering modern workspaces, high-speed internet.",
  },
  {
    name: "Morocco",
    destination: "morocco",
    departure: "Abuja",
    price: 1125,
    img: "/images/luxury_suite.webp",
    description:
    "Luxurious oceanfront rooms with panoramic views ideal for relaxation and beach",
  },
  {
    name: "Spain",
    destination: "spain",
    departure: "marrakesh",
    price: 2350,
    img: "/images/newdeluxe.webp",
    description:
    "Experience Unparalleled luxury un the royal class rooms with private butler service",
  },
]

const blogPosts = [
  {
    id: 1,
    date: "April 10, 2024",
    title: "Weighing the pros and cons of each choice.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Jane Cooper",
    readTime: "4 Min Read",
    img: "/images/blog1.jpg", 
  },
  {
    id: 2,
    date: "April 16, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Cody Fisher",
    readTime: "7 Min Read",
    img: "/images/blog2.jpg",
    // authorImg: "/images/author2.jpg",
  },
  {
    id: 3,
    date: "April 18, 2024",
    title: "Identifying your travel goals and preferences.",
    excerpt:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    author: "Devon Lane",
    readTime: "4 Min Read",
    img: "/images/blog3.jpeg",
    // authorImg: "/images/author3.jpg",
  },
];
const swiperCards = [
  { title: "Office Pickup", desc: "Smooth rides from your office", img: "/images/Europe1.png" },
  { title: "Airport Drop", desc: "Stress-free airport travel",img: "/images/Europe2.png" },
  { title: "City Tour", desc: "Explore the city in comfort",img: "/images/Europe3.png" },
  { title: "Hotel Transfer", desc: "Seamless hotel transfers", img: "/images/Europe4.png" },
  { title: "VIP Ride", desc: "Premium experience guaranteed", img: "/images/Europe5.png" },
];

export default function Home() {
 

 const [open, setOpen] =useState(false)
  useEffect(() => {
    // Show modal immediately when page loads
    setOpen(true);

    // Auto-close after 2 minutes (120000ms)
    const timer = setTimeout(() => {
      setOpen(false);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

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
  return (
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

    <AnimatedSection>
  <section className="mt-12 px-4 sm:px-8 lg:px-20 pb-16">
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={16}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      loop
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mt-8 sm:mt-12"
    >
      {swiperCards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="px-2 sm:px-0">
            <Image
              src={card.img}
              alt="europe"
              width={750}
              height={450}
              className="rounded-2xl shadow-md hover:shadow-xl transition w-full  sm: md: object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
  </section>
</AnimatedSection>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatedSection>
      <Offerstabs />
      </AnimatedSection>
    </main>
    <AnimatedSection>
    <div className="mt-12 px-4 sm:px-8 lg:px-20 pb-16">

  {/* Facilities Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

    {/* Card 1 */}
    <div className="flex flex-col items-center space-y-4 py-8 px-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-200 rounded-xl">
      <Image
        src="/images/air ticketing.jpg"
        alt="Air Ticketing"
        width={180}
        height={120}
        className="rounded-full mx-auto transform transition-transform duration-300 hover:shadow-xl hover:scale-110"
      />
      <p className="text-center font-bold text-lg sm:text-xl">
        Air Ticketing and Reservation
      </p>
      <p className="text-center text-sm sm:text-base px-4 sm:px-7">
        From group trips to Disney Planet to complex multi-stop journeys across the globe, we’re your guide for seamless booking.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center space-y-4 py-8 px-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-200 rounded-xl">
      <Image
        src="/images/hotel booking.jpg"
        alt="Hotel Reservation"
        width={180}
        height={120}
        className="rounded-full mx-auto transform transition-transform duration-300 hover:shadow-xl hover:scale-110"
      />
      <p className="text-center font-bold text-lg sm:text-xl">
        Hotel Reservation (Local and International)
      </p>
      <p className="text-center text-sm sm:text-base px-4 sm:px-7">
        You awaken gently from a restful night’s sleep as sunlight filters softly through the curtains. Rising, you make your way to...
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center space-y-4 py-8 px-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-200 rounded-xl">
      <Image
        src="/images/tour package.jpg"
        alt="Tour Packages"
        width={180}
        height={120}
        className="rounded-full mx-auto transform transition-transform duration-300 hover:shadow-xl hover:scale-110"
      />
      <p className="text-center font-bold text-lg sm:text-xl">
        Tour Packages (Local and International)
      </p>
      <p className="text-center text-sm sm:text-base px-4 sm:px-7">
        Tourists often believe that the most effective way to explore is by experiencing as many fascinating sights as possible.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center space-y-4 py-8 px-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-200 rounded-xl">
      <Image
        src="/images/hotel_apartment.jpg"
        alt="Holiday Apartment"
        width={180}
        height={120}
        className="rounded-full mx-auto transform transition-transform duration-300 hover:shadow-2xl hover:scale-110"
      />
      <p className="text-center font-bold text-lg sm:text-xl">
        Holiday Apartment
      </p>
      <p className="text-center text-sm sm:text-base px-4 sm:px-7">
        Selecting a house in Lagos provides an incredible opportunity to experience a more tranquil and private atmosphere.
      </p>
    </div>

  </div>
</div>

    </AnimatedSection>
        <AnimatedSection>
    <div className="mt-12 px-4 sm:px-8 lg:px-20 py-10 pb-16 bg-black text-white">

  <div className="flex flex-col lg:flex-row gap-10 items-center">

    {/* Text Section */}
    <div className="w-full lg:w-[40%]">
      <p className="text-blue-500 text-lg sm:text-2xl">
        Get About Us
      </p>

      <h3 className="text-3xl sm:text-4xl pb-6 sm:pb-10">
        Why Choose Us
      </h3>

      <p className="pb-6 sm:pb-10 text-sm sm:text-base leading-relaxed">
        Experience the world’s most stunning destinations with Bellamaria Travels. Our dedicated team of travel experts creates extraordinary journeys, meticulously planning every detail for an unforgettable adventure.
      </p>

      <p className="text-sm sm:text-base leading-relaxed">
        Established in 2009, Bellamaria Travels & Tours Ltd began operations that same year and proudly earned accreditation from the International Air Transport Association (IATA). From the very beginning, we’ve built lasting partnerships with top airlines and travel industry stakeholders, always placing our customers at the heart of everything we do. At Bellamaria Travels, delivering exceptional service and unforgettable travel experiences isn’t just our promise — it’s our passion.
      </p>
    </div>

    {/* Media Section */}
    <div className="w-full lg:w-[60%] flex flex-col sm:flex-row items-center gap-6">

      {/* Left Floating Images */}
      <motion.div
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center w-full sm:w-1/4"
      >
        <Image
          src="/images/travel5.jpg"
          alt="Travel"
          width={180}
          height={120}
          className="rounded-full"
        />
        <Image
          src="/images/travel2.jpg"
          alt="Travel"
          width={180}
          height={120}
          className="rounded-full mt-4"
        />
      </motion.div>

      {/* Video */}
      <iframe
        className="w-full sm:w-1/2 h-64 sm:h-80 lg:h-full rounded-lg"
        src="https://www.youtube.com/embed/kfnB7UYDvHA?si=4SIDuPf7GnLfboYW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/* Right Floating Images */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center w-full sm:w-1/4"
      >
        <Image
          src="/images/travel6.jpg"
          alt="Travel"
          width={180}
          height={120}
          className="rounded-full"
        />
        <Image
          src="/images/travel3.jpg"
          alt="Travel"
          width={180}
          height={120}
          className="rounded-full mt-4"
        />
      </motion.div>

    </div>
  </div>
</div>

    </AnimatedSection>
    <AnimatedSection>
    <div className="mt-12 px-4 sm:px-8 lg:px-20 py-10 pb-16">

  {/* Section Header */}
  <p className="text-center text-lg sm:text-2xl text-blue-900 font-bold">
    Plan the
  </p>

  <h3 className="text-center text-2xl sm:text-3xl font-semibold">
    Perfect Holiday
  </h3>

  <p className="text-center text-sm sm:text-base mt-2 px-4">
    Designing Your Dream Escape: Personalized Adventures for Memorable Vacations
  </p>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 p-4 sm:p-6 bg-gray-50">

    {rooms.map((room, index) => (
      <div
        key={index}
        className="relative rounded-lg overflow-hidden shadow-lg group"
      >
        {/* Image */}
        <Image
          src={room.img}
          alt={room.name}
          width={500}
          height={800}
          className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300" />

        {/* Price Tag */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white text-gray-800 px-3 py-1 text-xs sm:text-sm font-semibold rounded">
          ${room.price.toLocaleString()}{" "}
          <span className="text-[10px] sm:text-xs font-normal">
            Per Person
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h3 className="text-base sm:text-lg font-bold">
            {room.name}
          </h3>

          <p className="text-xs sm:text-sm">
            Destination: {room.destination} | Departure: {room.departure}
          </p>

          {room.description && (
            <p className="text-xs mt-2 hidden sm:block">
              {room.description}
            </p>
          )}

          {/* Button */}
          <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {room.description && (
              <button className="mt-3 bg-white text-gray-900 px-4 py-2 text-sm rounded shadow hover:bg-amber-900 hover:text-white transition">
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

    </AnimatedSection>
<div>
  <AnimatedSection>
<section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg overflow-hidden rounded-lg">

    {/* Left Image */}
    <div className="relative h-64 sm:h-80 md:h-auto">
      <Image
        src="/images/apartment1.jpg"
        alt="Hotel in Colombia"
        fill
        className="object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="p-6 sm:p-8 flex flex-col justify-center">
      <p className="text-pink-700 font-semibold text-sm sm:text-base">
        Exclusive Offer
      </p>

      <h2 className="text-xl sm:text-2xl font-bold mt-2">
        When to Book for the Best Deals
      </h2>

      <div className="flex flex-wrap items-center gap-2 mt-4 text-gray-600 text-sm sm:text-base">
        <p>3 Beds | 5 Guest</p>
        <span className="text-yellow-500">★★★★★</span>
        <p className="sm:ml-auto">
          Only{" "}
          <span className="text-black font-bold text-lg">$1,400</span>
        </p>
      </div>

      {/* Divider */}
      <div className="w-12 border-b-2 border-pink-600 my-4"></div>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        Immerse yourself in Colombia’s natural beauty with a stay at
        Cristales River Trip, near the vibrant Caño Cristales River.
      </p>

      {/* Button */}
      <button className="mt-6 w-full sm:w-fit px-6 py-3 border border-pink-700 text-pink-700 font-semibold rounded hover:bg-pink-700 hover:text-white transition">
        Book Now
      </button>
    </div>
  </div>
</section>
</AnimatedSection>
    
</div>
<AnimatedSection>
<section className="py-12 sm:py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <h4 className="text-pink-600 font-semibold text-sm sm:text-base">
      Our Room Prices
    </h4>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-8 sm:mb-10">
      Our Awesome Packages
    </h2>

    <div className="space-y-8">

      {/* Room Item */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 border-b pb-6">

        {/* Details */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold">
            Classic Room
          </h3>
          <ul className="text-gray-600 mt-2 space-y-1 text-sm sm:text-base">
            <li>• Amidst Nature</li>
            <li>• Swimming Pool</li>
            <li>• 1 Bed Room</li>
            <li>• 2 People in Room</li>
          </ul>
        </div>

        {/* Price */}
        <div className="text-left md:text-right md:w-1/4">
          <p className="text-xl sm:text-2xl font-bold">$375</p>
          <p className="text-gray-500 text-sm">/ Per Night</p>
        </div>

        {/* CTA */}
        <div className="md:w-1/4">
          <a
            href="#"
            className="inline-block w-full md:w-fit text-center px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Book Rooms →
          </a>
        </div>
      </div>

      {/* Room Item */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 border-b pb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold">
            Bogota Colombia
          </h3>
          <ul className="text-gray-600 mt-2 space-y-1 text-sm sm:text-base">
            <li>• Amidst Nature</li>
            <li>• Swimming Pool</li>
            <li>• 2 Bed Room</li>
            <li>• 4 People in Room</li>
          </ul>
        </div>

        <div className="text-left md:text-right md:w-1/4">
          <p className="text-xl sm:text-2xl font-bold">$725</p>
          <p className="text-gray-500 text-sm">/ Per Night</p>
        </div>

        <div className="md:w-1/4">
          <a
            href="#"
            className="inline-block w-full md:w-fit text-center px-6 py-3 bg-pink-700 text-white rounded-lg font-medium hover:bg-pink-800 transition"
          >
            Book Rooms →
          </a>
        </div>
      </div>

      {/* Room Item */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 pb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold">
            Cristales River Trip
          </h3>
          <ul className="text-gray-600 mt-2 space-y-1 text-sm sm:text-base">
            <li>• Amidst Nature</li>
            <li>• Swimming Pool</li>
            <li>• 3 Bed Room</li>
            <li>• 5 People in Room</li>
          </ul>
        </div>

        <div className="text-left md:text-right md:w-1/4">
          <p className="text-xl sm:text-2xl font-bold">$1,400</p>
          <p className="text-gray-500 text-sm">/ Per Night</p>
        </div>

        <div className="md:w-1/4">
          <a
            href="#"
            className="inline-block w-full md:w-fit text-center px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Book Rooms →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
</AnimatedSection>

<AnimatedSection>
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Latest Travel Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={post.img}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col h-full">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Author Section */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={post.authorImg}
                      alt={post.author}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
</AnimatedSection>

    </div>
  );
}
