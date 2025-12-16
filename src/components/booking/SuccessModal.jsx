export default function SuccessModal({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            ✓ Successfully Submitted!
          </h2>
          <p className="text-gray-700 mb-6">
            Your booking request has been saved.
          </p>
  
          <button
            onClick={onClose}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  