// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import carImg from "../assets/car/car1.png";

// export default function CarZigZagRoute() {
//   const cities = [
//     "Gujarat",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Karnataka",
//     "Andhra Pradesh",
//     "Goa",
//   ];

//   const checkpoints = [0, 25, 50, 75, 100];
//   const angles = [0, 20, -20, 15, -10];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cities.length);
//     }, 2600);
//     return () => clearInterval(id);
//   }, []);

//   const roadPath = "M 40 40 Q 160 100, 120 170 T 200 260 T 320 190 T 460 260";

//   const points = [
//     { x: 40, y: 40 },
//     { x: 120, y: 170 },
//     { x: 200, y: 260 },
//     { x: 320, y: 190 },
//     { x: 460, y: 260 },
//   ];

//   return (
//     <div
//       className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl"
//       style={{ width: "620px", height: "340px" }}
//     >
//       {/* Background */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: [
//             "linear-gradient(120deg, #dbeafe, #ecfeff, #ecfdf5)",
//             "linear-gradient(120deg, #ede9fe, #cffafe, #dcfce7)",
//             "linear-gradient(120deg, #e0e7ff, #f0fdfa, #ecfeff)",
//           ],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #323131ff 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       />

//       {/* Content wrapper */}
//       <div className="relative z-10 w-full h-full bg-white/40 backdrop-blur-md rounded-3xl p-4">
//         {/* Road */}
//         <svg
//           width="600"
//           height="320"
//           viewBox="-20 -20 540 340"
//           className="absolute z-10"
//         >
//           <defs>
//             <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#60A5FA" />
//               <stop offset="100%" stopColor="#34D399" />
//             </linearGradient>
//           </defs>

//           <motion.path
//             d={roadPath}
//             stroke="url(#roadGradient)"
//             strokeWidth="8"
//             fill="none"
//             strokeLinecap="round"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1.8, ease: "easeInOut" }}
//           />

//           {/* Checkpoints */}
//           {points.map((p, i) => (
//             <motion.circle
//               key={i}
//               cx={p.x}
//               cy={p.y}
//               r={i === index ? 12 : 9}
//               fill={i === index ? "#34D399" : "#CBD5E1"}
//               stroke="white"
//               strokeWidth="3"
//               animate={{
//                 scale: i === index ? [1, 1.3, 1] : 1,
//                 opacity: i === index ? 1 : 0.6,
//               }}
//               transition={{ duration: 0.6 }}
//             />
//           ))}
//         </svg>

//         {/* Car moving using offsetPath */}
//         <motion.div
//           className="absolute z-20 pointer-events-none"
//           style={{
//             width: "52px",
//             height: "52px",
//             offsetPath: `path('${roadPath}')`,
//             WebkitOffsetPath: `path('${roadPath}')`,
//           }}
//           animate={{
//             offsetDistance: `${checkpoints[index]}%`,
//             WebkitOffsetDistance: `${checkpoints[index]}%`,
//             rotate: angles[index],
//             y: [0, -2, 0],
//           }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           <img
//             src={carImg}
//             alt="car"
//             className="w-full h-full drop-shadow-2xl"
//           />
//         </motion.div>

//         {/* City label */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md text-lg font-bold text-emerald-600 shadow-xl"
//             initial={{ opacity: 0, y: 10, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.9 }}
//             transition={{ duration: 0.4 }}
//           >
//             🚖 {cities[index]}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import carImg from "../assets/car/car1.png";

export default function CarZigZagRoute() {
  const cities = [
    "Gujarat",
    "Madhya Pradesh",
    "Maharashtra",
    "Karnataka",

    "Goa",
  ];

  const checkpoints = [0, 25, 50, 75, 100];
  const angles = [0, 20, -20, 15, -10];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % cities.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* SVG PATH (unchanged) */
  const roadPath = "M 40 40 Q 160 100, 120 170 T 200 260 T 320 190 T 460 260";

  const points = [
    { x: 40, y: 40 },
    { x: 120, y: 170 },
    { x: 200, y: 260 },
    { x: 320, y: 190 },
    { x: 460, y: 260 },
  ];

  return (
    <div className="relative w-full max-w-[620px] mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] sm:aspect-[18/10]">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(120deg, #dbeafe, #ecfeff, #ecfdf5)",
            "linear-gradient(120deg, #ede9fe, #cffafe, #dcfce7)",
            "linear-gradient(120deg, #e0e7ff, #f0fdfa, #ecfeff)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #323131ff 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full bg-white/40 backdrop-blur-md rounded-3xl p-3 sm:p-4">
        {/* Road */}
        <svg
          viewBox="-20 -20 540 340"
          className="absolute inset-0 w-full h-full z-10"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          <motion.path
            d={roadPath}
            stroke="url(#roadGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Checkpoints */}
          {points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === index ? 12 : 9}
              fill={i === index ? "#34D399" : "#CBD5E1"}
              stroke="white"
              strokeWidth="3"
              animate={{
                scale: i === index ? [1, 1.3, 1] : 1,
                opacity: i === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </svg>

        {/* Moving Car */}
        {/* <motion.div
          className="absolute z-20 pointer-events-none"
          style={{
            width: "44px",
            height: "44px",
            offsetPath: `path('${roadPath}')`,
            WebkitOffsetPath: `path('${roadPath}')`,
          }}
          animate={{
            offsetDistance: `${checkpoints[index]}%`,
            WebkitOffsetDistance: `${checkpoints[index]}%`,
            rotate: angles[index],
            y: [0, -2, 0],
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={carImg}
            alt="car"
            className="w-full h-full drop-shadow-2xl"
          />
        </motion.div> */}

        {/* City Label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-md text-sm sm:text-lg font-bold text-emerald-600 shadow-xl"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            🚖 {cities[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
