import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching profile info from localStorage or API
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    if (storedProfile) setProfile(storedProfile);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Welcome back, {user?.fullName || "User"}!
      </h1>

      {profile && (
        <div className="mb-6 p-4 border rounded shadow-sm bg-white">
          <h2 className="text-lg font-semibold mb-2">Your UDIN:</h2>
          <p className="text-xl font-mono">{profile.udin}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-1">Uploaded Documents</h3>
          <p>5</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-1">Pending Applications</h3>
          <p>2</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-1">Notifications</h3>
          <p>3</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => navigate("/upload")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload Document
        </button>
        <button
          onClick={() => navigate("/assistant")}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Smart ID Assistant
        </button>
        <button
          onClick={() => navigate("/voice")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Voice Input
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Profile Settings
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

