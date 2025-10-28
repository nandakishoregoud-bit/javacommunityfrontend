import { useState } from "react";

export default function JdbcHandlingResults() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which method returns true if a query result is a ResultSet?",
            options: ["executeQuery()", "executeUpdate()", "execute()", "getMoreResults()"],
            answer: 2,
        },
        {
            q: "What method is used to retrieve the ResultSet after calling execute()?",
            options: ["getResultSet()", "getUpdateCount()", "next()", "executeQuery()"],
            answer: 0,
        },
        {
            q: "When a DML statement (INSERT/UPDATE/DELETE) is executed, what should you check?",
            options: [
                "getResultSet()",
                "getUpdateCount()",
                "getMoreResults()",
                "executeQuery()"
            ],
            answer: 1,
        },
        {
            q: "How do you handle multiple results from a stored procedure?",
            options: [
                "By using multiple executeQuery() calls",
                "By using getMoreResults() and getUpdateCount() in a loop",
                "By using only executeUpdate()",
                "By calling executeLargeUpdate()"
            ],
            answer: 1,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>🧩 Handling Different Results in JDBC</h1>
            <p>
                After executing an SQL statement in JDBC, the database can return different types of results —
                such as a <b>ResultSet</b>, an <b>update count</b>, or sometimes <b>no result at all</b>.
                Understanding how to handle each type correctly is essential for writing reliable and efficient database code.
            </p>

            <h2>🔹 1. Handling <code>ResultSet</code> (SELECT Queries)</h2>
            <p>
                When executing <b>SELECT</b> statements, the result is a <code>ResultSet</code> — a table-like structure
                where you can iterate through rows and columns.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`String sql = "SELECT id, name, course FROM students";
try (Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery(sql)) {

    while (rs.next()) {
        int id = rs.getInt("id");
        String name = rs.getString("name");
        String course = rs.getString("course");
        System.out.println(id + " | " + name + " | " + course);
    }
}`}</code>
            </pre>

            <p>
                💡 You can access data using either <code>column name</code> or <code>column index</code>.
                Use <b>try-with-resources</b> to automatically close <code>ResultSet</code> and <code>Statement</code>.
            </p>

            <h2>🔹 2. Handling Update Count (INSERT / UPDATE / DELETE)</h2>
            <p>
                For <b>DML</b> operations, JDBC methods like <code>executeUpdate()</code> return an integer representing
                the number of rows affected.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`String sql = "UPDATE students SET course='Spring Boot' WHERE id=1";
try (Statement stmt = conn.createStatement()) {
    int rowsUpdated = stmt.executeUpdate(sql);
    System.out.println("Rows affected: " + rowsUpdated);
}`}</code>
            </pre>

            <p>
                💡 If the update count is <code>0</code>, no rows were affected.
                This is useful for detecting failed updates or missing records.
            </p>

            <h2>🔹 3. Handling No Results (DDL Statements)</h2>
            <p>
                DDL statements like <code>CREATE TABLE</code>, <code>ALTER</code>, or <code>DROP</code> usually
                return no results. <code>executeUpdate()</code> returns <b>0</b> in such cases.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`String sql = "CREATE TABLE demo (id INT, name VARCHAR(50))";
try (Statement stmt = conn.createStatement()) {
    int result = stmt.executeUpdate(sql);
    System.out.println("Return value: " + result); // usually 0
}`}</code>
            </pre>

            <h2>🔹 4. Handling Unknown Results with <code>execute()</code></h2>
            <p>
                The <code>execute()</code> method is used when you don’t know in advance whether the SQL will
                return a <b>ResultSet</b> or an <b>update count</b>.
                It returns <b>true</b> if the result is a <code>ResultSet</code> and <b>false</b> otherwise.
            </p>

            <pre style={{ background: "#f5f5f5", padding: 10, borderRadius: 6 }}>
                <code>{`String sql = "..."; // could be SELECT or UPDATE
try (Statement stmt = conn.createStatement()) {
    boolean hasResultSet = stmt.execute(sql);

    if (hasResultSet) {
        try (ResultSet rs = stmt.getResultSet()) {
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
        }
    } else {
        int count = stmt.getUpdateCount();
        System.out.println("Rows affected: " + count);
    }
}`}</code>
            </pre>

            <h2>🔹 5. Handling Multiple Results (Stored Procedures)</h2>
            <p>
                Some stored procedures or complex SQL statements return <b>multiple results</b> —
                such as several <code>ResultSet</code> objects or update counts.
                You can use <code>getMoreResults()</code> to loop through all of them.
            </p>

            <pre style={{ background: "#eef", padding: 10, borderRadius: 6 }}>
                <code>{`CallableStatement cs = conn.prepareCall("{call complexProcedure()}");
boolean hasResults = cs.execute();

while (true) {
    if (hasResults) {
        try (ResultSet rs = cs.getResultSet()) {
            while (rs.next()) {
                System.out.println("Data: " + rs.getString(1));
            }
        }
    } else {
        int updateCount = cs.getUpdateCount();
        if (updateCount == -1) break; // no more results
        System.out.println("Update Count: " + updateCount);
    }
    hasResults = cs.getMoreResults();
}`}</code>
            </pre>

            <p>
                💡 This is especially useful for stored procedures that both modify data and return query results.
            </p>

            <h2>📋 Summary Table</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", background: "#fff" }}>
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>SQL Type</th>
                        <th>Method</th>
                        <th>Return Type</th>
                        <th>How to Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SELECT</td>
                        <td>executeQuery()</td>
                        <td>ResultSet</td>
                        <td>Iterate rows using rs.next()</td>
                    </tr>
                    <tr>
                        <td>INSERT / UPDATE / DELETE</td>
                        <td>executeUpdate()</td>
                        <td>int</td>
                        <td>Check affected rows</td>
                    </tr>
                    <tr>
                        <td>Mixed / Stored Procedure</td>
                        <td>execute()</td>
                        <td>boolean</td>
                        <td>Check hasResultSet → getResultSet() / getUpdateCount()</td>
                    </tr>
                    <tr>
                        <td>Multiple Results</td>
                        <td>execute() + getMoreResults()</td>
                        <td>Varies</td>
                        <td>Loop until getMoreResults() == false</td>
                    </tr>
                </tbody>
            </table>

            <h2>🧠 Best Practices</h2>
            <ul>
                <li>✅ Always check what type of result was returned by <code>execute()</code>.</li>
                <li>✅ Close <code>ResultSet</code> and <code>Statement</code> using try-with-resources.</li>
                <li>✅ For predictable SQL (known to return rows), use <code>executeQuery()</code>.</li>
                <li>✅ For DML, use <code>executeUpdate()</code> — it’s simpler and clearer.</li>
                <li>✅ For stored procedures, handle multiple results carefully with <code>getMoreResults()</code>.</li>
            </ul>

            <h2>📝 Test Yourself: Handling Results Quiz</h2>
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
                        ? "🎉 Excellent! You know how to handle results in JDBC."
                        : "Review the explanations and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: 8, marginTop: 18 }}>
                💡 <b>Tip:</b> If your code handles multiple SQL operations, prefer using <code>execute()</code> so
                you can dynamically detect and process both <code>ResultSet</code> and update counts.
            </p>
        </div>
    );
}
