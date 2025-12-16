import { useState } from "react";
import { MapPin, Calendar, Clock, Car } from "lucide-react";

export default function BookingForm({ setShowModal }) {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbwtUTpn2A3BqwDuX143VHIHWkcLI8TGfnDyUi0AXL445EvtTUmuXVpMT4SevGRN2QM/exec";

  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    cabType: "",
  });

  const cabTypes = [
    "Sedan (4 Seater)",
    "SUV (7 Seater)",
    "Luxury Sedan",
    "Mini (4 Seater)",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToGoogleSheet = async () => {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendToGoogleSheet();
    setShowModal(true);

    setFormData({
      pickup: "",
      drop: "",
      date: "",
      time: "",
      cabType: "",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pickup */}
            <div>
              <label className="flex items-center font-semibold text-gray-700 mb-2">
                <MapPin className="size-5 text-blue-600 mr-2" />
                Pickup Location
              </label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                required
                placeholder="Enter pickup location"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Drop */}
            <div>
              <label className="flex items-center font-semibold text-gray-700 mb-2">
                <MapPin className="size-5 text-blue-600 mr-2" />
                Drop Location
              </label>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                required
                placeholder="Enter drop location"
                className="w-full px-4 py-3 rounded-lg border"
              />
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center font-semibold text-gray-700 mb-2">
                  <Calendar className="size-5 text-blue-600 mr-2" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>

              <div>
                <label className="flex items-center font-semibold text-gray-700 mb-2">
                  <Clock className="size-5 text-blue-600 mr-2" />
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>
            </div>

            {/* Cab Type */}
            <div>
              <label className="flex items-center font-semibold text-gray-700 mb-2">
                <Car className="size-5 text-blue-600 mr-2" />
                Cab Type
              </label>
              <select
                name="cabType"
                value={formData.cabType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border"
              >
                <option value="">Select cab type</option>
                {cabTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
