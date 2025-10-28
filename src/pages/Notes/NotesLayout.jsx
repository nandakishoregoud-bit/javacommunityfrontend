import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./notes.css";

export default function NotesLayout({ topic }) {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div className="notes-layout">
            <header className="notes-header">
                <button
                    className="menu-toggle"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                >
                    ☰
                </button>
                <h1>{topic.replace("-", " ").toUpperCase()}</h1>
            </header>

            <Sidebar
                topic={topic}
                isOpen={sidebarVisible}
                toggleSidebar={() => setSidebarVisible(!sidebarVisible)}
            />

            {sidebarVisible && (
                <div
                    className="overlay"
                    onClick={() => setSidebarVisible(false)}
                />
            )}

            <main className={`main-content ${sidebarVisible ? "shifted" : ""}`}>
                <Outlet />
            </main>
        </div>
    );
}
