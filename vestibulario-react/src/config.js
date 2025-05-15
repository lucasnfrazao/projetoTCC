const DEV = window.location.hostname === "localhost";

export const API_BASE = DEV
  ? "http://localhost:4000"
  : "http://3.80.100.133:4000";