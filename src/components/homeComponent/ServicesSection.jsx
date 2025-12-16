// import { Link } from "react-router-dom";
// import { Car, MapPin, ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
// import { useState, useEffect } from "react";

// const ServicesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const services = [
//     {
//       title: "One-Way Cabs",
//       description: "Pay only for the distance you travel with flexible pickup.",
//       icon: <Car className="size-12 text-white" />,
//       gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
//       accentColor: "purple",
//       features: ["Flexible Pricing", "Instant Booking", "Real-time Tracking"],
//       particles: "✨",
//       speed: "Fast",
//     },
//     {
//       title: "Airport Transfers",
//       description: "Punctual rides synced with your flight schedule.",
//       icon: <MapPin className="size-12 text-white" />,
//       gradient: "from-emerald-600 via-teal-500 to-cyan-500",
//       accentColor: "emerald",
//       features: ["Flight Tracking", "Meet & Greet", "Free Waiting Time"],
//       particles: "✈️",
//       speed: "Punctual",
//     },
//     {
//       title: "Outstation Trips",
//       description: "Comfortable intercity rides with pro chauffeurs.",
//       icon: <ArrowRight className="size-12 text-white" />,
//       gradient: "from-blue-600 via-indigo-500 to-cyan-400",
//       accentColor: "blue",
//       features: ["Multi-day Packages", "Experienced Drivers", "Route Planning"],
//       particles: "🛣️",
//       speed: "Comfort",
//     },
//   ];

//   return (
//     <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-gray-50">
//       {/* Background Gradient Orbs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-orb"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-orb delay-1000"></div>
//       <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse-orb delay-500"></div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100/50 mb-6 backdrop-blur-sm animate-glow-border">
//             <Sparkles className="size-5 text-amber-600 animate-sparkle" />
//             <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               Premium Services
//             </span>
//             <Zap className="size-4 text-orange-500 animate-pulse-subtle" />
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-text-reveal">
//             <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
//               Experience The
//             </span>{" "}
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-gradient-x">
//               Ultimate Journey
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
//             From quick city hops to cross-country adventures, we've got the
//             perfect ride tailored for every moment of your journey
//           </p>

//           {/* Animated Divider */}
//           <div className="relative h-1 w-32 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-6">
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 animate-shimmer-slide rounded-full"></div>
//           </div>
//         </div>

//         <div className="grid gap-8 md:grid-cols-3 relative">
//           {/* Floating particles background */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {Array.from({ length: 15 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute text-2xl opacity-10 animate-float-random"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${i * 0.5}s`,
//                   animationDuration: `${3 + Math.random() * 7}s`,
//                 }}
//               >
//                 {["✨", "🚕", "⭐", "🎯", "⚡"][i % 5]}
//               </div>
//             ))}
//           </div>

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative group"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Glowing orb behind card */}
//               <div
//                 className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:scale-110 -z-10`}
//               ></div>

//               {/* Particle burst on hover */}
//               <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
//                 {Array.from({ length: 8 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className={`absolute ${service.particles} text-xl opacity-0 group-hover:opacity-100 group-hover:animate-particle-burst`}
//                     style={{
//                       left: "50%",
//                       top: "50%",
//                       transform: `rotate(${i * 45}deg)`,
//                       animationDelay: `${i * 0.1}s`,
//                     }}
//                   ></div>
//                 ))}
//               </div>

//               {/* Main Card */}
//               <div
//                 className={`relative bg-gradient-to-br from-white via-white to-gray-50/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-8 shadow-2xl shadow-gray-200/30 transition-all duration-700 transform-gpu ${
//                   hoveredIndex === index
//                     ? "scale-105 -translate-y-4 shadow-2xl shadow-gray-400/30"
//                     : "hover:scale-[1.02] hover:-translate-y-2"
//                 } animate-card-float`}
//                 style={{
//                   animationDelay: `${index * 0.2}s`,
//                 }}
//               >
//                 {/* Card glow border */}
//                 <div
//                   className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 blur transition-all duration-500 -z-10`}
//                 ></div>

//                 {/* Speed badge with animation */}
//                 <div className="absolute -top-3 -right-3">
//                   <div
//                     className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white font-bold text-xs uppercase tracking-wider shadow-lg animate-bounce-subtle flex items-center gap-1`}
//                   >
//                     <Rocket className="size-3" />
//                     {service.speed}
//                   </div>
//                 </div>

