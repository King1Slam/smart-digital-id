import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Welcome {user?.email} 👋</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2">
        Logout
      </button>
    </div>
  );
}
