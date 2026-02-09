"use client"
import Image from "next/image";
export default function Authmodal({isOpen, onClose}){
if (!isOpen) return null;

return(
    <div>
            <p>Popup</p>
            <h3>SignUp / Login</h3>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative flex flex-col md:flex-row
      w-full max-w-4xl
      h-auto md:h-500px
      bg-white rounded-xl overflow-hidden">

        {/* LEFT SECTION */}
        <div
          className=" hidden md:flex md:w-1/2
        p-8 lg:p-10
        text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Europe5.png')" }}
        >
          <div className="mt-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Exclusive Member Discounts
            </h2>
            <p className="text-base lg:text-lg">
              Enjoy special deals on flights, hotels, rides, and more.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className=" w-full md:w-1/2
        p-6 sm:p-8 lg:p-10
        relative
        overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          <h2 className="text-xl text-black sm:text-2xl font-semibold mb-2">
            Sign In / Register
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Manage Your Bookings With Ease And Enjoy Members-Only Benefits
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:bg-blue-900"
          />

          <button className="w-full mt-4 bg-blue-800 hover:bg-blue-600 text-white py-3 rounded-md font-medium">
            Continue
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full text-black flex items-center justify-center gap-2 border py-3 rounded-md hover:bg-gray-50">
            <img src="/images/google_logo.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="text-xs text-gray-500 mt-6">
            By signing in or registering, I confirm that I have read and agreed
            to Wakanow’s{" "}
            <span className="text-blue-500 cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-blue-500 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  

    </div>
)
}