
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BookingContainer from "../booking/BookingContainer";

// ---------------- IMAGE IMPORTS ----------------
import ahmedabadImg from "../../assets/images/ahmedabad.jpg";
import suratImg from "../../assets/images/surat.jpg";
import vadodaraImg from "../../assets/images/vadodara.jpg";
import rajkotImg from "../../assets/images/11a.jpg";
import gandhinagarImg from "../../assets/images/11b.jpg";
import jamnagarImg from "../../assets/images/bhavnag.jpg";
import bhavnagarImg from "../../assets/images/11c.jpg";
import junagadhImg from "../../assets/images/junagad.jpg";
import kutchImg from "../../assets/images/kutch.jpg";
import dwarkaImg from "../../assets/images/dwarka.jpg";

import indoreImg from "../../assets/images/m11.jpg";
import bhopalImg from "../../assets/images/m12.jpg";
import gwaliorImg from "../../assets/images/m13.jpg";
import jabalpurImg from "../../assets/images/m14.jpg";
import ujjainImg from "../../assets/images/m15.jpg";
import sagarImg from "../../assets/images/m16.jpg";
import rewaImg from "../../assets/images/m17.jpg";
import ratlamImg from "../../assets/images/m18.jpg";
import satnaImg from "../../assets/images/m19.jpg";
import chhindwaraImg from "../../assets/images/m1110.jpg";

import mumbaiImg from "../../assets/images/maharastra/mumbai.jpg";
import puneImg from "../../assets/images/maharastra/pune.jpg";
import nagpurImg from "../../assets/images/maharastra/nagpur.jpg";
import aurangabadImg from "../../assets/images/maharastra/caves.jpg";
import kolhapurImg from "../../assets/images/maharastra/kolhapur.jpg";
import sataraImg from "../../assets/images/maharastra/satara.jpg";
import nashikImg from "../../assets/images/maharastra/nashik.jpg";
import shirdiImg from "../../assets/images/maharastra/shirdi.jpg";
import pandharpurImg from "../../assets/images/maharastra/pandharpur.jpg";
import solapurImg from "../../assets/images/maharastra/solapur.jpeg";

import bengaluruImg from "../../assets/images/k1.jpg";
import mysoreImg from "../../assets/images/k2.jpg";
import mangaloreImg from "../../assets/images/k3.jpg";
import hubballiImg from "../../assets/images/k4.jpg";
import belgaumImg from "../../assets/images/k5.jpg";
import bellaryImg from "../../assets/images/k6.jpg";
import davanagereImg from "../../assets/images/k7.jpg";
import shimogaImg from "../../assets/images/k8.jpg";
import tumkurImg from "../../assets/images/k9.jpg";
import udupiImg from "../../assets/images/k10.jpg";

import hyderabadImg from "../../assets/images/t1.jpg";
import warangalImg from "../../assets/images/t2.jpg";
import nizamabadImg from "../../assets/images/t3.jpg";
import karimnagarImg from "../../assets/images/k4.jpg";
import khammamImg from "../../assets/images/k5.jpg";
import mahbubnagarImg from "../../assets/images/k6.jpg";
import adilabadImg from "../../assets/images/k7.jpg";
import medakImg from "../../assets/images/k8.jpg";
import siddipetImg from "../../assets/images/k9.jpg";
import nalgondaImg from "../../assets/images/k10.jpg";

import panajiImg from "../../assets/images/g1.jpg";
import vascoImg from "../../assets/images/g2.jpg";
import margaoImg from "../../assets/images/g3.jpg";
import mapusaImg from "../../assets/images/g4.jpg";
import pondaImg from "../../assets/images/g5.jpg";
import quepemImg from "../../assets/images/gao1.jpg";

