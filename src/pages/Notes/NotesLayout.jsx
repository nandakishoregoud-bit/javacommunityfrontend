import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./notes.css";

export default function NotesLayout() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div className="notes-layout">
            {/* Mobile header */}
            <header className="notes-header">
                <button
                    className="menu-toggle"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                >
                    ☰
                </button>
                <h1>Java Notes</h1>
            </header>

            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarVisible}
                toggleSidebar={() => setSidebarVisible(!sidebarVisible)}
            />

            {/* Overlay for mobile */}
            {sidebarVisible && (
                <div
                    className="overlay"
                    onClick={() => setSidebarVisible(false)}
                />
            )}

            {/* Main content */}
            <main className={`main-content ${sidebarVisible ? "shifted" : ""}`}>
                <Outlet />
            </main>
        </div>
    );
}
