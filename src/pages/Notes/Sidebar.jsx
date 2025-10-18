import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaJava } from "react-icons/fa";

export default function Sidebar({ collapsed, toggleSidebar }) {
    const topics = [
        {
            name: "Core Java",
            path: "core-java",
            icon: <FaJava />,
            subtopics: [
                { name: "Data Types", path: "datatypes" },
                {
                    name: "Control Statements",
                    path: "control-statements",
                    subsubtopics: [
                        { name: "Conditional Statements", path: "conditional-statements" },
                        { name: "Looping Statements", path: "looping-statements" },
                    ],
                },
                { name: "Methods", path: "methods" },
                { name: "Exception Handling", path: "exception-handling" },
            ],
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
        <nav className={`sidebar${collapsed ? " collapsed" : ""}`}>
            <h2>Java Notes</h2>
            <ul>
                {topics.map((t) => (
                    <li key={t.path}>
                        <button
                            className="topic-btn"
                            onClick={() => toggleTopic(t.path)}
                            aria-expanded={!!openTopics[t.path]}
                        >
                            <span>{t.icon} {t.name}</span>
                            {!collapsed && (
                                <span>{openTopics[t.path] ? "▲" : "▼"}</span>
                            )}
                        </button>

                        <ul
                            className="subtopics"
                            style={{
                                maxHeight:
                                    openTopics[t.path] ? `${t.subtopics.length * 40 + 200}px` : "0px",
                            }}
                        >
                            {t.subtopics.map((s) => (
                                <li key={s.path}>
                                    {s.subsubtopics ? (
                                        <>
                                            <button
                                                className="subtopic-btn"
                                                onClick={() => toggleTopic(`${t.path}/${s.path}`)}
                                            >
                                                {s.name}
                                                <span>
                                                    {openTopics[`${t.path}/${s.path}`] ? "▲" : "▼"}
                                                </span>
                                            </button>
                                            <ul
                                                className="subsubtopics"
                                                style={{
                                                    maxHeight:
                                                        openTopics[`${t.path}/${s.path}`]
                                                            ? `${s.subsubtopics.length * 40}px`
                                                            : "0px",
                                                }}
                                            >
                                                {s.subsubtopics.map((ss) => (
                                                    <li key={ss.path}>
                                                        <NavLink
                                                            to={`${t.path}/${s.path}/${ss.path}`}
                                                            className={({ isActive }) =>
                                                                isActive ? "active" : ""
                                                            }
                                                            onClick={toggleSidebar}
                                                        >
                                                            {ss.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={`${t.path}/${s.path}`}
                                            className={({ isActive }) =>
                                                isActive ? "active" : ""
                                            }
                                            onClick={toggleSidebar}
                                        >
                                            {s.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
