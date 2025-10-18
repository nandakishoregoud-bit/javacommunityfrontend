import React, { useState } from "react";

export default function ArraysInJava() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "What is the index of the first element in a Java array?",
            options: ["0", "1", "-1", "Depends on JVM"],
            answer: 0,
            explanation: "Java arrays are zero-indexed, meaning the first element is at index 0."
        },
        {
            q: "Which class provides utility methods for arrays?",
            options: ["Collections", "Arrays", "ArrayList", "Objects"],
            answer: 1,
            explanation: "The `java.util.Arrays` class contains methods like sort(), copyOf(), equals(), etc."
        },
        {
            q: "What happens if you access an index out of range in an array?",
            options: [
                "It returns null",
                "It wraps around to the first index",
                "It throws ArrayIndexOutOfBoundsException",
                "It ignores the access"
            ],
            answer: 2,
            explanation: "Accessing invalid indexes throws `ArrayIndexOutOfBoundsException`."
        },
        {
            q: "Which statement correctly creates a 2D array in Java?",
            options: [
                "int[][] arr = new int[3][3];",
                "int arr[][] = int[3][3];",
                "int arr = new int[3,3];",
                "int arr = int[3][3];"
            ],
            answer: 0,
            explanation: "The correct syntax is `int[][] arr = new int[3][3];`."
        },
        {
            q: "What does Arrays.copyOf() do?",
            options: [
                "Copies part or full array to a new one",
                "Copies array references only",
                "Deletes the array",
                "Reverses the array"
            ],
            answer: 0,
            explanation: "`Arrays.copyOf()` creates a new array with copied elements."
        }
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>Arrays in Java</h1>

            <p>
                Arrays are used to store multiple values of the same data type in a single variable.
                They are fundamental structures that help manage large amounts of data efficiently.
            </p>

            <h2>1️⃣ What is an Array?</h2>
            <p>
                An array is a collection of elements of the same type placed in contiguous memory locations.
                It allows you to store, access, and manipulate a fixed-size list of elements.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int[] numbers = new int[5]; // Declares an integer array of size 5

// Default values are assigned automatically
// For int -> 0, for boolean -> false, for objects -> null`}
            </pre>

            <h2>2️⃣ Array Initialization</h2>
            <p>Arrays can be initialized in multiple ways:</p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`// Method 1: Declare and initialize separately
int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

// Method 2: Declare and initialize together
int[] nums = {10, 20, 30, 40, 50};

// Method 3: Using 'new' keyword
int[] values = new int[]{1, 2, 3, 4, 5};`}
            </pre>

            <h2>3️⃣ Accessing Array Elements</h2>
            <p>
                Each element in the array has a unique index starting from <b>0</b>.
                You can access elements using the index number.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]); // prints 10
System.out.println(numbers[4]); // prints 50

// Accessing an invalid index throws an exception
System.out.println(numbers[5]); // ❌ ArrayIndexOutOfBoundsException`}
            </pre>

            <h2>4️⃣ Iterating Through Arrays</h2>
            <p>There are multiple ways to iterate over arrays:</p>

            <h3>Using a traditional for loop:</h3>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`}
            </pre>

            <h3>Using enhanced for-each loop:</h3>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`for (int num : numbers) {
    System.out.println(num);
}`}
            </pre>

            <h2>5️⃣ 2D Arrays (Multidimensional Arrays)</h2>
            <p>
                Java supports multidimensional arrays like 2D or 3D arrays.
                A 2D array is basically an array of arrays, often used for matrix-like structures.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int[][] matrix = new int[2][3]; // 2 rows, 3 columns

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;

// Printing 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Output:
// 1 2 3
// 4 5 6`}
            </pre>

            <h2>6️⃣ Multidimensional Array Initialization</h2>
            <p>
                You can initialize a 2D array directly with values:
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int[][] nums = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing
System.out.println(nums[1][2]); // prints 6`}
            </pre>

            <h2>7️⃣ Arrays Utility Class (`java.util.Arrays`)</h2>
            <p>
                Java provides a built-in utility class <code>Arrays</code> in the <code>java.util</code> package
                that contains various useful methods for manipulating arrays.
            </p>

            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`import java.util.Arrays;

int[] arr = {5, 3, 9, 1};

// Sort the array
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [1, 3, 5, 9]

// Copy part of the array
int[] copy = Arrays.copyOf(arr, 2); // copies first 2 elements
System.out.println(Arrays.toString(copy)); // [1, 3]

// Compare arrays
int[] a1 = {1, 2, 3};
int[] a2 = {1, 2, 3};
System.out.println(Arrays.equals(a1, a2)); // true

// Fill array with value
int[] nums = new int[5];
Arrays.fill(nums, 7);
System.out.println(Arrays.toString(nums)); // [7, 7, 7, 7, 7]`}
            </pre>

            <h2>🧠 Real-Life Example</h2>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`// Store marks of students and calculate average
int[] marks = {85, 90, 78, 92, 88};
int sum = 0;
for (int mark : marks) {
    sum += mark;
}
double average = sum / (double) marks.length;
System.out.println("Average Marks: " + average);`}
            </pre>

            <h2>🧩 Summary</h2>
            <ul>
                <li>Arrays are fixed-size containers for elements of the same type.</li>
                <li>They are zero-indexed.</li>
                <li>1D arrays store linear data; 2D arrays store tabular data.</li>
                <li>The <code>Arrays</code> utility class provides helpful methods like <code>sort()</code>, <code>copyOf()</code>, <code>equals()</code>, and <code>fill()</code>.</li>
            </ul>

            <h2>🧠 Quick Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowQuiz(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "20px 0" }}>
                        <div style={{ marginBottom: 8 }}>{idx + 1}. {item.q}</div>
                        {item.options.map((option, oidx) => (
                            <label key={oidx} style={{ display: "block", marginBottom: 2 }}>
                                <input
                                    type="radio"
                                    name={`q${idx}`}
                                    checked={selected[idx] === oidx}
                                    onChange={() => {
                                        let copy = selected.slice();
                                        copy[idx] = oidx;
                                        setSelected(copy);
                                    }}
                                />
                                {" "} {option}
                                {showQuiz && item.answer === oidx && (
                                    <span style={{ color: "green", marginLeft: 10 }}>&#10003; Correct</span>
                                )}
                                {showQuiz && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 10 }}>✗</span>
                                )}
                            </label>
                        ))}
                        {showQuiz && (
                            <div style={{ fontStyle: "italic", color: "#555", marginTop: 4 }}>
                                Explanation: {item.explanation}
                            </div>
                        )}
                    </div>
                ))}
                {!showQuiz && (
                    <button type="submit" style={{ padding: "8px 16px", fontWeight: 600, borderRadius: 5, background: "#198754", color: "white", border: "none" }}>
                        Check Answers
                    </button>
                )}
            </form>
            {showQuiz && (
                <div style={{ marginTop: 20, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Excellent! You got all answers correct!"
                        : "✅ Review the explanations and try again!"}
                </div>
            )}
        </div>
    );
}
