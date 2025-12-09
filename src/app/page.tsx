"use client";
import Image from "next/image";
import { useState } from "react";
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { MdSmokingRooms } from "react-icons/md";
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
    name: "Deluxe Room",
    guests: 8,
    size: 2500,
    price: 1620,
    img: "/images/newdeluxe.webp",
    description: "Holiday villa in the heart of Salento just a stones from the sea!"
  },
  {
    name: "Luxury Suite",
      guests: 10,
      size: 4000,
      price: 2350,
      img: "/images/luxury1.webp",
      description:
        "Experience ultimate luxury in the heart of Rome with an exclusive private spa.",
  },
  {
    name: "Classic Room",
    guests: 2,
    size: 800,
    price: 375,
    img: "/images/luxury_suite.webp",
  },
  {
    name: "Business class Room",
    guests: 2,
    size: 800,
    price: 375,
    img: "/images/newdeluxe.webp",
    description:
    "perfect for business travelers offering modern workspaces, high-speed internet.",
  },
  {
    name: "Superior Ocean Room",
    guests: 4,
    size: 2000,
    price: 1125,
    img: "/images/luxury_suite.webp",
    description:
    "Luxurious oceanfront rooms with panoramic views ideal for relaxation and beach",
  },
  {
    name: "Royal Class Room",
    guests: 6,
    size: 3500,
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
    img: "/images/blog1.jpg", // replace with your image
    // authorImg: "/images/author1.jpg", // replace with author image
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
export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>


    <main className="p-6 relative h-[90vh] w-full overflow-hidden text-white">
        {/* Background Video */}
 
<div key={slides[current].video} className="absolute inset-0 w-full h-full z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover object-center"
  ><source src={slides[current].video} type="video/mp4" /> </video>
</div>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10" /> */}

      {/* Slide Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-lg mb-2">{slides[current].subtitle}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
          Explore More →
        </button>

        {/* Booking Form */}
        <div className="mt-10 bg-white text-black rounded-lg shadow-lg px-6 py-4 flex flex-wrap gap-4 items-center max-w-4xl w-full">
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Check-In</label>
            <input type="date" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Check-Out</label>
            <input type="date" className="border rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold mb-1">Guests</label>
            <input type="number" min="1" defaultValue="1" className="border rounded p-2" />
          </div>
          <button className="bg-pink-700 text-white px-4 py-2 rounded flex items-center gap-1">
            <IoSearch />
            Search
          </button>
        </div>

      </div>
       {/* Navigation Buttons */}
       <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-20"
      >
        <FaArrowLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20"
      >
        <FaArrowRight size={28} />
      </button>
      
     
    </main>
    {/* facilities section */}
    <div className="mt-12 px-20 pb-16">
      <h2 className="text-center text-6xl">facilities</h2>
      <p className="text-center">Enjoy the luxury of time and convienence</p>
      <div className="grid grid-cols-4 gap-x-4 mt-12">
      <div className="flex-col gap-y-4 space-y-4 hover:shadow-lg transition-shadow duration-200 py-8">
        <Image src="/images/nature.webp" alt="nature" className="rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-110" width={180} height={120}/>
        <p className="text-center font-bold text-3xl">Amidst Nature </p>
        <p className="text-center">Enjoy the scenic views and peaceful environment</p>
      </div>
      <div className="flex-col gap-y-4 space-y-4 hover:shadow-lg transition-shadow duration-200 py-8"><Image src="/images/pool.webp" alt="nature" className="rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-110" width={180} height={120}/>
        <p className="text-center font-bold text-3xl">Amidst Nature</p>
        <p className="text-center">Enjoy the scenic views and peaceful environment</p></div>
      <div className="flex-col gap-y-4 space-y-4 hover:shadow-lg transition-shadow duration-200 py-8"><Image src="/images/transfer.webp" alt="nature" className="rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-110" width={180} height={120}/>
        <p className="text-center font-bold text-3xl">Amidst Nature</p>
        <p className="text-center">Enjoy the scenic views and peaceful environment</p></div>
      <div className="flex-col gap-y-4 space-y-4 hover:shadow-lg transition-shadow duration-200 py-8"><Image src="/images/under.webp" alt="nature" className="rounded-full mx-auto transform transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-110" width={180} height={120}/>
        <p className="text-center font-bold text-3xl">Amidst Nature</p>
        <p className="text-center">Enjoy the scenic views and peaceful environment</p></div>
      </div>
    </div>

    <div className="mt-12 px-20 py-10 pb-16 bg-black text-white flex justify-between items-center">
      <div>
        <p className="text-yellow-600 text-2xl ">Some Words About us</p>
        <h3 className="text-4xl pb-10">why Choose Us</h3>
        <p className="pb-10">Experience the ultimate convience with a subway station located just moments from your doorstep</p>
        <div className="grid grid-cols-2 grid-rows-3 items-center gap-x-1 gap-y-9">
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
          <div className="flex justify-start items-center gap-x-2"><MdSmokingRooms /> <p>Well Furnished Rooms</p></div>
        </div>  
      </div>
      <div className="w-96 h-96"><iframe  className="w-full h-full" src="https://www.youtube.com/embed/kfnB7UYDvHA?si=4SIDuPf7GnLfboYW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe></div>
    </div>
    <div>
      <p className="text-center">Extraordinary Suites</p>
      <h3 className="text-center">Discover Tranquility in our relax Rooms</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg group"
        >
          
          <Image
            src={room.img}
            alt={room.name}
            width={500}
            height={800}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 bg-black/90"
          />

          {/* Price Tag */}
          <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 text-sm font-semibold rounded">
            ${room.price.toLocaleString()}{" "}
            <span className="text-xs font-normal">Per Night</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-bold">{room.name}</h3>
            <p className="text-sm">
              {room.guests} Guests | Size: {room.size}
            </p>
            {room.description && (
              <p className="text-xs mt-2">{room.description}</p>
            )}

            {room.description && (
              <button className="mt-3 bg-white text-gray-900 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
                Book Now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>

    </div>
<div>
<section className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 bg-white shadow-lg overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="relative h-80 md:h-auto">
          <Image
            src="/images/apartment1.jpg" 
            alt="Hotel in Colombia"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-pink-700 font-semibold">Exclusive Offer</p>
          <h2 className="text-2xl font-bold mt-2">
            When to Book for the Best Deals
          </h2>

          <div className="flex items-center mt-4 text-gray-600">
            <p>3 Beds | 5 Guest</p>
            <span className="ml-4 text-yellow-500">★★★★★</span>
            <p className="ml-auto">
              Only{" "}
              <span className="text-black font-bold text-lg">$1,400</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 border-b-2 border-pink-600 my-4"></div>

          {/* Description */}
          <p className="text-gray-600">
            Immerse yourself in Colombia’s natural beauty with a stay at
            Cristales River Trip, near the vibrant Caño Cristales River.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 border border-pink-700 text-pink-700 font-semibold rounded hover:bg-pink-700 hover:text-white transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
    
</div>
<section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h4 className="text-pink-600 font-semibold">Our Room Prices</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
          Our Awesome Packages
        </h2>

        <div className="space-y-8">
          {/* Classic Room */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Classic Room</h3>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• Amidst Nature</li>
                <li>• Swimming Pool</li>
                <li>• 1 Bed Room</li>
                <li>• 2 People in Room</li>
              </ul>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0 md:w-1/4">
              <p className="text-2xl font-bold">$375</p>
              <p className="text-gray-500">/ Per Night</p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
              <a
                href="#"
                className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
              >
                Book Rooms →
              </a>
            </div>
          </div>

          {/* Bogota Colombia */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Bogota Colombia</h3>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• Amidst Nature</li>
                <li>• Swimming Pool</li>
                <li>• 2 Bed Room</li>
                <li>• 4 People in Room</li>
              </ul>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0 md:w-1/4">
              <p className="text-2xl font-bold">$725</p>
              <p className="text-gray-500">/ Per Night</p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
              <a
                href="#"
                className="px-6 py-3 bg-pink-700 text-white rounded-lg font-medium hover:bg-pink-800 transition"
              >
                Book Rooms →
              </a>
            </div>
          </div>

          {/* Cristales River Trip */}
          <div className="flex flex-col md:flex-row justify-between items-center pb-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Cristales River Trip</h3>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• Amidst Nature</li>
                <li>• Swimming Pool</li>
                <li>• 3 Bed Room</li>
                <li>• 5 People in Room</li>
              </ul>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0 md:w-1/4">
              <p className="text-2xl font-bold">$1,400</p>
              <p className="text-gray-500">/ Per Night</p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
              <a
                href="#"
                className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
              >
                Book Rooms →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

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


    </div>
  );
}
