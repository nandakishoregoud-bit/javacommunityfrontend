import { useState } from "react";

export default function JdbcBatchProcessing() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is the purpose of batch processing in JDBC?",
            options: [
                "To execute multiple SQL statements together for efficiency",
                "To execute SQL queries one by one",
                "To rollback all queries automatically",
                "To store multiple connections in memory"
            ],
            answer: 0,
        },
        {
            q: "Which methods are used for batch processing?",
            options: [
                "addBatch() and executeBatch()",
                "add() and execute()",
                "commit() and rollback()",
                "execute() and close()"
            ],
            answer: 0,
        },
        {
            q: "What does executeBatch() return?",
            options: [
                "An array of update counts",
                "A single boolean value",
                "A ResultSet",
                "A connection object"
            ],
            answer: 0,
        },
        {
            q: "Which of the following improves batch performance?",
            options: [
                "Using PreparedStatement with addBatch()",
                "Executing each statement separately",
                "Auto-committing after every query",
                "Opening multiple connections"
            ],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>⚡ Batch Processing in JDBC</h1>
            <p>
                <b>Batch Processing</b> allows you to execute multiple SQL statements together instead of sending them one by one to the database.
                This reduces <b>network calls</b> and improves performance, especially when inserting or updating large datasets.
            </p>

            <h2>🔹 Why Use Batch Processing?</h2>
            <ul>
                <li>✅ Reduces round trips between Java application and database.</li>
                <li>✅ Speeds up bulk insert/update/delete operations.</li>
                <li>✅ Efficient for data migration, import/export, or ETL tasks.</li>
            </ul>

            <h2>🔹 Key Methods</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", background: "#fff" }}>
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>addBatch(String sql)</code></td>
                        <td>Adds a SQL statement to the batch (for Statement)</td>
                    </tr>
                    <tr>
                        <td><code>addBatch()</code></td>
                        <td>Adds the current parameters to the batch (for PreparedStatement)</td>
                    </tr>
                    <tr>
                        <td><code>executeBatch()</code></td>
                        <td>Executes all SQL commands added to the batch as one unit</td>
                    </tr>
                    <tr>
                        <td><code>clearBatch()</code></td>
                        <td>Clears all statements currently in the batch</td>
                    </tr>
                </tbody>
            </table>

            <h2>🔹 Example 1: Using Statement with Batch</h2>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`try (Connection conn = DriverManager.getConnection(url, user, pass);
     Statement stmt = conn.createStatement()) {

    conn.setAutoCommit(false); // Disable auto-commit

    stmt.addBatch("INSERT INTO students VALUES (101, 'Ravi')");
    stmt.addBatch("INSERT INTO students VALUES (102, 'Kiran')");
    stmt.addBatch("INSERT INTO students VALUES (103, 'Priya')");

    int[] result = stmt.executeBatch();
    conn.commit();

    System.out.println("Batch executed successfully! Rows affected: " + result.length);
} catch (SQLException e) {
    e.printStackTrace();
}`}</code>
            </pre>

            <p>💡 Using `Statement` is fine for static SQL, but for repeated operations with different values, use `PreparedStatement` for better performance.</p>

            <h2>🔹 Example 2: Using PreparedStatement with Batch</h2>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`String sql = "INSERT INTO employees (id, name, salary) VALUES (?, ?, ?)";
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {

    conn.setAutoCommit(false);

    ps.setInt(1, 201);
    ps.setString(2, "Rahul");
    ps.setDouble(3, 45000);
    ps.addBatch();

    ps.setInt(1, 202);
    ps.setString(2, "Anita");
    ps.setDouble(3, 52000);
    ps.addBatch();

    ps.setInt(1, 203);
    ps.setString(2, "Sanjay");
    ps.setDouble(3, 47000);
    ps.addBatch();

    int[] results = ps.executeBatch();
    conn.commit();

    System.out.println("Inserted records: " + results.length);
} catch (SQLException e) {
    e.printStackTrace();
}`}</code>
            </pre>

            <h2>🔹 Example 3: Batch with Error Handling</h2>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`try {
    conn.setAutoCommit(false);
    PreparedStatement ps = conn.prepareStatement("INSERT INTO data VALUES (?, ?)");

    for (int i = 1; i <= 5; i++) {
        ps.setInt(1, i);
        ps.setString(2, "Name" + i);
        ps.addBatch();

        if (i == 3) throw new SQLException("Simulated Error");
    }

    ps.executeBatch();
    conn.commit();
} catch (SQLException e) {
    System.out.println("Error occurred: " + e.getMessage());
    conn.rollback(); // Rollback all batch operations
}`}</code>
            </pre>

            <h2>🔹 Best Practices</h2>
            <ul>
                <li>✅ Always disable auto-commit when using batch processing.</li>
                <li>✅ Use `PreparedStatement` for parameterized queries.</li>
                <li>✅ Call `executeBatch()` periodically when handling very large batches (e.g., every 1000 inserts).</li>
                <li>✅ Handle SQL exceptions properly and rollback if necessary.</li>
            </ul>

            <h2>🧩 When to Use Batch Processing</h2>
            <ul>
                <li>Bulk inserting records from files or APIs</li>
                <li>Updating thousands of rows in one go</li>
                <li>Data migration or ETL jobs</li>
            </ul>

            <h2>📝 Test Yourself: Batch Processing Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "20px 0" }}>
                        <div style={{ marginBottom: 6 }}>{idx + 1}. {item.q}</div>
                        {item.options.map((opt, oidx) => (
                            <label key={oidx} style={{ display: "block", marginBottom: 2 }}>
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
                                    <span style={{ color: "green", marginLeft: 10 }}>✔ Correct</span>
                                )}
                                {showAnswers && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 10 }}>✗</span>
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
                        ? "🎉 Great job! You’ve mastered batch processing."
                        : "Review your answers and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: 8, marginTop: 18 }}>
                💡 <b>Tip:</b> Batch processing is most effective when combined with transactions.
                Wrap `addBatch()` and `executeBatch()` between `setAutoCommit(false)` and `commit()`.
            </p>
        </div>
    );
}
