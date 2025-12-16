
import {
  HeroSection,
  FeatureGrid,
  RouteSection,
  ServicesSection,
  TestimonialsSection,
  FinalCTA,
} from "../components/homeComponent";

import bannerImg1 from "../assets/BannerImg/bannerImg1.jfif";
import bannerImg2 from "../assets/BannerImg/bannerImg2.jfif";
import bannerImg3 from "../assets/BannerImg/bannerImg3.jfif";
import bannerImg4 from "../assets/BannerImg/bannerImg4.jfif";

export default function Home() {
  const bannerSlides = [
    {
      id: 1,
      title: "Experience Premium Travel",
      subtitle: "Luxury rides with professional service",
      image: bannerImg1,
      color: "from-emerald-400/90 to-teal-400/90",
    },
    {
      id: 2,
      title: "Seamless City Travel",
      subtitle: "Smart routing for efficient commutes",
      image: bannerImg2,
      color: "from-blue-400/90 to-cyan-400/90",
    },
    {
      id: 3,
      title: "Arrive in Style",
      subtitle: "Premium vehicles for every occasion",
      image: bannerImg3,
      color: "from-amber-400/90 to-orange-400/90",
    },
    {
      id: 4,
      title: "Your Journey, Our Priority",
      subtitle: "Comfort and reliability guaranteed",
      image: bannerImg4,
      color: "from-violet-400/90 to-purple-400/90",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-emerald-50/30">
      <HeroSection bannerSlides={bannerSlides} />
      <FeatureGrid />
      <RouteSection />
      <ServicesSection />
      <TestimonialsSection />
      <FinalCTA />

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

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes zoom-slow {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 5s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        .animate-zoom-slow {
          animation: zoom-slow 10s linear infinite alternate;
        }

        .animate-stat-card {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-feature-card {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-service-card {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-testimonial-card {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #059669);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #047857);
        }

        ::selection {
          background-color: rgba(16, 185, 129, 0.3);
          color: #064e3b;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}