import React from "react";

export default function JdbcProjectOverview() {
    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>🚀 JDBC Mini Project — Student Management System</h1>

            <p>
                In this mini-project, we’ll build a simple <b>Student Management System</b> using <b>Java JDBC</b>.
                This project will help you understand how real-world applications interact with a database —
                from connecting to performing CRUD operations (Create, Read, Update, Delete).
            </p>

            <h2>🎯 Project Goal</h2>
            <p>
                The goal of this project is to design a small but functional database-driven application that allows
                users to manage student records. This mirrors how professional applications like Employee Management
                or Inventory Systems work behind the scenes.
            </p>

            <h2>🏢 Real-World Relevance</h2>
            <ul>
                <li>📊 Manage student data efficiently using SQL operations.</li>
                <li>🧠 Learn how Java applications communicate with relational databases.</li>
                <li>🛠️ Understand real-world project development flow.</li>
                <li>🧩 Strengthen backend development skills using JDBC.</li>
            </ul>

            <h2>🧾 Step 1: Business Understanding</h2>
            <p>
                Every project starts with understanding the problem we’re trying to solve.
                Suppose a training institute needs a simple system to store student information — name, age, course, and fee.
                Instead of manually entering details in Excel, they want a Java-based program that connects to a MySQL database
                and manages all operations smoothly.
            </p>

            <h2>📋 Step 2: Requirements Gathering</h2>
            <ul>
                <li>✅ Add a new student record</li>
                <li>✅ View all students</li>
                <li>✅ Update student details</li>
                <li>✅ Delete a student record</li>
            </ul>

            <p>
                Optional advanced features (we can add later):
                <ul>
                    <li>🔍 Search by name or course</li>
                    <li>📑 Generate reports</li>
                    <li>🔐 Add login authentication</li>
                </ul>
            </p>

            <h2>⚙️ Step 3: Technology Stack</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", background: "#fff" }}>
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Component</th>
                        <th>Technology</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programming Language</td>
                        <td>Java (JDK 17+)</td>
                        <td>Core project logic</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>MySQL</td>
                        <td>Data storage & retrieval</td>
                    </tr>
                    <tr>
                        <td>JDBC Driver</td>
                        <td>MySQL Connector/J</td>
                        <td>To connect Java app with MySQL</td>
                    </tr>
                    <tr>
                        <td>IDE</td>
                        <td>IntelliJ IDEA / Eclipse</td>
                        <td>Code development environment</td>
                    </tr>
                </tbody>
            </table>

            <h2>🧩 Step 4: Project Flow (Architecture)</h2>
            <p>
                The application follows a simple <b>3-layer architecture</b>:
            </p>
            <ul>
                <li><b>Presentation Layer (UI):</b> Console-based user input/output</li>
                <li><b>Business Layer:</b> Java classes that handle logic (Student, StudentService)</li>
                <li><b>Data Access Layer (DAO):</b> JDBC classes to connect and run queries</li>
            </ul>

            <h3>🗂️ Example Flow:</h3>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                {`User -> StudentService -> StudentDAO -> Database`}
            </pre>

            <h2>🎓 Step 5: Learning Outcomes</h2>
            <ul>
                <li>✅ Create and manage database connections using JDBC.</li>
                <li>✅ Write and execute SQL queries via Java.</li>
                <li>✅ Understand exception handling and resource management.</li>
                <li>✅ Build a working CRUD-based console application.</li>
            </ul>

            <div style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px", marginTop: "1.5rem" }}>
                💡 <b>Next Step:</b> In the next page, we’ll define <b>Project Requirements </b>
                in detail and design the database schema (tables & columns) for our Student Management System.
            </div>
        </div>
    );
}
