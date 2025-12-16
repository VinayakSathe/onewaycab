
// // import  { Link ,} from "react-router-dom";
// // import { motion } from "framer-motion";
// // import {
// //   Car,
// //   MapPin,
// //   Repeat,
// //   Clock,
// //   DollarSign,
// //   Shield,
// //   CheckCircle,
// //   Sparkles,
// //   Star,
// //   ArrowRight,
// //   Award,
// //   TrendingUp,
// //   Heart,
// //   Users,
// //   Plane,
// // } from "lucide-react";
// // import { useEffect, useState } from "react";

// // import suvImage from "../assets/avilableCar/suv.jfif";
// // import sedanImage from "../assets/avilableCar/sedan.jfif";
// // import tempoImage from "../assets/avilableCar/tempo.jfif";
// // import ertigaImage from "../assets/avilableCar/Ertica.jfif";

// // export default function Services() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     setIsVisible(true);
// //   }, []);

// //   const services = [
// //     {
// //       icon: <Car className="size-12 text-white" />,
// //       title: "One-Way Cab Service",
// //       description:
// //         "Travel one way without paying for the return journey. Perfect for relocations, business trips, or single journeys.",
// //       features: [
// //         "Pay only for one-way distance",
// //         "No return fare charges",
// //         "Flexible pickup locations",
// //         "Available for all distances",
// //       ],
// //       gradient: "from-purple-600 to-violet-600",
// //       image:
// //         "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
// //     },
// //     {
// //       icon: <MapPin className="size-12 text-white" />,
// //       title: "Outstation Cab Service",
// //       description:
// //         "Comfortable and reliable outstation travel with professional drivers.",
// //       features: [
// //         "All major cities covered",
// //         "Experienced drivers",
// //         "Well-maintained vehicles",
// //         "Transparent pricing",
// //       ],
// //       gradient: "from-emerald-600 to-teal-600",
// //       image:
// //         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
// //     },
// //     {
// //       icon: <Plane className="size-12 text-white" />,
// //       title: "Airport Pickup / Drop",
// //       description:
// //         "Timely airport transfers with flight tracking for punctual service.",
// //       features: [
// //         "Flight tracking",
// //         "Meet & greet",
// //         "Luggage assistance",
// //         "24/7 availability",
// //       ],
// //       gradient: "from-blue-600 to-cyan-600",
// //       image:
// //         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
// //     },
// //     {
// //       icon: <Repeat className="size-12 text-white" />,
// //       title: "Round Trip Service",
// //       description:
// //         "Flexible round trip bookings ideal for day trips and family travel.",
// //       features: [
// //         "Flexible timing",
// //         "Multiple stops allowed",
// //         "Driver waiting included",
// //         "Best value pricing",
// //       ],
// //       gradient: "from-amber-600 to-orange-600",
// //       image:
// //         "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070",
// //     },
// //   ];

// //   const stats = [
// //     { value: "4.8/5", label: "Service Rating", icon: <Star className="size-6 text-emerald-400" /> },
// //     { value: "50K+", label: "Rides Completed", icon: <TrendingUp className="size-6 text-pink-400" /> },
// //     { value: "98%", label: "Customer Satisfaction", icon: <Heart className="size-6 text-blue-400" /> },
// //     { value: "24/7", label: "Support Available", icon: <Clock className="size-6 text-amber-400" /> },
// //   ];

// //   const availableCars = [
// //     {
// //       name: "SUV",
// //       type: "Premium SUV",
// //       capacity: "6-7 Passengers",
// //       features: ["Spacious", "AC", "Luggage Space", "GPS"],
// //       image: suvImage,
// //       gradient: "from-blue-600 to-indigo-600",
// //     },
// //     {
// //       name: "Sedan",
// //       type: "Luxury Sedan",
// //       capacity: "4-5 Passengers",
// //       features: ["Premium Interior", "AC", "Music System"],
// //       image: sedanImage,
// //       gradient: "from-emerald-600 to-teal-600",
// //     },
// //     {
// //       name: "Tempo",
// //       type: "Traveler Tempo",
// //       capacity: "12-14 Passengers",
// //       features: ["Large Group", "Extra Luggage", "AC"],
// //       image: tempoImage,
// //       gradient: "from-amber-600 to-orange-600",
// //     },
// //     {
// //       name: "Ertiga",
// //       type: "Family MPV",
// //       capacity: "6-7 Passengers",
// //       features: ["Family Friendly", "Fuel Efficient", "Spacious"],
// //       image: ertigaImage,
// //       gradient: "from-purple-600 to-violet-600",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30">
// //       {/* HERO */}
// //       <section className="relative min-h-[70vh]">
// //         <img
// //           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
// //           alt="Services"
// //           loading="lazy"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/60"></div>

