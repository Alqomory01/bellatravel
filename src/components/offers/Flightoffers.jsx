"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FlightOffers() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="flightSwiper"
    >
      {[1, 2, 3, 4].map((item) => (
        <SwiperSlide key={item}>
          <div className="border rounded-xl p-6 sm:p-4 flex flex-col sm:flex-row gap-4 ">
            <div>
                <Image  src="/images/tour package.jpg" alt="nature" width={260} height={160} className="rounded " />
                </div><div><h3 className="text-lg sm:text-base font-bold">Lagos → London</h3>
            <p className="text-base sm:text-sm text-gray-500">Round Trip</p>
            <p className="font-bold mt-2">₦1,422,982</p>
            <button className="mt-3 bg-blue-900 text-white font-bold px-4 py-2 rounded">
              Book Now
            </button></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
