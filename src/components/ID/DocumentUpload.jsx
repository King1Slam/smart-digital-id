import { useState } from "react";

export default function DocumentUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);
    localStorage.setItem("document", uploaded.name);
    alert(`✅ Document '${uploaded.name}' uploaded & saved locally.`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📄 Upload Document</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded"
        accept=".pdf,.jpg,.jpeg,.png"
      />
    </div>
  );
}