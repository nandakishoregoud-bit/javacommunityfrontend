import React from "react";

export default function JdbcHandlingLargeData() {
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
            <h1>🗂️ Handling Large Data (BLOB & CLOB) in JDBC</h1>

            <p>
                In databases, sometimes we need to store and retrieve <b>large amounts of
                    data</b> — like images, videos, PDF files, or long text documents.
                In JDBC, such data is handled using:
            </p>

            <ul>
                <li>
                    <b>BLOB</b> (Binary Large Object) → for storing binary data (e.g. images, PDFs)
                </li>
                <li>
                    <b>CLOB</b> (Character Large Object) → for storing large text data (e.g. articles, logs)
                </li>
            </ul>

            <h2>🔹 What is BLOB?</h2>
            <p>
                <b>BLOB</b> stores binary data such as images, audio, or files.
                JDBC provides methods to write and read binary streams using{" "}
                <code>setBinaryStream()</code> and <code>getBinaryStream()</code>.
            </p>

            <h3>✅ Example: Inserting an Image into Database</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`import java.io.*;
import java.sql.*;

public class InsertImage {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection(url, user, pass);
        String sql = "INSERT INTO images (name, data) VALUES (?, ?)";
        PreparedStatement ps = conn.prepareStatement(sql);

        ps.setString(1, "profile_pic");
        
        FileInputStream fis = new FileInputStream("C:/images/pic.jpg");
        ps.setBinaryStream(2, fis, fis.available());

        int rows = ps.executeUpdate();
        System.out.println(rows + " image saved successfully!");
        
        ps.close();
        conn.close();
    }
}`}</code>
            </pre>

            <h3>✅ Example: Retrieving an Image from Database</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`String sql = "SELECT data FROM images WHERE name = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, "profile_pic");
ResultSet rs = ps.executeQuery();

if (rs.next()) {
    InputStream is = rs.getBinaryStream("data");
    FileOutputStream fos = new FileOutputStream("output.jpg");
    
    byte[] buffer = new byte[1024];
    while (is.read(buffer) > 0) {
        fos.write(buffer);
    }
    fos.close();
    is.close();
    System.out.println("Image retrieved successfully!");
}`}</code>
            </pre>

            <h2>🔹 What is CLOB?</h2>
            <p>
                <b>CLOB</b> (Character Large Object) stores large text-based data such as
                JSON, XML, or long documents. JDBC provides methods to handle them using{" "}
                <code>setCharacterStream()</code> and <code>getCharacterStream()</code>.
            </p>

            <h3>✅ Example: Inserting a Large Text File</h3>
            <pre
                style={{ background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`FileReader reader = new FileReader("C:/files/article.txt");
String sql = "INSERT INTO articles (title, content) VALUES (?, ?)";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, "JDBC Large Data Example");
ps.setCharacterStream(2, reader);
ps.executeUpdate();
ps.close();
conn.close();`}</code>
            </pre>

            <h3>✅ Example: Reading Large Text (CLOB) from Database</h3>
            <pre
                style={{ background: "#eef", padding: "10px", borderRadius: "8px" }}
            >
                <code>{`String sql = "SELECT content FROM articles WHERE title = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, "JDBC Large Data Example");
ResultSet rs = ps.executeQuery();

if (rs.next()) {
    Reader r = rs.getCharacterStream("content");
    BufferedReader br = new BufferedReader(r);
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
    br.close();
}`}</code>
            </pre>

            <h2>📘 Key Methods</h2>
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
                        <th>Operation</th>
                        <th>Method</th>
                        <th>Used For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Insert Binary Data</td>
                        <td>setBinaryStream()</td>
                        <td>BLOBs (e.g., images, PDFs)</td>
                    </tr>
                    <tr>
                        <td>Retrieve Binary Data</td>
                        <td>getBinaryStream()</td>
                        <td>BLOBs (download or display)</td>
                    </tr>
                    <tr>
                        <td>Insert Text Data</td>
                        <td>setCharacterStream()</td>
                        <td>CLOBs (large text)</td>
                    </tr>
                    <tr>
                        <td>Retrieve Text Data</td>
                        <td>getCharacterStream()</td>
                        <td>CLOBs (read files or logs)</td>
                    </tr>
                </tbody>
            </table>

            <h2>🧠 Best Practices</h2>
            <ul>
                <li>Use <b>PreparedStatement</b> — it handles binary and text data safely.</li>
                <li>
                    Avoid loading entire files into memory; always use <b>streams</b> for large data.
                </li>
                <li>
                    Store only file paths in DB for very large files if possible — to reduce DB load.
                </li>
                <li>Always close streams and statements properly or use try-with-resources.</li>
            </ul>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> BLOB and CLOB handling may differ slightly across databases
                (MySQL, Oracle, PostgreSQL). Always test your code with your target DB.
            </div>

            <h2>📝 Summary</h2>
            <ul>
                <li>
                    <b>BLOB</b> – For binary data like images and files.
                </li>
                <li>
                    <b>CLOB</b> – For large text data.
                </li>
                <li>
                    Use <code>setBinaryStream()</code> and <code>getCharacterStream()</code> for handling large data efficiently.
                </li>
            </ul>
        </div>
    );
}
