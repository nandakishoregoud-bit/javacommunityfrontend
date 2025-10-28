import React from "react";

export default function JdbcProjectPackagingAndRunning() {
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
            <h1>🚀 Packaging and Running Your JDBC Project</h1>

            <p>
                Now that your <b>Student Management System</b> project is complete,
                let’s see how to structure, compile, and run it like a professional Java
                application. This step helps you understand how real-world applications
                are built, packaged, and executed.
            </p>

            <h2>🏗 Step 1: Project Structure</h2>
            <p>
                Here’s the typical folder structure for your <b>JDBC project</b>:
            </p>

            <pre
                style={{
                    background: "#f3f4f6",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`StudentManagementSystem/
├── src/
│   ├── model/
│   │   └── Student.java
│   ├── dao/
│   │   └── StudentDAO.java
│   ├── util/
│   │   └── DBConnection.java
│   ├── exceptions/
│   │   └── DatabaseException.java
│   ├── main/
│   │   └── StudentApp.java
├── lib/
│   └── mysql-connector-j-9.0.0.jar
├── app.log
└── README.md`}
            </pre>

            <p>
                ✅ The <code>lib</code> folder contains your JDBC driver — required for
                connecting Java to MySQL.
            </p>

            <h2>🧠 Step 2: Understanding the Entry Point</h2>
            <p>
                Your project’s entry point is the <b>main method</b> inside{" "}
                <code>StudentApp.java</code>.
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`package main;
import dao.StudentDAO;
import model.Student;

public class StudentApp {
    public static void main(String[] args) {
        System.out.println("=== Student Management System ===");

        StudentDAO dao = new StudentDAO();
        dao.addStudent(new Student("Kishore", 22, "Java", "kishore@gmail.com"));
        dao.getAllStudents();
    }
}`}
            </pre>

            <h2>⚙️ Step 3: Compiling the Project</h2>
            <p>
                If you are compiling manually (without IDE), open a terminal in your
                project root and run:
            </p>

            <pre
                style={{
                    background: "#fef9c3",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`javac -d out -cp "lib/*" src/**/*.java`}
            </pre>

            <p>
                🔹 This command compiles all Java files and puts the class files in the{" "}
                <code>out</code> folder.
                🔹 <code>-cp</code> adds the JDBC driver (from the <code>lib</code> folder)
                to your classpath.
            </p>

            <h2>🚀 Step 4: Running the Project</h2>
            <p>Once compiled, run your main class:</p>

            <pre
                style={{
                    background: "#e0f2fe",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`java -cp "out;lib/*" main.StudentApp`}
            </pre>

            <p>
                💡 For Mac/Linux users, replace <code>;</code> with <code>:</code> in the
                classpath.
            </p>

            <h2>📦 Step 5: Packaging into a JAR File</h2>
            <p>
                To distribute your application, package it into a <b>JAR (Java ARchive)</b> file:
            </p>

            <pre
                style={{
                    background: "#f3f4f6",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`jar cfe StudentApp.jar main.StudentApp -C out .`}
            </pre>

            <p>
                This creates a runnable <code>StudentApp.jar</code> file with the entry
                point defined as <code>main.StudentApp</code>.
            </p>

            <h3>Run the JAR:</h3>
            <pre
                style={{
                    background: "#fef9c3",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`java -cp "StudentApp.jar;lib/*" -jar StudentApp.jar`}
            </pre>

            <h2>🧱 Step 6: Using IDEs (Eclipse or IntelliJ)</h2>
            <ul>
                <li>🧩 Create a new Java Project.</li>
                <li>📂 Add the MySQL connector JAR to the project’s classpath.</li>
                <li>🖋 Place your code in proper packages (model, dao, util, etc.).</li>
                <li>▶️ Right-click on <code>StudentApp.java</code> → Run as → Java Application.</li>
            </ul>

            <h2>🧰 Step 7: Common Issues</h2>
            <ul>
                <li>❌ <b>ClassNotFoundException:</b> JDBC Driver not added to classpath.</li>
                <li>❌ <b>Access denied:</b> Wrong MySQL username/password.</li>
                <li>❌ <b>Table not found:</b> Database name or table missing.</li>
                <li>✅ Always close connections using <code>try-with-resources</code>.</li>
            </ul>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to structure a real-world JDBC project</li>
                <li>How to compile, run, and package it into a JAR</li>
                <li>How to run the project from terminal or IDE</li>
                <li>Common JDBC runtime issues and solutions</li>
            </ul>

            <div
                style={{
                    background: "#dcfce7",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Pro Tip:</b> In real-world Java applications, you can automate
                build and packaging using tools like <b>Maven</b> or <b>Gradle</b>.
            </div>

            <div
                style={{
                    background: "#e0f2fe",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                🚀 <b>Next Step:</b> Let’s add a page on how to <b>connect this JDBC
                    project with a frontend (like React)</b> to make it interactive!
            </div>
        </div>
    );
}
