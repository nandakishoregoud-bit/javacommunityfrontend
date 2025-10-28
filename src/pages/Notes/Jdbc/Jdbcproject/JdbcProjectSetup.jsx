import React from "react";

export default function JdbcProjectSetup() {
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
            <h1>⚙️ JDBC Project Setup — Student Management System</h1>

            <p>
                In this step, we’ll create the basic setup for our{" "}
                <b>Student Management System (SMS)</b> project using JDBC.
                This includes creating folders, adding dependencies, and testing our
                first database connection.
            </p>

            <h2>📁 Step 1: Project Folder Structure</h2>
            <p>
                Create a folder named <b>StudentManagementSystem</b>.
                Inside it, use the following structure:
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
                {`StudentManagementSystem/
│
├── lib/
│   └── mysql-connector-j-8.0.xx.jar    // JDBC driver for MySQL
│
├── src/
│   ├── model/
│   │   └── Student.java
│   │
│   ├── dao/
│   │   └── StudentDAO.java
│   │
│   ├── util/
│   │   └── DBConnection.java
│   │
│   ├── service/
│   │   └── StudentService.java
│   │
│   └── Main.java
│
└── README.md`}
            </pre>

            <p>
                💡 <b>Tip:</b> Always keep your database connection logic separate
                (inside a <code>util</code> package) for better code organization.
            </p>

            <h2>📦 Step 2: Add MySQL JDBC Driver</h2>
            <p>
                Download the MySQL JDBC driver from:
                <br />
                <a
                    href="https://dev.mysql.com/downloads/connector/j/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 https://dev.mysql.com/downloads/connector/j/
                </a>
            </p>

            <p>
                After downloading, place the JAR file inside the <b>lib/</b> folder and
                add it to your project’s classpath.
            </p>

            <h2>🔌 Step 3: Create Database Connection Utility</h2>
            <p>
                Inside <code>src/util/DBConnection.java</code>, write this class to
                handle all database connections:
            </p>

            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
                {`package util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/studentdb";
    private static final String USER = "root";
    private static final String PASSWORD = "yourpassword";

    public static Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("✅ Database connected successfully!");
        } catch (ClassNotFoundException e) {
            System.out.println("❌ MySQL Driver not found!");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("❌ Database connection failed!");
            e.printStackTrace();
        }
        return conn;
    }
}`}
            </pre>

            <p>
                This class uses <code>DriverManager</code> to establish a connection with
                your MySQL database.
            </p>

            <h2>🧪 Step 4: Test the Connection</h2>
            <p>
                Create a test class <b>Main.java</b> inside the <code>src/</code> folder:
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
                {`import util.DBConnection;
import java.sql.Connection;

public class Main {
    public static void main(String[] args) {
        Connection conn = DBConnection.getConnection();

        if (conn != null) {
            System.out.println("Connection test successful!");
        } else {
            System.out.println("Connection test failed!");
        }
    }
}`}
            </pre>

            <h3>✅ Output:</h3>
            <pre
                style={{
                    background: "#e0f2fe",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`✅ Database connected successfully!
Connection test successful!`}
            </pre>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to organize a JDBC project like a real application</li>
                <li>How to add and use MySQL JDBC Driver</li>
                <li>How to create and test a reusable database connection class</li>
            </ul>

            <div
                style={{
                    background: "#dcfce7",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Next Step:</b> We’ll now create the <b>Student model class</b> and
                <b> DAO layer</b> to start performing real CRUD operations.
            </div>
        </div>
    );
}
