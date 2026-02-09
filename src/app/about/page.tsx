"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/app/animatedsection"
export default function About (){

return(
   <div>
     <AnimatedSection>
    <div className="flex flex-col lg:flex-row items-center justify-between w-full">
     
        <div className="mt-12 text-black px-4 w-full lg:w-[60%] sm:px-8 lg:px-20 py-10 pb-16 ">
          <h3 className="text-blue ">We are very Experienced</h3>
          <h3>About BellaMaria Travels and Tours</h3>
          <p>About BellaMaria Travels and Tours
Your Trusted Partner in Seamless Travel

At BellaMaria Travels and Tours, we believe that travel is more than just moving from one destination to another – it’s about creating memories that last a lifetime.

Founded in 2009, we are a proudly IATA-certified and accredited travel agency, backed by the International Air Transport Association (IATA). With over 16 years of excellence, we have built a strong reputation in the travel and tourism industry for reliability, professionalism, and world-class service delivery.

 </p></div>
        <div className="mt-12 px-4 w-[40%] sm:px-8 lg:px-20 py-10 pb-16">
          <Image src="/images/black_woman.png"
        alt="blackwoman"
        width={240}
        height={150}
        /></div>

    </div>
    </AnimatedSection>
    <AnimatedSection>
      <section className="mt-12 px-4 sm:px-8 lg:px-20 py-10 pb-16 bg-[#eef3f7] py-10 px-4">
      <div className=" bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Image */}
          <div className="relative h-64 md:h-full">
            <Image
              src="/images/newsletter1.jpg" 
              alt="Travel Deals"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't miss a great deal
            </h2>

            <p className="text-gray-600 mb-6">
              Stay one step ahead. Find the best value travel with the
              latest deals, tips and news.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button className="bg-blue-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="max-w-6xl mx-auto mt-4 text-sm font-semibold text-gray-800">
        Search Flights, Hotels, Bus and Holiday Packages
      </p>
    </section>
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
    </div>
    )

}