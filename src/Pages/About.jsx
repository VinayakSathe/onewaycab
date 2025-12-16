// import { Shield, Users, Award, Clock, CheckCircle, Heart } from "lucide-react";

// export default function About() {
//   const whyChooseUs = [
//     {
//       icon: <Users className="size-8 text-blue-600" />,
//       title: "Professional Drivers",
//       description:
//         "All our drivers are verified, trained, and experienced professionals.",
//     },
//     {
//       icon: <Award className="size-8 text-blue-600" />,
//       title: "Quality Service",
//       description:
//         "Committed to providing the highest quality cab service every time.",
//     },
//     {
//       icon: <Clock className="size-8 text-blue-600" />,
//       title: "Punctual & Reliable",
//       description: "We value your time and ensure timely pickups and drops.",
//     },
//     {
//       icon: <Heart className="size-8 text-blue-600" />,
//       title: "Customer Satisfaction",
//       description: "Your comfort and satisfaction are our top priorities.",
//     },
//   ];

//   const safetyFeatures = [
//     "GPS-enabled vehicles for real-time tracking",
//     "Verified and background-checked drivers",
//     "Regular vehicle maintenance and sanitization",
//     "24/7 customer support for emergencies",
//     "Insurance coverage for all rides",
//     "Emergency contact sharing feature",
//   ];

//   return (
//     <div>
//       {/* HERO */}
//       <section className="bg-gradient-to-br from-white via-[#f4f8ff] to-[#eaf3ff] text-slate-900 py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
//           <span className="badge bg-white border border-[#e5edff] text-[#0066FF] mx-auto">
//             Trusted rides since day one
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-2">About Us</h1>
//           <p className="text-xl text-slate-600">
//             Your trusted partner for safe and comfortable travel
//           </p>
//         </div>
//       </section>

//       {/* WHO WE ARE */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-2 items-center">
//             {/* TEXT */}
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                 Who We Are
//               </h2>

//               <p className="text-gray-600 text-lg mb-4">
//                 We are a leading cab service provider dedicated to making your
//                 travel experience smooth, safe, and comfortable. With years of
//                 industry experience, we have built a reputation for reliability
//                 and quality service.
//               </p>

//               <p className="text-gray-600 text-lg mb-4">
//                 Our mission is to provide affordable and convenient
//                 transportation solutions that meet the diverse needs of our
//                 customers — daily commutes, airport transfers, or outstation
//                 trips.
//               </p>

//               <p className="text-gray-600 text-lg">
//                 With a fleet of well-maintained vehicles and a team of
//                 professional drivers, we ensure every journey with us is a
//                 pleasant experience.
//               </p>
//             </div>

//             {/* STATS */}
//             <div className="bg-gradient-to-br from-[#eaf3ff] to-white p-8 rounded-2xl border border-[#e5edff] shadow-soft">
//               <div className="grid grid-cols-2 gap-6 text-center">
//                 <div>
//                   <div className="text-4xl font-bold text-[#0066FF] mb-1">
//                     10+
//                   </div>
//                   <p className="text-gray-600">Years Experience</p>
//                 </div>

//                 <div>
//                   <div className="text-4xl font-bold text-[#0066FF] mb-1">
//                     50K+
//                   </div>
//                   <p className="text-gray-600">Happy Customers</p>
//                 </div>

//                 <div>
//                   <div className="text-4xl font-bold text-[#0066FF] mb-1">
//                     200+
//                   </div>
//                   <p className="text-gray-600">Verified Drivers</p>
//                 </div>

//                 <div>
//                   <div className="text-4xl font-bold text-blue-600 mb-1">
//                     24/7
//                   </div>
//                   <p className="text-gray-600">Service Availability</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//             Why Choose Us?
//           </h2>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {whyChooseUs.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow-soft border border-[#e5edff] card-hover"
//               >
//                 <div className="mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SAFETY SECTION */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-2 items-center">
//             {/* LEFT BLOCK */}
//             <div className="order-2 lg:order-1">
//               <div className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white p-8 rounded-2xl shadow-lg">
//                 <Shield className="size-16 mb-6" />
//                 <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
//                 <p className="text-blue-100 text-lg">
//                   We are committed to providing the safest and most reliable cab
//                   service. Your safety is our top priority, and we take every
//                   measure to ensure secure transportation.
//                 </p>
//               </div>
//             </div>

//             {/* SAFETY LIST */}
//             <div className="order-1 lg:order-2">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//                 Safety & Comfort
//               </h2>

//               <p className="text-gray-600 text-lg mb-6">
//                 Your safety and comfort are at the heart of everything we do. We
//                 have implemented multiple measures to ensure worry-free travel:
//               </p>

