// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Car } from "lucide-react";
// import logo from "../assets/logo.png";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-b from-white to-[#f0f5ff] border-t border-[#e5edff]">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* TOP GRID */}
//         <div className="grid gap-10 md:grid-cols-4">
//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Car className="size-8 text-[#0066FF]" />
//               <span className="font-bold text-xl text-slate-900">
//                 CabService
//               </span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-600">
//               Your trusted partner for safe and comfortable cab services.
//               Available 24/7 for all your travel needs.
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               {[
//                 { label: "Home", to: "/" },
//                 { label: "About Us", to: "/about" },
//                 { label: "Services", to: "/services" },
//                 { label: "Book Now", to: "/booking" },
//               ].map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.to}
//                     className="hover:text-[#0066FF] transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Services
//             </h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               <li>One Way Cab Service</li>
//               <li>Outstation Cab Service</li>
//               <li>Airport Transfers</li>
//               <li>Round Trip Service</li>
//             </ul>
//           </div>

//           {/* CONTACT INFO */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Contact Info
//             </h3>
//             <ul className="space-y-3 text-sm text-slate-600">
//               <li className="flex items-center gap-2">
//                 <Phone className="size-4 text-[#0066FF]" />
//                 <a href="tel:+919876543210" className="hover:text-[#0066FF]">
//                   +91 75077 50759
//                 </a>
//               </li>

//               <li className="flex items-center gap-2">
//                 <Mail className="size-4 text-[#0066FF]" />
//                 <a
//                   href="mailto:contact@onewaycanpune.in"
//                   className="hover:text-[#0066FF]"
//                 >
//                   contact@onewaycanpune.in
//                 </a>
//               </li>

//               <li className="flex items-start gap-2">
//                 <MapPin className="size-4 text-[#0066FF] mt-1" />
//                 <span>123 Main Street, City, State 400001</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="border-t border-[#e5edff] mt-10 pt-6 text-center text-sm text-slate-500">
//           <p>&copy; {currentYear} CabService. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin } from "lucide-react";
// import logo from "../assets/logo.png";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-b from-white to-[#f0f5ff] border-t border-[#e5edff]">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* TOP GRID */}
//         <div className="grid gap-10 md:grid-cols-4">
//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="size-10 rounded-2xl bg-white shadow-md overflow-hidden flex items-center justify-center">
//                 <img
//                   src={logo}
//                   alt="CabService Logo"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <span className="font-bold text-xl text-slate-900">
//                 CabService
//               </span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-600">
//               Your trusted partner for safe and comfortable cab services.
//               Available 24/7 for all your travel needs.
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               {[
//                 { label: "Home", to: "/" },
//                 { label: "About Us", to: "/about" },
//                 { label: "Services", to: "/services" },
//                 { label: "Book Now", to: "/booking" },
//               ].map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.to}
//                     className="hover:text-[#0066FF] transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Services
//             </h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               <li>One Way Cab Service</li>
//               <li>Outstation Cab Service</li>
//               <li>Airport Transfers</li>
//               <li>Round Trip Service</li>
//             </ul>
//           </div>

//           {/* CONTACT INFO */}
//           <div>
//             <h3 className="text-slate-900 font-semibold text-lg mb-4">
//               Contact Info
//             </h3>
//             <ul className="space-y-3 text-sm text-slate-600">
//               <li className="flex items-center gap-2">
//                 <Phone className="size-4 text-[#0066FF]" />
//                 <a href="tel:+919876543210" className="hover:text-[#0066FF]">
//                   +91 75077 50759
//                 </a>
//               </li>

//               <li className="flex items-center gap-2">
//                 <Mail className="size-4 text-[#0066FF]" />
//                 <a
//                   href="mailto:contact@onewaycanpune.in"
//                   className="hover:text-[#0066FF]"
//                 >
//                   contact@onewaycanpune.in
//                 </a>
//               </li>

//               <li className="flex items-start gap-2">
//                 <MapPin className="size-4 text-[#0066FF] mt-1" />
//                 <span>123 Main Street, City, State 400001</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="border-t border-[#e5edff] mt-10 pt-6 text-center text-sm text-slate-500">
//           <p>&copy; {currentYear} CabService. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f6f9ff] to-[#eef3ff] border-t border-[#e5edff]">
      {/* Glow */}
      <div className="absolute inset-x-0 -top-24 h-32 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-14">
        {/* TOP GRID */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          
          {/* BRAND (CLICKABLE LOGO ADDED HERE) */}
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-4"
            >
              <div className="size-12 rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 flex items-center justify-center">
                <img
                  src={logo}
                  alt="CabService Logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">
                One Way Cab
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              Your trusted partner for safe, reliable, and comfortable cab
              services. Available <span className="font-semibold">24/7</span>{" "}
              for every journey.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Book Now", to: "/booking" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-slate-600 hover:text-blue-600 hover:translate-x-1 inline-flex transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-emerald-600 transition">
                One Way Cab Service
              </li>
              <li className="hover:text-emerald-600 transition">
                Outstation Cab Service
              </li>
              <li className="hover:text-emerald-600 transition">
                Airport Transfers
              </li>
              <li className="hover:text-emerald-600 transition">
                Round Trip Service
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-slate-900 font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <span className="size-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Phone className="size-4 text-blue-600" />
                </span>
                <a
                  href="tel:+917507750759"
                  className="hover:text-blue-600 transition"
                >
                  +91 75077 50759
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="size-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Mail className="size-4 text-emerald-600" />
                </span>
                <a
                  href="mailto:onewaycabpune.site@gmail.com"
                  className="hover:text-emerald-600 transition"
                >
                  onewaycabpune.site@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="size-9 rounded-xl bg-cyan-50 flex items-center justify-center mt-0.5">
                  <MapPin className="size-4 text-cyan-600" />
                </span>
                <a
                  href="https://www.google.com/maps?q=Pune+Maharashtra+400001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition"
                >
                 Shop no. 05, Sankalp society, Narhegaon,Katraj, Pune, Maharashtra 411041
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#e5edff] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-slate-700">
              One Way Cab
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs">
            Designed for comfort • Driven by trust
          </p>
        </div>
      </div>
    </footer>
  );
}
