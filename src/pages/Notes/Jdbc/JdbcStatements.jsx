import React from "react";

export default function JdbcStatements() {
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
            <h1>🧩 JDBC Statements in Java</h1>
            <p>
                In <b>JDBC</b>, a <b>Statement</b> is an interface used to execute SQL
                queries against the database. Once a connection is established using{" "}
                <code>Connection</code>, you use statements to perform operations like{" "}
                <b>INSERT</b>, <b>UPDATE</b>, <b>DELETE</b>, or <b>SELECT</b>.
            </p>

            <h2>🔹 Types of JDBC Statements</h2>
            <p>
                JDBC provides <b>three main types of statements</b> to interact with a
                database. Each has its own use case and advantages:
            </p>

            <ul>
                <li>
                    <b>1️⃣ Statement</b> – Used for simple static SQL queries.
                </li>
                <li>
                    <b>2️⃣ PreparedStatement</b> – Used for dynamic or parameterized SQL
                    queries.
                </li>
                <li>
                    <b>3️⃣ CallableStatement</b> – Used to call stored procedures in the
                    database.
                </li>
            </ul>

            {/* --- STATEMENT --- */}
            <h2>1️⃣ Statement</h2>
            <p>
                <b>Statement</b> is used to execute static SQL queries — queries that
                don’t change at runtime. It’s created using the{" "}
                <code>Connection.createStatement()</code> method.
            </p>

            <h3>✅ Example:</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
Statement stmt = conn.createStatement();

String sql = "SELECT * FROM students";
ResultSet rs = stmt.executeQuery(sql);

while (rs.next()) {
    System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
}`}</code>
            </pre>

            <p>
                ⚠️ <b>Note:</b> <code>Statement</code> is not safe for user inputs,
                because inserting user data directly in SQL can lead to{" "}
                <b>SQL Injection</b> attacks.
            </p>

            {/* --- PREPAREDSTATEMENT --- */}
            <h2>2️⃣ PreparedStatement</h2>
            <p>
                <b>PreparedStatement</b> is used for <b>precompiled SQL queries</b> with
                parameters. It is faster and safer than <code>Statement</code> because
                the SQL query is compiled once and reused multiple times.
            </p>

            <h3>✅ Example:</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
PreparedStatement ps = conn.prepareStatement("INSERT INTO students (name, age, course) VALUES (?, ?, ?)");

ps.setString(1, "Kishore");
ps.setInt(2, 22);
ps.setString(3, "Java");
ps.executeUpdate();`}</code>
            </pre>

            <h3>💡 Advantages:</h3>
            <ul>
                <li>✅ Prevents SQL Injection.</li>
                <li>✅ Increases performance (query precompiled once).</li>
                <li>✅ Supports dynamic data using <code>setXxx()</code> methods.</li>
            </ul>

            <h3>🧠 When to Use:</h3>
            <p>
                Use <b>PreparedStatement</b> when the query has input parameters or
                executes repeatedly with different values.
            </p>

            {/* --- CALLABLESTATEMENT --- */}
            <h2>3️⃣ CallableStatement</h2>
            <p>
                <b>CallableStatement</b> is used to call <b>stored procedures</b> and{" "}
                <b>functions</b> in the database. It allows you to pass parameters and
                get results or output parameters back.
            </p>

            <h3>✅ Example (MySQL Stored Procedure):</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`-- In MySQL
CREATE PROCEDURE getStudentById(IN studentId INT)
BEGIN
    SELECT * FROM students WHERE id = studentId;
END;`}</code>
            </pre>

            <h3>➡️ JDBC Code:</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`CallableStatement cs = conn.prepareCall("{call getStudentById(?)}");
cs.setInt(1, 5);

ResultSet rs = cs.executeQuery();
while (rs.next()) {
    System.out.println(rs.getString("name"));
}`}</code>
            </pre>

            <h3>💡 Advantages:</h3>
            <ul>
                <li>✅ Executes precompiled logic on the database server.</li>
                <li>✅ Great for complex operations with multiple SQL steps.</li>
                <li>✅ Improves performance and security for large applications.</li>
            </ul>

            <h2>📊 Comparison Table</h2>
            <table
                border="1"
                cellPadding="8"
                style={{
                    borderCollapse: "collapse",
                    marginTop: "10px",
                    width: "100%",
                    background: "#fff",
                }}
            >
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Type</th>
                        <th>Purpose</th>
                        <th>Use Case</th>
                        <th>Performance</th>
                        <th>SQL Injection Safety</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Statement</td>
                        <td>Static SQL queries</td>
                        <td>Simple one-time queries</td>
                        <td>Low</td>
                        <td>❌ Vulnerable</td>
                    </tr>
                    <tr>
                        <td>PreparedStatement</td>
                        <td>Parameterized queries</td>
                        <td>Repeated or dynamic queries</td>
                        <td>High</td>
                        <td>✅ Safe</td>
                    </tr>
                    <tr>
                        <td>CallableStatement</td>
                        <td>Stored Procedures</td>
                        <td>Complex multi-step logic</td>
                        <td>Very High</td>
                        <td>✅ Safe</td>
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
                💡 <b>Tip:</b> Always close your <code>Statement</code>,{" "}
                <code>PreparedStatement</code>, and <code>ResultSet</code> after use to
                free database resources. Use <b>try-with-resources</b> in Java 8+.
            </div>
        </div>
    );
}