// //         <div className="relative z-10 flex items-center min-h-[70vh] text-center px-4">
// //           <div className="max-w-4xl mx-auto space-y-6">
// //             <h1 className="text-5xl md:text-6xl font-bold text-white">
// //               Our <span className="text-emerald-400">Services</span>
// //             </h1>
// //             <p className="text-gray-300 text-lg">
// //               Premium cab services designed for comfort, safety and reliability.
// //             </p>

// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
// //               {stats.map((s, i) => (
// //                 <div
// //                   key={i}
// //                   className="bg-white/10 border border-white/20 rounded-xl p-4"
// //                 >
// //                   <div className="flex justify-center mb-2">{s.icon}</div>
// //                   <div className="text-white font-bold">{s.value}</div>
// //                   <div className="text-sm text-gray-300">{s.label}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* AVAILABLE CARS */}
// //     {/* AVAILABLE CARS */}
// // <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
// //   <div className="max-w-7xl mx-auto px-4">
    
// //     {/* Section Heading */}
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6 }}
// //       viewport={{ once: true }}
// //       className="text-center max-w-3xl mx-auto mb-14"
// //     >
// //       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
// //         Choose Your{" "}
// //         <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
// //           Ride
// //         </span>
// //       </h2>
// //       <p className="mt-4 text-gray-600 text-base sm:text-lg">
// //         Comfortable, safe, and premium vehicles tailored for every journey
// //       </p>
// //     </motion.div>

// //     {/* Cards Grid */}
// //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //       {availableCars.map((car, index) => (
// //         <motion.div
// //           key={index}
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: index * 0.1 }}
// //           viewport={{ once: true }}
// //           whileHover={{ y: -8 }}
// //           className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
// //         >
// //           {/* Image */}
// //           <div className="relative h-44 sm:h-48 overflow-hidden">
// //             <img
// //               src={car.image}
// //               alt={car.name}
// //               loading="lazy"
// //               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

// //             {/* Badge */}
// //             <div
// //               className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${car.gradient}`}
// //             >
// //               {car.type}
// //             </div>
// //           </div>

// //           {/* Content */}
// //           <div className="p-5">
// //             <div className="flex items-center justify-between mb-3">
// //               <h3 className="text-xl font-bold text-gray-900">
// //                 {car.name}
// //               </h3>
// //               <span className="text-sm text-gray-500">
// //                 {car.capacity}
// //               </span>
// //             </div>

// //             {/* Features */}
// //             <ul className="space-y-2 text-sm text-gray-700 mb-4">
// //               {car.features.map((feature, idx) => (
// //                 <li key={idx} className="flex items-center gap-2">
// //                   <span className="size-2 rounded-full bg-emerald-500"></span>
// //                   {feature}
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* CTA */}
// //             <div className="pt-2">
// //               <motion.a
// //                 href="/booking"
// //                 whileHover={{ scale: 1.05 }}
// //                 className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:shadow-lg transition"
// //               >
// //                 Book {car.name}
// //               </motion.a>
// //             </div>
// //           </div>

// //           {/* Glow Effect */}
// //           <div
// //             className={`absolute -inset-1 bg-gradient-to-br ${car.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
// //           />
// //         </motion.div>
// //       ))}
// //     </div>
// //   </div>
// // </section>


// //       {/* SERVICES */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 space-y-12">
// //           {services.map((service, i) => (
// //             <div
// //               key={i}
// //               className="relative rounded-3xl overflow-hidden shadow-xl"
// //             >
// //               <img
// //                 src={service.image}
// //                 alt={service.title}
// //                 loading="lazy"
// //                 className="absolute inset-0 w-full h-full object-cover"
// //               />
// //               <div className="absolute inset-0 bg-black/60"></div>

// //               <div className="relative z-10 p-10 text-white max-w-3xl">
// //                 <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
// //                 <p className="mb-4 text-gray-200">{service.description}</p>