//                 {/* Icon container with 3D effect */}
//                 <div className="relative mb-8">
//                   <div
//                     className={`absolute -inset-4 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
//                   ></div>
//                   <div
//                     className={`relative inline-flex items-center justify-center size-20 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl`}
//                   >
//                     {/* Inner glow */}
//                     <div className="absolute inset-0 rounded-2xl bg-white/20 blur"></div>
//                     {service.icon}
//                   </div>
//                 </div>

//                 {/* Title with gradient animation */}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
//                   <span
//                     className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent bg-size-200 group-hover:animate-gradient-shift ${
//                       hoveredIndex === index
//                         ? `text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`
//                         : ""
//                     }`}
//                   >
//                     {service.title}
//                   </span>
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                   {service.description}
//                 </p>

//                 {/* Features list */}
//                 <div className="space-y-3 mb-8">
//                   {service.features.map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center gap-3 text-sm animate-slide-in"
//                       style={{ animationDelay: `${idx * 100}ms` }}
//                     >
//                       <div
//                         className={`size-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse-subtle`}
//                       ></div>
//                       <span className="text-gray-700 font-medium">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Animated CTA button */}
//                 <Link
//                   to="/services"
//                   className="relative inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 group/btn overflow-hidden transition-all duration-500 hover:scale-[1.02]"
//                 >
//                   {/* Button background shimmer */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500`}
//                   ></div>

//                   {/* Button shimmer effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

//                   <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover/btn:text-transparent group-hover/btn:bg-gradient-to-r group-hover/btn:from-purple-600 group-hover/btn:to-pink-600 transition-all duration-300 relative z-10">
//                     Explore Service
//                   </span>

//                   {/* Animated arrow */}
//                   <div className="relative z-10">
//                     <ArrowRight className="size-5 text-gray-400 group-hover/btn:text-purple-600 group-hover/btn:translate-x-2 transition-all duration-300" />
//                   </div>
//                 </Link>
//               </div>

//               {/* Floating indicator dots */}
//               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {Array.from({ length: 3 }).map((_, dotIndex) => (
//                   <div
//                     key={dotIndex}
//                     className={`size-2 rounded-full transition-all duration-300 ${
//                       hoveredIndex === index
//                         ? `bg-gradient-to-r ${service.gradient} w-8 animate-pulse-subtle`
//                         : "bg-gray-300 group-hover:bg-gray-400"
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16 animate-fade-in-up delay-1000">
//           <Link
//             to="/booking"
//             className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-2xl shadow-orange-200 hover:shadow-3xl hover:shadow-orange-300 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] group/cta relative overflow-hidden"
//           >
//             {/* Button shine effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>

//             <span className="relative z-10">Book Your Premium Ride Now</span>
//             <ArrowRight className="size-5 relative z-10 group-hover/cta:translate-x-2 transition-transform duration-300" />

//             {/* Sparkles */}
//             <Sparkles className="absolute -top-2 -left-2 size-4 text-yellow-300 opacity-0 group-hover/cta:opacity-100 group-hover/cta:animate-sparkle-burst" />
//             <Sparkles className="absolute -bottom-2 -right-2 size-4 text-yellow-300 opacity-0 group-hover/cta:opacity-100 group-hover/cta:animate-sparkle-burst delay-300" />
//           </Link>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes text-reveal {
//           from {
//             clip-path: inset(0 100% 0 0);
//           }
//           to {
//             clip-path: inset(0 0 0 0);
//           }
//         }

//         @keyframes gradient-shift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes card-float {
//           0% {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes particle-burst {
//           0% {
//             transform: translate(0, 0) scale(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(var(--tx), var(--ty)) scale(1);
//             opacity: 0;
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.2);
//           }
//         }

//         @keyframes sparkle-burst {
//           0% {
//             transform: scale(0) rotate(0deg);
//             opacity: 0;
//           }
//           50% {
//             transform: scale(1.5) rotate(180deg);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(0) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes float-random {
//           0%, 100% {
//             transform: translate(0, 0) rotate(0deg);
//           }
//           25% {
//             transform: translate(10px, -10px) rotate(90deg);
//           }
//           50% {
//             transform: translate(0, -20px) rotate(180deg);
//           }
//           75% {
//             transform: translate(-10px, -10px) rotate(270deg);
//           }
//         }