//               <ul className="space-y-3">
//                 {safetyFeatures.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle className="size-6 text-green-500 mt-0.5" />
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import {
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  Heart,
  Sparkles,
  Star,
  ArrowRight,
  TrendingUp,
  MapPin,
  Car,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whyChooseUs = [
    {
      icon: <Users className="size-8 text-white" />,
      title: "Professional Drivers",
      description:
        "All our drivers are verified, trained, and experienced professionals.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="size-8 text-white" />,
      title: "Quality Service",
      description:
        "Committed to providing the highest quality cab service every time.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Clock className="size-8 text-white" />,
      title: "Punctual & Reliable",
      description: "We value your time and ensure timely pickups and drops.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Heart className="size-8 text-white" />,
      title: "Customer Satisfaction",
      description: "Your comfort and satisfaction are our top priorities.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const safetyFeatures = [
    "GPS-enabled vehicles for real-time tracking",
    "Verified and background-checked drivers",
    "Regular vehicle maintenance and sanitization",
    "24/7 customer support for emergencies",
    "Insurance coverage for all rides",
    "Emergency contact sharing feature",
  ];

  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <Award className="size-6 text-emerald-400" />,
    },
    {
      value: "50K+",
      label: "Happy Customers",
      icon: <Heart className="size-6 text-pink-400" />,
    },
    {
      value: "200+",
      label: "Verified Drivers",
      icon: <Users className="size-6 text-blue-400" />,
    },
    {
      value: "24/7",
      label: "Service Availability",
      icon: <Clock className="size-6 text-amber-400" />,
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
            alt="About Us Banner"
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
                  TRUSTED SINCE 2014
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your trusted partner for safe, comfortable, and premium travel
                experiences. Redefining urban mobility one ride at a time.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, idx) => (
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

   {/* WHO WE ARE SECTION */}
<motion.section
  className="py-20 bg-gradient-to-b from-white to-gray-50"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid gap-16 lg:grid-cols-2 items-center">

      {/* LEFT COLUMN - TEXT (FROM LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-gradient-to-r from-purple-50 to-pink-50 
                        border border-purple-100 mb-4">
          <Star className="size-5 text-purple-600" />
          <span className="text-sm font-semibold text-purple-700">
            OUR STORY
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Who{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            We Are
          </span>
        </h2>

        <p className="text-gray-600 text-lg">
          We are a leading cab service provider dedicated to making your
          travel experience smooth, safe, and comfortable.
        </p>

        <p className="text-gray-600 text-lg">
          Our mission is to provide affordable and convenient transportation
          solutions — daily commutes, airport transfers, or outstation trips.
        </p>

        <p className="text-gray-600 text-lg">
          With a fleet of well-maintained vehicles and professional drivers,
          we ensure every journey is a pleasant experience.
        </p>
      </motion.div>

      {/* RIGHT COLUMN - STATS (FROM RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative rounded-3xl p-8 bg-gradient-to-br 
                        from-white to-emerald-50 
                        border border-emerald-100 shadow-2xl">

          {/* Decorative elements */}
          <div className="absolute -top-3 -right-3 size-6 rounded-full 
                          bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
          <div className="absolute -bottom-3 -left-3 size-6 rounded-full 
                          bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse delay-500" />

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Our Impact
            </h3>
            <p className="text-gray-600">
              Making travel better every day
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: "0px 15px 30px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-white border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</motion.section>


      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 mb-4">
              <Award className="size-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience the{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Difference
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              We combine premium service with modern technology for your comfort
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 delay-${
                  index * 100
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & COMFORT SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl p-12 bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Safety List */}
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
                  <Shield className="size-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">
                    SAFETY FIRST
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Safety is Our{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Priority
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Your safety and comfort are at the heart of everything we do.
                  We have implemented multiple measures to ensure worry-free
                  travel.
                </p>

                <div className="space-y-4">
                  {safetyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle className="size-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Commitment Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl p-8 bg-gradient-to-br from-emerald-600 to-teal-600 shadow-xl">
                  {/* Content */}
                  <div className="text-white">
                    <Shield className="size-16 mb-6 text-emerald-200" />
                    <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                    <p className="text-emerald-100 text-lg mb-6">
                      We are committed to providing the safest and most reliable
                      cab service. Your safety is our top priority, and we take
                      every measure to ensure secure transportation.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          100%
                        </div>
                        <div className="text-sm text-emerald-200">
                          Verified Drivers
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          24/7
                        </div>
                        <div className="text-sm text-emerald-200">
                          Safety Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
                  <Sparkles className="size-5 text-white" />
                  <span className="text-sm font-bold text-white">
                    READY TO RIDE WITH US?
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Experience Premium Travel
                </h2>

                <p className="text-xl text-emerald-100 mb-8">
                  Join thousands of satisfied customers who trust us for their
                  daily commutes and special journeys. Book your first ride
                  today!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/booking"
                    className="group px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book Your Ride
                      <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  <a
                    href="/contact"
                    className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Shield className="size-5" />
                      Safety Info
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
