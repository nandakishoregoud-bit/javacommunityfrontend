import React from "react";

export default function JdbcResultSet() {
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
            <h1>📘 ResultSet and ResultSetMetaData in JDBC</h1>

            <p>
                In JDBC, after executing a <code>SELECT</code> query, the database returns a
                <b> ResultSet </b> object. It represents a table of data where each row
                corresponds to a record and each column to a field.
            </p>

            <h2>🔹 What is ResultSet?</h2>
            <p>
                The <code>ResultSet</code> interface provides methods to read data from the
                database row by row. You can move through rows and retrieve column values
                using getters like <code>getInt()</code>, <code>getString()</code>,
                <code>getDate()</code>, etc.
            </p>

            <h3>✅ Example: Reading Data Using ResultSet</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT id, name, course FROM students");

while (rs.next()) {
    int id = rs.getInt("id");
    String name = rs.getString("name");
    String course = rs.getString("course");
    System.out.println(id + " - " + name + " - " + course);
}

// Close resources
rs.close();
stmt.close();
conn.close();`}</code>
            </pre>

            <h3>💡 Important Methods</h3>
            <ul>
                <li>
                    <code>next()</code> → Moves to the next row (returns false when no more rows)
                </li>
                <li>
                    <code>getXxx(columnName)</code> → Retrieves data from a column (e.g.,
                    getInt, getString)
                </li>
                <li>
                    <code>close()</code> → Closes the ResultSet and releases resources
                </li>
            </ul>

            <h2>🔹 ResultSet Types</h2>
            <p>
                Depending on how you want to navigate and update rows, ResultSets can be of
                different types:
            </p>
            <ul>
                <li>
                    <b>TYPE_FORWARD_ONLY</b> – Default; can only move forward (using{" "}
                    <code>next()</code>).
                </li>
                <li>
                    <b>TYPE_SCROLL_INSENSITIVE</b> – Allows moving forward and backward.
                </li>
                <li>
                    <b>TYPE_SCROLL_SENSITIVE</b> – Similar to above, but reflects DB changes.
                </li>
            </ul>

            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`Statement stmt = conn.createStatement(
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_READ_ONLY
);
ResultSet rs = stmt.executeQuery("SELECT * FROM students");
rs.afterLast();
while (rs.previous()) {
    System.out.println(rs.getString("name"));
}`}</code>
            </pre>

            <h2>🔹 What is ResultSetMetaData?</h2>
            <p>
                <b>ResultSetMetaData</b> provides information about the structure of a
                ResultSet — like number of columns, column names, and data types.
            </p>

            <h3>✅ Example: Using ResultSetMetaData</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`ResultSet rs = stmt.executeQuery("SELECT * FROM students");
ResultSetMetaData meta = rs.getMetaData();

int columnCount = meta.getColumnCount();
System.out.println("Total Columns: " + columnCount);

for (int i = 1; i <= columnCount; i++) {
    System.out.println(meta.getColumnName(i) + " - " + meta.getColumnTypeName(i));
}`}</code>
            </pre>

            <p>
                This is useful when working with <b>dynamic queries</b> where column names or
                counts are not known in advance.
            </p>

            <h2>📊 ResultSet Navigation Methods</h2>
            <ul>
                <li>
                    <code>next()</code> → Move to next row
                </li>
                <li>
                    <code>previous()</code> → Move to previous row
                </li>
                <li>
                    <code>first()</code> / <code>last()</code> → Jump to first or last row
                </li>
                <li>
                    <code>absolute(int row)</code> → Jump to specific row number
                </li>
                <li>
                    <code>beforeFirst()</code> / <code>afterLast()</code> → Move cursor outside
                    the result set
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
                💡 <b>Tip:</b> Always close your <code>ResultSet</code>,
                <code>Statement</code>, and <code>Connection</code> after use. Use
                <b> try-with-resources </b> to manage them automatically.
            </div>

            <h2>🧠 Summary</h2>
            <ul>
                <li>
                    <b>ResultSet</b> – Used to read data row by row from the database.
                </li>
                <li>
                    <b>ResultSetMetaData</b> – Used to get info about column structure and types.
                </li>
                <li>
                    Use <b>scrollable ResultSets</b> for advanced navigation or editing.
                </li>
            </ul>
        </div>
    );
}
