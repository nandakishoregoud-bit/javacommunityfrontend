import { useState } from "react";

export default function JdbcTransactions() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "By default, every SQL statement in JDBC is executed in?",
            options: ["Manual commit mode", "Auto-commit mode", "Batch mode", "Rollback mode"],
            answer: 1,
        },
        {
            q: "Which method disables auto-commit mode?",
            options: ["conn.close(false)", "conn.setAutoCommit(false)", "conn.disableAutoCommit()", "conn.commit(false)"],
            answer: 1,
        },
        {
            q: "Which method is used to undo all uncommitted changes?",
            options: ["rollback()", "commit()", "cancel()", "undo()"],
            answer: 0,
        },
        {
            q: "What is a Savepoint used for?",
            options: [
                "Temporarily saving data in ResultSet",
                "Partially rolling back within a transaction",
                "Saving the current connection state",
                "Creating a backup of the database"
            ],
            answer: 1,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>💳 Transactions in JDBC</h1>
            <p>
                A <b>transaction</b> is a group of one or more SQL operations that execute as a single unit of work.
                Either <b>all statements succeed</b> (commit) or <b>none of them take effect</b> (rollback).
                Transactions ensure <b>data consistency</b> and <b>integrity</b>.
            </p>

            <h2>🔹 Why Use Transactions?</h2>
            <ul>
                <li>✅ To prevent data inconsistency when one of several SQL operations fails.</li>
                <li>✅ To handle banking, order processing, or multi-step business operations safely.</li>
                <li>✅ To ensure <b>ACID properties</b> — Atomicity, Consistency, Isolation, and Durability.</li>
            </ul>

            <h2>🔹 Default Behavior: Auto-Commit Mode</h2>
            <p>
                By default, JDBC connections run in <b>auto-commit</b> mode.
                This means every SQL statement is immediately committed after execution.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
// Auto-commit is true by default
System.out.println(conn.getAutoCommit()); // true`}</code>
            </pre>

            <h2>🔹 Turning Off Auto-Commit</h2>
            <p>
                To manage transactions manually, disable auto-commit mode using
                <code> setAutoCommit(false) </code>. Then, commit or rollback explicitly.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`try (Connection conn = DriverManager.getConnection(url, user, pass)) {
    conn.setAutoCommit(false); // Start transaction

    try (Statement stmt = conn.createStatement()) {
        stmt.executeUpdate("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
        stmt.executeUpdate("UPDATE accounts SET balance = balance + 500 WHERE id = 2");
        conn.commit(); // ✅ commit both updates
        System.out.println("Transaction committed successfully!");
    } catch (Exception e) {
        conn.rollback(); // ❌ undo all changes
        System.out.println("Transaction rolled back due to error: " + e.getMessage());
    }
}`}</code>
            </pre>

            <p>
                💡 Both updates succeed or fail together — maintaining consistency.
            </p>

            <h2>🔹 Using Savepoints</h2>
            <p>
                A <b>Savepoint</b> allows you to roll back part of a transaction instead of the whole thing.
            </p>

            <pre style={{ background: "#eef", padding: 10, borderRadius: 6 }}>
                <code>{`conn.setAutoCommit(false);
Statement stmt = conn.createStatement();

stmt.executeUpdate("INSERT INTO students VALUES (101, 'Ravi')");
Savepoint sp = conn.setSavepoint("AfterFirstInsert");

stmt.executeUpdate("INSERT INTO students VALUES (102, 'InvalidName###')");

// Rollback only to savepoint
conn.rollback(sp);
conn.commit(); // Commit valid inserts only
System.out.println("Rolled back to savepoint and committed valid data.");`}</code>
            </pre>

            <p>
                💡 Savepoints are useful when only part of a large transaction fails and you want to preserve earlier successful operations.
            </p>

            <h2>🔹 Transaction Control Methods</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", background: "#fff" }}>
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>setAutoCommit(false)</code></td>
                        <td>Starts a manual transaction mode</td>
                    </tr>
                    <tr>
                        <td><code>commit()</code></td>
                        <td>Applies all SQL operations since last commit</td>
                    </tr>
                    <tr>
                        <td><code>rollback()</code></td>
                        <td>Undoes all SQL operations since last commit</td>
                    </tr>
                    <tr>
                        <td><code>setSavepoint(name)</code></td>
                        <td>Creates a savepoint within the current transaction</td>
                    </tr>
                    <tr>
                        <td><code>rollback(savepoint)</code></td>
                        <td>Rolls back only to the specified savepoint</td>
                    </tr>
                    <tr>
                        <td><code>releaseSavepoint(savepoint)</code></td>
                        <td>Removes the savepoint (optional)</td>
                    </tr>
                </tbody>
            </table>

            <h2>🔹 Example: Real-World Banking Transaction</h2>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`try (Connection conn = DriverManager.getConnection(url, user, pass)) {
    conn.setAutoCommit(false);
    try (PreparedStatement debit = conn.prepareStatement(
            "UPDATE accounts SET balance = balance - ? WHERE id = ?");
         PreparedStatement credit = conn.prepareStatement(
            "UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

        debit.setDouble(1, 1000);
        debit.setInt(2, 101);

        credit.setDouble(1, 1000);
        credit.setInt(2, 102);

        debit.executeUpdate();
        credit.executeUpdate();
        conn.commit(); // ✅ commit if both succeed
        System.out.println("Transaction Successful!");
    } catch (SQLException e) {
        conn.rollback(); // ❌ rollback all
        System.out.println("Transaction Failed. Rolled back!");
    }
}`}</code>
            </pre>

            <h2>🧠 Best Practices</h2>
            <ul>
                <li>✅ Always disable auto-commit before beginning a transaction.</li>
                <li>✅ Always use try-catch-finally or try-with-resources to close connections safely.</li>
                <li>✅ Commit only after all operations succeed.</li>
                <li>✅ Rollback immediately when an exception occurs.</li>
                <li>✅ Use savepoints for partial rollbacks when needed.</li>
            </ul>

            <h2>📝 Test Yourself: Transactions Quiz</h2>
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
                        ? "🎉 Excellent! You understand transactions perfectly."
                        : "Review your answers and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: 8, marginTop: 18 }}>
                💡 <b>Tip:</b> Always ensure <code>commit()</code> or <code>rollback()</code> is called before closing the connection.
            </p>
        </div>
    );
}
