// src/components/Dashboard/Profile.jsx
import React from "react";
import QRCode from "react-qr-code";
import { decryptUDIN, validateUDIN } from "../../utils/udin";

export default function Profile() {
  const encryptedUDIN = localStorage.getItem("encryptedUDIN");
  let udin = "";

  if (encryptedUDIN) {
    udin = decryptUDIN(encryptedUDIN);
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      {udin && validateUDIN(udin) ? (
        <>
          <p>
            <strong>Unified Digital ID Number (UDIN):</strong> {udin}
          </p>
          <div className="mt-4">
            <QRCode value={udin} size={128} />
          </div>
        </>
      ) : (
        <p>No valid UDIN found.</p>
      )}
    </div>
  );
}
