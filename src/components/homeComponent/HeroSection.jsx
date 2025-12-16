// import { Link } from "react-router-dom";
// import {
//   Sparkles,
//   Star,
//   TrendingUp,
//   Heart,
//   ArrowRight,
//   PhoneCall,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import BookingContainer from "../booking/BookingContainer";

// const HeroSection = ({ bannerSlides }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [bannerSlides.length]);

//   const stats = [
//     { value: "4.9/5", label: "Rating", icon: Star },
//     { value: "50K+", label: "Rides", icon: TrendingUp },
//     { value: "98%", label: "Satisfaction", icon: Heart },
//   ];

//   return (
//     <section className="relative min-h-[90vh] overflow-hidden">
//       {/* Background Slides */}
//       {bannerSlides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             currentSlide === index ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="absolute inset-0">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover object-center scale-110 animate-zoom-slow"
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//           </div>
//         </div>
//       ))}

//       {/* Main Content */}
//       <div className="relative z-10 h-full">
//         <div className="max-w-7xl mx-auto px-4 pt-4 md:pt-6 pb-10 md:pb-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column */}
//             <div
//               className={`space-y-8 transition-all duration-1000 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0 animate-fade-up"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               {/* Premium Badge */}
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-100 shadow-lg animate-float-slow">
//                 <Sparkles className="size-5 text-emerald-600 animate-pulse-slow" />
//                 <span className="text-sm font-semibold text-emerald-700">
//                   PREMIUM CAB SERVICE
//                 </span>
//               </div>

//               {/* Main Headline */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 Travel in{" "}
//                 <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient-flow">
//                   Comfort
//                 </span>
//                 <br />
//                 <span className="text-gray-100 animate-slide-up">
//                   Arrive in Style
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-xl text-gray-300 max-w-xl animate-fade-in-delay">
//                 Experience seamless city travel with premium vehicles,
//                 professional drivers, and transparent pricing. Your comfort is
//                 our priority.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Link
//                   to="/booking"
//                   className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-pulse-subtle"
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 animate-shimmer"></span>
//                   <span className="flex items-center justify-center gap-2 relative z-10">
//                     Book Your Ride
//                     <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   Explore Services
//                 </Link>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-3 gap-4 pt-8">
//                 {stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-stat-card"
//                     style={{ animationDelay: `${idx * 100}ms` }}
//                   >
//                     <div className="flex items-center gap-2 mb-2">
//                       <stat.icon className="size-5 text-emerald-600" />
//                       <div className="text-2xl font-bold text-gray-900">
//                         {stat.value}
//                       </div>
//                     </div>
//                     <div className="text-sm font-medium text-gray-600">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Booking Card */}
//             <div
//               className={`transition-all duration-1000 delay-300 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0 animate-slide-in-right"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               <BookingContainer />

//               {/* Call & WhatsApp Buttons */}
//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <a
//                   href="tel:+919876543210"
//                   className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 animate-shimmer"></div>
//                   <PhoneCall className="size-5 relative z-10 group-hover:animate-bounce-subtle" />
//                   <span className="relative z-10">Call Now</span>
//                 </a>

//                 <a
//                   href="https://web.whatsapp.com/x"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white font-semibold py-3 shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-500/0 animate-shimmer"></div>
//                   <FaWhatsapp className="size-5 relative z-10 group-hover:animate-bounce-subtle" />
//                   <span className="relative z-10">WhatsApp</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
//         {bannerSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "w-8 bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse-subtle"
//                 : "bg-gray-300 hover:bg-gray-400 hover:scale-125 transition-transform"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 right-8 transform z-20 animate-bounce-slow">
//         <div className="size-10 rounded-full border-2 border-emerald-300/50 flex items-center justify-center backdrop-blur-sm bg-white/10">
//           <ArrowRight className="size-5 text-emerald-300 transform rotate-90" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import { Link } from "react-router-dom";
// import {
//   Sparkles,
//   Star,
//   TrendingUp,
//   Heart,
//   ArrowRight,
//   PhoneCall,
//   Zap,
//   Rocket,
//   Target,
//   Shield,
//   Award,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useState, useEffect, useRef } from "react";
// import BookingContainer from "../booking/BookingContainer";

// const HeroSection = ({ bannerSlides }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const heroRef = useRef(null);

