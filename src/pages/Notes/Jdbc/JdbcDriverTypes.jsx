import { useState } from "react";

export default function JdbcDriverTypes() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which driver type is known as the Thin Driver?",
            options: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4"
            ],
            answer: 3,
        },
        {
            q: "Which JDBC driver uses native code and is platform dependent?",
            options: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4"
            ],
            answer: 1,
        },
        {
            q: "Which driver translates JDBC calls into database-specific protocol using a middleware server?",
            options: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4"
            ],
            answer: 2,
        },
        {
            q: "Which type of driver is most commonly used in modern Java applications?",
            options: [
                "Type 1",
                "Type 2",
                "Type 3",
                "Type 4"
            ],
            answer: 3,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>🚀 JDBC Driver Types</h1>

            <p>
                A <b>JDBC driver</b> is a software component that allows Java applications
                to interact with databases.
                It acts as a translator between Java's <code>JDBC API</code> calls and the
                actual database protocol.
            </p>

            <p>
                There are <b>four main types</b> of JDBC drivers, each using a different
                approach to communicate with the database.
            </p>

            <h2>🔹 Type 1 – JDBC-ODBC Bridge Driver</h2>
            <p>
                This driver translates JDBC calls into ODBC (Open Database Connectivity)
                calls. It requires an ODBC driver installed on the client machine.
            </p>
            <ul>
                <li><b>Architecture:</b> Java → JDBC → ODBC → Database</li>
                <li><b>Example:</b> <code>sun.jdbc.odbc.JdbcOdbcDriver</code></li>
                <li><b>Advantages:</b> Easy to use for testing; no DB-specific driver needed.</li>
                <li><b>Disadvantages:</b> Platform dependent, slower, requires ODBC setup, not supported in Java 8+.</li>
            </ul>

            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// Example (Deprecated)
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
Connection conn = DriverManager.getConnection("jdbc:odbc:mydsn", "user", "pass");`}</code>
            </pre>

            <h2>🔹 Type 2 – Native-API Driver (Partly Java, Partly Native)</h2>
            <p>
                This driver converts JDBC calls into database-specific native API calls.
                It uses native libraries (DLLs) provided by the database vendor.
            </p>
            <ul>
                <li><b>Architecture:</b> Java → JDBC → Native API → Database</li>
                <li><b>Advantages:</b> Faster than Type 1.</li>
                <li><b>Disadvantages:</b> Requires native libraries; platform dependent; hard to deploy.</li>
            </ul>

            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// Example (Oracle Type 2 Driver)
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection conn = DriverManager.getConnection("jdbc:oracle:oci:@mydb", "user", "pass");`}</code>
            </pre>

            <h2>🔹 Type 3 – Network Protocol Driver (Middleware)</h2>
            <p>
                This driver uses a middleware (application server) to convert JDBC calls
                into database-specific protocol.
            </p>
            <ul>
                <li><b>Architecture:</b> Java → JDBC → Middleware Server → Database</li>
                <li><b>Advantages:</b> Platform independent; easier for large distributed systems.</li>
                <li><b>Disadvantages:</b> Requires an intermediate server, making setup more complex.</li>
            </ul>

            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// Example (Hypothetical Type 3)
Connection conn = DriverManager.getConnection("jdbc:myMiddleware://server:port/database");`}</code>
            </pre>

            <h2>🔹 Type 4 – Thin Driver (Pure Java)</h2>
            <p>
                This is the most modern and commonly used JDBC driver type.
                It directly converts JDBC calls into the database-specific protocol using pure Java.
            </p>
            <ul>
                <li><b>Architecture:</b> Java → JDBC → Database (Direct)</li>
                <li><b>Advantages:</b> 100% Java, no native libraries, portable, high performance.</li>
                <li><b>Disadvantages:</b> Vendor specific (you need a driver for each database).</li>
            </ul>

            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// Example (MySQL Type 4 Driver)
Class.forName("com.mysql.cj.jdbc.Driver");
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/mydb", "root", "secret"
);`}</code>
            </pre>

            <h2>🔹 Comparison Table</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                    <tr style={{ background: "#f0f0f0" }}>
                        <th style={{ border: "1px solid #ccc", padding: "6px" }}>Type</th>
                        <th style={{ border: "1px solid #ccc", padding: "6px" }}>Description</th>
                        <th style={{ border: "1px solid #ccc", padding: "6px" }}>Dependency</th>
                        <th style={{ border: "1px solid #ccc", padding: "6px" }}>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Type 1</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>JDBC-ODBC Bridge</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>ODBC & Native</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Slow</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Type 2</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Native API Driver</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Native Libraries</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Medium</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Type 3</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Network Protocol Driver</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Middleware Server</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Medium</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Type 4</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>Thin Driver (Pure Java)</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>None</td>
                        <td style={{ border: "1px solid #ccc", padding: "6px" }}>High</td>
                    </tr>
                </tbody>
            </table>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Always use the latest <b>Type 4 driver</b> for modern databases (MySQL, PostgreSQL, etc.).</li>
                <li>Download JDBC drivers from official database vendor sites.</li>
                <li>Ensure the driver JAR is added to your project’s classpath.</li>
                <li>Check compatibility between driver version and your Java/DB version.</li>
            </ul>

            <h2>🧩 Practice Task</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// TODO:
// Write a Java program that loads the MySQL JDBC driver dynamically,
// connects to a database, and prints "Connected Successfully" if the
// connection is established.`}</code>
            </pre>

            <h2>📝 Test Yourself: JDBC Driver Types Quiz</h2>
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
                        ? "🎉 Awesome! You’ve mastered JDBC driver types!"
                        : "Review the explanations and try again."}
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
                💡 <b>Tip:</b> In real-world Java apps, always use a <b>Type 4 driver</b> (like
                <code>com.mysql.cj.jdbc.Driver</code> for MySQL or <code>org.postgresql.Driver</code> for PostgreSQL)
                since they are pure Java, portable, and maintained by database vendors.
            </p>
        </div>
    );
}
