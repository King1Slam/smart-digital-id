// src/components/Auth/AccountRegister.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AccountRegister() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("account-registration"));
    if (existing?.email === form.email) {
      alert("❌ This email is already registered.");
      return;
    }

    const userData = {
      fullName: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      password: form.password
    };

    localStorage.setItem("account-registration", JSON.stringify(userData));
    alert("✅ Account created successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 border p-2 rounded"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login Instead
          </Link>
        </div>
      </div>
    </div>
  );
}

