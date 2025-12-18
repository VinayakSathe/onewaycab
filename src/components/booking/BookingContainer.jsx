
import { useState, useEffect } from "react";
import FormOneWay from "./FormOneWay";
import FormRound from "./FormRound";
import FormAirport from "./FormAirport";
import SuccessModal from "./SuccessModal";

export default function BookingContainer({ defaultPickup = "" }) {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzkDXMqSDE9NqENluhsK0sDFtZmn1SoPTQ6gIThDW1TUROO86UuVLxrZKiuDJi1AUIA/exec";

  const [activeTab, setActiveTab] = useState("OneWay");
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    days: "",
    persons: "",
    trip: "",
    carType: "",
    name: "",
    contact: "",
  });

  // ✅ AUTO-FILL PICKUP FROM PACKAGE DETAILS
  useEffect(() => {
    if (defaultPickup) {
      setFormData((prev) => ({
        ...prev,
        pickup: defaultPickup,
      }));
    }
  }, [defaultPickup]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (data) => {
    // **NO e.preventDefault() here**
    console.log("FORM DATA IN PARENT:", data);

    const payload = {
      ...data,
      formType: activeTab,
    };

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // avoids CORS errors with Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("✅ Submitted to Google Sheet (no-cors mode)");

      setShowModal(true);

      // Reset form
      setFormData({
        pickup: "",
        drop: "",
        date: "",
        time: "",
        days: "",
        persons: "",
        trip: "",
        carType: "",
        name: "",
        contact: "",
      });
    } catch (err) {
      console.error("Parent submit error:", err);
      alert("Form submit failed");
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "OneWay":
        return (
          <FormOneWay
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      case "Round":
        return (
          <FormRound
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      case "Airport":
        return (
          <FormAirport
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100/80 shadow rounded-xl">
      <div className="flex justify-center gap-4 mb-6">
        {["OneWay", "Round", "Airport"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-semibold ${
              activeTab === tab ? "bg-teal-600 text-white" : "bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderForm()}

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
