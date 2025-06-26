export function generateUDIN(name, type, timestamp = Date.now()) {
  const hash = btoa(name + type + timestamp).slice(0, 12);
  return `UDIN-${hash}`;
}