import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const [form, setForm] = useState({ email: "", newPassword: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.newPassword) {
            setMessage("Please enter both email and new password.");
            return;
        }

        setLoading(true);
        try {
            const res = await api.put(`/api/auth/changepassword`, null, {
                params: {
                    email: form.email,
                    newPassword: form.newPassword,
                },
            });

            if (res.data.success) {
                setMessage("✅ Password changed successfully! Redirecting...");
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setMessage("❌ " + res.data.message);
            }
        } catch (err) {
            setMessage("Failed to change password. Check your email and try again.");
        } finally {
            setLoading(false);
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
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your registered email"
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={form.newPassword}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        background: "#16a34a",
                        color: "white",
                        padding: "10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {loading ? "Updating..." : "Change Password"}
                </button>
            </form>
            {message && (
                <p style={{ textAlign: "center", marginTop: "10px", color: "#374151" }}>
                    {message}
                </p>
            )}
        </div>
    );
}