//   // Text variations for sliding animation
//   const textVariations = [
//     { text: "Comfort", gradient: "from-emerald-400 via-teal-400 to-cyan-400" },
//     { text: "Style", gradient: "from-amber-400 via-orange-400 to-red-400" },
//     { text: "Luxury", gradient: "from-purple-400 via-violet-400 to-fuchsia-400" },
//     { text: "Elegance", gradient: "from-blue-400 via-indigo-400 to-cyan-400" },
//     { text: "Premium", gradient: "from-rose-400 via-pink-400 to-rose-500" },
//   ];

//   const subtitleVariations = [
//     { text: "Arrive in Style", color: "text-gray-100" },
//     { text: "Travel with Class", color: "text-emerald-200" },
//     { text: "Ride in Luxury", color: "text-cyan-200" },
//     { text: "Journey with Ease", color: "text-amber-200" },
//     { text: "Experience Excellence", color: "text-purple-200" },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//     }, 5000);

//     // Text rotation interval
//     const textInterval = setInterval(() => {
//       setCurrentTextIndex((prev) => (prev + 1) % textVariations.length);
//     }, 3000);

//     return () => {
//       clearInterval(slideInterval);
//       clearInterval(textInterval);
//     };
//   }, [bannerSlides.length, textVariations.length]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const { left, top, width, height } = heroRef.current.getBoundingClientRect();
//         const x = ((e.clientX - left) / width) * 100;
//         const y = ((e.clientY - top) / height) * 100;
//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const stats = [
//     { value: "4.9/5", label: "Rating", icon: Star, color: "from-yellow-400 to-amber-500" },
//     { value: "50K+", label: "Rides", icon: TrendingUp, color: "from-emerald-400 to-teal-500" },
//     { value: "98%", label: "Satisfaction", icon: Heart, color: "from-rose-400 to-pink-500" },
//   ];

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen overflow-hidden"
//       style={{
//         '--mouse-x': `${mousePosition.x}%`,
//         '--mouse-y': `${mousePosition.y}%`,
//       }}
//     >
//       {/* Background Slides with Parallax */}
//       <div className="relative h-full">
//         {bannerSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
//               currentSlide === index ? "opacity-100" : "opacity-0"
//             }`}
//             style={{
//               transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//               transition: 'transform 0.3s ease-out',
//             }}
//           >
//             <div className="absolute inset-0">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 h-full">
//         <div className="max-w-7xl mx-auto px-4 pt-6 md:pt-12 pb-16 md:pb-24">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Main Content */}
//             <div className="space-y-10">
//               {/* Premium Badge */}
//               <div className="relative inline-block">
//                 <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 shadow-2xl animate-slide-in-left">
//                   <Sparkles className="size-6 text-emerald-300 animate-sparkle" />
//                   <span className="text-sm font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent tracking-wider">
//                     🚀 PREMIUM CAB SERVICE
//                   </span>
//                 </div>
//               </div>

//               {/* Main Headline with Text Sliding Animation */}
//               <div className="relative">
//                 <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
//                   <div className="flex items-center gap-2">
//                     <span className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
//                       Travel in
//                     </span>

//                     {/* Animated Text Container for "Comfort" word */}
//                     <div className="relative h-28 md:h-32 lg:h-36 overflow-hidden">
//                       {/* Text sliding animation */}
//                       {textVariations.map((variation, index) => (
//                         <div
//                           key={index}
//                           className={`absolute top-0 left-0 w-full transition-all duration-800 ease-in-out transform ${
//                             currentTextIndex === index
//                               ? 'translate-y-0 opacity-100'
//                               : 'translate-y-full opacity-0'
//                           }`}
//                           style={{
//                             animationDelay: `${index * 100}ms`,
//                           }}
//                         >
//                           <span className={`bg-gradient-to-r ${variation.gradient} bg-clip-text text-transparent animate-gradient-shift`}>
//                             {variation.text}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Subtitle with sliding animation */}
//                   <div className="mt-4 relative h-20 md:h-24 overflow-hidden">
//                     {subtitleVariations.map((variation, index) => (
//                       <div
//                         key={index}
//                         className={`absolute top-0 left-0 w-full transition-all duration-800 ease-in-out transform ${
//                           currentTextIndex === index
//                             ? 'translate-y-0 opacity-100'
//                             : '-translate-y-full opacity-0'
//                         } ${variation.color}`}
//                       >
//                         {variation.text}
//                       </div>
//                     ))}
//                   </div>
//                 </h1>

