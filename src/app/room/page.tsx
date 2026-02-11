"use client";
import Image from "next/image";

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
export default function Room(){
    return(
        <div>
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
                     <div className="transform translate-y-0 md:translate-y-full translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
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
        </div>
    )

}