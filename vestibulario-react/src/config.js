const DEV = window.location.hostname === "localhost";

export const API_BASE = DEV
  ? "http://localhost:4000"
  : "https://api.vestibulario.com";