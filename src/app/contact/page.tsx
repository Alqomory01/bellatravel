"use client";
// import Image from "next/image";

import AnimatedSection from "@/app/animatedsection"
export default function Contact (){

    return(
        <div>
        <div className="mt-12 px-4 sm:px-8 lg:px-20 py-8 sm:py-10 pb-12 text-center sm:text-left">
            <h3>Contact Us</h3>
            <h3>Get in Touch</h3>
            <p>Have any questions or complaints, feel free to get in touch and
and we will be happy to help</p>
        </div>
        <AnimatedSection>
        <div>
            <div className="bg-[#f7f9fb] mt-12 px-4 sm:px-8 lg:px-20 py-10 pb-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {/* Address Card */}
    <div className="bg-white rounded-xl shadow-sm p-8 text-center  border hover:bg-[#0f3b46] hover:text-white">
      <div className="flex justify-center mb-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
          />
        </svg>
      </div>

      <h3 className="text-xl text-black font-semibold mb-2">Our Address</h3>
      <p className="text-black hover:text-white  text-sm">
        35a Tafawa Balewa square Lagos Island Lagos
      </p>
    </div>

    {/* Email Card (Highlighted) */}
    <div className="bg-[#0f3b46] text-white rounded-xl shadow-md p-8 text-center">
      <div className="flex justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Info@bellamariatravels.com
      </h3>
      <p className="text-sm opacity-90">
        Email us anytime for anykind of query.
      </p>
    </div>

    {/* Phone Card */}
    <div className="bg-white rounded-xl shadow-sm p-8 text-center border">
      <div className="flex justify-center mb-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h2l2 5-2 1c1 2 3 4 5 5l1-2 5 2v2a2 2 0 01-2 2h-1C8.82 18 6 15.18 6 12V11a2 2 0 01-2-2V5z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-black">
        Hot:+234 805 236 0408
      </h3>
      <p className="text-gray-600 text-sm">
        Call us any kind support, we will wait for it.
      </p>
    </div>

  </div>
</div>

        </div>
        </AnimatedSection>
        <AnimatedSection>
            <section className="mt-12 px-4 sm:px-8 lg:px-20 py-10 pb-16 bg-[#0f3b46]">
  <div className="grid gap-x-3.5 grid-cols-1 lg:grid-cols-2">

    {/* LEFT – CONTACT FORM */}
    <div className=" text-white">
      <p className="text-sm tracking-widest text-gray-300 mb-2">
        CONTACT US
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Send Message Anytime
      </h2>

      <form className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-gray-500 rounded-full px-6 py-4 placeholder-gray-300 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-gray-500 rounded-full px-6 py-4 placeholder-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent border border-gray-500 rounded-full px-6 py-4 placeholder-gray-300 focus:outline-none focus:border-blue-400"
        />

        {/* Message */}
        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full bg-transparent border border-gray-500 rounded-2xl px-6 py-4 placeholder-gray-300 focus:outline-none focus:border-blue-400 resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="mt-4 inline-block border border-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition"
        >
          Submit Message
        </button>
      </form>
    </div>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.574944722303!2d3.3996698098976506!3d6.448579093515886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b23221dda65%3A0xbbe242200f074fe6!2s35%20Tafawa%20Balewa%20Square%2C%20Lagos%20Island%2C%20Lagos%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1770035561606!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    {/* RIGHT – MAP */}
    <div className="w-full h-[300px] sm:h-[400px] lg:h-auto">
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.574944722303!2d3.3996698098976506!3d6.448579093515886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b23221dda65%3A0xbbe242200f074fe6!2s35%20Tafawa%20Balewa%20Square%2C%20Lagos%20Island%2C%20Lagos%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1770035561606!5m2!1sen!2sng"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
    </div>

  </div>
</section>

        </AnimatedSection>
        </div>
    )
}