//         @keyframes pulse-orb {
//           0%, 100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.3;
//             transform: scale(1.1);
//           }
//         }

//         @keyframes glow-border {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(245, 158, 11, 0.5);
//           }
//         }

//         @keyframes shimmer-slide {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes bounce-subtle {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateX(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         /* Animation Classes */
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-text-reveal {
//           animation: text-reveal 1s ease-out forwards;
//           clip-path: inset(0 100% 0 0);
//         }

//         .animate-gradient-shift {
//           background-size: 200% auto;
//           animation: gradient-shift 3s ease infinite;
//         }

//         .animate-gradient-x {
//           background-size: 200% auto;
//           animation: gradient-x 3s ease infinite;
//         }

//         .animate-card-float {
//           animation: card-float 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-particle-burst {
//           --tx: calc(100px * cos(var(--angle)));
//           --ty: calc(100px * sin(var(--angle)));
//           animation: particle-burst 0.6s ease-out forwards;
//         }

//         .animate-sparkle {
//           animation: sparkle 2s ease-in-out infinite;
//         }

//         .animate-sparkle-burst {
//           animation: sparkle-burst 0.8s ease-out forwards;
//         }

//         .animate-float-random {
//           animation: float-random var(--duration) ease-in-out infinite;
//         }

//         .animate-pulse-orb {
//           animation: pulse-orb 4s ease-in-out infinite;
//         }

//         .animate-glow-border {
//           animation: glow-border 2s ease-in-out infinite;
//         }

//         .animate-shimmer-slide {
//           animation: shimmer-slide 2s ease-in-out infinite;
//         }

//         .animate-bounce-subtle {
//           animation: bounce-subtle 2s ease-in-out infinite;
//         }

//         .animate-slide-in {
//           animation: slide-in 0.4s ease-out forwards;
//           opacity: 0;
//         }

//         .bg-size-200 {
//           background-size: 200% auto;
//         }

//         .delay-300 {
//           animation-delay: 300ms;
//         }

//         .delay-500 {
//           animation-delay: 500ms;
//         }

//         .delay-1000 {
//           animation-delay: 1000ms;
//         }

//         .transform-gpu {
//           transform: translateZ(0);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServicesSection;

import { Link } from "react-router-dom";
import { Car, MapPin, ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "One-Way Cabs",
      description: "Pay only for the distance you travel with flexible pickup.",
      icon: <Car className="size-12 text-white" />,
      gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
      accentColor: "purple",
      features: ["Flexible Pricing", "Instant Booking", "Real-time Tracking"],
      particles: "✨",
      speed: "Fast",
    },
    {
      title: "Airport Transfers",
      description: "Punctual rides synced with your flight schedule.",
      icon: <MapPin className="size-12 text-white" />,
      gradient: "from-emerald-600 via-teal-500 to-cyan-500",
      accentColor: "emerald",
      features: ["Flight Tracking", "Meet & Greet", "Free Waiting Time"],
      particles: "✈️",
      speed: "Punctual",
    },
    {
      title: "Outstation Trips",
      description: "Comfortable intercity rides with pro chauffeurs.",
      icon: <ArrowRight className="size-12 text-white" />,
      gradient: "from-blue-600 via-indigo-500 to-cyan-400",
      accentColor: "blue",
      features: ["Multi-day Packages", "Experienced Drivers", "Route Planning"],
      particles: "🛣️",
      speed: "Comfort",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-gray-50">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-orb"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-orb delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse-orb delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100/50 mb-6 backdrop-blur-sm animate-glow-border">
            <Sparkles className="size-5 text-amber-600 animate-sparkle" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Premium Services
            </span>
            <Zap className="size-4 text-orange-500 animate-pulse-subtle" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-text-reveal">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
              Experience The
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-gradient-x">
              Ultimate Journey
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
            From quick city hops to cross-country adventures, we've got the
            perfect ride tailored for every moment of your journey
          </p>

          {/* Animated Divider */}
          <div className="relative h-1 w-32 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 animate-shimmer-slide rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-10 animate-float-random"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 7}s`,
                }}
              >
                {["✨", "🚕", "⭐", "🎯", "⚡"][i % 5]}
              </div>
            ))}
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing orb behind card */}
              <div
                className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:scale-110 -z-10`}
              ></div>

              {/* Particle burst on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute ${service.particles} text-xl opacity-0 group-hover:opacity-100 group-hover:animate-particle-burst`}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Main Card */}
              <div
                className={`relative bg-gradient-to-br from-white via-white to-gray-50/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-8 shadow-2xl shadow-gray-200/30 transition-all duration-700 transform-gpu ${
                  hoveredIndex === index
                    ? "scale-105 -translate-y-4 shadow-2xl shadow-gray-400/30"
                    : "hover:scale-[1.02] hover:-translate-y-2"
                } animate-card-float`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Card glow border */}
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 blur transition-all duration-500 -z-10`}
                ></div>

                {/* Speed badge with animation */}
                <div className="absolute -top-3 -right-3">
                  <div
                    className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white font-bold text-xs uppercase tracking-wider shadow-lg animate-bounce-subtle flex items-center gap-1`}
                  >
                    <Rocket className="size-3" />
                    {service.speed}
                  </div>
                </div>

                {/* Icon container with 3D effect */}
                <div className="relative mb-8">
                  <div
                    className={`absolute -inset-4 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
                  ></div>
                  <div
                    className={`relative inline-flex items-center justify-center size-20 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl`}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur"></div>
                    {service.icon}
                  </div>
                </div>

                {/* Title with gradient animation */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                  <span
                    className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent bg-size-200 group-hover:animate-gradient-shift ${
                      hoveredIndex === index
                        ? `text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`
                        : ""
                    }`}
                  >
                    {service.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm animate-slide-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div
                        className={`size-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse-subtle`}
                      ></div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Animated CTA button */}
                <Link
                  to="/services"
                  className="relative inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 group/btn overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Button background shimmer */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                  <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover/btn:text-transparent group-hover/btn:bg-gradient-to-r group-hover/btn:from-purple-600 group-hover/btn:to-pink-600 transition-all duration-300 relative z-10">
                    Explore Service
                  </span>

                  {/* Animated arrow */}
                  <div className="relative z-10">
                    <ArrowRight className="size-5 text-gray-400 group-hover/btn:text-purple-600 group-hover/btn:translate-x-2 transition-all duration-300" />
                  </div>
                </Link>
              </div>

              {/* Floating indicator dots */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: 3 }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`size-2 rounded-full transition-all duration-300 ${
                      hoveredIndex === index
                        ? `bg-gradient-to-r ${service.gradient} w-8 animate-pulse-subtle`
                        : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-1000">
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-2xl shadow-orange-200 hover:shadow-3xl hover:shadow-orange-300 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] group/cta relative overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>

            <span className="relative z-10">Book Your Premium Ride Now</span>
            <ArrowRight className="size-5 relative z-10 group-hover/cta:translate-x-2 transition-transform duration-300" />

            {/* Sparkles */}
            <Sparkles className="absolute -top-2 -left-2 size-4 text-yellow-300 opacity-0 group-hover/cta:opacity-100 group-hover/cta:animate-sparkle-burst" />
            <Sparkles className="absolute -bottom-2 -right-2 size-4 text-yellow-300 opacity-0 group-hover/cta:opacity-100 group-hover/cta:animate-sparkle-burst delay-300" />
          </Link>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-reveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes card-float {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes particle-burst {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes sparkle-burst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-random {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(90deg);
          }
          50% {
            transform: translate(0, -20px) rotate(180deg);
          }
          75% {
            transform: translate(-10px, -10px) rotate(270deg);
          }
        }

        @keyframes pulse-orb {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes glow-border {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.5);
          }
        }

        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animation Classes */
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
          clip-path: inset(0 100% 0 0);
        }

        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }

        .animate-card-float {
          animation: card-float 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-particle-burst {
          --tx: calc(100px * cos(var(--angle)));
          --ty: calc(100px * sin(var(--angle)));
          animation: particle-burst 0.6s ease-out forwards;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-sparkle-burst {
          animation: sparkle-burst 0.8s ease-out forwards;
        }

        .animate-float-random {
          animation: float-random var(--duration) ease-in-out infinite;
        }

        .animate-pulse-orb {
          animation: pulse-orb 4s ease-in-out infinite;
        }

        .animate-glow-border {
          animation: glow-border 2s ease-in-out infinite;
        }

        .animate-shimmer-slide {
          animation: shimmer-slide 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
          opacity: 0;
        }

        .bg-size-200 {
          background-size: 200% auto;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
