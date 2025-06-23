import { useAuth } from "../../context/AuthContext.jsx";

export default function Home() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Welcome {user?.email} 👋</h1>
      <p className="mb-6">This is your Smart Digital ID dashboard.</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
