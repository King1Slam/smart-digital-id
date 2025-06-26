// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("auth")) ||
      JSON.parse(sessionStorage.getItem("auth"));
    if (stored) {
      setUser(stored);
    }
  }, []);

  const login = (userData, remember) => {
    if (remember) {
      localStorage.setItem("auth", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("auth", JSON.stringify(userData));
    }
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    sessionStorage.removeItem("auth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
