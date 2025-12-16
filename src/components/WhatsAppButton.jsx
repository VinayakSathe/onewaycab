import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message = "Hi, I would like to book a cab";

  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=917507750759&text&type=phone_number&app_absent=0`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-md z-50 group"
    >
      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>

      <MessageCircle className="w-6 h-6" />

      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </button>
  );
}
