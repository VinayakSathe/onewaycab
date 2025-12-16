import { useState } from "react";
import FormOneWay from "../components/booking/FormOneWay";
import FormRound from "../components/booking/FormRound";
import FormAirport from "../components/booking/ FormAirport";
 
export default function BookingContainer() {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbz-IsvTi5GZ5e32nyHXVgRBm0cutn1S7F1V16T0_wREChg1Er9gMCEs1FO3l7by4o_J/exec%22"
 
  const [activeTab, setActiveTab] = useState("OneWay");
 
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    days: "",
    airport: "",
    carType: "",
    name: "",
    contact: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  // ⭐ Send data to Google Sheet with formType
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const payload = {
      ...formData,
      formType: activeTab,
    };
 
    await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
 
    alert("Form submitted successfully!");
 
    // Reset form
    setFormData({
      pickup: "",
      drop: "",
      date: "",
      time: "",
      days: "",
      airport: "",
      carType: "",
      name: "",
      contact: "",
    });
  };
 
  // ⭐ Determines which form to display
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl">
      {/* ⭐ Tabs UI */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("OneWay")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "OneWay"
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          🚕 OneWay
        </button>
 
        <button
          onClick={() => setActiveTab("Round")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "Round"
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          🔄 Round
        </button>
 
        <button
          onClick={() => setActiveTab("Airport")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "Airport"
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          ✈ Airport
        </button>
      </div>
 
      {/* ⭐ Render selected form */}
      {renderForm()}
    </div>
  );
}
 