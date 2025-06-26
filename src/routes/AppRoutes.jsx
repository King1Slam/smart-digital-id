// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login.jsx";
import NRCRegister from "../components/Auth/NRCRegister.jsx";
import Home from "../components/Dashboard/Home.jsx";
import SmartIDBot from "../components/Assistant/SmartIDBot.jsx";
import DocumentUpload from "../components/ID/DocumentUpload.jsx";
import VoiceInput from "../components/Voice/VoiceInput.jsx";
import Profile from "../components/Dashboard/Profile.jsx";
import { useAuth } from "../hooks/useAuth";
import ForgotPassword from "../components/Auth/ForgotPassword.jsx";
import AccountRegister from "../components/Auth/AccountRegister.jsx";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register-nrc" element={<NRCRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/account-register" element={<AccountRegister />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={user ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/assistant"
        element={user ? <SmartIDBot /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/upload"
        element={user ? <DocumentUpload /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/voice"
        element={user ? <VoiceInput /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" replace />}
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
