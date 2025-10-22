import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaJava } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const topics = [
        {
            name: "You should know",
            path: "java",
            icon: <FaJava />,
            subtopics: [
                { name: "Java History", path: "history" },
                { name: "Install Java", path: "installjava" },
            ],
        },
        {
            name: "Basic Codes",
            path: "java1",
            icon: <FaJava />,
            subtopics: [
                { name: "First Java Program", path: "firstjavaprogram" },
                { name: "What's main() and args", path: "mainmethodandargs" },
                { name: "Input/Output in Java", path: "inputoutput" },
            ],
        },
        {
            name: "Core Java",
            path: "core-java",
            icon: <FaJava />,
            subtopics: [
                { name: "Data Types", path: "datatypes" },
                { name: "Type Casting & Variables", path: "type-casting" },
                { name: "Operators", path: "operators" },
                { name: "Conditional Statements", path: "conditional-statements" },
                { name: "Looping Statements", path: "looping-statements" },
                { name: "Methods", path: "methods" },
                { name: "Exception Handling", path: "exception-handling" },
            ],
        },
        {
            name: "Arrays",
            path: "arrays",
            icon: <FaJava />,
            subtopics: [{ name: "Arrays in Java", path: "arraysinjava" }],
        },
        {
            name: "OOPs Concepts",
            path: "oops",
            icon: <FaJava />,
            subtopics: [
                { name: "Class & Object", path: "classes-objects" },
                { name: "Inheritance", path: "inheritance" },
                { name: "Encapsulation", path: "encapsulation" },
                { name: "Polymorphism", path: "polymorphism" },
            ],
        },
        {
            name: "Collections Framework",
            path: "collections",
            icon: <FaJava />,
            subtopics: [
                { name: "List", path: "list" },
                { name: "Set", path: "set" },
                { name: "Map", path: "map" },
                { name: "Queue", path: "queue" },
                { name: "Stack", path: "stack" },
            ],
        },
        {
            name: "Streams API",
            path: "streams",
            icon: <FaJava />,
            subtopics: [
                { name: "Stream Basics", path: "stream-basics" },
                { name: "Filter", path: "stream-filter" },
                { name: "Map", path: "stream-map" },
            ],
        },
    ];

    const [openTopics, setOpenTopics] = useState({});
    const toggleTopic = (path) =>
        setOpenTopics((prev) => ({ ...prev, [path]: !prev[path] }));

    return (
        <nav className={`sidebar ${isOpen ? "active" : ""}`}>
            <h2 className="sidebar-title">Java Topics</h2>
            <ul className="topic-list">
                {topics.map((t) => (
                    <li key={t.path}>
                        <button
                            className="topic-btn"
                            onClick={() => toggleTopic(t.path)}
                        >
                            <span>
                                {t.icon} {t.name}
                            </span>
                            <span>{openTopics[t.path] ? "▲" : "▼"}</span>
                        </button>

                        <ul
                            className={`subtopics ${openTopics[t.path] ? "open" : "closed"
                                }`}
                        >
                            {t.subtopics.map((s) => (
                                <li key={s.path}>
                                    <NavLink
                                        to={`${t.path}/${s.path}`}
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        onClick={toggleSidebar}
                                    >
                                        {s.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}