// import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

// export default function Contact() {
//   const contactMethods = [
//     {
//       icon: <Phone className="size-8 text-blue-600" />,
//       title: "Phone",
//       details: ["+91 98765 43210", "+91 98765 43211"],
//       action: (detail) => `tel:${detail}`,
//       buttonText: "Call Now",
//     },
//     {
//       icon: <MessageCircle className="size-8 text-green-600" />,
//       title: "WhatsApp",
//       details: ["+91 98765 43210"],
//       action: () =>
//         `https://wa.me/919876543210?text=${encodeURIComponent(
//           "Hi, I would like to book a cab"
//         )}`,
//       buttonText: "Chat Now",
//     },
//     {
//       icon: <Mail className="size-8 text-blue-600" />,
//       title: "Email",
//       details: ["info@cabservice.com", "support@cabservice.com"],
//       action: (detail) => `mailto:${detail}`,
//       buttonText: "Send Email",
//     },
//   ];

//   return (
//     <div>
//       {/* HERO */}
//       <section className="bg-gradient-to-br from-white via-[#f4f8ff] to-[#eaf3ff] text-slate-900 py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
//           <span className="badge bg-white border border-[#e5edff] text-[#0066FF] mx-auto">
//             We respond fast
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Contact Us</h1>
//           <p className="text-xl text-slate-600">
//             Get in touch with us for bookings and inquiries
//           </p>
//         </div>
//       </section>

//       {/* CONTACT CARDS */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid gap-8 md:grid-cols-3 mb-12">
//             {contactMethods.map((method, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-soft border border-[#e5edff] hover:shadow-[0_20px_50px_rgba(0,102,255,0.1)] transition text-center"
//               >
//                 <div className="flex justify-center mb-4">{method.icon}</div>

//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                   {method.title}
//                 </h3>

//                 <div className="space-y-1 mb-4">
//                   {method.details.map((detail, idx) => (
//                     <p key={idx} className="text-gray-600">
//                       {detail}
//                     </p>
//                   ))}
//                 </div>

//                 <a
//                   href={method.action(method.details[0])}
//                   target={method.title === "WhatsApp" ? "_blank" : undefined}
//                   rel={
//                     method.title === "WhatsApp"
//                       ? "noopener noreferrer"
//                       : undefined
//                   }
//                   className="inline-block btn-primary text-white px-6 py-2 pill font-semibold hover:-translate-y-0.5"
//                 >
//                   {method.buttonText}
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* OFFICE INFO + MAP */}
//           <div className="grid gap-8 lg:grid-cols-2">
//             <div className="bg-gradient-to-br from-[#eaf3ff] to-white p-8 rounded-2xl border border-[#e5edff] shadow-soft">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 Our Office
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="size-6 text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-1">
//                       Address
//                     </h3>
//                     <p className="text-gray-600">
//                       123 Main Street, Business District <br />
//                       City, State 400001 <br />
//                       India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Clock className="size-6 text-blue-600 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-gray-800 mb-1">
//                       Business Hours
//                     </h3>
//                     <p className="text-gray-600">
//                       24/7 Service Available <br />
//                       Office Hours: Mon–Sat, 9:00 AM – 8:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-[#e5edff]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2612550944944!2d73.85674631489315!3d18.516726287407326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f6b9a8e77%3A0x1f0b2c8a3a8d8e77!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
//                 className="w-full h-[300px]"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 allowFullScreen=""
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* IMMEDIATE ASSISTANCE */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 text-center card-surface rounded-3xl p-10 shadow-soft">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Need Immediate Assistance?
//           </h2>

//           <p className="text-gray-600 text-lg mb-8">
//             Our customer support team is available 24/7 to help you with your
//             bookings and queries
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="tel:+919876543210"
//               className="btn-primary text-white px-8 py-3 pill font-semibold hover:-translate-y-0.5 inline-flex items-center justify-center"
//             >
//               <Phone className="size-5 mr-2" />
//               Call Us Now
//             </a>

