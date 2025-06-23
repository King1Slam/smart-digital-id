import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login.jsx";
import Register from "../components/Auth/Register.jsx";
import Home from "../components/Dashboard/Home.jsx";
import SmartAssistant from "../components/Assistant/SmartAssistant.jsx";
import SectorViewer from "../components/Dashboard/SectorViewer.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../components/Layout/Sidebar.jsx";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={user ? <Layout><Home /></Layout> : <Navigate to="/login" />}
      />
      <Route
        path="/assistant"
        element={user ? <Layout><SmartAssistant /></Layout> : <Navigate to="/login" />}
      />
      <Route
        path="/sectors"
        element={user ? <Layout><SectorViewer /></Layout> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
