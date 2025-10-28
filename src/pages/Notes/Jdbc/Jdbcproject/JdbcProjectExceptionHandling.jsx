import React from "react";

export default function JdbcProjectExceptionHandling() {
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
            <h1>⚙️ JDBC Project — Exception Handling & Logging</h1>

            <p>
                In any real-world project, errors and unexpected issues can occur while
                connecting to a database, executing SQL queries, or reading input.
                Proper <b>exception handling</b> ensures that your application handles
                these problems gracefully without crashing.
            </p>

            <h2>🎯 Objectives</h2>
            <ul>
                <li>Understand why we need exception handling in JDBC</li>
                <li>Use <code>try-catch-finally</code> to handle SQL exceptions</li>
                <li>Implement <b>custom exception messages</b></li>
                <li>Add <b>logging</b> for better debugging (using <code>java.util.logging</code>)</li>
            </ul>

            <h2>📘 Step 1: Basic Exception Handling in DAO</h2>
            <p>
                Let’s modify the <code>StudentDAO</code> class to handle exceptions in a
                clean and consistent way.
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    overflowX: "auto",
                }}
            >
                {`import java.sql.*;
import java.util.*;
import model.Student;
import util.DBConnection;
import java.util.logging.*;

public class StudentDAO {
    private static final Logger logger = Logger.getLogger(StudentDAO.class.getName());

    public void addStudent(Student s) {
        String sql = "INSERT INTO students(name, age, course, email) VALUES (?, ?, ?, ?)";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, s.getName());
            ps.setInt(2, s.getAge());
            ps.setString(3, s.getCourse());
            ps.setString(4, s.getEmail());
            ps.executeUpdate();

            System.out.println("✅ Student added successfully!");
            logger.info("Student added: " + s.getName());

        } catch (SQLException e) {
            logger.severe("Error adding student: " + e.getMessage());
            System.out.println("❌ Failed to add student. Please check the logs.");
        }
    }

    public List<Student> getAllStudents() {
        List<Student> list = new ArrayList<>();
        String sql = "SELECT * FROM students";

        try (Connection conn = DBConnection.getConnection();
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery(sql)) {

            while (rs.next()) {
                list.add(new Student(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getInt("age"),
                        rs.getString("course"),
                        rs.getString("email")
                ));
            }

            logger.info("Fetched " + list.size() + " students from database.");

        } catch (SQLException e) {
            logger.severe("Error fetching students: " + e.getMessage());
            System.out.println("❌ Error retrieving data. Check logs.");
        }

        return list;
    }
}`}
            </pre>

            <h2>🧠 Why Use Logging?</h2>
            <p>
                Using <code>Logger</code> gives you more control over error tracking.
                Instead of printing stack traces to the console, logs can be saved to a
                file and analyzed later.
            </p>

            <h3>🧾 Example Log Output:</h3>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`INFO: Student added: Kishore
INFO: Fetched 5 students from database.
SEVERE: Error adding student: Duplicate entry for email 'kishore@gmail.com'`}
            </pre>

            <h2>🧱 Step 2: Custom Exception Class</h2>
            <p>
                Let’s define a custom exception to handle specific database errors in a
                more meaningful way.
            </p>

            <pre
                style={{
                    background: "#fef9c3",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`package exceptions;

public class DatabaseException extends Exception {
    public DatabaseException(String message) {
        super(message);
    }
}`}
            </pre>

            <h3>How to Use It:</h3>
            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`try {
    dao.addStudent(student);
} catch (DatabaseException e) {
    System.out.println("Database error: " + e.getMessage());
}`}
            </pre>

            <h2>🧩 Step 3: Logger Configuration (Optional)</h2>
            <p>
                You can configure logging to write to a file using a <code>logging.properties</code> file or programmatically:
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    overflowX: "auto",
                }}
            >
                {`FileHandler fh = new FileHandler("app.log", true);
Logger logger = Logger.getLogger("JDBCLogger");
logger.addHandler(fh);
logger.info("Application started successfully.");`}
            </pre>

            <h2>🛠 Best Practices</h2>
            <ul>
                <li>Use <code>try-with-resources</code> for auto-closing JDBC objects.</li>
                <li>Log all SQL operations and exceptions.</li>
                <li>Use <b>custom exceptions</b> for clear error reporting.</li>
                <li>Never expose database errors directly to end users.</li>
            </ul>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to use try-catch properly in JDBC</li>
                <li>Why and how to use a Logger</li>
                <li>How to create and use a custom exception</li>
                <li>How to separate user-friendly messages from technical logs</li>
            </ul>

            <div
                style={{
                    background: "#dcfce7",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> You can later replace <code>java.util.logging</code> with more advanced
                frameworks like <b>SLF4J</b> or <b>Log4j</b> for better log management.
            </div>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                🚀 <b>Next Step:</b> Let’s create a new page on how to{" "}
                <b>package and run this JDBC project</b> as a complete Java application.
            </div>
        </div>
    );
}
