
import { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  X,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Shield,
  Phone,
  Zap,
} from "lucide-react";
import PackageDetails from "../components/booking/Packagedetails";

export default function Booking() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const closeModal = () => setShowModal(false);

  

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
      {/* ANIMATED HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974"
            alt="Booking Banner"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full py-16">
            <div
              className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-100 shadow-lg">
                <Sparkles className="size-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">
                  INSTANT BOOKING
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Book Your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Ride
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cleaner layout, upfront details, and premium booking experience.
                Get your ride confirmed in minutes.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  {
                    value: "30 min",
                    label: "Avg Pickup",
                    icon: <Zap className="size-5 text-emerald-400" />,
                  },
                  {
                    value: "50K+",
                    label: "Rides",
                    icon: <Star className="size-5 text-pink-400" />,
                  },
                  {
                    value: "99%",
                    label: "Reliability",
                    icon: <Shield className="size-5 text-blue-400" />,
                  },
                  {
                    value: "24/7",
                    label: "Support",
                    icon: <Phone className="size-5 text-amber-400" />,
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {stat.icon}
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="size-6 rounded-full border-2 border-emerald-300 flex items-center justify-center">
              <ArrowRight className="size-3 text-emerald-400 transform rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-4">
              <Sparkles className="size-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                SMOOTH BOOKING EXPERIENCE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Plan Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Share details, we'll confirm instantly with premium service
            </p>
          </div>

          <PackageDetails></PackageDetails>

        </div>

      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative rounded-3xl p-8 bg-white/95 backdrop-blur-xl border border-white shadow-2xl max-w-md w-full animate-fadeIn">
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 size-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"></div>
            <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="size-6" />
            </button>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="size-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <CheckCircle className="size-10 text-white" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>

              <p className="text-gray-600 mb-8">
                Your cab inquiry has been submitted successfully. We will
                contact you shortly to confirm your booking details and provide
                estimated pricing.
              </p>

              <div className="space-y-4">
                <button
                  onClick={closeModal}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Close
                </button>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold border-2 border-emerald-200 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
                >
                  <Phone className="size-5" />
                  Call Now for Quick Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .glass-card {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #0d9488);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0d9488);
        }

        /* Selection color */
        ::selection {
          background-color: rgba(16, 185, 129, 0.3);
          color: #064e3b;
        }

        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}






// import { useState } from "react";
// import FormOneWay from "../components/booking/FormOneWay";
// import FormRound from "../components/booking/FormRound";
// import FormAirport from "../components/booking/FormAirport";
 
// export default function BookingContainer() {
//   const WEB_APP_URL =
//     "https://script.google.com/macros/s/AKfycbz-IsvTi5GZ5e32nyHXVgRBm0cutn1S7F1V16T0_wREChg1Er9gMCEs1FO3l7by4o_J/exec%22"
 
//   const [activeTab, setActiveTab] = useState("OneWay");
 
//   const [formData, setFormData] = useState({
//     pickup: "",
//     drop: "",
//     date: "",
//     time: "",
//     days: "",
//     airport: "",
//     carType: "",
//     name: "",
//     contact: "",
//   });
 
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
 
//   // ⭐ Send data to Google Sheet with formType
//   const handleSubmit = async (e) => {
//     e.preventDefault();
 
//     const payload = {
//       ...formData,
//       formType: activeTab,
//     };
 
//     await fetch(WEB_APP_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
 
//     alert("Form submitted successfully!");
 
//     // Reset form
//     setFormData({
//       pickup: "",
//       drop: "",
//       date: "",
//       time: "",
//       days: "",
//       airport: "",
//       carType: "",
//       name: "",
//       contact: "",
//     });
//   };
 
//   // ⭐ Determines which form to display
//   const renderForm = () => {
//     switch (activeTab) {
//       case "OneWay":
//         return (
//           <FormOneWay
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//         );
//       case "Round":
//         return (
//           <FormRound
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//         );
//       case "Airport":
//         return (
//           <FormAirport
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//         );
//       default:
//         return null;
//     }
//   };
 
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl">
//       {/* ⭐ Tabs UI */}
//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("OneWay")}
//           className={`px-6 py-2 rounded-lg font-semibold ${
//             activeTab === "OneWay"
//               ? "bg-teal-600 text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           🚕 OneWay
//         </button>
 
//         <button
//           onClick={() => setActiveTab("Round")}
//           className={`px-6 py-2 rounded-lg font-semibold ${
//             activeTab === "Round"
//               ? "bg-teal-600 text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           🔄 Round
//         </button>
 
//         <button
//           onClick={() => setActiveTab("Airport")}
//           className={`px-6 py-2 rounded-lg font-semibold ${
//             activeTab === "Airport"
//               ? "bg-teal-600 text-white"
//               : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           ✈ Airport
//         </button>
//       </div>
 
//       {/* ⭐ Render selected form */}
//       {renderForm()}
//     </div>
//   );
// }
 