// //                 <ul className="space-y-2 mb-6">
// //                   {service.features.map((f, idx) => (
// //                     <li key={idx} className="flex items-center gap-2">
// //                       <CheckCircle className="size-4 text-emerald-400" />
// //                       {f}
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <Link
// //                   to="/booking"
// //                   className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold"
// //                 >
// //                   Book Now
// //                   <ArrowRight className="size-4" />
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";
// import {
//   Car,
//   MapPin,
//   Repeat,
//   Clock,
//   DollarSign,
//   Shield,
//   CheckCircle,
//   Sparkles,
//   Star,
//   ArrowRight,
//   Award,
//   TrendingUp,
//   Heart,
//   Users,
//   Plane,
// } from "lucide-react";

// import suvImage from "../assets/avilableCar/suv.jfif";
// import sedanImage from "../assets/avilableCar/sedan.jfif";
// import tempoImage from "../assets/avilableCar/tempo.jfif";
// import ertigaImage from "../assets/avilableCar/Ertica.jfif";

// export default function Services() {
//   const statsControl = useAnimation();
//   const carsControl = useAnimation();
//   const servicesControl = useAnimation();
//   const statsRef = useRef(null);
//   const carsRef = useRef(null);
//   const svcRef = useRef(null);

//   const handleInView = (ref, control) => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           control.start("visible");
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//   };

//   useEffect(() => {
//     handleInView(statsRef, statsControl);
//     handleInView(carsRef, carsControl);
//     handleInView(svcRef, servicesControl);
//   }, []);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const cardStagger = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.12, duration: 0.6 },
//     }),
//   };

//   const services = [
//     {
//       icon: <Car className="size-12 text-white" />,
//       title: "One-Way Cab Service",
//       description:
//         "Travel one way without paying for the return journey. Perfect for relocations, business trips, or single journeys.",
//       features: [
//         "Pay only for one-way distance",
//         "No return fare charges",
//         "Flexible pickup locations",
//         "Available for all distances",
//       ],
//       gradient: "from-purple-600 to-violet-600",
//       image:
//         "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
//     },
//     {
//       icon: <MapPin className="size-12 text-white" />,
//       title: "Outstation Cab Service",
//       description:
//         "Comfortable and reliable outstation travel with professional drivers.",
//       features: [
//         "All major cities covered",
//         "Experienced drivers",
//         "Well-maintained vehicles",
//         "Transparent pricing",
//       ],
//       gradient: "from-emerald-600 to-teal-600",
//       image:
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
//     },
//     {
//       icon: <Plane className="size-12 text-white" />,
//       title: "Airport Pickup / Drop",
//       description:
//         "Timely airport transfers with flight tracking for punctual service.",
//       features: [
//         "Flight tracking",
//         "Meet & greet",
//         "Luggage assistance",
//         "24/7 availability",
//       ],
//       gradient: "from-blue-600 to-cyan-600",
//       image:
//         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
//     },
//     {
//       icon: <Repeat className="size-12 text-white" />,
//       title: "Round Trip Service",
//       description:
//         "Flexible round trip bookings ideal for day trips and family travel.",
//       features: [
//         "Flexible timing",
//         "Multiple stops allowed",
//         "Driver waiting included",
//         "Best value pricing",
//       ],
//       gradient: "from-amber-600 to-orange-600",
//       image:
//         "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070",
//     },
//   ];

//   const stats = [
//     {
//       value: "4.8/5",
//       label: "Service Rating",
//       icon: <Star className="size-6 text-emerald-400" />,
//     },
//     {
//       value: "50K+",
//       label: "Rides Completed",
//       icon: <TrendingUp className="size-6 text-pink-400" />,
//     },
//     {
//       value: "98%",
//       label: "Customer Satisfaction",
//       icon: <Heart className="size-6 text-blue-400" />,
//     },
//     {
//       value: "24/7",
//       label: "Support Available",
//       icon: <Clock className="size-6 text-amber-400" />,
//     },
//   ];

