import React from "react";

export default function JdbcProjectRequirements() {
    return (
        <div
            style={{
                fontFamily: "Arial",
                lineHeight: 1.8,
                padding: "1rem",
                maxWidth: 900,
                margin: "auto",
            }}
        >
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
                <li>🔒 Secure — no SQL injection (use PreparedStatement)</li>
                <li>🧩 Easy to maintain — follow modular Java class structure</li>
                <li>💾 Use JDBC connection pooling later for optimization</li>
            </ul>

            <h2>🧱 Database Design (Schema)</h2>
            <p>
                We’ll use a single table called <b>students</b> to store student details.
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
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
            </pre>

            <h2>📊 Sample Data</h2>
            <pre
                style={{
                    background: "#f0fdf4",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
                {`INSERT INTO students (name, age, course, email, phone) VALUES
('Kishore Goud', 22, 'Java Full Stack', 'kishore@example.com', '9876543210'),
('Nanda Kumar', 21, 'Python Development', 'nanda@example.com', '8765432109'),
('Aarav Mehta', 23, 'Data Science', 'aarav@example.com', '7654321098');`}
            </pre>

            <h2>🧩 Application Architecture</h2>
            <ul>
                <li><b>Model Class:</b> Student.java — represents student data.</li>
                <li><b>DAO Layer:</b> StudentDAO.java — handles database operations.</li>
                <li><b>Service Layer:</b> StudentService.java — contains business logic.</li>
                <li><b>Main Class:</b> Main.java — handles user input/output.</li>
            </ul>

            <h2>🧠 Features Breakdown</h2>
            <table
                border="1"
                cellPadding="8"
                style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    background: "#fff",
                    marginTop: "10px",
                }}
            >
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Feature</th>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Add Student</td>
                        <td>addStudent()</td>
                        <td>Inserts a new record into the database</td>
                    </tr>
                    <tr>
                        <td>View Students</td>
                        <td>getAllStudents()</td>
                        <td>Fetches and displays all student records</td>
                    </tr>
                    <tr>
                        <td>Update Student</td>
                        <td>updateStudent()</td>
                        <td>Modifies student details by ID</td>
                    </tr>
                    <tr>
                        <td>Delete Student</td>
                        <td>deleteStudent()</td>
                        <td>Removes student record by ID</td>
                    </tr>
                    <tr>
                        <td>Search Student</td>
                        <td>getStudentById()</td>
                        <td>Finds a specific student using their ID</td>
                    </tr>
                </tbody>
            </table>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Next Step:</b> In the next page, we’ll create the{" "}
                <b>Project Setup</b> — including directory structure, MySQL connector, and
                base connection code using JDBC.
            </div>
        </div>
    );
}
