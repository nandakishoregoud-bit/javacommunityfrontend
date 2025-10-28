import React from "react";
import "./JdbcGlobal.css";

export default function JdbcProjectModelAndDAO() {
    return (
        <div className="jdbc-container">
            <h1>🧩 Model & DAO Layer — Student Management System</h1>

            <p>
                Let’s get to the backbone of our JDBC project 💪
                In this section, we’ll build the core of our system — the{" "}
                <b>Student model</b> and the <b>StudentDAO</b> class.
                These two together define how your application stores and manages data in the database.
            </p>

            <h2>🏗 Step 1: Create the Student Table in Database</h2>
            <p>Start by setting up your database in MySQL:</p>

            <pre className="code-block">{`CREATE DATABASE studentdb;
USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(50),
    email VARCHAR(100)
);`}</pre>

            <p>
                This table will store all student details like <b>name</b>, <b>age</b>, <b>course</b>, and <b>email</b>.
            </p>

            <h2>📘 Step 2: Create the Model Class — <code>Student.java</code></h2>
            <p>
                This class represents the structure of a student record — also known as a{" "}
                <b>POJO (Plain Old Java Object)</b>.
            </p>

            <pre className="log-block">{`package model;

public class Student {
    private int id;
    private String name;
    private int age;
    private String course;
    private String email;

    public Student() {}

    public Student(int id, String name, int age, String course, String email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
        this.email = email;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    @Override
    public String toString() {
        return id + " | " + name + " | " + age + " | " + course + " | " + email;
    }
}`}</pre>

            <h2>💾 Step 3: Create the DAO Class — <code>StudentDAO.java</code></h2>
            <p>
                The <b>DAO (Data Access Object)</b> is where all the database operations live.
                It’s responsible for inserting, updating, reading, and deleting records — cleanly separating
                business logic from database logic.
            </p>

            <pre className="code-block">{`package dao;

import java.sql.*;
import java.util.*;
import model.Student;
import util.DBConnection;

public class StudentDAO {

    // Insert new student
    public void addStudent(Student student) {
        String sql = "INSERT INTO students (name, age, course, email) VALUES (?, ?, ?, ?)";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setString(3, student.getCourse());
            ps.setString(4, student.getEmail());
            ps.executeUpdate();
            System.out.println("✅ Student added successfully!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Retrieve all students
    public List<Student> getAllStudents() {
        List<Student> list = new ArrayList<>();
        String sql = "SELECT * FROM students";

        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Student s = new Student(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getInt("age"),
                    rs.getString("course"),
                    rs.getString("email")
                );
                list.add(s);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    // Update a student
    public void updateStudent(Student student) {
        String sql = "UPDATE students SET name=?, age=?, course=?, email=? WHERE id=?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setString(3, student.getCourse());
            ps.setString(4, student.getEmail());
            ps.setInt(5, student.getId());
            ps.executeUpdate();
            System.out.println("✅ Student updated successfully!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Delete a student by ID
    public void deleteStudent(int id) {
        String sql = "DELETE FROM students WHERE id=?";
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setInt(1, id);
            ps.executeUpdate();
            System.out.println("🗑 Student deleted successfully!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`}</pre>

            <h2>🧪 Step 4: Test the DAO Methods</h2>
            <p>Let’s verify our DAO works perfectly with a simple test:</p>

            <pre className="highlight-block">{`import dao.StudentDAO;
import model.Student;

public class Main {
    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();

        // Add a student
        Student s1 = new Student(0, "Kishore", 22, "Java", "kishore@gmail.com");
        dao.addStudent(s1);

        // Display all students
        dao.getAllStudents().forEach(System.out::println);
    }
}`}</pre>

            <h3>✅ Output:</h3>
            <pre className="log-block">{`✅ Student added successfully!
1 | Kishore | 22 | Java | kishore@gmail.com`}</pre>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to build a <b>Student model</b> (POJO)</li>
                <li>How to perform <b>CRUD operations</b> using JDBC</li>
                <li>How to use the <b>DAO design pattern</b> for clean structure</li>
            </ul>

            <div className="next-step">
                💡 <b>Next Step:</b> It’s time to bring this to life!
                Let’s build a <b>menu-driven console interface</b> so users can easily
                add, view, update, and delete students in real-time.
            </div>
        </div>
    );
}
