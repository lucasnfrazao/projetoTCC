const DEV = window.location.hostname === "localhost";

export const API_BASE = DEV
  ? "http://3.80.100.133:4000"
  : "https://api.myapp.com";