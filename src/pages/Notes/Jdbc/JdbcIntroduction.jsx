import { useState } from "react";

export default function JdbcIntroduction() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does JDBC stand for?",
            options: [
                "Java Database Connector",
                "Java Database Connectivity",
                "Java Data Connection",
                "Java Data Control"
            ],
            answer: 1,
        },
        {
            q: "Which JDBC class is used to execute parameterized SQL?",
            options: [
                "Statement",
                "PreparedStatement",
                "CallableStatement",
                "ResultSet"
            ],
            answer: 1,
        },
        {
            q: "What does try-with-resources ensure when used with JDBC?",
            options: [
                "Auto-compilation of SQL",
                "Automatic closing of JDBC resources",
                "Faster query execution",
                "Automatic transaction commit"
            ],
            answer: 1,
        },
        {
            q: "Which method starts a transaction when auto-commit is disabled?",
            options: [
                "connection.begin()",
                "connection.setAutoCommit(false)",
                "connection.startTransaction()",
                "connection.commit()"
            ],
            answer: 1,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>📚 What is JDBC and Why Use It?</h1>

            <p>
                <b>JDBC</b> stands for <b>Java Database Connectivity</b>. It is the standard Java API
                for connecting to relational databases (like MySQL, PostgreSQL, Oracle) from Java applications.
                JDBC provides a set of interfaces and classes that allow you to send SQL queries, retrieve results,
                and manage transactions from Java code.
            </p>

            <h2>🔹 Why use JDBC?</h2>
            <ul>
                <li><b>Database access from Java:</b> JDBC is the canonical way to communicate with relational databases using SQL.</li>
                <li><b>Standard API:</b> JDBC is part of the Java SE platform and works across different database vendors via JDBC drivers.</li>
                <li><b>Fine-grained control:</b> You get direct control over SQL, transactions, batching, and resource management.</li>
                <li><b>Lightweight:</b> For small projects or performance-tuned code, JDBC can be simpler and faster than heavyweight ORMs.</li>
                <li><b>Interoperability:</b> Works with any DB that exposes a JDBC driver — same code can work with MySQL, Postgres, Oracle, etc. (driver-dependent URL/config).</li>
            </ul>

            <h2>🔹 JDBC Architecture (brief)</h2>
            <p>
                At a high level:
            </p>
            <ol>
                <li><b>JDBC API (your Java code)</b> — classes like <code>DriverManager</code>, <code>Connection</code>, <code>Statement</code>, <code>PreparedStatement</code>, <code>ResultSet</code>.</li>
                <li><b>JDBC Driver</b> — vendor-supplied library (JAR) that knows how to talk to the actual DB (MySQL Connector/J, PostgreSQL JDBC driver).</li>
                <li><b>Relational Database</b> — the database server that executes SQL queries and returns results.</li>
            </ol>

            <h2>🔹 Simple JDBC Example — Querying a Database</h2>
            <p>Below is a minimal, idiomatic example using <b>try-with-resources</b> (Java 7+) which ensures resources are closed automatically.</p>

            <pre style={{ background: "#eee", padding: "12px", borderRadius: 6, overflowX: "auto" }}>
                <code>{`import java.sql.*;

public class JdbcExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "secret";

        String sql = "SELECT id, name, email FROM users WHERE active = ?";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setBoolean(1, true); // set parameter
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    String email = rs.getString("email");
                    System.out.println(id + " - " + name + " - " + email);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`}</code>
            </pre>

            <h2>🔹 Notes on the example</h2>
            <ul>
                <li><b>DriverManager.getConnection</b> opens a connection using the provided JDBC URL. Modern drivers auto-register via the service loader — no explicit <code>Class.forName()</code> is needed for most recent drivers.</li>
                <li><b>PreparedStatement</b> is used for parameterized queries. It prevents SQL injection and allows precompilation/optimization by the DB.</li>
                <li><b>ResultSet</b> iterates over rows returned by SELECT.</li>
                <li><b>try-with-resources</b> automatically closes <code>Connection</code>, <code>PreparedStatement</code>, and <code>ResultSet</code>.</li>
            </ul>

            <h2>🔹 Inserting Data (example)</h2>
            <pre style={{ background: "#eee", padding: "12px", borderRadius: 6, overflowX: "auto" }}>
                <code>{`String insertSql = "INSERT INTO users (name, email, active) VALUES (?, ?, ?)";
try (Connection conn = DriverManager.getConnection(url, user, password);
     PreparedStatement ps = conn.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS)) {

    ps.setString(1, "Nanda");
    ps.setString(2, "nanda@example.com");
    ps.setBoolean(3, true);

    int rows = ps.executeUpdate();
    if (rows > 0) {
        try (ResultSet keys = ps.getGeneratedKeys()) {
            if (keys.next()) {
                System.out.println("Inserted id = " + keys.getLong(1));
            }
        }
    }
}`}</code>
            </pre>

            <h2>🔹 Transactions & Batch Insert (example)</h2>
            <p>For multiple related operations, disable auto-commit and manage the transaction manually. Use batching for bulk inserts.</p>
            <pre style={{ background: "#eee", padding: "12px", borderRadius: 6, overflowX: "auto" }}>
                <code>{`try (Connection conn = DriverManager.getConnection(url, user, password)) {
    conn.setAutoCommit(false); // begin transaction

    try (PreparedStatement ps = conn.prepareStatement("INSERT INTO logs (msg) VALUES (?)")) {
        for (String message : messages) {
            ps.setString(1, message);
            ps.addBatch();
        }
        ps.executeBatch();
    }

    conn.commit(); // commit if all okay
} catch (SQLException e) {
    // on error you should rollback
    // conn.rollback(); // in practice, rollback inside the catch after accessing conn
    e.printStackTrace();
}`}</code>
            </pre>

            <h2>🔹 When to use JDBC vs an ORM (like JPA/Hibernate)?</h2>
            <ul>
                <li><b>Use JDBC</b> when you need fine-grained control, raw performance, or want simple direct SQL.</li>
                <li><b>Use ORM</b> when you want object-relational mapping, less boilerplate, caching, relationship management, and productivity for CRUD-heavy applications.</li>
                <li>Often projects use both: ORM for usual entity operations and JDBC for special, highly-optimized queries or batch jobs.</li>
            </ul>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Always use <code>PreparedStatement</code> (avoid building SQL with string concatenation).</li>
                <li>Use <code>try-with-resources</code> to ensure DB resources are closed.</li>
                <li>Use connection pooling (HikariCP, Apache DBCP) in production — do not open new connections per request.</li>
                <li>Disable auto-commit for multi-step transactions; commit/rollback explicitly.</li>
                <li>Use batch inserts/updates for better throughput when handling many rows.</li>
                <li>Log SQL and parameters (but avoid logging sensitive data like passwords).</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "12px", borderRadius: 6, overflowX: "auto" }}>
                <code>{`// Practice task: write a method that returns a List<User> for users whose
// name contains a search string (case-insensitive) using JDBC and PreparedStatement.`}</code>
            </pre>

            <h2>📝 Test Yourself: JDBC Basics Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "18px 0" }}>
                        <div style={{ marginBottom: 6 }}>{idx + 1}. {item.q}</div>
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
                                {showAnswers && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 8 }}>✗</span>
                                )}
                            </label>
                        ))}
                    </div>
                ))}

                {!showAnswers && (
                    <button type="submit" style={{
                        padding: "8px 16px",
                        fontWeight: 600,
                        borderRadius: 6,
                        background: "#198754",
                        color: "white",
                        border: "none",
                    }}>
                        Check Answers
                    </button>
                )}
            </form>

            {showAnswers && (
                <div style={{ marginTop: 18, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Great! You know the basics of JDBC."
                        : "Review the examples and best practices above and try again."}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: 8, marginTop: 18 }}>
                💡 <b>Tip:</b> In production apps never open raw connections per request. Use a connection pool (HikariCP) managed by your application server or framework to reuse connections and improve performance.
            </p>
        </div>
    );
}
