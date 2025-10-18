import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "./notes.css";

export default function NotesLayout() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <div>
            {/* Sidebar */}
            <Sidebar toggleSidebar={() => setSidebarVisible(false)} />

            
            {/* Main content */}
            <div className={`main-content ${sidebarVisible ? "mobile-overlay" : ""}`}>
                
                <Outlet />
            </div>
        </div>
    );
}
