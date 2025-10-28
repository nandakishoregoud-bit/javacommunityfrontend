import React from "react";
import "./JdbcGlobal.css"; // ✅ same global JDBC styles

export default function JdbcProjectMenuInterface() {
    return (
        <div className="jdbc-container">
            <h1 className="jdbc-title">🖥 JDBC Project — Menu Interface (Student Management System)</h1>

            <p className="jdbc-intro">
                It’s time to make your project <b>interactive!</b> 🎮
                In this step, we’ll design a simple yet powerful{" "}
                <b>menu-driven console interface</b> that lets users perform
                <b> CRUD operations</b> — adding, viewing, updating, and deleting student records.
            </p>

            <h2 className="jdbc-section-title green">🎯 What We’ll Build</h2>
            <ul className="jdbc-list">
                <li>🧩 Display a clean console menu with numbered options</li>
                <li>⌨️ Accept input from the user</li>
                <li>⚙️ Call the respective <b>DAO methods</b> for each action</li>
                <li>🔁 Keep running until the user chooses to exit</li>
            </ul>

            <h2 className="jdbc-section-title purple">
                📘 Step 1: Main Application — <code>MainApp.java</code>
            </h2>
            <p>
                Let’s put it all together! The following code shows how to make your console app
                dynamic and user-friendly:
            </p>

            <pre className="jdbc-code blue">
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
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter Age: ");
                    int age = sc.nextInt();
                    sc.nextLine();
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

            <h2 className="jdbc-section-title orange">🧩 Example Output</h2>

            <pre className="jdbc-code purple-light">
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

            <h3 className="jdbc-subtitle green">✅ View All Students</h3>
            <pre className="jdbc-code yellow">
                {`--- All Students ---
1 | Kishore | 22 | Java | kishore@gmail.com`}
            </pre>

            <h2 className="jdbc-section-title blue">🧠 Concepts You Used</h2>
            <ul className="jdbc-list">
                <li>🧮 Menu-driven <b>switch-case</b> logic</li>
                <li>📥 Using <b>Scanner</b> for input handling</li>
                <li>🔗 DAO integration for database operations</li>
                <li>📦 Reusing your <b>Student model</b> for all CRUD actions</li>
            </ul>

            <h2 className="jdbc-section-title purple">📚 What You Learned</h2>
            <ul className="jdbc-list">
                <li>How to build a user-friendly console menu</li>
                <li>How to connect logic with database functions</li>
                <li>How to simulate real-world CRUD operations</li>
            </ul>

            <div className="jdbc-tip green-bg">
                💡 <b>Tip:</b> Want to take this further? Transform this menu-driven app into a{" "}
                <b>JDBC + Swing desktop GUI</b> or even a <b>Spring Boot REST API</b> to make it web-based!
            </div>
        </div>
    );
}
