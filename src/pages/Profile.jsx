import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({ userName: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (!savedUser) return;

        setLoading(true);
        api.get(`/user/profile/${savedUser.id}`)
            .then(res => {
                if (res.data.success) {
                    setUser(res.data.data);
                    setFormData({
                        userName: res.data.data.userName,
                        email: res.data.data.email
                    });
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch(() => setMessage("Failed to load profile"))
            .finally(() => setLoading(false));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        if (!user) return;
        setLoading(true);
        api.put(`/user/update/profile/${user.id}`, formData)
            .then(res => {
                if (res.data.success) {
                    setUser(res.data.data);
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    window.dispatchEvent(new Event("userChanged"));
                    setMessage("Profile updated successfully ✅");
                    setEditing(false);
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch(() => setMessage("Error updating profile ❌"))
            .finally(() => setLoading(false));
    };

    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
    }

    if (!user) {
        return <p style={{ textAlign: "center", marginTop: "2rem" }}>Please log in to view your profile.</p>;
    }

    return (
        <div style={{
            maxWidth: "500px",
            margin: "2rem auto",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#1e3a8a" }}>My Profile</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label>
                    <strong>Username:</strong>
                    {editing ? (
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                    ) : (
                        <p>{user.userName}</p>
                    )}
                </label>

                <label>
                    <strong>Email:</strong>
                    {editing ? (
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                    ) : (
                        <p>{user.email}</p>
                    )}
                </label>

                <label>
                    <strong>Status:</strong> <p>{user.blocked ? "🔴 Blocked" : "🟢 Active"}</p>
                </label>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem", gap: "1rem" }}>
                {!editing ? (
                    <button
                        onClick={() => setEditing(true)}
                        style={{
                            backgroundColor: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Edit Profile
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleUpdate}
                            style={{
                                backgroundColor: "#16a34a",
                                color: "white",
                                border: "none",
                                padding: "0.6rem 1.2rem",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            style={{
                                backgroundColor: "#ef4444",
                                color: "white",
                                border: "none",
                                padding: "0.6rem 1.2rem",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>

            {message && <p style={{ textAlign: "center", marginTop: "1rem", color: "#374151" }}>{message}</p>}
        </div>
    );
}
