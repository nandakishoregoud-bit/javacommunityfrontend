import { useState } from "react";

export default function JdbcExecuteMethods() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which method should you use for SELECT queries that return rows?",
            options: ["executeQuery()", "executeUpdate()", "execute()", "executeBatch()"],
            answer: 0,
        },
        {
            q: "What does executeUpdate() return?",
            options: [
                "A ResultSet",
                "Number of affected rows (int)",
                "Boolean",
                "void"
            ],
            answer: 1,
        },
        {
            q: "Which method can be used for statements where you don’t know if the SQL returns rows or update count?",
            options: ["executeQuery()", "executeUpdate()", "execute()", "executeLargeUpdate()"],
            answer: 2,
        },
        {
            q: "Which method is best for large-batch update counts in Java 8+?",
            options: ["executeQuery()", "executeUpdate()", "executeLargeUpdate()", "executeBatch()"],
            answer: 2,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>⚙️ JDBC: executeQuery, executeUpdate, execute, and Related Methods</h1>

            <p>
                JDBC provides several ways to execute SQL statements from Java. The three most common methods on
                <strong> Statement</strong> / <strong>PreparedStatement</strong> are:
            </p>
            <ul>
                <li><b>executeQuery()</b> — use for <code>SELECT</code> statements; returns a <code>ResultSet</code>.</li>
                <li><b>executeUpdate()</b> — use for <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, DDL; returns an <code>int</code> (rows affected).</li>
                <li><b>execute()</b> — generic; can handle both queries and updates. Returns <code>boolean</code> indicating if result is a <code>ResultSet</code>.</li>
            </ul>

            <h2>1. <code>executeQuery()</code></h2>
            <p><code>executeQuery()</code> is specialized for SELECT statements that return rows. It always returns a <code>ResultSet</code>.</p>

            <h3>Usage & Return type</h3>
            <ul>
                <li>Called on <code>Statement</code> or <code>PreparedStatement</code>.</li>
                <li>Return type: <code>ResultSet</code>.</li>
            </ul>

            <h3>Example</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`String sql = "SELECT id, name FROM students WHERE age > ?";
try (PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setInt(1, 18);
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");
            System.out.println(id + " - " + name);
        }
    }
}`}</code>
            </pre>

            <h2>2. <code>executeUpdate()</code></h2>
            <p><code>executeUpdate()</code> is used for DML (INSERT/UPDATE/DELETE) and some DDL (CREATE TABLE, ALTER, DROP). It returns the number of rows affected.</p>

            <h3>Usage & Return type</h3>
            <ul>
                <li>Called on <code>Statement</code> or <code>PreparedStatement</code>.</li>
                <li>Return type: <code>int</code> — number of rows affected. For DDL it may return 0.</li>
            </ul>

            <h3>Examples</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`// INSERT
String insert = "INSERT INTO students (name, age) VALUES (?, ?)";
try (PreparedStatement ps = conn.prepareStatement(insert)) {
    ps.setString(1, "Nanda");
    ps.setInt(2, 24);
    int rows = ps.executeUpdate(); // rows == 1
}

// UPDATE
String update = "UPDATE students SET age = ? WHERE id = ?";
try (PreparedStatement ps = conn.prepareStatement(update)) {
    ps.setInt(1, 25);
    ps.setInt(2, 2);
    int rowsUpdated = ps.executeUpdate();
}`}</code>
            </pre>

            <h2>3. <code>execute()</code></h2>
            <p>
                <code>execute()</code> is the most general execution method. It returns a <code>boolean</code>:
            </p>
            <ul>
                <li><code>true</code> — the result is a <code>ResultSet</code> (e.g., SELECT).</li>
                <li><code>false</code> — the result is an update count or no result (DDL/DML).</li>
            </ul>

            <h3>How to handle results from <code>execute()</code></h3>
            <p>When you call <code>execute()</code>, you must check which type of result you received and then use <code>getResultSet()</code> or <code>getUpdateCount()</code>. You can also iterate multiple results with <code>getMoreResults()</code> (useful for stored procedures that return multiple result sets/update counts).</p>

            <h3>Example</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`String sql = "..."; // unknown type at runtime
try (Statement stmt = conn.createStatement()) {
    boolean hasResultSet = stmt.execute(sql);

    if (hasResultSet) {
        try (ResultSet rs = stmt.getResultSet()) {
            // handle rows
        }
    } else {
        int updateCount = stmt.getUpdateCount();
        System.out.println("Update count: " + updateCount);
    }
}`}</code>
            </pre>

            <h2>4. <code>executeLargeUpdate()</code> (Java 8+ / 9+)</h2>
            <p>
                For very large update counts (bigger than <code>Integer.MAX_VALUE</code>), Java introduced <code>executeLargeUpdate()</code> which returns a <code>long</code>. Use it for huge batch operations where update counts can exceed 2<sup>31</sup>-1.
            </p>

            <h3>Example</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`String sql = "UPDATE big_table SET flag = 1";
try (Statement stmt = conn.createStatement()) {
    long count = stmt.executeLargeUpdate(sql);
    System.out.println("Rows updated: " + count);
}`}</code>
            </pre>

            <h2>5. <code>executeBatch()</code> and batch handling</h2>
            <p>
                For many repeated DML operations, batching is faster. You add multiple parameter sets to a <code>PreparedStatement</code> with <code>addBatch()</code>, then call <code>executeBatch()</code>. It returns an <code>int[]</code> of update counts (or <code>long[]</code> for <code>executeLargeBatch()</code>).
            </p>

            <h3>Example</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`String insert = "INSERT INTO logs (msg) VALUES (?)";
try (PreparedStatement ps = conn.prepareStatement(insert)) {
    for (String m : messages) {
        ps.setString(1, m);
        ps.addBatch();
    }
    int[] results = ps.executeBatch();
    // results[i] => number of rows affected for batch item i (or Statement.SUCCESS_NO_INFO)
}`}</code>
            </pre>

            <h2>6. Stored procedures — combine <code>execute()</code> with <code>CallableStatement</code></h2>
            <p>
                Stored procedures can return multiple result sets and update counts. Use <code>CallableStatement</code> and iterate results with <code>getMoreResults()</code> and <code>getUpdateCount()</code>.
            </p>

            <h3>Example (handling multiple results)</h3>
            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6, overflowX: "auto" }}>
                <code>{`CallableStatement cs = conn.prepareCall("{call complexProcedure()}");
boolean hasResults = cs.execute();
int rsCount = 0;

while (true) {
    if (hasResults) {
        try (ResultSet rs = cs.getResultSet()) {
            // process this result set
            rsCount++;
        }
    } else {
        int updateCount = cs.getUpdateCount();
        if (updateCount == -1) {
            // no more results
            break;
        }
        System.out.println("Update count: " + updateCount);
    }
    hasResults = cs.getMoreResults();
}`}</code>
            </pre>

            <h2>Summary: When to use which method</h2>
            <ul>
                <li><b>SELECT only →</b> use <code>executeQuery()</code> (cleanest & type-safe).</li>
                <li><b>INSERT/UPDATE/DELETE/DDL →</b> use <code>executeUpdate()</code> (returns affected rows).</li>
                <li><b>Unknown/Stored Procedures/Multiple Results →</b> use <code>execute()</code> and check <code>getResultSet()</code>/<code>getUpdateCount()</code>.</li>
                <li><b>Large update counts →</b> use <code>executeLargeUpdate()</code>/<code>executeLargeBatch()</code>.</li>
                <li><b>Many repeated statements →</b> use <code>executeBatch()</code> for better throughput.</li>
            </ul>

            <h2>Best practices</h2>
            <ul>
                <li>Prefer the most specific method for clarity: <code>executeQuery()</code> for SELECT, <code>executeUpdate()</code> for DML.</li>
                <li>Always use <code>PreparedStatement</code> for parameterized statements (security & performance).</li>
                <li>Use try-with-resources to close <code>ResultSet</code>, <code>Statement</code>, and <code>Connection</code>.</li>
                <li>Check update counts and handle <code>Statement.SUCCESS_NO_INFO</code> and <code>Statement.EXECUTE_FAILED</code> values when using batches.</li>
                <li>When using <code>execute()</code>, always check what was returned before calling <code>getResultSet()</code>.</li>
            </ul>

            <h2>📝 Quick reference table</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "#f0f0f0" }}>
                        <th style={{ border: "1px solid #ddd", padding: 8 }}>Method</th>
                        <th style={{ border: "1px solid #ddd", padding: 8 }}>Use For</th>
                        <th style={{ border: "1px solid #ddd", padding: 8 }}>Return Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>executeQuery()</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>SELECT</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>ResultSet</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>executeUpdate()</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>INSERT/UPDATE/DELETE/DDL</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>int (rows affected)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>execute()</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>Unknown / DDL or SELECT or Stored Proc</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>boolean (true or false)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>executeLargeUpdate()</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>Huge UPDATE/INSERT/DELETE</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>long (rows affected)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>executeBatch()</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>Batched DML</td>
                        <td style={{ border: "1px solid #ddd", padding: 8 }}>int[] (or long[] for large)</td>
                    </tr>
                </tbody>
            </table>

            <h2>📝 Test Yourself: execute* Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "16px 0" }}>
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
                        ? "🎉 Great! You understand JDBC execute methods."
                        : "Review the examples and try again."}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: 8, marginTop: 18 }}>
                💡 <b>Tip:</b> Use the specific method for clarity and safety. Prefer <code>executeQuery()</code> and <code>executeUpdate()</code> where applicable,
                and reserve <code>execute()</code> for stored procedures or when you need to handle multiple result types.
            </p>
        </div>
    );
}
