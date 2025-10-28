import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import javalogo from "/javalogo.png";
import "./Navbar.css";

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
                    <img src={javalogo} alt="Java Logo" />
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

                    {/* Notes Dropdown */}
                    <div className="nav-item dropdown">
                        <span className="nav-link">Notes ▼</span>
                        <div className="dropdown-menu">
                            <Link to="/notes" className="dropdown-item">Basic Java</Link>
                            <Link to="/notes/jdbc" className="dropdown-item">JDBC</Link>
                        </div>
                    </div>

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
