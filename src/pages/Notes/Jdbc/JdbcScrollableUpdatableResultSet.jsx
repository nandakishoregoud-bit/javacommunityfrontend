import React from "react";

export default function JdbcScrollableUpdatableResultSet() {
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
            <h1>🔄 Scrollable & Updatable ResultSet in JDBC</h1>

            <p>
                By default, a <b>ResultSet</b> in JDBC is <b>forward-only</b> — meaning
                you can only move from the first row to the last using{" "}
                <code>next()</code>.
                But JDBC also provides more advanced types of ResultSets that allow:
            </p>

            <ul>
                <li>✅ Moving forward and backward between rows</li>
                <li>✅ Jumping to specific rows</li>
                <li>✅ Updating or deleting rows directly</li>
            </ul>

            <h2>🔹 Types of ResultSets (by Scrollability)</h2>
            <ul>
                <li>
                    <b>TYPE_FORWARD_ONLY</b> – Can move only forward (default).
                </li>
                <li>
                    <b>TYPE_SCROLL_INSENSITIVE</b> – Can move forward and backward, but
                    doesn’t reflect database changes made by others.
                </li>
                <li>
                    <b>TYPE_SCROLL_SENSITIVE</b> – Reflects changes made in the database
                    after the ResultSet was created.
                </li>
            </ul>

            <h2>🔹 Types of ResultSets (by Concurrency)</h2>
            <ul>
                <li>
                    <b>CONCUR_READ_ONLY</b> – Data is read-only; you can’t modify it.
                </li>
                <li>
                    <b>CONCUR_UPDATABLE</b> – Allows you to update, delete, or insert rows
                    directly through the ResultSet.
                </li>
            </ul>

            <h2>✅ Example: Creating a Scrollable ResultSet</h2>
            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);

// Create a scrollable and read-only ResultSet
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_READ_ONLY
);

ResultSet rs = stmt.executeQuery("SELECT id, name, course FROM students");

// Move to the last row
rs.last();
System.out.println("Last Student: " + rs.getString("name"));

// Move to the first row
rs.first();
System.out.println("First Student: " + rs.getString("name"));

// Move to a specific row
rs.absolute(2);
System.out.println("Second Student: " + rs.getString("name"));

// Move backward
rs.previous();
System.out.println("Previous Row: " + rs.getString("name"));`}</code>
            </pre>

            <h3>💡 Useful Cursor Methods:</h3>
            <ul>
                <li><code>first()</code> → Moves to the first row.</li>
                <li><code>last()</code> → Moves to the last row.</li>
                <li><code>next()</code> / <code>previous()</code> → Move forward/backward.</li>
                <li><code>absolute(int row)</code> → Jumps to a specific row.</li>
                <li><code>beforeFirst()</code> / <code>afterLast()</code> → Moves cursor outside the range.</li>
            </ul>

            <h2>🔹 Example: Creating an Updatable ResultSet</h2>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);

// Create updatable ResultSet
Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);

ResultSet rs = stmt.executeQuery("SELECT id, name, course FROM students");

// Update an existing record
rs.absolute(2); // Move to second row
rs.updateString("course", "Spring Boot");
rs.updateRow(); // Apply the update to the database

// Insert a new record
rs.moveToInsertRow();
rs.updateInt("id", 10);
rs.updateString("name", "Kishore");
rs.updateString("course", "JDBC");
rs.insertRow();

// Delete a record
rs.absolute(3);
rs.deleteRow();`}</code>
            </pre>

            <h2>📊 Difference Between Scrollable & Updatable ResultSets</h2>
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
                        <th>Feature</th>
                        <th>Scrollable ResultSet</th>
                        <th>Updatable ResultSet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Purpose</td>
                        <td>Navigate rows in any direction</td>
                        <td>Modify, insert, or delete rows</td>
                    </tr>
                    <tr>
                        <td>Movement</td>
                        <td>Forward, backward, random access</td>
                        <td>Forward, backward, random access</td>
                    </tr>
                    <tr>
                        <td>Can Modify Data?</td>
                        <td>❌ No</td>
                        <td>✅ Yes</td>
                    </tr>
                    <tr>
                        <td>Common Use</td>
                        <td>Read-only reports or result analysis</td>
                        <td>Editable data grids or admin panels</td>
                    </tr>
                </tbody>
            </table>

            <h2>🧠 When to Use</h2>
            <ul>
                <li>
                    Use <b>Scrollable ResultSet</b> when you need to browse results in
                    both directions.
                </li>
                <li>
                    Use <b>Updatable ResultSet</b> when you need to modify data without
                    writing separate SQL queries for each operation.
                </li>
            </ul>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> Scrollable and Updatable ResultSets can be resource-heavy.
                Use them only when necessary and always close them properly or use
                <b> try-with-resources </b> to avoid memory leaks.
            </div>

            <h2>📝 Summary</h2>
            <ul>
                <li>
                    <b>Scrollable ResultSet</b> → Move forward/backward across rows.
                </li>
                <li>
                    <b>Updatable ResultSet</b> → Modify data directly in the database.
                </li>
                <li>
                    Created by passing custom type and concurrency mode to{" "}
                    <code>createStatement()</code>.
                </li>
            </ul>
        </div>
    );
}
