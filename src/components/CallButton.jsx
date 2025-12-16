import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "+91 75077 50759";

  const handleClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Call Us"
      className="fixed bottom-28 left-6 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-md z-50 group"
    >
       {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-30"></span>

      <Phone className="w-6 h-6" />

      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Call us
      </span>
    </button>
  );
}
