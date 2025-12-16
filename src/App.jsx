import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";

import Scrolletop from "./Pages/ScrollToTop";
import CallButton from "./components/CallButton";

// 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Scrolletop></Scrolletop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

       
             <Route path="/booking" element={<Booking></Booking>} />
          
            <Route path="/contact" element={<Contact />} />

          

  
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        <CallButton className="mb-5"/>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
