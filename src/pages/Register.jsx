import { useState } from "react";
import api from "../utils/api";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setIsError(false);

        // 🔹 Basic client-side validation
        if (!form.name || !form.email || !form.password) {
            setMessage("All fields are required.");
            setIsError(true);
            return;
        }

        try {
            const res = await api.post("/api/auth/register", form);

            if (res.data.success) {
                setMessage(res.data.message || "Registered successfully!");
                setIsError(false);
                setForm({ name: "", email: "", password: "" });
            } else {
                setMessage(res.data.message || "Registration failed. Please try again.");
                setIsError(true);
            }
        } catch (err) {
            const backendMessage =
                err.response?.data?.message || "Something went wrong. Please try again.";
            setMessage(backendMessage);
            setIsError(true);
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
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px"
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px"
                    }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px"
                    }}
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
                        fontWeight: "bold"
                    }}
                >
                    Register
                </button>
            </form>

            {message && (
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "15px",
                        color: isError ? "red" : "green",
                        fontWeight: "bold"
                    }}
                >
                    {message}
                </p>
            )}
        </div>
    );
}
