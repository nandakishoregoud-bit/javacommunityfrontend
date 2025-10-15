import axios from "axios";

const api = axios.create({
    baseURL: "https://javaconnect-1.onrender.com/",
});

// Add interceptor to attach token except for /api/* endpoints
api.interceptors.request.use(
    (config) => {
        // If the request URL starts with /api/, skip adding token
        if (config.url && config.url.startsWith("/api/")) {
            return config;
        }

        if (config.url && config.url.startsWith("/questions/getall/questions")) {
            return config;
        }

        // Try to get token from localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user?.token;

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
