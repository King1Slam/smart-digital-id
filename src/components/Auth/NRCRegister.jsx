// src/components/Auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUDIN, encryptUDIN } from "../../utils/udin";
import Barcode from "react-barcode";

const genderOptions = ["Male", "Female", "Other"];
const tribeOptions = ["Bemba", "Tonga", "Chewa", "Lozi", "Lunda", "Other"];

export default function NRCRegister() {
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    tribe: "",
    village: "",
    villageChief: "",
    district: "",
    placeOfBirth: "",
    nextOfKin: "",
    email: ""
  });
  const [barcode, setBarcode] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawUDIN = generateUDIN(form.fullName, "NRC");
    const encryptedUDIN = encryptUDIN(rawUDIN);
    const profile = { ...form, udin: encryptedUDIN };

    localStorage.setItem("nrc-profile", JSON.stringify(profile));
    setBarcode(encryptedUDIN);
    alert("✅ NRC Registered Successfully with UDIN");
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">NRC Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.dob}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="" disabled>
            Select Gender
          </option>
          {genderOptions.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          name="tribe"
          value={form.tribe}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="" disabled>
            Select Tribe
          </option>
          {tribeOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input
          name="village"
          placeholder="Village"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.village}
          onChange={handleChange}
          required
        />

        <input
          name="villageChief"
          placeholder="Village Chief"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.villageChief}
          onChange={handleChange}
          required
        />

        <input
          name="district"
          placeholder="District"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.district}
          onChange={handleChange}
          required
        />

        <input
          name="placeOfBirth"
          placeholder="Place of Birth"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.placeOfBirth}
          onChange={handleChange}
          required
        />

        <input
          name="nextOfKin"
          placeholder="Next of Kin"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.nextOfKin}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={form.email}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
        >
          Register NRC
        </button>
      </form>

      {barcode && (
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Your UDIN Barcode:</h3>
          <Barcode value={barcode} format="CODE128" />
        </div>
      )}
    </div>
  );
}

