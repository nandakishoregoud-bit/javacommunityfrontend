import React from "react";

export default function JdbcProjectMenuInterface() {
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
            <h1>🖥 JDBC Project — Menu Interface (Student Management System)</h1>

            <p>
                In this step, we’ll create a <b>menu-driven console interface</b> for our Student Management System.
                This interface will allow users to perform CRUD (Create, Read, Update, Delete) operations easily.
            </p>

            <h2>🎯 What We’ll Build</h2>
            <ul>
                <li>Display a menu with options (Add, View, Update, Delete)</li>
                <li>Accept user input from the console</li>
                <li>Call the corresponding <b>DAO methods</b></li>
                <li>Run continuously until the user exits</li>
            </ul>

            <h2>📘 Step 1: Main Application — <code>MainApp.java</code></h2>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                    overflowX: "auto",
                }}
            >
                {`import java.util.*;
import dao.StudentDAO;
import model.Student;

public class MainApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StudentDAO dao = new StudentDAO();

        while (true) {
            System.out.println("\\n====== Student Management System ======");
            System.out.println("1. Add Student");
            System.out.println("2. View All Students");
            System.out.println("3. Update Student");
            System.out.println("4. Delete Student");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            sc.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter Age: ");
                    int age = sc.nextInt();
                    sc.nextLine(); // consume newline
                    System.out.print("Enter Course: ");
                    String course = sc.nextLine();
                    System.out.print("Enter Email: ");
                    String email = sc.nextLine();

                    Student s = new Student(0, name, age, course, email);
                    dao.addStudent(s);
                    break;

                case 2:
                    System.out.println("\\n--- All Students ---");
                    dao.getAllStudents().forEach(System.out::println);
                    break;

                case 3:
                    System.out.print("Enter Student ID to Update: ");
                    int idToUpdate = sc.nextInt();
                    sc.nextLine();

                    System.out.print("Enter New Name: ");
                    String newName = sc.nextLine();
                    System.out.print("Enter New Age: ");
                    int newAge = sc.nextInt();
                    sc.nextLine();
                    System.out.print("Enter New Course: ");
                    String newCourse = sc.nextLine();
                    System.out.print("Enter New Email: ");
                    String newEmail = sc.nextLine();

                    Student updatedStudent = new Student(idToUpdate, newName, newAge, newCourse, newEmail);
                    dao.updateStudent(updatedStudent);
                    break;

                case 4:
                    System.out.print("Enter Student ID to Delete: ");
                    int idToDelete = sc.nextInt();
                    dao.deleteStudent(idToDelete);
                    break;

                case 5:
                    System.out.println("👋 Exiting... Thank you for using the system!");
                    sc.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("❌ Invalid choice. Please try again.");
            }
        }
    }
}`}
            </pre>

            <h2>📋 Example Output</h2>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`====== Student Management System ======
1. Add Student
2. View All Students
3. Update Student
4. Delete Student
5. Exit
Enter your choice: 1
Enter Name: Kishore
Enter Age: 22
Enter Course: Java
Enter Email: kishore@gmail.com
✅ Student added successfully!`}
            </pre>

            <h3>✅ View All Students</h3>
            <pre
                style={{
                    background: "#fef9c3",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`--- All Students ---
1 | Kishore | 22 | Java | kishore@gmail.com`}
            </pre>

            <h2>🧠 Concepts Used</h2>
            <ul>
                <li>Menu-driven <b>switch-case</b> structure</li>
                <li><b>Scanner</b> for taking user input</li>
                <li>Integration with <b>DAO Layer</b> for database access</li>
                <li>Reusable <b>Student model</b> for all CRUD operations</li>
            </ul>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to create a menu-driven console app</li>
                <li>How to connect the interface with the DAO layer</li>
                <li>How to simulate real project CRUD operations</li>
            </ul>

            <div
                style={{
                    background: "#dcfce7",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Tip:</b> You can later upgrade this menu-based project to a{" "}
                <b>JDBC + Swing GUI</b> or even connect it to a <b>Spring Boot REST API</b> for a full-stack version!
            </div>

        </div>
    );
}
