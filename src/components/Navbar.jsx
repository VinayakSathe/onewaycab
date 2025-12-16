
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/booking", label: "Booking" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-slate-200/80 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* MAIN NAV */}
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center size-10 rounded-2xl bg-white shadow-lg overflow-hidden">
              <img
                src={logo}
                alt="One Way Cab Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-xl text-slate-900 block">
                ONE WAY CAB
              </span>
              <span className="text-xs text-slate-500">Premium rides</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative pb-1 font-semibold tracking-tight transition ${
                  isActive(link.path)
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#f0ab43] to-[#f3d9b8]" />
                )}
              </Link>
            ))}

            <Link
              to="/booking"
              className="ml-2 px-4 py-2 pill text-sm font-semibold  text-black btn-primary hover:-translate-y-0.5"
            >
              Book a Ride
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-slate-200 shadow-lg animate-slideDown backdrop-blur">
          <div className="px-3 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg font-semibold transition ${
                  isActive(link.path)
                    ? "bg-blue-50 text-slate-900 border border-blue-100"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-2 px-4 py-3 pill font-semibold text-white btn-primary"
            >
              Book a Ride
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