//   const availableCars = [
//     {
//       name: "SUV",
//       type: "Premium SUV",
//       capacity: "6-7 Passengers",
//       features: ["Spacious", "AC", "Luggage Space"],
//       image: suvImage,
//       gradient: "from-blue-600 to-indigo-600",
//     },
//     {
//       name: "Sedan",
//       type: "Luxury Sedan",
//       capacity: "4-5 Passengers",
//       features: ["Premium Interior", "AC", "Music System"],
//       image: sedanImage,
//       gradient: "from-emerald-600 to-teal-600",
//     },
//     {
//       name: "Tempo",
//       type: "Traveler Tempo",
//       capacity: "12-14 Passengers",
//       features: ["Large Group", "Extra Luggage", "AC"],
//       image: tempoImage,
//       gradient: "from-amber-600 to-orange-600",
//     },
//     {
//       name: "Ertiga",
//       type: "Family MPV",
//       capacity: "6-7 Passengers",
//       features: ["Family Friendly", "Fuel Efficient", "Spacious"],
//       image: ertigaImage,
//       gradient: "from-purple-600 to-violet-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30">
//       {/* HERO */}
//       <section className="relative min-h-[70vh]">
//         <img
//           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
//           alt="Services"
//           loading="lazy"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 flex items-center min-h-[70vh] text-center px-4">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-white">
//               Our <span className="text-emerald-400">Services</span>
//             </h1>
//             <p className="text-gray-300 text-lg">
//               Premium cab services designed for comfort, safety and reliability.
//             </p>

//             <motion.div
//               ref={statsRef}
//               animate={statsControl}
//               initial="hidden"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.15 } },
//               }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
//             >
//               {stats.map((s, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   className="bg-white/10 border border-white/20 rounded-xl p-4"
//                 >
//                   <div className="flex justify-center mb-2">{s.icon}</div>
//                   <div className="text-white font-bold">{s.value}</div>
//                   <div className="text-sm text-gray-300">{s.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* AVAILABLE CARS */}
//       <section
//         ref={carsRef}
//         className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             animate={carsControl}
//             className="text-center max-w-3xl mx-auto mb-14"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
//               Choose Your{" "}
//               <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Ride
//               </span>
//             </h2>
//             <p className="mt-4 text-gray-600 text-base sm:text-lg">
//               Comfortable, safe, and premium vehicles tailored for every journey
//             </p>
//           </motion.div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {availableCars.map((car, i) => (
//               <motion.div
//                 key={i}
//                 variants={cardStagger}
//                 custom={i}
//                 initial="hidden"
//                 animate={carsControl}
//                 className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 <div className="relative h-44 sm:h-48 overflow-hidden">
//                   <img
//                     src={car.image}
//                     alt={car.name}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

//                   <div
//                     className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${car.gradient}`}
//                   >
//                     {car.type}
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {car.name}
//                     </h3>
//                     <span className="text-sm text-gray-500">
//                       {car.capacity}
//                     </span>
//                   </div>
//                   <ul className="space-y-2 text-sm text-gray-700 mb-4">
//                     {car.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <span className="size-2 rounded-full bg-emerald-500"></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.a
//                     href="/booking"
//                     whileHover={{ scale: 1.05 }}
//                     className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:shadow-lg transition"
//                   >
//                     Book {car.name}
//                   </motion.a>
//                 </div>

//                 <div
//                   className={`absolute -inset-1 bg-gradient-to-br ${car.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES LIST */}
//       <section ref={svcRef} className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 space-y-12">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               variants={cardStagger}
//               custom={i}
//               initial="hidden"
//               animate={servicesControl}
//               className="relative rounded-3xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/60"></div>

//               <div className="relative z-10 p-10 text-white max-w-3xl">
//                 <div
//                   className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
//                 <p className="mb-4 text-gray-200">
//                   {service.description}
//                 </p>

//                 <ul className="space-y-2 mb-6">
//                   {service.features.map((f, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-2"
//                     >
//                       <CheckCircle className="size-4 text-emerald-400" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   to="/booking"
//                   className="inline-flex items-center gap-2 bg-black text-emerald-700 px-6 py-3 rounded-xl font-semibold"
//                 >
//                   Book Now <ArrowRight className="size-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



// import  { Link ,} from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Car,
//   MapPin,
//   Repeat,
//   Clock,
//   DollarSign,
//   Shield,
//   CheckCircle,
//   Sparkles,
//   Star,
//   ArrowRight,
//   Award,
//   TrendingUp,
//   Heart,
//   Users,
//   Plane,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// import suvImage from "../assets/avilableCar/suv.jfif";
// import sedanImage from "../assets/avilableCar/sedan.jfif";
// import tempoImage from "../assets/avilableCar/tempo.jfif";
// import ertigaImage from "../assets/avilableCar/Ertica.jfif";

