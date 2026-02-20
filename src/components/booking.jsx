
export default function ({isOpen, onClose}){
if (!isOpen) return null;
    return(
        <div>

             <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 px-4">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl overflow-hidden max-h-[90svh] md:max-h-[90vh]">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 p-6 sm:p-6 overflow-y-auto">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🗓️</span>
            <h2 className="text-lg text-black md:text-xl font-semibold">Manage your booking</h2>
          </div>

          <p className="text-sm md:text-base text-gray-600">
            If you have an existing booking with us please enter your booking
            details below to get tailored advice
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Booking ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Booking ID"
                  className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Booking Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Booking Email"
                className="w-full mt-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-md font-medium mt-2">
              Retrieve Booking
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 bg-[#20343c] text-white p-4 sm:p-6 overflow-y-auto">
          <ul className="space-y-5 text-lg">
            {[
              "Download your e-tickets",
              "Seat Upgrade",
              "Cancel your flight",
              "Download your invoice & Itinerary",
              "Add Hotels",
              "Add Rides",
              "Request for Refund",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
        </div>
    )
}