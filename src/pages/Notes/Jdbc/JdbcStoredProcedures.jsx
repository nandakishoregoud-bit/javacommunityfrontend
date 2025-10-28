import React from "react";

export default function JdbcStoredProcedures() {
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
            <h1>⚙️ Working with Stored Procedures in JDBC</h1>

            <p>
                In real-world database applications, we often use <b>Stored Procedures</b> to
                perform complex operations on the database side.
                Stored procedures are **precompiled SQL code** stored in the database that can
                perform logic like inserting, updating, or retrieving data.
            </p>

            <h2>🔹 What is a Stored Procedure?</h2>
            <p>
                A <b>Stored Procedure</b> is a group of SQL statements stored in the database.
                Instead of sending multiple queries from Java, you call the procedure once,
                which improves performance and security.
            </p>

            <h3>✅ Example (MySQL Stored Procedure)</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`DELIMITER //
CREATE PROCEDURE getStudentById(IN studentId INT)
BEGIN
    SELECT * FROM students WHERE id = studentId;
END //
DELIMITER ;`}</code>
            </pre>

            <p>Once created, you can call this stored procedure from Java using JDBC.</p>

            <h2>🔸 Calling Stored Procedure in JDBC</h2>
            <p>
                JDBC provides the <b>CallableStatement</b> interface to call stored procedures.
                You can pass input parameters, get output values, or both.
            </p>

            <h3>✅ Example: Calling a Procedure with Input Parameter</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
CallableStatement cs = conn.prepareCall("{call getStudentById(?)}");
cs.setInt(1, 5);

ResultSet rs = cs.executeQuery();
while (rs.next()) {
    System.out.println(rs.getString("name") + " - " + rs.getInt("age"));
}

rs.close();
cs.close();
conn.close();`}</code>
            </pre>

            <h2>🧩 Stored Procedure with Input and Output Parameters</h2>
            <p>
                You can also define <b>OUT</b> parameters to get values back from the database.
            </p>

            <h3>✅ MySQL Example</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`DELIMITER //
CREATE PROCEDURE getCourseNameById(IN courseId INT, OUT courseName VARCHAR(50))
BEGIN
    SELECT name INTO courseName FROM courses WHERE id = courseId;
END //
DELIMITER ;`}</code>
            </pre>

            <h3>➡️ JDBC Code:</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`CallableStatement cs = conn.prepareCall("{call getCourseNameById(?, ?)}");
cs.setInt(1, 2); // Input parameter
cs.registerOutParameter(2, java.sql.Types.VARCHAR); // Output parameter

cs.execute();

String name = cs.getString(2);
System.out.println("Course Name: " + name);

cs.close();
conn.close();`}</code>
            </pre>

            <h2>📊 Types of Parameters</h2>
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
                        <th>Parameter Type</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>IN</b></td>
                        <td>Used to pass input values to the procedure</td>
                        <td><code>cs.setInt(1, 101);</code></td>
                    </tr>
                    <tr>
                        <td><b>OUT</b></td>
                        <td>Used to get output from the procedure</td>
                        <td><code>cs.registerOutParameter(2, Types.VARCHAR);</code></td>
                    </tr>
                    <tr>
                        <td><b>INOUT</b></td>
                        <td>Used to both pass and retrieve values</td>
                        <td><code>cs.setInt(1, value); cs.getInt(1);</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>💡 Common CallableStatement Methods</h2>
            <ul>
                <li>
                    <code>setXxx(index, value)</code> → Sets the value for an IN or INOUT parameter.
                </li>
                <li>
                    <code>registerOutParameter(index, SQLType)</code> → Registers an OUT or INOUT parameter.
                </li>
                <li>
                    <code>execute()</code> → Executes the stored procedure.
                </li>
                <li>
                    <code>getXxx(index)</code> → Retrieves the OUT parameter value.
                </li>
            </ul>

            <h2>🧠 Advantages of Using Stored Procedures</h2>
            <ul>
                <li>✅ Reduces database network traffic (logic runs on server).</li>
                <li>✅ Improves performance (precompiled SQL).</li>
                <li>✅ Enhances security by hiding SQL logic from users.</li>
                <li>✅ Easier maintenance and version control of SQL logic.</li>
            </ul>

            <h2>⚠️ Best Practices</h2>
            <ul>
                <li>Always close <b>CallableStatement</b> and <b>Connection</b>.</li>
                <li>Use <b>try-with-resources</b> to manage resources automatically.</li>
                <li>Use named stored procedures for readability and consistency.</li>
            </ul>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> Use <code>CallableStatement</code> when your application logic
                requires database-level processing — for example, complex joins, calculations,
                or bulk updates.
            </div>

            <h2>📝 Summary</h2>
            <ul>
                <li>Use <b>CallableStatement</b> to execute stored procedures.</li>
                <li>Supports <b>IN</b>, <b>OUT</b>, and <b>INOUT</b> parameters.</li>
                <li>Improves performance and security in enterprise systems.</li>
            </ul>
        </div>
    );
}