// export default function Services() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const services = [
//     {
//       icon: <Car className="size-12 text-white" />,
//       title: "One-Way Cab Service",
//       description:
//         "Travel one way without paying for the return journey. Perfect for relocations, business trips, or single journeys.",
//       features: [
//         "Pay only for one-way distance",
//         "No return fare charges",
//         "Flexible pickup locations",
//         "Available for all distances",
//       ],
//       gradient: "from-purple-600 to-violet-600",
//       image:
//         "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
//     },
//     {
//       icon: <MapPin className="size-12 text-white" />,
//       title: "Outstation Cab Service",
//       description:
//         "Comfortable and reliable outstation travel with professional drivers.",
//       features: [
//         "All major cities covered",
//         "Experienced drivers",
//         "Well-maintained vehicles",
//         "Transparent pricing",
//       ],
//       gradient: "from-emerald-600 to-teal-600",
//       image:
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
//     },
//     {
//       icon: <Plane className="size-12 text-white" />,
//       title: "Airport Pickup / Drop",
//       description:
//         "Timely airport transfers with flight tracking for punctual service.",
//       features: [
//         "Flight tracking",
//         "Meet & greet",
//         "Luggage assistance",
//         "24/7 availability",
//       ],
//       gradient: "from-blue-600 to-cyan-600",
//       image:
//         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
//     },
//     {
//       icon: <Repeat className="size-12 text-white" />,
//       title: "Round Trip Service",
//       description:
//         "Flexible round trip bookings ideal for day trips and family travel.",
//       features: [
//         "Flexible timing",
//         "Multiple stops allowed",
//         "Driver waiting included",
//         "Best value pricing",
//       ],
//       gradient: "from-amber-600 to-orange-600",
//       image:
//         "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070",
//     },
//   ];

//   const stats = [
//     { value: "4.8/5", label: "Service Rating", icon: <Star className="size-6 text-emerald-400" /> },
//     { value: "50K+", label: "Rides Completed", icon: <TrendingUp className="size-6 text-pink-400" /> },
//     { value: "98%", label: "Customer Satisfaction", icon: <Heart className="size-6 text-blue-400" /> },
//     { value: "24/7", label: "Support Available", icon: <Clock className="size-6 text-amber-400" /> },
//   ];

//   const availableCars = [
//     {
//       name: "SUV",
//       type: "Premium SUV",
//       capacity: "6-7 Passengers",
//       features: ["Spacious", "AC", "Luggage Space", "GPS"],
//       image: suvImage,
//       gradient: "from-blue-600 to-indigo-600",
//     },
//     {
//       name: "Sedan",
//       type: "Luxury Sedan",
//       capacity: "4-5 Passengers",
//       features: ["Premium Interior", "AC", "Music System"],
//       image: sedanImage,
//       gradient: "from-emerald-600 to-teal-600",
//     },
//     {
//       name: "Tempo",
//       type: "Traveler Tempo",
//       capacity: "12-14 Passengers",
//       features: ["Large Group", "Extra Luggage", "AC"],
//       image: tempoImage,
//       gradient: "from-amber-600 to-orange-600",
//     },
//     {
//       name: "Ertiga",
//       type: "Family MPV",
//       capacity: "6-7 Passengers",
//       features: ["Family Friendly", "Fuel Efficient", "Spacious"],
//       image: ertigaImage,
//       gradient: "from-purple-600 to-violet-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30">
//       {/* HERO */}
//       <section className="relative min-h-[70vh]">
//         <img
//           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
//           alt="Services"
//           loading="lazy"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 flex items-center min-h-[70vh] text-center px-4">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-white">
//               Our <span className="text-emerald-400">Services</span>
//             </h1>
//             <p className="text-gray-300 text-lg">
//               Premium cab services designed for comfort, safety and reliability.
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//               {stats.map((s, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/10 border border-white/20 rounded-xl p-4"
//                 >
//                   <div className="flex justify-center mb-2">{s.icon}</div>
//                   <div className="text-white font-bold">{s.value}</div>
//                   <div className="text-sm text-gray-300">{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AVAILABLE CARS */}
//     {/* AVAILABLE CARS */}
// <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
//   <div className="max-w-7xl mx-auto px-4">
    
