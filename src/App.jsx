// src/App.jsx
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Sidebar from "./components/Layout/Sidebar.jsx";

export default function App() {
  return (
    <AuthProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <AppRoutes />
        </div>
      </div>
    </AuthProvider>
  );
}

