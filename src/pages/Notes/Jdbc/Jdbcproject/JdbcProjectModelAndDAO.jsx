import React from "react";

export default function JdbcProjectModelAndDAO() {
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
            <h1>🧩 Model & DAO Layer — Student Management System</h1>

            <p>
                In this section, we’ll create the core components of our project:
                the <b>Student model</b> and the <b>StudentDAO</b> class.
                These will define our student structure and how we interact with the
                database.
            </p>

            <h2>🏗 Step 1: Create the Student Table in Database</h2>
            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`CREATE DATABASE studentdb;
USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(50),
    email VARCHAR(100)
);`}
            </pre>

            <p>
                This table will store all the student information that we manage in our
                system.
            </p>

            <h2>📘 Step 2: Create the Model Class — Student.java</h2>
            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                }}
            >
                {`package model;

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
}`}
            </pre>

            <p>
                This is a simple <b>POJO (Plain Old Java Object)</b> class that represents
                a student record.
            </p>

            <h2>💾 Step 3: Create the DAO Class — StudentDAO.java</h2>
            <p>
                The DAO (Data Access Object) handles all database operations like inserting,
                reading, updating, and deleting records.
            </p>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`package dao;

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
}`}
            </pre>

            <h2>🧪 Step 4: Test the DAO Methods</h2>
            <p>Let’s test our DAO using a simple main method:</p>

            <pre
                style={{
                    background: "#eef",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {`import dao.StudentDAO;
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
                {`✅ Student added successfully!
1 | Kishore | 22 | Java | kishore@gmail.com`}
            </pre>

            <h2>🧠 What You Learned</h2>
            <ul>
                <li>How to create a <b>Student model</b> (POJO)</li>
                <li>How to perform <b>CRUD operations</b> using JDBC</li>
                <li>How to organize code using the <b>DAO pattern</b></li>
            </ul>

            <div
                style={{
                    background: "#fef9c3",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginTop: "1.5rem",
                }}
            >
                💡 <b>Next Step:</b> We’ll now add a <b>menu-driven console interface </b>
                so users can interact with the system easily (like adding, viewing, updating, and deleting students).
            </div>
        </div>
    );
}
