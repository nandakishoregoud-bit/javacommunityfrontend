import { useState } from "react";

export default function JdbcConnectionSetup() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which class is used to establish a database connection in JDBC?",
            options: [
                "DriverManager",
                "Connection",
                "PreparedStatement",
                "Statement",
            ],
            answer: 0,
        },
        {
            q: "What does the JDBC URL contain?",
            options: [
                "Database type and location",
                "Only database password",
                "Only Java driver class name",
                "List of tables",
            ],
            answer: 0,
        },
        {
            q: "Which method returns a Connection object?",
            options: [
                "DriverManager.getConnection()",
                "Connection.createStatement()",
                "Class.forName()",
                "Driver.connect()",
            ],
            answer: 0,
        },
        {
            q: "What happens if you don’t close the Connection?",
            options: [
                "JVM automatically closes it immediately",
                "It stays open, causing resource leaks",
                "Database restarts automatically",
                "Nothing happens",
            ],
            answer: 1,
        },
    ];

    return (
        <div
            style={{
                fontFamily: "Arial",
                lineHeight: 2,
                padding: "1rem",
                maxWidth: 900,
                margin: "auto",
            }}
        >
            <h1>🔌 JDBC Connection Setup</h1>

            <p>
                In order to communicate with a database, your Java program must establish a{" "}
                <b>connection</b> using the <b>JDBC API</b>. This connection acts as a
                communication channel between your Java application and the database.
            </p>

            <h2>🔹 Steps to Establish a JDBC Connection</h2>
            <ol>
                <li>
                    <b>Load the JDBC Driver (optional in modern Java):</b>
                    <br />
                    Earlier, you had to explicitly load the driver using{" "}
                    <code>Class.forName("com.mysql.cj.jdbc.Driver")</code>. Newer JDBC drivers
                    (JDBC 4.0+) auto-register themselves.
                </li>

                <li>
                    <b>Create a Connection:</b>
                    <br />
                    Use <code>DriverManager.getConnection()</code> with the correct database URL,
                    username, and password.
                </li>

                <li>
                    <b>Create a Statement or PreparedStatement:</b>
                    <br />
                    These objects execute SQL commands.
                </li>

                <li>
                    <b>Execute SQL Queries:</b> Retrieve or update data.
                </li>

                <li>
                    <b>Close all resources:</b> Always close <code>ResultSet</code>,{" "}
                    <code>Statement</code>, and <code>Connection</code> when done.
                </li>
            </ol>

            <h2>🔹 JDBC Connection Example (MySQL)</h2>
            <pre
                style={{
                    background: "#eee",
                    padding: "12px",
                    borderRadius: 6,
                    overflowX: "auto",
                }}
            >
                <code>{`import java.sql.*;

public class JdbcConnectionDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "secret";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("✅ Connection established successfully!");
        } catch (SQLException e) {
            System.out.println("❌ Connection failed!");
            e.printStackTrace();
        }
    }
}`}</code>
            </pre>

            <h2>🔹 JDBC URL Format</h2>
            <p>
                The JDBC URL tells Java how to locate and connect to the database.
                Each database vendor uses its own format:
            </p>
            <ul>
                <li>
                    <b>MySQL:</b> <code>jdbc:mysql://localhost:3306/dbname</code>
                </li>
                <li>
                    <b>PostgreSQL:</b> <code>jdbc:postgresql://localhost:5432/dbname</code>
                </li>
                <li>
                    <b>Oracle:</b> <code>jdbc:oracle:thin:@localhost:1521:xe</code>
                </li>
                <li>
                    <b>SQL Server:</b> <code>jdbc:sqlserver://localhost:1433;databaseName=dbname</code>
                </li>
            </ul>

            <h2>🔹 Loading the Driver (older style)</h2>
            <p>
                In older Java versions (before JDBC 4.0), you needed to manually load the
                driver using <code>Class.forName()</code>.
            </p>
            <pre
                style={{
                    background: "#eee",
                    padding: "12px",
                    borderRadius: 6,
                    overflowX: "auto",
                }}
            >
                <code>{`try {
    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection conn = DriverManager.getConnection(url, user, password);
    System.out.println("Connected!");
} catch (ClassNotFoundException | SQLException e) {
    e.printStackTrace();
}`}</code>
            </pre>

            <h2>🔹 Common Connection Issues</h2>
            <ul>
                <li>❌ <b>Driver not found:</b> Missing JDBC driver JAR in your classpath.</li>
                <li>❌ <b>Access denied:</b> Wrong username or password.</li>
                <li>❌ <b>Cannot connect:</b> Database service is not running or wrong port number.</li>
                <li>❌ <b>SSL error:</b> Use <code>?useSSL=false</code> in the JDBC URL for local testing.</li>
            </ul>

            <h2>🔹 Best Practices</h2>
            <ul>
                <li>Use <b>try-with-resources</b> for automatic closing of connections.</li>
                <li>Store DB credentials in environment variables (never hardcode).</li>
                <li>Use connection pooling libraries like <b>HikariCP</b> for real applications.</li>
                <li>Close <code>ResultSet</code>, <code>Statement</code>, and <code>Connection</code> in that order.</li>
                <li>Always handle <code>SQLException</code> properly or rethrow as custom exceptions.</li>
            </ul>

            <h2>🧩 Practice Task</h2>
            <pre
                style={{
                    background: "#eee",
                    padding: "12px",
                    borderRadius: 6,
                    overflowX: "auto",
                }}
            >
                <code>{`// TODO:
// Write a Java program that connects to a MySQL database "librarydb"
// and prints all rows from the "books" table using JDBC.`}</code>
            </pre>

            <h2>📝 Test Yourself: JDBC Connection Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "18px 0" }}>
                        <div style={{ marginBottom: 6 }}>
                            {idx + 1}. {item.q}
                        </div>
                        {item.options.map((opt, oidx) => (
                            <label key={oidx} style={{ display: "block", marginBottom: 4 }}>
                                <input
                                    type="radio"
                                    name={`q${idx}`}
                                    checked={selected[idx] === oidx}
                                    onChange={() => {
                                        const copy = selected.slice();
                                        copy[idx] = oidx;
                                        setSelected(copy);
                                    }}
                                />{" "}
                                {opt}
                                {showAnswers && item.answer === oidx && (
                                    <span style={{ color: "green", marginLeft: 8 }}>✔ Correct</span>
                                )}
                                {showAnswers &&
                                    selected[idx] === oidx &&
                                    selected[idx] !== item.answer && (
                                        <span style={{ color: "red", marginLeft: 8 }}>✗</span>
                                    )}
                            </label>
                        ))}
                    </div>
                ))}

                {!showAnswers && (
                    <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            fontWeight: 600,
                            borderRadius: 6,
                            background: "#198754",
                            color: "white",
                            border: "none",
                        }}
                    >
                        Check Answers
                    </button>
                )}
            </form>

            {showAnswers && (
                <div style={{ marginTop: 18, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Great job! You understand JDBC connection setup!"
                        : "Review the examples and best practices above and try again."}
                </div>
            )}

            <p
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: 8,
                    marginTop: 18,
                }}
            >
                💡 <b>Tip:</b> Use <b>environment variables</b> or a <code>.properties</code> file to store
                your database credentials. This keeps your application secure and flexible
                for different environments (local, test, production).
            </p>
        </div>
    );
}
