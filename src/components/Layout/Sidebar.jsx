import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 p-4 h-screen w-48">
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard" className="text-blue-700 hover:underline">
          🏠 Dashboard
        </Link>
        <Link to="/assistant" className="text-blue-700 hover:underline">
          🤖 Smart Assistant
        </Link>
        <Link to="/sectors" className="text-blue-700 hover:underline">
          🏛️ Sector Viewer
        </Link>
      </nav>
    </div>
  );
}