//     {/* Section Heading */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-center max-w-3xl mx-auto mb-14"
//     >
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
//         Choose Your{" "}
//         <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//           Ride
//         </span>
//       </h2>
//       <p className="mt-4 text-gray-600 text-base sm:text-lg">
//         Comfortable, safe, and premium vehicles tailored for every journey
//       </p>
//     </motion.div>

//     {/* Cards Grid */}
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//       {availableCars.map((car, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -8 }}
//           className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
//         >
//           {/* Image */}
//           <div className="relative h-44 sm:h-48 overflow-hidden">
//             <img
//               src={car.image}
//               alt={car.name}
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

//             {/* Badge */}
//             <div
//               className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${car.gradient}`}
//             >
//               {car.type}
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-5">
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="text-xl font-bold text-gray-900">
//                 {car.name}
//               </h3>
//               <span className="text-sm text-gray-500">
//                 {car.capacity}
//               </span>
//             </div>

//             {/* Features */}
//             <ul className="space-y-2 text-sm text-gray-700 mb-4">
//               {car.features.map((feature, idx) => (
//                 <li key={idx} className="flex items-center gap-2">
//                   <span className="size-2 rounded-full bg-emerald-500"></span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <div className="pt-2">
//               <motion.a
//                 href="/booking"
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:shadow-lg transition"
//               >
//                 Book {car.name}
//               </motion.a>
//             </div>
//           </div>

//           {/* Glow Effect */}
//           <div
//             className={`absolute -inset-1 bg-gradient-to-br ${car.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
//           />
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>


//       {/* SERVICES */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 space-y-12">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="relative rounded-3xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/60"></div>

//               <div className="relative z-10 p-10 text-white max-w-3xl">
//                 <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
//                 <p className="mb-4 text-gray-200">{service.description}</p>

//                 <ul className="space-y-2 mb-6">
//                   {service.features.map((f, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <CheckCircle className="size-4 text-emerald-400" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   to="/booking"
//                   className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold"
//                 >
//                   Book Now
//                   <ArrowRight className="size-4" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Car,
  MapPin,
  Repeat,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Award,
  TrendingUp,
  Heart,
  Users,
  Plane,
} from "lucide-react";

import sedanImage from "../assets/avilableCar/sedan.jfif";
import busImg from "../assets/avilableCar/bus.jpg";
import tempoImage from "../assets/avilableCar/tempo.jfif";
import ertigaImage from "../assets/avilableCar/Ertica.jfif";
import innovaImg from "../assets/avilableCar/innova.jpg";
import kiaImg from "../assets/avilableCar/kiya.webp";

import  pic1 from "../assets/ServiceImg/oneWayCab.jfif"
import  pic2 from "../assets/ServiceImg/outStationCab.jfif"
import  pic3 from "../assets/ServiceImg/AirPortPickup.jfif"
import  pic4 from "../assets/ServiceImg/RoundTripService.jfif"

