import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 p-4 h-screen w-48">
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard" className="text-blue-700 hover:underline">🏠 Dashboard</Link>
        <Link to="/register-nrc" className="text-blue-700 hover:underline">🪪 Register NRC</Link>
        <Link to="/upload" className="text-blue-700 hover:underline">📄 Upload Document</Link>
        <Link to="/voice" className="text-blue-700 hover:underline">🎤 Voice Input</Link>
        <Link to="/assistant" className="text-blue-700 hover:underline">🤖 Smart Assistant</Link>
        <Link to="/profile" className="text-blue-700 hover:underline">👤 Profile</Link>
      </nav>
    </div>
  );
}