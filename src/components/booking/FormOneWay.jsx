

// import { useState } from "react";

// export default function FormOneWay({ handleSubmit, formData, handleChange }) {
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const inputStyle = {
//     width: "100%",
//     padding: "12px 12px",
//     border: "1px solid #d1d5db",
//     borderRadius: "8px",
//     outline: "none",
//     fontSize: "14px",
//     height: "42px",
//   };

//   const handleFocus = (e) => {
//     e.target.style.border = "1px solid #2563eb";
//   };
//   const handleBlur = (e) => {
//     e.target.style.border = "1px solid #d1d5db";
//   };

//   const validate = () => {
//     const validationErrors = {};

//     if (!formData.pickup.trim()) validationErrors.pickup = "Pickup is required";
//     if (!formData.drop.trim()) validationErrors.drop = "Drop is required";
//     if (!formData.date) validationErrors.date = "Date is required";
//     if (!formData.carType) validationErrors.carType = "Select car type";
//     if (!formData.persons || isNaN(formData.persons) || +formData.persons <= 0)
//       validationErrors.persons = "Enter a valid number of persons";
//     if (!formData.name.trim()) validationErrors.name = "Name is required";
//     if (!formData.contact.trim())
//       validationErrors.contact = "Contact is required";
//     else if (!/^\d{10}$/.test(formData.contact.trim()))
//       validationErrors.contact = "Enter a valid 10-digit number";

//     return validationErrors;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     console.log("🟢 Submit clicked", formData);

//     if (isSubmitting) {
//       console.log("⏳ Already submitting…");
//       return;
//     }

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       console.log("❌ Validation failed:", validationErrors);
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       console.log("🚀 Calling parent handleSubmit with data...");
//       await handleSubmit(formData);
//       console.log("✅ Parent handleSubmit finished");
//     } catch (err) {
//       console.error("🚨 Submit error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="space-y-6 bg-white rounded-2xl p-6 shadow-sm">
//       <h3 className="text-xl font-bold text-gray-800 border-b pb-3">
//         🚕 One Way Trip
//       </h3>

//       {/* PICKUP / DROP */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label className="label">From *</label>
//           <input
//             name="pickup"
//             value={formData.pickup}
//             onChange={handleChange}
//             placeholder="Pickup Address / City"
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.pickup && (
//             <p className="text-red-500 text-sm mt-1">{errors.pickup}</p>
//           )}
//         </div>

//         <div>
//           <label className="label">To *</label>
//           <input
//             name="drop"
//             value={formData.drop}
//             onChange={handleChange}
//             placeholder="Destination Address / City"
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.drop && (
//             <p className="text-red-500 text-sm mt-1">{errors.drop}</p>
//           )}
//         </div>
//       </div>

//       {/* DATE / CARTYPE / PERSONS */}
//       <div className="grid md:grid-cols-3 gap-4">
//         <div>
//           <label className="label">Date *</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.date && (
//             <p className="text-red-500 text-sm mt-1">{errors.date}</p>
//           )}
//         </div>

//         <div>
//           <label className="label">Car Type *</label>
//           <select
//             name="carType"
//             value={formData.carType}
//             onChange={handleChange}
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           >
//             <option value="">- Select -</option>
//             <option>Sedan</option>
//             <option>SUV</option>
//             <option>Innova</option>
//           </select>
//           {errors.carType && (
//             <p className="text-red-500 text-sm mt-1">{errors.carType}</p>
//           )}
//         </div>

//         <div>
//           <label className="label">No. of Persons *</label>
//           <input
//             name="persons"
//             value={formData.persons}
//             onChange={handleChange}
//             placeholder="Count"
//             style={{ ...inputStyle }}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.persons && (
//             <p className="text-red-500 text-sm mt-1">{errors.persons}</p>
//           )}
//         </div>
//       </div>

//       {/* NAME / CONTACT */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label className="label">Name *</label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div>
//           <label className="label">Contact *</label>
//           <input
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             placeholder="Mobile No."
//             style={inputStyle}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           {errors.contact && (
//             <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
//           )}
//         </div>
//       </div>

//       <button
//         disabled={isSubmitting}
//         className={`w-full text-white py-3 rounded-xl font-semibold text-lg transition ${
//           isSubmitting
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg"
//         }`}
//       >
//         {isSubmitting ? "Submitting..." : "Submit One Way"}
//       </button>
//     </form>
//   );
// }




import { useState } from "react";
 
/* ===========================
   CITY DATA (5 STATES)
=========================== */
const CITY_DATA = {
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Kolhapur",
    "Solapur",
  ],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
  ],
  Goa: ["Panaji", "Margao", "Vasco", "Mapusa"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  MP: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
};
 
/* ===========================
   CITY DROPDOWN COMPONENT
=========================== */
function CityDropdown({ label, name, value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const [manualMode, setManualMode] = useState(false);
 
  const handleSelect = (city) => {
    if (city === "__OTHER__") {
      setManualMode(true);
      onChange({ target: { name, value: "" } });
    } else {
      setManualMode(false);
      onChange({ target: { name, value: city } });
      setOpen(false);
    }
  };
 
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">
        {label} *
      </label>
 
      {/* MANUAL INPUT */}
      {manualMode ? (
        <input
          type="text"
          placeholder="Type city name"
          value={value}
          onChange={(e) =>
            onChange({ target: { name, value: e.target.value } })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-[42px] focus:border-blue-500 focus:outline-none"
        />
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-[42px] cursor-pointer bg-white flex items-center"
        >
          {value || "Select City"}
        </div>
      )}
 
      {/* DROPDOWN */}
      {open && !manualMode && (
        <div className="absolute z-20 mt-1 w-full bg-white border rounded-lg shadow max-h-56 overflow-y-auto">
          {Object.entries(CITY_DATA).map(([state, cities]) => (
            <div key={state}>
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-50">
                {state}
              </p>
 
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => handleSelect(city)}
                  className="px-4 py-2 text-sm hover:bg-emerald-50 cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          ))}
 
          {/* OTHER OPTION */}
          <div
            onClick={() => handleSelect("__OTHER__")}
            className="px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 cursor-pointer border-t"
          >
            Other
          </div>
        </div>
      )}
 
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
 
/* ===========================
   MAIN FORM
=========================== */
export default function FormOneWay({ handleSubmit, formData, handleChange }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const inputStyle =
    "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none";
 
  const validate = () => {
    const validationErrors = {};
 
    if (!formData.pickup.trim()) validationErrors.pickup = "Pickup is required";
    if (!formData.drop.trim()) validationErrors.drop = "Drop is required";
    if (!formData.date) validationErrors.date = "Date is required";
    if (!formData.carType) validationErrors.carType = "Select car type";
 
    if (!formData.persons || isNaN(formData.persons) || +formData.persons <= 0)
      validationErrors.persons = "Enter a valid number of persons";
 
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      validationErrors.name = "Name can only contain letters";
    }
 
    if (!formData.contact.trim())
      validationErrors.contact = "Contact is required";
    else if (!/^\d{10}$/.test(formData.contact.trim()))
      validationErrors.contact = "Enter a valid 10-digit number";
 
    return validationErrors;
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
 
    const validationErrors = validate();
    setErrors(validationErrors);
 
    if (Object.keys(validationErrors).length > 0) return;
 
    try {
      setIsSubmitting(true);
      await handleSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
    >
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">
        🚕 One Way Trip
      </h3>
 
      {/* PICKUP / DROP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CityDropdown
          label="From"
          name="pickup"
          value={formData.pickup}
          onChange={handleChange}
          error={errors.pickup}
        />
 
        <CityDropdown
          label="To"
          name="drop"
          value={formData.drop}
          onChange={handleChange}
          error={errors.drop}
        />
      </div>
 
      {/* DATE / CAR TYPE / PERSONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={inputStyle}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>
 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Car Type *
          </label>
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">- Select -</option>
            <option>Sedan</option>
            <option>Ertiga</option>
            <option>Innova</option>
            <option>kiya carens</option>
            <option>Innova</option>
          </select>
          {errors.carType && (
            <p className="text-red-500 text-xs mt-1">{errors.carType}</p>
          )}
        </div>
 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            No. of Persons *
          </label>
          <input
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            placeholder="Count"
            className={inputStyle}
          />
          {errors.persons && (
            <p className="text-red-500 text-xs mt-1">{errors.persons}</p>
          )}
        </div>
      </div>
 
      {/* NAME / CONTACT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={inputStyle}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact *
          </label>
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Mobile No."
            className={inputStyle}
          />
          {errors.contact && (
            <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
          )}
        </div>
      </div>
 
      <button
        disabled={isSubmitting}
        className={`w-full text-white py-3 rounded-xl font-semibold text-lg transition ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit One Way"}
      </button>
    </form>
  );
}