export default function Services() {
  const statsControl = useAnimation();
  const carsControl = useAnimation();
  const servicesControl = useAnimation();
  const statsRef = useRef(null);
  const carsRef = useRef(null);
  const svcRef = useRef(null);

  const handleInView = (ref, control) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          control.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  };

  useEffect(() => {
    handleInView(statsRef, statsControl);
    handleInView(carsRef, carsControl);
    handleInView(svcRef, servicesControl);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardStagger = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6 },
    }),
  };

  const services = [
    {
      icon: <Car className="size-12 text-white" />,
      title: "One-Way Cab Service",
      description:
        "Travel one way without paying for the return journey. Perfect for relocations, business trips, or single journeys.",
      features: [
        "Pay only for one-way distance",
        "No return fare charges",
        "Flexible pickup locations",
        "Available for all distances",
      ],
      gradient: "from-purple-600 to-violet-600",
      image:
      pic1,
    },
    {
      icon: <MapPin className="size-12 text-white" />,
      title: "Outstation Cab Service",
      description:
        "Comfortable and reliable outstation travel with professional drivers.",
      features: [
        "All major cities covered",
        "Experienced drivers",
        "Well-maintained vehicles",
        "Transparent pricing",
      ],
      gradient: "from-emerald-600 to-teal-600",
      image:
        pic2,
    },
    {
      icon: <Plane className="size-12 text-white" />,
      title: "Airport Pickup / Drop",
      description:
        "Timely airport transfers with flight tracking for punctual service.",
      features: [
        "Flight tracking",
        "Meet & greet",
        "Luggage assistance",
        "24/7 availability",
      ],
      gradient: "from-blue-600 to-cyan-600",
      image:
        pic3 ,
    },
    {
      icon: <Repeat className="size-12 text-white" />,
      title: "Round Trip Service",
      description:
        "Flexible round trip bookings ideal for day trips and family travel.",
      features: [
        "Flexible timing",
        "Multiple stops allowed",
        "Driver waiting included",
        "Best value pricing",
      ],
      gradient: "from-amber-600 to-orange-600",
      image:
        pic4,
    },
  ];

  const stats = [
    {
      value: "4.8/5",
      label: "Service Rating",
      icon: <Star className="size-6 text-emerald-400" />,
    },
    {
      value: "50K+",
      label: "Rides Completed",
      icon: <TrendingUp className="size-6 text-pink-400" />,
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      icon: <Heart className="size-6 text-blue-400" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="size-6 text-amber-400" />,
    },
  ];

  const availableCars = [
    {
      name: "Sedan",
      type: "Luxury Sedan",
      capacity: "4-5 Passengers",
      features: [
        "AC",
        "Music System",
        "Extra Luggage",
        "Spacious",
      ],
      image: sedanImage,
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      name: "Ertiga",
      type: "Family MPV",
      capacity: "6-7 Passengers",
      features: [
        "AC",
        "Music System",
        "Extra Luggage",
        "Spacious",
      ],
      image: ertigaImage,
      gradient: "from-purple-600 to-violet-600",
    },
    {
      name: "Innova Crysta",
      type: "Premium SUV",
      capacity: "6-7 Passengers",
      features: [
        "Spacious",
        "AC",
        "Luggage Space",
        "Music System",
      ],
      image:innovaImg,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      name: "Kia Carens",
      type: "Premium SUV",
      capacity: "6-7 Passengers",
      features: [
        "Spacious",
        "AC",
        "Luggage Space",
        "Music System",
      ],
      image:kiaImg,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      name: "Tempo",
      type: "Traveler Tempo",
      capacity: "12-14 Passengers",
      features: [
        "AC",
        "Music System",
        "Extra Luggage",
        "Spacious",
      ],
      image: tempoImage,
      gradient: "from-amber-600 to-orange-600",
    },
    {
      name: "Luxury Bus",
      type: "Family MPV",
      capacity: "30–36 Passengers",
      features: [
        "AC",
        "Music System",
        "Extra Luggage",
        "Spacious",
      ],
      image:busImg,
      gradient: "from-purple-600 to-violet-600",
    },
  ];
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30">
      {/* HERO */}
      <section className="relative min-h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
          alt="Services"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center min-h-[70vh] text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-emerald-400">Services</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Premium cab services designed for comfort, safety and reliability.
            </p>

            <motion.div
              ref={statsRef}
              animate={statsControl}
              initial="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {stats.map((s, i) => (
                <motion.div
                key={`${s.label}-${s.value}`}
                  variants={fadeInUp}
                  className="bg-white/10 border border-white/20 rounded-xl p-4"
                >
                  <div className="flex justify-center mb-2">{s.icon}</div>
                  <div className="text-white font-bold">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AVAILABLE CARS */}
      <section
        ref={carsRef}
        className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={carsControl}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Ride
              </span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Comfortable, safe, and premium vehicles tailored for every journey
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

            {availableCars.map((car, i) => (
              <motion.div
                key={i}
                variants={cardStagger}
                custom={i}
                initial="hidden"
                animate={carsControl}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${car.gradient}`}
                  >
                    {car.type}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {car.capacity}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/booking"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:shadow-lg transition"
                  >
                    Book 
                  </motion.a>
                </div>

                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${car.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section ref={svcRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardStagger}
              custom={i}
              initial="hidden"
              animate={servicesControl}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 p-10 text-white max-w-3xl">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4 text-gray-200">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="size-4 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-black text-emerald-700 px-6 py-3 rounded-xl font-semibold"
                >
                  Book Now <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

