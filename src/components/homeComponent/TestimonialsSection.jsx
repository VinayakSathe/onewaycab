// import { Star } from "lucide-react";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Shubham Patil",
//       role: "Business Traveler",
//       content: "The most reliable service I've used. Always on time!",
//       rating: 5,
//     },
//     {
//       name: "Vinayak Sathe",
//       role: "Frequent Commuter",
//       content: "Premium service at competitive prices. Highly recommend!",
//       rating: 5,
//     },
//     {
//       name: "Prajwal Mohithe",
//       role: "Tourist",
//       content: "Made exploring the city so much easier. Great experience!",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-amber-100 shadow-sm mb-6 animate-fade-up">
//             <Star className="size-5 text-amber-600 animate-spin-slow" />
//             <span className="text-sm font-semibold text-amber-700">
//               TESTIMONIALS
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
//             Loved by{" "}
//             <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-gradient-flow">
//               Thousands
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 animate-fade-in-delay">
//             See what our customers say about their experience
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="group rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 animate-testimonial-card"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="size-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg animate-pulse-subtle">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>

//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="size-5 text-amber-400 fill-amber-400 animate-pulse-subtle"
//                     style={{ animationDelay: `${i * 100}ms` }}
//                   />
//                 ))}
//               </div>

//               <p className="text-gray-700 italic relative">
//                 <span className="absolute -top-2 -left-2 text-3xl text-emerald-100">
//                   "
//                 </span>
//                 <span className="relative z-10">{testimonial.content}</span>
//                 <span className="absolute -bottom-2 -right-2 text-3xl text-emerald-100">
//                   "
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import { Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shubham Patil",
      role: "Business Traveler",
      content: "The most reliable service I've used. Always on time!",
      rating: 5,
    },
    {
      name: "Vinayak Sathe",
      role: "Frequent Commuter",
      content: "Premium service at competitive prices. Highly recommend!",
      rating: 5,
    },
    {
      name: "Prajwal Mohithe",
      role: "Tourist",
      content: "Made exploring the city so much easier. Great experience!",
      rating: 5,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-amber-100 shadow-sm mb-6">
            <Star className="size-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            See what our customers say about their experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          ref={ref}
          animate={controls}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic relative">
                <span className="absolute -top-2 -left-2 text-3xl text-emerald-100">
                  "
                </span>
                <span className="relative z-10">{testimonial.content}</span>
                <span className="absolute -bottom-2 -right-2 text-3xl text-emerald-100">
                  "
                </span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
