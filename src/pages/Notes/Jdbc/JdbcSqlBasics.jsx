import React from "react";

export default function JdbcSqlBasics() {
    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>🔹 SQL Basics for JDBC</h1>
            <p>
                Before working with <b>JDBC</b>, it’s important to understand basic <b>SQL (Structured Query Language)</b> commands.
                These queries are used in almost every JDBC program to interact with a relational database.
            </p>

            <h2>1️⃣ CREATE TABLE – Defining a Database Table</h2>
            <p>The <b>CREATE TABLE</b> command is used to create a new table in the database.</p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
);`}</code>
            </pre>

            <p>In JDBC, you might execute it like this:</p>
            <pre style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}>
                <code>{`Statement stmt = conn.createStatement();
stmt.executeUpdate("CREATE TABLE students (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), age INT, course VARCHAR(50))");`}</code>
            </pre>

            <h2>2️⃣ INSERT – Adding Data</h2>
            <p>The <b>INSERT</b> command is used to insert records into a table.</p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`INSERT INTO students (name, age, course)
VALUES ('Kishore', 22, 'Java Development');`}</code>
            </pre>

            <p>In JDBC (using <b>PreparedStatement</b>):</p>
            <pre style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}>
                <code>{`PreparedStatement ps = conn.prepareStatement("INSERT INTO students (name, age, course) VALUES (?, ?, ?)");
ps.setString(1, "Kishore");
ps.setInt(2, 22);
ps.setString(3, "Java Development");
ps.executeUpdate();`}</code>
            </pre>

            <h2>3️⃣ SELECT – Reading Data</h2>
            <p>
                The <b>SELECT</b> query retrieves data from one or more tables. You can use <code>ResultSet</code> in JDBC to loop
                through the results.
            </p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`SELECT * FROM students;`}</code>
            </pre>
            <p>In JDBC:</p>
            <pre style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}>
                <code>{`Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

while (rs.next()) {
    System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
}`}</code>
            </pre>

            <h2>4️⃣ UPDATE – Modifying Data</h2>
            <p>Use the <b>UPDATE</b> command to modify existing records in a table.</p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`UPDATE students SET age = 23 WHERE name = 'Kishore';`}</code>
            </pre>
            <p>JDBC version:</p>
            <pre style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}>
                <code>{`PreparedStatement ps = conn.prepareStatement("UPDATE students SET age = ? WHERE name = ?");
ps.setInt(1, 23);
ps.setString(2, "Kishore");
ps.executeUpdate();`}</code>
            </pre>

            <h2>5️⃣ DELETE – Removing Data</h2>
            <p>The <b>DELETE</b> command removes records that meet certain conditions.</p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`DELETE FROM students WHERE id = 1;`}</code>
            </pre>
            <p>In JDBC:</p>
            <pre style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}>
                <code>{`PreparedStatement ps = conn.prepareStatement("DELETE FROM students WHERE id = ?");
ps.setInt(1, 1);
ps.executeUpdate();`}</code>
            </pre>

            <h2>6️⃣ WHERE, ORDER BY & LIMIT</h2>
            <p>These clauses help refine and organize the data you query.</p>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
                <code>{`SELECT * FROM students WHERE course = 'Java Development' ORDER BY age DESC LIMIT 5;`}</code>
            </pre>

            <p>Used often in dashboards or filtered queries in JDBC apps.</p>

            <div style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px", marginTop: "1.5rem" }}>
                💡 <b>Tip:</b> In JDBC, always use <b>PreparedStatement</b> for dynamic SQL queries to avoid SQL Injection and
                improve performance.
            </div>
        </div>
    );
}
