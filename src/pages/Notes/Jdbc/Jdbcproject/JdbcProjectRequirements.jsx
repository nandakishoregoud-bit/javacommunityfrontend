import React from "react";
import "./JdbcGlobal.css"; // ✅ Reuse your shared JDBC global stylesheet

export default function JdbcProjectRequirements() {
    return (
        <div className="jdbc-container">
            <h1>📋 JDBC Project Requirements — Student Management System</h1>

            <p>
                Before starting development, we need a clear picture of what our{" "}
                <b>Student Management System (SMS)</b> should do. This step defines the
                system’s goals, database structure, and how each feature works.
            </p>

            <h2>🎯 Functional Requirements</h2>
            <ul>
                <li>✅ Add a new student record to the database</li>
                <li>✅ View all student records</li>
                <li>✅ Update existing student details</li>
                <li>✅ Delete a student record</li>
                <li>✅ Search students by ID, name, or course</li>
            </ul>

            <h2>⚙️ Non-Functional Requirements</h2>
            <ul>
                <li>⚡ Fast execution and efficient SQL queries</li>
                <li>🔒 Secure — no SQL injection (use <b>PreparedStatement</b>)</li>
                <li>🧩 Easy to maintain — follow modular Java class structure</li>
                <li>💾 Use JDBC connection pooling later for optimization</li>
            </ul>

            <h2>🧱 Database Design (Schema)</h2>
            <p>
                We’ll use a single table called <b>students</b> to store student details.
            </p>

            <div className="code-block">
                {`CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(15)
);`}
            </div>

            <h2>📊 Sample Data</h2>
            <div className="highlight-block">
                {`INSERT INTO students (name, age, course, email, phone) VALUES
('Kishore Goud', 22, 'Java Full Stack', 'kishore@example.com', '9876543210'),
('Nanda Kumar', 21, 'Python Development', 'nanda@example.com', '8765432109'),
('Aarav Mehta', 23, 'Data Science', 'aarav@example.com', '7654321098');`}
            </div>

            <h2>🧩 Application Architecture</h2>
            <ul>
                <li><b>Model Class:</b> <code>Student.java</code> — represents student data.</li>
                <li><b>DAO Layer:</b> <code>StudentDAO.java</code> — handles database operations.</li>
                <li><b>Service Layer:</b> <code>StudentService.java</code> — contains business logic.</li>
                <li><b>Main Class:</b> <code>Main.java</code> — handles user input/output.</li>
            </ul>

            <h2>🧠 Features Breakdown</h2>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Add Student</td>
                        <td><code>addStudent()</code></td>
                        <td>Inserts a new record into the database</td>
                    </tr>
                    <tr>
                        <td>View Students</td>
                        <td><code>getAllStudents()</code></td>
                        <td>Fetches and displays all student records</td>
                    </tr>
                    <tr>
                        <td>Update Student</td>
                        <td><code>updateStudent()</code></td>
                        <td>Modifies student details by ID</td>
                    </tr>
                    <tr>
                        <td>Delete Student</td>
                        <td><code>deleteStudent()</code></td>
                        <td>Removes student record by ID</td>
                    </tr>
                    <tr>
                        <td>Search Student</td>
                        <td><code>getStudentById()</code></td>
                        <td>Finds a specific student using their ID</td>
                    </tr>
                </tbody>
            </table>

            <div className="next-step">
                💡 <b>Next Step:</b> In the next page, we’ll create the{" "}
                <b>Project Setup</b> — including directory structure, MySQL connector, and
                base connection code using JDBC.
            </div>
        </div>
    );
}
