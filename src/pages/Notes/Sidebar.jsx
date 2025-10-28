import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaJava } from "react-icons/fa";

export default function Sidebar({ topic,isOpen, toggleSidebar }) {
    const javaTopics = [
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
                { name: "Reduce", path: "stream-reduce" },
                { name: "Sorted", path: "stream-sorted" },
                { name: "Collect", path: "stream-collect" },
                { name: "Advanced Operations", path: "stream-advanced-operations" },
                { name: "Stream's Summary", path: "stream-summary" },
            ],
        },
    ];
    const jdbcTopics = [
        {
            name: "JDBC Essentials",
            path: "jdbc",
            icon: <FaJava />,
            subtopics: [
                { name: "JDBC Introduction", path: "intro" },
                { name: "Driver Types", path: "drivers" },
                { name: "Connection Setup", path: "connection" },
                { name: "Jdbc Sql Basics", path: "sql-basics" },
                { name: "Statements", path: "statement" },
                { name: "Execute Methods", path: "execute-methods" },
                { name: "Handling Results in JDBC", path: "results" },
                { name: "Transactions", path: "transactions" },
                { name: "Batch Processing", path: "batch" },
                { name: "ResultSet", path: "resultset" },
                { name: "DatabaseMetaData", path: "databasemetadata" },
                { name: "Scrollable & Updatable ResultSet", path: "scrollable-updatable-resultset" },
                { name: "Handling Large Data", path: "large-data" },
                { name: "Stored Procedures", path: "stored-procedures" },
            ],
        },
        {
            name: "Jdbc Real world Project",
            path: "jdbcproject",
            icon: <FaJava />,
            subtopics: [
                { name: "Project Overview(Planning)", path: "project-overview" },
                { name: "Project Requirements", path: "project-requriements" },
                { name: "Project Setup", path: "project-setup" },
                { name: "Model & DAO", path: "project-model-dao" },
                { name: "Project Menu Interface", path: "project-menu-interface" },
                { name: "Project Exception Handling", path: "project-exception-handling" },
                { name: "Packaging & Running", path: "project-packaging-running" },
                { name: "Project Summary", path: "project-summary" },
            ],
        },
    ];

    const advancedTopics = [
        {
            name: "Advanced Java",
            path: "advanced",
            icon: <FaJava />,
            subtopics: [
                { name: "Servlets", path: "servlets" },
                { name: "JSP", path: "jsp" },
                { name: "JSTL", path: "jstl" },
            ],
        },
    ];

    const frameworkTopics = [
        {
            name: "Spring Boot",
            path: "springboot",
            icon: <FaJava />,
            subtopics: [
                { name: "Spring Basics", path: "spring-basics" },
                { name: "REST APIs", path: "rest" },
                { name: "JPA", path: "jpa" },
            ],
        },
    ];

    let topicsToRender = [];
    if (topic === "jdbc") topicsToRender = jdbcTopics;
    else if (topic === "advanced-java") topicsToRender = advancedTopics;
    else if (topic === "frameworks") topicsToRender = frameworkTopics;
    else topicsToRender = javaTopics;

    const [openTopics, setOpenTopics] = useState({});
    const toggleTopic = (path) =>
        setOpenTopics((prev) => ({ ...prev, [path]: !prev[path] }));

    return (
        <nav className={`sidebar ${isOpen ? "active" : ""}`}>
            <h2 className="sidebar-title">Java Topics</h2>
            <ul className="topic-list">
                {topicsToRender.map((t) => (
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

                        <ul className={`subtopics ${openTopics[t.path] ? "open" : "closed"}`}>
                            {t.subtopics.map((s) => (
                                <li key={s.path}>
                                    <NavLink
                                        to={
                                            topic === "jdbc"
                                                ? `/notes/jdbc/${s.path}`
                                                : topic === "advanced-java"
                                                    ? `/notes/advanced-java/${s.path}`
                                                    : topic === "frameworks"
                                                        ? `/notes/frameworks/${s.path}`
                                                        : `/notes/${t.path}/${s.path}`
                                        }

                                        className={({ isActive }) => (isActive ? "active" : "")}
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