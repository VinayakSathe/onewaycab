// import { Clock, Shield, DollarSign, MapPin, Star } from "lucide-react";

// const FeatureGrid = () => {
//   const features = [
//     {
//       icon: <Clock className="size-8 text-white" />,
//       title: "24/7 Availability",
//       description: "Book anytime with live support and real-time tracking.",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <Shield className="size-8 text-white" />,
//       title: "Safe & Secure",
//       description: "Verified drivers, live location sharing, insured rides.",
//       gradient: "from-emerald-500 to-teal-500",
//     },
//     {
//       icon: <DollarSign className="size-8 text-white" />,
//       title: "Upfront Pricing",
//       description: "No surprises—see transparent fares before you book.",
//       gradient: "from-amber-500 to-orange-500",
//     },
//     {
//       icon: <MapPin className="size-8 text-white" />,
//       title: "Pan-city Coverage",
//       description: "Airport, outstation, and daily commutes in one place.",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-4 animate-fade-up">
//             <Star className="size-5 text-purple-600 animate-spin-slow" />
//             <span className="text-sm font-semibold text-purple-700">
//               Why We're Different
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
//             Experience{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-flow">
//               Premium
//             </span>{" "}
//             Service
//           </h2>
//           <p className="text-gray-600 text-lg animate-fade-in-delay">
//             We combine technology with hospitality to deliver exceptional travel
//             experiences
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 animate-feature-card"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-pulse-soft`}
//               ></div>

//               <div className="relative z-10">
//                 <div
//                   className={`inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                   {feature.description}
//                 </p>
//               </div>

//               <div
//                 className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureGrid;

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// ✅ IMPORT IMAGES
import gpsTracking from "../../assets/whyChooseus/whyChooseus/Tracking.png";
import onTime from "../../assets/whyChooseus/whyChooseus/time.png";
import cleanCabs from "../../assets/whyChooseus/whyChooseus/clean.jpg";
import reliableService from "../../assets/whyChooseus/whyChooseus/relible.png";
import safety from "../../assets/whyChooseus/whyChooseus/sefty.avif";
import vehicles from "../../assets/whyChooseus/whyChooseus/vehicle.png";

const features = [
  { image: gpsTracking, label: "GPS Tracking" },
  { image: onTime, label: "On Time Pick-up and Drop" },
  { image: cleanCabs, label: "Clean Cabs" },
  { image: reliableService, label: "Reliable Service" },
  { image: safety, label: "Safety" },
  { image: vehicles, label: "Wide Range of Vehicles" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const WhyChooseUs = () => {
  const ref = useRef(null);

  // useInView watches the component
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  // animation controllers
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-[#fff6f7] overflow-hidden">
      {/* HEADING */}
      <motion.div
        className="max-w-7xl mx-auto text-center px-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        ref={ref}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          At <span className="font-semibold text-emerald-600">One Way Cab</span>
          , we prioritize your comfort, convenience, and satisfaction. Here’s
          why we stand out:
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6"
        ref={ref}
        animate={controls}
        variants={containerVariants}
      >
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            variants={cardVariants}
          >
            <img
              src={feat.image}
              alt={feat.label}
              className="w-16 h-16 object-contain mb-3"
            />
            <span className="text-sm md:text-base font-medium text-gray-700">
              {feat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