//                 {/* Text navigation dots */}
//                 <div className="flex gap-2 mt-6">
//                   {textVariations.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentTextIndex(index)}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                         currentTextIndex === index
//                           ? 'w-8 bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse-subtle'
//                           : 'bg-gray-400 hover:bg-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Animated Description Text */}
//               <div className="relative overflow-hidden">
//                 <p className="text-2xl text-gray-200 max-w-xl leading-relaxed">
//                   <span className="inline-block animate-text-reveal-delay">
//                     Experience <span className="font-bold text-emerald-300 animate-word-highlight">seamless city travel</span> with
//                   </span>
//                   <span className="inline-block animate-text-reveal-delay" style={{ animationDelay: '0.2s' }}>
//                     {" "}premium vehicles, <span className="font-bold text-cyan-300 animate-word-highlight">professional drivers</span>,
//                   </span>
//                   <span className="inline-block animate-text-reveal-delay" style={{ animationDelay: '0.4s' }}>
//                     {" "}and <span className="font-bold text-amber-300 animate-word-highlight">transparent pricing</span>.
//                   </span>
//                   <span className="block mt-4 animate-text-reveal-delay" style={{ animationDelay: '0.6s' }}>
//                     Your comfort is our <span className="font-bold text-purple-300 animate-word-highlight">priority</span>.
//                   </span>
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-6 pt-6">
//                 <Link
//                   to="/booking"
//                   className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg overflow-hidden animate-slide-in-up"
//                   style={{ animationDelay: '0.3s' }}
//                 >
//                   <span className="flex items-center justify-center gap-3">
//                     Book Your Ride
//                     <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-emerald-300/30 bg-white/10 backdrop-blur-sm text-white hover:border-emerald-300/50 transition-all duration-300 hover:scale-[1.02] animate-slide-in-up"
//                   style={{ animationDelay: '0.5s' }}
//                 >
//                   Explore Services
//                 </Link>
//               </div>

//               {/* Stats Cards */}
//               <div className="grid grid-cols-3 gap-6 pt-10">
//                 {stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className="animate-stat-slide"
//                     style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
//                   >
//                     <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/10 shadow-2xl">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
//                           <stat.icon className="size-6 text-white" />
//                         </div>
//                         <div className="text-3xl font-black text-white">
//                           {stat.value}
//                         </div>
//                       </div>
//                       <div className="text-sm font-medium text-gray-300">
//                         {stat.label}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Booking Card */}
//             <div className="animate-slide-in-left delay-500">
//               <BookingContainer />

//               <div className="mt-8 grid grid-cols-2 gap-4">
//                 <a
//                   href="tel:+919876543210"
//                   className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 animate-slide-in-up delay-700"
//                 >
//                   <PhoneCall className="size-5" />
//                   Call Now
//                 </a>

//                 <a
//                   href="https://web.whatsapp.com/x"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 text-white font-bold py-4 animate-slide-in-up delay-800"
//                 >
//                   <FaWhatsapp className="size-5" />
//                   WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes slide-in-left {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slide-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slide-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes gradient-shift {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
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

//         @keyframes pulse-subtle {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }

//         @keyframes text-reveal-delay {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes word-highlight {
//           0%, 100% {
//             text-shadow: 0 0 10px currentColor;
//           }
//           50% {
//             text-shadow: 0 0 20px currentColor;
//           }
//         }

