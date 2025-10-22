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
                localStorage.setItem("user", JSON.stringify(res.data.data));
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
                margin: "60px auto",
                padding: "30px",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#1e293b" }}>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "12px",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "16px",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        background: "#2563eb",
                        color: "#fff",
                        padding: "10px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "600",
                        transition: "background 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
                    onMouseOut={(e) => (e.target.style.background = "#2563eb")}
                >
                    Login
                </button>
            </form>

            {message && (
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "12px",
                        color: message.includes("failed") ? "red" : "green",
                        fontWeight: "500",
                    }}
                >
                    {message}
                </p>
            )}

            <p style={{ textAlign: "center", marginTop: "18px" }}>
                <a href="/forgot-password" style={{ color: "#2563eb", textDecoration: "none" }}>
                    Forgot Password?
                </a>
            </p>

            {/* ✅ Add Privacy Notice */}
            <p
                style={{
                    fontSize: "0.85rem",
                    textAlign: "center",
                    color: "#64748b",
                    marginTop: "20px",
                    lineHeight: 1.5,
                }}
            >
                By logging in, you agree to our{" "}
                <a href="/privacy-policy" style={{ color: "#2563eb", textDecoration: "none" }}>
                    Privacy Policy
                </a>{" "}
                {`and `}
                <a href="/terms" style={{ color: "#2563eb", textDecoration: "none" }}>
                    Terms & Conditions
                </a>
                .
            </p>
        </div>
    );
}
