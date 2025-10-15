import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("api/auth/login", form);
            if (res.data.success) {
                setMessage(res.data.message);
                // save user in localStorage
                localStorage.setItem("user", JSON.stringify(res.data.data));
                console.log("User logged in:", res.data.data);
                console.log("message:", res.data.message);
                window.dispatchEvent(new Event("userChanged"));
                navigate("/");
            } else {
                setMessage("Invalid credentials");
            }
        } catch (err) {
            setMessage("Login failed. Please check your credentials.");
        }
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        background: "#007bff",
                        color: "#fff",
                        padding: "10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
            {message && (
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "10px",
                        color: message.includes("failed") ? "red" : "green",
                    }}
                >
                    {message}
                </p>
            )}
            <p style={{ textAlign: "center", marginTop: "15px" }}>
                <a href="/forgot-password" style={{ color: "#2563eb", textDecoration: "none" }}>
                    Forgot Password?
                </a>
            </p>

        </div>
    );
}
