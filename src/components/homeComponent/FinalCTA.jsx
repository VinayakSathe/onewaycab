import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FinalCTA = () => {
  const statsData = [
    { value: "24/7", label: "Support" },
    { value: "4.9★", label: "Rating" },
    { value: "30 min", label: "Pickup" },
    { value: "50K+", label: "Monthly Rides" },
  ];

  // Convert stats to numeric targets for animation
  const statsTargets = [
    {
      numericValue: 24,
      isTime: true,
      isDecimal: false,
      isRating: false,
      suffix: "/7",
    },
    {
      numericValue: 4.9,
      isTime: false,
      isDecimal: true,
      isRating: true,
      suffix: "★",
    },
    {
      numericValue: 30,
      isTime: true,
      isDecimal: false,
      isRating: false,
      suffix: "min",
    },
    {
      numericValue: 50000,
      isTime: false,
      isDecimal: false,
      isRating: false,
      suffix: "+",
    },
  ];

  const [animatedStats, setAnimatedStats] = useState([
    "0/7",
    "0★",
    "0min",
    "0+",
  ]);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (!hasAnimatedStats) {
        animateStats();
        setHasAnimatedStats(true);
      }
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, hasAnimatedStats]);

  const animateStats = () => {
    const duration = 1800; // 1.8 seconds
    const steps = 90; // More steps for smoother animation
    const stepDuration = duration / steps;

    statsTargets.forEach((target, idx) => {
      let current = 0;
      const increment = target.numericValue / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target.numericValue) {
          current = target.numericValue;
          clearInterval(timer);
        }

        setAnimatedStats((prev) => {
          const newStats = [...prev];
          const formattedValue = target.isDecimal
            ? current.toFixed(1)
            : target.isTime
            ? Math.floor(current)
            : Math.floor(current).toLocaleString();

          newStats[idx] = formattedValue + target.suffix;
          return newStats;
        });
      }, stepDuration);
    });
  };

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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const floatElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // CSS styles for flicker animation
  const flickerStyles = `
    @keyframes flicker {
      0%, 100% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%);
      }
      12.5% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.25) 0%, rgba(234, 88, 12, 0.25) 100%);
      }
      25% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%);
      }
      37.5% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.35) 0%, rgba(234, 88, 12, 0.35) 100%);
      }
      50% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%);
      }
      62.5% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%);
      }
      75% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(234, 88, 12, 0.4) 100%);
      }
      87.5% { 
        background: linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(234, 88, 12, 0.15) 100%);
      }
    }
    
    .flicker-animation {
      animation: flicker 0.8s infinite;
    }
  `;

  return (
    <>
      <style>{flickerStyles}</style>
      <section className="py-20" ref={ref}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Flickering Orange Overlay */}
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isHovered ? "opacity-100 flicker-animation" : "opacity-0"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%)",
                mixBlendMode: "overlay",
                zIndex: 1,
              }}
            ></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 z-2">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-0 right-0 size-48 md:size-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-24 md:-translate-y-32 translate-x-24 md:translate-x-32 z-3"
              initial="hidden"
              animate={controls}
              variants={floatElementVariants}
              transition={{ delay: 0.3 }}
            ></motion.div>

            <motion.div
              className="absolute bottom-0 left-0 size-72 md:size-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full -translate-x-32 md:-translate-x-48 translate-y-32 md:translate-y-48 z-3"
              initial="hidden"
              animate={controls}
              variants={floatElementVariants}
              transition={{ delay: 0.5 }}
            ></motion.div>

            <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={titleVariants}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <Sparkles className="size-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    Limited Time Offer
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    next adventure
                  </span>
                  ?
                </h2>

                <p className="text-gray-300 text-base md:text-lg mb-8">
                  Join over 100,000 satisfied travelers who trust us for their
                  journeys. Download our app for exclusive deals and faster
                  bookings.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative z-20"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-orange-400/0"></span>
                    <span className="relative z-10">Book Premium Ride</span>
                    <ArrowRight className="size-4 md:size-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] relative z-20"
                  >
                    <Phone className="size-4 md:size-5 text-black" />
                    Call Now
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
              >
                {animatedStats.map((value, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 relative z-20"
                    variants={cardVariants}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {value}
                    </div>
                    <div className="text-gray-300 text-xs md:text-sm font-medium">
                      {statsData[idx].label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;

// import { Link } from "react-router-dom";
// import { Sparkles, ArrowRight, Phone } from "lucide-react";
// import { useEffect, useRef } from "react";

// const FinalCTA = () => {
//   const sectionRef = useRef(null);
//   const badgeRef = useRef(null);
//   const titleRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const buttonsRef = useRef(null);
//   const statsRef = useRef(null);
//   const floatElementsRef = useRef([]);
//   const patternRef = useRef(null);

//   const stats = [
//     { value: "24/7", label: "Support" },
//     { value: "4.9★", label: "Rating" },
//     { value: "4min", label: "Pickup" },
//     { value: "50K+", label: "Monthly Rides" },
//   ];

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.15,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     // Fade in observer
//     const fadeInObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in-visible");
//           fadeInObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Slide up observer
//     const slideUpObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("slide-up-visible");
//           slideUpObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Slide left observer
//     const slideLeftObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("slide-left-visible");
//           slideLeftObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Slide right observer
//     const slideRightObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("slide-right-visible");
//           slideRightObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Scale in observer
//     const scaleInObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("scale-in-visible");
//           scaleInObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Staggered stats observer
//     const statsObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const statElements = entry.target.querySelectorAll(".stat-card");
//           statElements.forEach((el, index) => {
//             setTimeout(() => {
//               el.classList.add("stat-visible");
//             }, index * 150); // Staggered animation
//           });
//           statsObserver.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Apply initial styles and observe
//     if (sectionRef.current) {
//       sectionRef.current.classList.add("opacity-0");
//       fadeInObserver.observe(sectionRef.current);
//     }

//     if (badgeRef.current) {
//       badgeRef.current.classList.add("opacity-0", "translate-y-6");
//       slideUpObserver.observe(badgeRef.current);
//     }

//     if (titleRef.current) {
//       titleRef.current.classList.add("opacity-0", "translate-x-8");
//       slideLeftObserver.observe(titleRef.current);
//     }

//     if (descriptionRef.current) {
//       descriptionRef.current.classList.add("opacity-0", "translate-y-8");
//       slideUpObserver.observe(descriptionRef.current);
//     }

//     if (buttonsRef.current) {
//       buttonsRef.current.classList.add("opacity-0", "translate-y-8");
//       slideUpObserver.observe(buttonsRef.current);
//     }

//     if (statsRef.current) {
//       statsObserver.observe(statsRef.current);
//     }

//     if (patternRef.current) {
//       patternRef.current.classList.add("opacity-0");
//       fadeInObserver.observe(patternRef.current);
//     }

//     // Observe float elements
//     floatElementsRef.current.forEach((el, index) => {
//       if (el) {
//         el.classList.add("opacity-0", "scale-0");
//         setTimeout(() => {
//           scaleInObserver.observe(el);
//         }, index * 300);
//       }
//     });

//     return () => {
//       fadeInObserver.disconnect();
//       slideUpObserver.disconnect();
//       slideLeftObserver.disconnect();
//       slideRightObserver.disconnect();
//       scaleInObserver.disconnect();
//       statsObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section className="py-20 overflow-hidden" ref={sectionRef}>
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-16">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5" ref={patternRef}>
//             <div
//               className="absolute inset-0 transition-all duration-1000 ease-out"
//               style={{
//                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
//                 backgroundSize: "40px 40px",
//               }}
//             ></div>
//           </div>

//           {/* Floating Elements */}
//           <div
//             ref={(el) => (floatElementsRef.current[0] = el)}
//             className="absolute top-0 right-0 size-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-32 translate-x-32 transition-all duration-1000 ease-out"
//           ></div>
//           <div
//             ref={(el) => (floatElementsRef.current[1] = el)}
//             className="absolute bottom-0 left-0 size-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full -translate-x-48 translate-y-48 transition-all duration-1000 ease-out"
//             style={{ transitionDelay: "300ms" }}
//           ></div>

//           <div className="relative grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div
//                 ref={badgeRef}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 transition-all duration-700 ease-out"
//               >
//                 <Sparkles className="size-5 text-white animate-spin-slow" />
//                 <span className="text-white font-semibold text-sm">
//                   Limited Time Offer
//                 </span>
//               </div>

//               <h2
//                 ref={titleRef}
//                 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ease-out"
//               >
//                 Ready for your{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 animate-gradient-flow">
//                   next adventure
//                 </span>
//                 ?
//               </h2>

//               <p
//                 ref={descriptionRef}
//                 className="text-gray-300 text-lg mb-8 transition-all duration-700 ease-out delay-100"
//               >
//                 Join over 100,000 satisfied travelers who trust us for their
//                 journeys. Download our app for exclusive deals and faster
//                 bookings.
//               </p>

//               <div
//                 ref={buttonsRef}
//                 className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-200"
//               >
//                 <Link
//                   to="/booking"
//                   className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-orange-400/0 animate-shimmer"></span>
//                   <span className="relative z-10">Book Premium Ride</span>
//                   <ArrowRight className="size-5 relative z-10 group-hover:translate-x-2 transition-transform" />
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <Phone className="size-5" />
//                   Call Now
//                 </Link>
//               </div>
//             </div>

//             <div ref={statsRef} className="grid grid-cols-2 gap-4">
//               {stats.map((stat, idx) => (
//                 <div
//                   key={idx}
//                   className="stat-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-8"
//                   style={{ transitionDelay: `${idx * 150}ms` }}
//                 >
//                   <div className="text-3xl font-bold text-white mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-300 text-sm font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FinalCTA;
