// import { useState } from "react";

// export default function FormAirport({ formData, handleChange, handleSubmit }) {
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const inputStyle =
//     "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-[42px] focus:border-blue-500 focus:outline-none";

//   const validate = () => {
//     const validationErrors = {};

//     if (!formData.trip) validationErrors.trip = "Select trip type";
//     if (!formData.pickup.trim()) validationErrors.pickup = "Pickup is required";
//     if (!formData.drop.trim()) validationErrors.drop = "Drop is required";
//     if (!formData.carType) validationErrors.carType = "Car type is required";

//     if (!formData.date) {
//       validationErrors.date = "Date is required";
//     } else {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       const selected = new Date(formData.date);
//       if (selected < today) {
//         validationErrors.date = "Date cannot be in the past";
//       }
//     }

//     if (!formData.name.trim()) {
//       validationErrors.name = "Name is required";
//     } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
//       validationErrors.name = "Name can only contain letters";
//     }

//     if (!formData.contact.trim())
//       validationErrors.contact = "Contact is required";
//     else if (!/^\d{10}$/.test(formData.contact.trim()))
//       validationErrors.contact = "Enter a valid 10-digit number";

//     return validationErrors;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     try {
//       setIsSubmitting(true);
//       await handleSubmit(formData);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmit}
//       className="space-y-6 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md"
//     >
//       <h3 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-3">
//         ✈️ Airport Transfer
//       </h3>

//       {/* ROW 1 */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Trip */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Trip *
//           </label>
//           <select
//             name="trip"
//             value={formData.trip}
//             onChange={handleChange}
//             className={inputStyle}
//           >
//             <option value="">- Select -</option>
//             <option value="Pickup">Pickup</option>
//             <option value="Drop">Drop</option>
//           </select>
//           {errors.trip && (
//             <p className="text-red-500 text-xs mt-1">{errors.trip}</p>
//           )}
//         </div>

//         {/* From */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             From *
//           </label>
//           <input
//             name="pickup"
//             value={formData.pickup}
//             onChange={handleChange}
//             placeholder="Pickup Address"
//             className={inputStyle}
//           />
//           {errors.pickup && (
//             <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>
//           )}
//         </div>

//         {/* To */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             To *
//           </label>
//           <input
//             name="drop"
//             value={formData.drop}
//             onChange={handleChange}
//             placeholder="Destination"
//             className={inputStyle}
//           />
//           {errors.drop && (
//             <p className="text-red-500 text-xs mt-1">{errors.drop}</p>
//           )}
//         </div>

//         {/* Car Type */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Car Type *
//           </label>
//           <select
//             name="carType"
//             value={formData.carType}
//             onChange={handleChange}
//             className={inputStyle}
//           >
//             <option value="">- Select -</option>
//             <option>Sedan</option>
//             <option>SUV</option>
//             <option>Innova</option>
//             <option>Luxury Sedan</option>
//           </select>
//           {errors.carType && (
//             <p className="text-red-500 text-xs mt-1">{errors.carType}</p>
//           )}
//         </div>
//       </div>

//       {/* ROW 2 */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Date */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Date *
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             min={new Date().toISOString().split("T")[0]}
//             onChange={handleChange}
//             className={inputStyle}
//           />
//           {errors.date && (
//             <p className="text-red-500 text-xs mt-1">{errors.date}</p>
//           )}
//         </div>

//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name *
//           </label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className={inputStyle}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//           )}
//         </div>

//         {/* Contact */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Contact No. *
//           </label>
//           <input
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             placeholder="Mobile No."
//             className={inputStyle}
//           />
//           {errors.contact && (
//             <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
//           )}
//         </div>
//       </div>

//       {/* SUBMIT */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`w-full text-white py-3 rounded-xl font-semibold text-base sm:text-lg transition ${
//           isSubmitting
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg"
//         }`}
//       >
//         {isSubmitting ? "Submitting..." : "Submit Airport"}
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
export default function FormAirport({ formData, handleChange, handleSubmit }) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const inputStyle =
    "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-[42px] focus:border-blue-500 focus:outline-none";
 
  const validate = () => {
    const validationErrors = {};
 
    if (!formData.trip) validationErrors.trip = "Select trip type";
    if (!formData.pickup.trim()) validationErrors.pickup = "Pickup is required";
    if (!formData.drop.trim()) validationErrors.drop = "Drop is required";
    if (!formData.carType) validationErrors.carType = "Car type is required";
 
    if (!formData.date) {
      validationErrors.date = "Date is required";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(formData.date);
      if (selected < today) {
        validationErrors.date = "Date cannot be in the past";
      }
    }
 
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
      className="space-y-6 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-3">
        ✈️ Airport Transfer
      </h3>
 
      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Trip */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Trip *
          </label>
          <select
            name="trip"
            value={formData.trip}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">- Select -</option>
            <option value="Pickup">Pickup</option>
            <option value="Drop">Drop</option>
          </select>
          {errors.trip && (
            <p className="text-red-500 text-xs mt-1">{errors.trip}</p>
          )}
        </div>
 
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
 
        {/* Car Type */}
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
      </div>
 
      {/* ROW 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>
 
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
            Contact No. *
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
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-white py-3 rounded-xl font-semibold text-base sm:text-lg transition ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-lg"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Airport"}
      </button>
    </form>
  );
}