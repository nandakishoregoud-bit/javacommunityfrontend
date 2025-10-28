import React from "react";
import "./JdbcGlobal.css";

export default function JdbcProjectOverview() {
    return (
        <div className="jdbc-container">
            <h1>🚀 JDBC Mini Project — Student Management System</h1>

            <p>
                Welcome to your first <b>real-world JDBC project</b>! 🎉
                In this mini-project, we’ll build a simple yet powerful{" "}
                <b>Student Management System</b> using <b>Java JDBC</b>.
                You’ll learn how Java applications connect with databases and perform
                full <b>CRUD operations (Create, Read, Update, Delete)</b> — the backbone
                of every backend system.
            </p>

            <h2>🎯 Project Goal</h2>
            <p>
                The aim of this project is to design a small but functional
                <b> database-driven application</b> where users can manage student records.
                This setup mirrors professional use cases like employee or inventory management systems.
            </p>

            <h2>🏢 Real-World Relevance</h2>
            <ul>
                <li>📊 Manage student data efficiently using SQL operations.</li>
                <li>🧠 Learn how Java communicates with relational databases.</li>
                <li>🛠️ Understand end-to-end project flow in backend systems.</li>
                <li>🧩 Strengthen your JDBC and data-handling skills.</li>
            </ul>

            <h2>🧾 Step 1: Business Understanding</h2>
            <p>
                Let’s imagine you’re building this for a training institute 🏫.
                They want a lightweight system to store student details like{" "}
                <b>name</b>, <b>age</b>, <b>course</b>, and <b>email</b>.
                Instead of relying on Excel sheets, we’ll give them a clean
                Java program connected to a MySQL database.
            </p>

            <h2>📋 Step 2: Requirements Gathering</h2>
            <ul>
                <li>✅ Add new student records</li>
                <li>✅ View all students</li>
                <li>✅ Update student details</li>
                <li>✅ Delete student records</li>
            </ul>

            <p>Optional advanced features you can add later:</p>
            <ul>
                <li>🔍 Search by name or course</li>
                <li>📑 Generate reports</li>
                <li>🔐 Add login authentication</li>
            </ul>

            <h2>⚙️ Step 3: Technology Stack</h2>
            <table>
                <thead>
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
                        <td>Connects Java app with MySQL</td>
                    </tr>
                    <tr>
                        <td>IDE</td>
                        <td>IntelliJ IDEA / Eclipse</td>
                        <td>Development environment</td>
                    </tr>
                </tbody>
            </table>

            <h2>🧩 Step 4: Project Flow (Architecture)</h2>
            <p>
                The application follows a clean <b>3-layer architecture</b> for structure and maintainability:
            </p>
            <ul>
                <li><b>Presentation Layer (UI):</b> Console-based user interaction</li>
                <li><b>Business Layer:</b> Java classes that contain business logic</li>
                <li><b>Data Access Layer (DAO):</b> JDBC classes to handle database operations</li>
            </ul>

            <h3>🗂️ Example Flow</h3>
            <pre className="log-block">{`User -> StudentService -> StudentDAO -> Database`}</pre>

            <h2>🎓 Step 5: Learning Outcomes</h2>
            <ul>
                <li>✅ Build and manage database connections using JDBC.</li>
                <li>✅ Write and execute SQL queries through Java.</li>
                <li>✅ Handle exceptions and manage resources properly.</li>
                <li>✅ Develop a complete CRUD-based console app.</li>
            </ul>

            <div className="next-step">
                💡 <b>Next Step:</b> Let’s define the <b>project requirements</b> in detail and design
                our <b>database schema</b> (tables & columns) for the Student Management System.
            </div>
        </div>
    );
}
