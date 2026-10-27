
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("mediaiq_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Let the browser/Axios set the multipart boundary for FormData.
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else if (config.data && typeof config.data === "object") {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;