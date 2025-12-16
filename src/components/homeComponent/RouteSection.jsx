// import { MapPin, Check } from "lucide-react";
// import ZigZagRoute from "../CarZigZagRoute";
// import { motion } from "framer-motion";

// const RouteSection = () => {
//   const features = [
//     "Real-time traffic optimization",
//     "Multiple stop scheduling",
//     "Fuel-efficient routes",
//     "ETA prediction accuracy 99%",
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT — SLIDE FROM LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
//                           bg-gradient-to-r from-blue-50 to-cyan-50
//                           border border-blue-100 mb-6">
//             <MapPin className="size-5 text-blue-600" />
//             <span className="text-sm font-semibold text-blue-700">
//               Smart Routing
//             </span>
//           </div>

//           <h2 className="text-4xl font-bold text-gray-900 mb-6">
//             Intelligent Route Planning
//           </h2>

//           <p className="text-gray-600 text-lg mb-8">
//             Watch our smart routing system in action as it optimizes travel from
//             Mumbai to Goa with multiple stops.
//           </p>

//           <ul className="space-y-4">
//             {features.map((item, idx) => (
//               <motion.li
//                 key={idx}
//                 className="flex items-center gap-3"
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.15 }}
//               >
//                 <div className="size-6 rounded-full bg-gradient-to-r
//                                 from-emerald-500 to-teal-500
//                                 flex items-center justify-center">
//                   <Check className="size-3 text-white" />
//                 </div>
//                 <span className="text-gray-700 font-medium">{item}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* RIGHT VISUAL — SLIDE FROM RIGHT */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br
//                           from-blue-500/5 to-cyan-500/5
//                           rounded-3xl blur-xl"></div>

//           <div className="relative bg-white/80 backdrop-blur-sm
//                           border border-gray-100 rounded-3xl
//                           p-8 shadow-xl hover:shadow-2xl
//                           transition-shadow duration-300">
//             <ZigZagRoute />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default RouteSection;

import { MapPin, Check } from "lucide-react";
import ZigZagRoute from "../CarZigZagRoute";
import { motion } from "framer-motion";

const RouteSection = () => {
  const features = [
    "Real-time traffic optimization",
    "Multiple stop scheduling",
    "Fuel-efficient routes",
    "ETA prediction accuracy 99%",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT — SLIDE FROM LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-gradient-to-r from-blue-50 to-cyan-50 
                          border border-blue-100 mb-6"
          >
            <MapPin className="size-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Smart Routing
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Intelligent Route Planning
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Watch our smart routing system in action as it optimizes travel from
            Mumbai to Goa with multiple stops.
          </p>

          <ul className="space-y-4">
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div
                  className="size-6 rounded-full bg-gradient-to-r 
                                from-emerald-500 to-teal-500 
                                flex items-center justify-center"
                >
                  <Check className="size-3 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT VISUAL — SLIDE FROM RIGHT */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br 
                          from-blue-500/5 to-cyan-500/5 
                          rounded-3xl blur-xl"
          ></div>

          <div
            className="relative bg-white/80 backdrop-blur-sm 
                          border border-gray-100 rounded-3xl 
                          p-8 shadow-xl hover:shadow-2xl 
                          transition-shadow duration-300"
          >
            <ZigZagRoute />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteSection;
