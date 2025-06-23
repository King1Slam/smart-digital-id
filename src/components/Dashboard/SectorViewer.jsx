import { useState } from "react";

const sectorData = {
  Defense: {
    idNumber: "D-123456",
    clearanceLevel: "Top Secret",
    lastUpdated: "2025-06-22",
  },
  Health: {
    healthId: "H-7891011",
    bloodType: "O+",
    allergies: "None",
  },
  Education: {
    studentId: "E-654321",
    institution: "DMI-St. Eugene University",
    course: "Computer Science",
  },
};

export default function SectorViewer() {
  const [selectedSector, setSelectedSector] = useState("Defense");
  const data = sectorData[selectedSector];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Sector Data Viewer</h2>
      <div className="mb-4 space-x-2">
        {Object.keys(sectorData).map((sector) => (
          <button
            key={sector}
            className={`px-4 py-2 rounded ${
              sector === selectedSector
                ? "bg-blue-600 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setSelectedSector(sector)}
          >
            {sector}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded">
        {Object.entries(data).map(([key, value]) => (
          <p key={key} className="mb-2">
            <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}: </span>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
