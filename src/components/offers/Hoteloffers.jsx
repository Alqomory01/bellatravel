import Image from "next/image";
export default function HotelOffers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="border rounded-xl p-6 sm:p-4">
          <Image
            src="/images/tour package.jpg" width={450} height={220}
            className="rounded-lg mb-4"
          />
          <h3 className="font-bold">JW Marriott Dubai</h3>
          <p className="text-sm text-gray-500">
            ✓ Wifi  ✓ TV  ✓ AC
          </p>
          <p className="font-bold mt-2">₦612,758</p>
          <button className="mt-3 bg-blue-900 text-white font-bold px-4 py-2 rounded">
            See Availability
          </button>
        </div>
      ))}
    </div>
  );
}
