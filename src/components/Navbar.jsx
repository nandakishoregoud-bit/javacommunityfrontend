import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        setUser(savedUser);

        const handleUserChange = () => {
            const updatedUser = JSON.parse(localStorage.getItem("user"));
            setUser(updatedUser);
        };

        window.addEventListener("userChanged", handleUserChange);
        return () => window.removeEventListener("userChanged", handleUserChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("userChanged"));
        setUser(null);
        navigate("/login");
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        alt="Java Logo"
                    />
                    <Link to="/">JavaConnect</Link>
                </div>

                {/* Hamburger Button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Links */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/questions" onClick={() => setMenuOpen(false)}>Questions</Link>
                    {user && <Link to="/my-questions" onClick={() => setMenuOpen(false)}>My Questions</Link>}
                    {user && <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>}
                    <Link to="/notes" onClick={() => setMenuOpen(false)}>Notes</Link>
                    {!user ? (
                        <>
                            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    )}

                </div>
            </div>
        </nav>
    );
}
