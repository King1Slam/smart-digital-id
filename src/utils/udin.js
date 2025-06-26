export function generateUDIN(name, type) {
  const base = name.replace(/\s+/g, "").toUpperCase();
  const timestamp = Date.now().toString().slice(-6);
  return `${type}-${base}-${timestamp}`;
}

export function encryptUDIN(udin) {
  return btoa(udin); // Basic Base64 encoding as mock encryption
}

// src/utils/udin.js

export function decryptUDIN(encryptedUDIN) {
  try {
    const decoded = atob(encryptedUDIN);
    return decoded;
  } catch (err) {
    return "Invalid UDIN";
  }
}


export function validateUDIN(udin) {
  const pattern = /^UDIN-[A-Z]+-[A-Z0-9]{6,}$/;
  return pattern.test(udin);
}