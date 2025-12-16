import { X, CheckCircle } from "lucide-react";

export default function BookingModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="size-6" />
        </button>

        <div className="text-center">
          <CheckCircle className="size-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your cab inquiry has been submitted successfully.
          </p>
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
