const DEV = window.location.hostname === "localhost";

export const API_BASE = DEV
  ? "http://localhost:4000"
  : "http://localhost:4000";