//             <a
//               href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="pill border border-[#e5edff] text-[#0066FF] px-8 py-3 font-semibold hover:border-[#0066FF] inline-flex items-center justify-center bg-white"
//             >
//               <MessageCircle className="size-5 mr-2" />
//               WhatsApp Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  Star,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="size-8 text-white" />,
      title: "Phone",
      details: ["+91 75077 50759"],
      action: (detail) => `tel:${detail}`,
      buttonText: "Call Now",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <MessageCircle className="size-8 text-white" />,
      title: "WhatsApp",
      details: ["+91 75077 50759"],
      action: () =>
        `https://wa.me/9175077 50759?text=${encodeURIComponent(
          "Hi, I would like to book a cab"
        )}`,
      buttonText: "Chat Now",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      icon: <Mail className="size-8 text-white" />,
      title: "Email",
      details: ["onewaycab67@gmail.com"],
      action: (detail) => `mailto:${detail}`,
      buttonText: "Send Email",
      gradient: "from-blue-600 to-cyan-600",
    },
  ];

  const officeInfo = [
    {
      icon: <MapPin className="size-6 text-emerald-600" />,
      title: "Address",
      description:
        "Shop no. 05, Sankalp society, Narhegaon,Katraj, Pune, Maharashtra 411041",
    },
    {
      icon: <Clock className="size-6 text-emerald-600" />,
      title: "Business Hours",
      description:
        "24/7 Service Available\nOffice Hours: Mon–Sat, 9:00 AM – 8:00 PM",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
      {/* ANIMATED HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
            alt="Contact Banner"
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
              className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-100 shadow-lg">
                <Sparkles className="size-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">
                  24/7 SUPPORT AVAILABLE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Contact{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get in touch with us for bookings and inquiries. Our team is
                always ready to assist you with premium service.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  {
                    value: "30 min",
                    label: "Avg Response",
                    icon: <Clock className="size-5 text-emerald-400" />,
                  },
                  {
                    value: "24/7",
                    label: "Support",
                    icon: <Phone className="size-5 text-pink-400" />,
                  },
                  {
                    value: "98%",
                    label: "Satisfaction",
                    icon: <Star className="size-5 text-blue-400" />,
                  },
                  {
                    value: "50K+",
                    label: "Customers",
                    icon: <Shield className="size-5 text-amber-400" />,
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

      {/* CONTACT METHODS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-4">
              <Sparkles className="size-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                WE RESPOND FAST
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Multiple ways to reach us for bookings, inquiries, or support
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 delay-${
                  index * 100
                } bg-white border border-gray-100 shadow-lg`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-lg mb-6`}
                  >
                    {method.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {method.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={method.action(method.details[0])}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      method.title === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      method.title === "WhatsApp"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    }`}
                  >
                    {method.buttonText}
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>

          {/* OFFICE INFO + MAP */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Office Info Card */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 size-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse delay-500"></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Our{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Office
                  </span>
                </h2>

                <div className="space-y-8">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.312788510817!2d73.82376187237391!3d18.446654637851818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2954a08484ba9%3A0xfda69c1ef593b418!2sSankalp%20society!5e1!3m2!1sen!2sin!4v1765879023158!5m2!1sen!2sin%22"
                  className="w-full h-[350px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />

                {/* Map Overlay Decoration */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">
                    Our Location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMMEDIATE ASSISTANCE CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <Phone className="size-5 text-white" />
                  <span className="text-sm font-bold text-white">
                    NEED IMMEDIATE ASSISTANCE?
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  We're Here to{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Help
                  </span>
                </h2>

                <p className="text-xl text-emerald-100 mb-8">
                  Our customer support team is available 24/7 to help you with
                  your bookings, queries, or any assistance you may need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+91 75077 50759"
                    className="group px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Phone className="size-5" />
                      Call Us Now
                      <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="size-5" />
                      WhatsApp Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