// ---------------- DATA ----------------
const DATA = [
  {
    state: "Maharashtra",
    cities: [
      { name: "Mumbai", img: mumbaiImg },
      { name: "Pune", img: puneImg },
      { name: "Nagpur", img: nagpurImg },
      { name: "Sambhajinagar", img: aurangabadImg },
      { name: "Kolhapur", img: kolhapurImg },
      { name: "Satara", img: sataraImg },
      { name: "Nashik", img: nashikImg },
      { name: "Shirdi", img: shirdiImg },
      { name: "Pandharpur", img: pandharpurImg },
      { name: "Solapur", img: solapurImg },
    ],
  },
  {
    state: "Gujarat",
    cities: [
      { name: "Ahmedabad", img: ahmedabadImg },
      { name: "Surat", img: suratImg },
      { name: "Vadodara", img: vadodaraImg },
      { name: "Rajkot", img: rajkotImg },
      { name: "Gandhinagar", img: gandhinagarImg },
      { name: "Jamnagar", img: jamnagarImg },
      { name: "Bhavnagar", img: bhavnagarImg },
      { name: "Junagadh", img: junagadhImg },
      { name: "Kutch", img: kutchImg },
      { name: "Dwarka", img: dwarkaImg },
    ],
  },
  {
    state: "Madhya Pradesh",
    cities: [
      { name: "Indore", img: indoreImg },
      { name: "Bhopal", img: bhopalImg },
      { name: "Gwalior", img: gwaliorImg },
      { name: "Jabalpur", img: jabalpurImg },
      { name: "Ujjain", img: ujjainImg },
      { name: "Sagar", img: sagarImg },
      { name: "Rewa", img: rewaImg },
      { name: "Ratlam", img: ratlamImg },
      { name: "Satna", img: satnaImg },
      { name: "Chhindwara", img: chhindwaraImg },
    ],
  },
  {
    state: "Gujarat",
    cities: [
      { name: "Ahmedabad", img: ahmedabadImg },
      { name: "Surat", img: suratImg },
      { name: "Vadodara", img: vadodaraImg },
      { name: "Rajkot", img: rajkotImg },
      { name: "Gandhinagar", img: gandhinagarImg },
      { name: "Jamnagar", img: jamnagarImg },
      { name: "Bhavnagar", img: bhavnagarImg },
      { name: "Junagadh", img: junagadhImg },
      { name: "Kutch", img: kutchImg },
      { name: "Dwarka", img: dwarkaImg },
    ],
  },
  {
    state: "Karnataka",
    cities: [
      { name: "Bengaluru", img: bengaluruImg },
      { name: "Mysore", img: mysoreImg },
      { name: "Mangalore", img: mangaloreImg },
      { name: "Hubballi", img: hubballiImg },
      { name: "Belgaum", img: belgaumImg },
      { name: "Bellary", img: bellaryImg },
      { name: "Davanagere", img: davanagereImg },
      { name: "Shimoga", img: shimogaImg },
      { name: "Tumkur", img: tumkurImg },
      { name: "Udupi", img: udupiImg },
    ],
  },
  {
    state: "Telangana",
    cities: [
      { name: "Hyderabad", img: hyderabadImg },
      { name: "Warangal", img: warangalImg },
      { name: "Nizamabad", img: nizamabadImg },
      { name: "Karimnagar", img: karimnagarImg },
      { name: "Khammam", img: khammamImg },
      { name: "Mahbubnagar", img: mahbubnagarImg },
      { name: "Adilabad", img: adilabadImg },
      { name: "Medak", img: medakImg },
      { name: "Siddipet", img: siddipetImg },
      { name: "Nalgonda", img: nalgondaImg },
    ],
  },
  {
    state: "Goa",
    cities: [
      { name: "Panaji", img: panajiImg },
      { name: "Vasco da Gama", img: vascoImg },
      { name: "Margao", img: margaoImg },
      { name: "Mapusa", img: mapusaImg },
      { name: "Ponda", img: pondaImg },
      { name: "Quepem", img: quepemImg },
    ],
  },
];

// ---------------- ANIMATION VARIANT ----------------
const downToUp = {
  hidden: { opacity: 0, y: 60 }, // start from bottom
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function PackageDetails() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const openPopup = (city, state) => {
    setSelectedCity(city);
    setSelectedState(state);
    setShowPopup(true);
  };

  return (
    <div className="w-full px-6 py-5">
      {DATA.map((stateData, index) => (
  <div
    key={`${stateData.state}-${index}`}   // ✔ unique key
    className="bg-white rounded-xl shadow p-6 mb-12"
  >
    <h2 className="text-3xl font-bold text-center mb-8 underline">
      {stateData.state}
    </h2>

    {/* TOP ROW */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
      {stateData.cities.slice(0, 6).map((city, i) => (
        <motion.div
          key={`${city.name}-${i}`}   // also ensure uniqueness
          className="text-center"
          variants={downToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="w-28 h-28 mx-auto rounded-full border-orange-500 overflow-hidden shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105">
            <img
              src={city.img}
              alt={city.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 font-medium">{city.name}</p>
          <button
            onClick={() => openPopup(city.name, stateData.state)}
            className="mt-2 px-4 py-2 border border-orange-500 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white"
          >
            Book Now
          </button>
        </motion.div>
      ))}
    </div>

    {/* BOTTOM ROW */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-14">
      {stateData.cities.slice(6).map((city, i) => (
        <motion.div
          key={`${city.name}-${i}`}   // also unique
          className="text-center"
          variants={downToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="w-64 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105">
            <img
              src={city.img}
              alt={city.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-semibold">{city.name}</p>
          <button
            onClick={() => openPopup(city.name, stateData.state)}
            className="mt-2 px-4 py-2 border border-orange-500 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white"
          >
            Book Now
          </button>
        </motion.div>
      ))}
    </div>
  </div>
))}


      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 sm:px-6">
          {/* Modal Box */}
          <div
            className="
        relative bg-white w-full
        max-w-lg sm:max-w-3xl lg:max-w-5xl
        max-h-[90vh]
        rounded-2xl shadow-xl
        overflow-hidden
      "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="
          absolute top-3 right-3
          text-gray-500 hover:text-black
          text-xl font-bold
          z-10
        "
            >
              ✖
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 max-h-[90vh]">
              <BookingContainer defaultPickup={selectedCity} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
