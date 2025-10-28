import React from "react";

export default function JdbcDatabaseMetaData() {
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
            <h1>🧠 DatabaseMetaData in JDBC</h1>

            <p>
                <b>DatabaseMetaData</b> is an interface in JDBC that provides detailed
                information about the database itself — such as the database name,
                version, driver details, supported features, and the structure of tables.
            </p>

            <p>
                This is extremely useful when you need to write <b>database-independent
                    code</b>, automatically generate reports, or debug connection and driver
                issues.
            </p>

            <h2>🔹 Getting DatabaseMetaData Object</h2>
            <p>
                Once a <code>Connection</code> object is established, you can get its
                metadata using:
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
DatabaseMetaData dbMeta = conn.getMetaData();`}</code>
            </pre>

            <h3>✅ Example: Getting Database Information</h3>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
DatabaseMetaData dbMeta = conn.getMetaData();

System.out.println("Database Product Name: " + dbMeta.getDatabaseProductName());
System.out.println("Database Product Version: " + dbMeta.getDatabaseProductVersion());
System.out.println("Driver Name: " + dbMeta.getDriverName());
System.out.println("Driver Version: " + dbMeta.getDriverVersion());
System.out.println("User Name: " + dbMeta.getUserName());`}</code>
            </pre>

            <h2>🔹 Commonly Used Methods in DatabaseMetaData</h2>
            <table
                border="1"
                cellPadding="8"
                style={{
                    borderCollapse: "collapse",
                    marginTop: "10px",
                    width: "100%",
                    background: "#fff",
                }}
            >
                <thead style={{ background: "#e0e0e0" }}>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>getDatabaseProductName()</td>
                        <td>Returns the name of the database (e.g., MySQL, PostgreSQL).</td>
                    </tr>
                    <tr>
                        <td>getDatabaseProductVersion()</td>
                        <td>Returns the version of the database.</td>
                    </tr>
                    <tr>
                        <td>getDriverName()</td>
                        <td>Returns the name of the JDBC driver used.</td>
                    </tr>
                    <tr>
                        <td>getDriverVersion()</td>
                        <td>Returns the version of the driver.</td>
                    </tr>
                    <tr>
                        <td>getUserName()</td>
                        <td>Returns the username used to connect to the database.</td>
                    </tr>
                    <tr>
                        <td>getURL()</td>
                        <td>Returns the database URL used for the connection.</td>
                    </tr>
                    <tr>
                        <td>supportsTransactions()</td>
                        <td>Checks if the database supports transactions.</td>
                    </tr>
                    <tr>
                        <td>supportsBatchUpdates()</td>
                        <td>Checks if batch updates are supported.</td>
                    </tr>
                    <tr>
                        <td>getTables()</td>
                        <td>Returns a list of tables available in the database.</td>
                    </tr>
                </tbody>
            </table>

            <h2>🔹 Example: Listing All Tables in the Database</h2>
            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`Connection conn = DriverManager.getConnection(url, user, pass);
DatabaseMetaData dbMeta = conn.getMetaData();

ResultSet tables = dbMeta.getTables(null, null, "%", new String[]{"TABLE"});
System.out.println("Tables in the database:");

while (tables.next()) {
    System.out.println(tables.getString("TABLE_NAME"));
}

tables.close();
conn.close();`}</code>
            </pre>

            <h2>📘 When to Use DatabaseMetaData</h2>
            <ul>
                <li>✅ To get information about database capabilities and features.</li>
                <li>✅ To check if a database supports specific SQL features (like batch updates, transactions, etc.).</li>
                <li>✅ To dynamically list tables and columns for report generation or admin dashboards.</li>
                <li>✅ To write cross-database compatible code.</li>
            </ul>

            <h3>💡 Example: Checking Supported Features</h3>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                <code>{`if (dbMeta.supportsTransactions()) {
    System.out.println("Database supports transactions!");
} else {
    System.out.println("Database does not support transactions.");
}

if (dbMeta.supportsBatchUpdates()) {
    System.out.println("Database supports batch updates!");
}`}</code>
            </pre>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> <code>DatabaseMetaData</code> helps make your application
                <b> database-agnostic </b> — meaning you can switch databases (like from
                MySQL to PostgreSQL) with minimal code changes.
            </div>

            <h2>🧠 Summary</h2>
            <ul>
                <li>
                    <b>DatabaseMetaData</b> gives information about the database and driver.
                </li>
                <li>
                    It is retrieved using <code>Connection.getMetaData()</code>.
                </li>
                <li>
                    Common uses include checking database support for features and listing tables.
                </li>
            </ul>
        </div>
    );
}