//         @keyframes stat-slide {
//           from {
//             opacity: 0;
//             transform: translateY(40px) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         /* Animation Classes */
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slide-in-up {
//           animation: slide-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-gradient-shift {
//           background-size: 200% auto;
//           animation: gradient-shift 3s ease infinite;
//         }

//         .animate-sparkle {
//           animation: sparkle 2s ease-in-out infinite;
//         }

//         .animate-pulse-subtle {
//           animation: pulse-subtle 2s ease-in-out infinite;
//         }

//         .animate-text-reveal-delay {
//           animation: text-reveal-delay 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-word-highlight {
//           animation: word-highlight 2s ease-in-out infinite;
//         }

//         .animate-stat-slide {
//           animation: stat-slide 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .delay-300 {
//           animation-delay: 300ms;
//         }

//         .delay-500 {
//           animation-delay: 500ms;
//         }

//         .delay-700 {
//           animation-delay: 700ms;
//         }

//         .delay-800 {
//           animation-delay: 800ms;
//         }

//         .transition-all {
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

import { Link } from "react-router-dom";
import {
  Sparkles,
  Star,
  TrendingUp,
  Heart,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import BookingContainer from "../booking/BookingContainer";

const HeroSection = ({ bannerSlides }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    rating: 0,
    rides: 0,
    satisfaction: 0,
  });

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Stats animation values
  const statsTargets = {
    rating: 4.9,
    rides: 50000,
    satisfaction: 98,
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats counter
            if (entry.target.id === "stats-container") {
              animateStats();
            }

            // Add animation classes
            if (entry.target.id === "title-container") {
              entry.target.classList.add("animate-slide-in-left");
            }
            if (entry.target.id === "form-container") {
              entry.target.classList.add("animate-slide-in-right");
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(statsTargets).forEach((statKey, idx) => {
      const target = statsTargets[statKey];
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setAnimatedStats((prev) => ({
          ...prev,
          [statKey]:
            statKey === "rating"
              ? current.toFixed(1)
              : statKey === "rides"
              ? Math.floor(current).toLocaleString() + "+"
              : Math.floor(current) + "%",
        }));
      }, stepDuration);
    });
  };

  const stats = [
    {
      value: `${animatedStats.rating}/5`,
      label: "Rating",
      icon: Star,
      key: "rating",
    },
    {
      value: animatedStats.rides,
      label: "Rides",
      icon: TrendingUp,
      key: "rides",
    },
    {
      value: animatedStats.satisfaction,
      label: "Satisfaction",
      icon: Heart,
      key: "satisfaction",
    },
  ];

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] overflow-hidden">
      {/* Background Slides */}
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-110 animate-zoom-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Column - Content and Stats */}
            <div className="space-y-8">
              {/* Title and Content */}
              <div
                id="title-container"
                ref={titleRef}
                className={`space-y-6 sm:space-y-8 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-100 shadow-lg animate-float-slow">
                  <Sparkles className="size-4 sm:size-5 text-emerald-600 animate-pulse-slow" />
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                    PREMIUM CAB SERVICE
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="block overflow-hidden">
                    <span className="block slide-in-from-left">
                      Travel in{" "}
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient-flow">
                        Comfort
                      </span>
                    </span>
                  </span>
                  <span className="block overflow-hidden mt-2 sm:mt-3">
                    <span className="block slide-in-from-left delay-300">
                      <span className="text-gray-100">Arrive in Style</span>
                    </span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 max-w-xl fade-in-up">
                  Experience seamless city travel with premium vehicles,
                  professional drivers, and transparent pricing. Your comfort is
                  our priority.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Link
                    to="/booking"
                    className="group relative w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden fade-in-up delay-200"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 animate-shimmer"></span>
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      Book Your Ride
                      <ArrowRight className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    to="/services"
                    className="w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base border-2 border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 hover:scale-[1.02] text-center fade-in-up delay-300"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Stats Section - On left side below content */}
              <div
                id="stats-container"
                ref={statsRef}
                className="grid grid-cols-3 gap-3 sm:gap-4"
              >
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <stat.icon className="size-4 sm:size-5 text-emerald-600" />
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div
              id="form-container"
              ref={formRef}
              className={`w-full ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="w-full">
                <BookingContainer />
              </div>

              {/* Optional: Call & WhatsApp Buttons */}
              {/* <div className="mt-6 grid grid-cols-2 gap-3 fade-in-up delay-500">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-teal-500/0 animate-shimmer"></div>
                  <PhoneCall className="size-4 sm:size-5 relative z-10 group-hover:animate-bounce-subtle" />
                  <span className="relative z-10">Call Now</span>
                </a>

                <a
                  href="https://web.whatsapp.com/x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white font-semibold py-3 shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-500/0 animate-shimmer"></div>
                  <FaWhatsapp className="size-4 sm:size-5 relative z-10 group-hover:animate-bounce-subtle" />
                  <span className="relative z-10">WhatsApp</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 sm:w-8 bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse-subtle"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-125 transition-transform"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hide on mobile */}
      <div className="hidden lg:flex absolute bottom-8 right-8 transform z-20 animate-bounce-slow">
        <div className="size-10 rounded-full border-2 border-emerald-300/50 flex items-center justify-center backdrop-blur-sm bg-white/10">
          <ArrowRight className="size-5 text-emerald-300 transform rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
