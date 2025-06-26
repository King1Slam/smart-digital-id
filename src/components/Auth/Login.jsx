// src/components/Auth/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registered = JSON.parse(localStorage.getItem("account-registration"));
    if (
      registered &&
      form.email === registered.email &&
      form.password === registered.password
    ) {
      const userData = {
        fullName: registered.fullName || "",
        email: registered.email,
      };

      login(userData, form.remember);
      alert("✅ Login successful");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Smart Digital ID Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/account-register" className="text-blue-600 hover:underline">
            Register Instead
          </Link>
        </div>
      </div>
    </div>
  );
}


