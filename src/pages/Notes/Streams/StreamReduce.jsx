import { useState } from "react";

export default function StreamReduce() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does the reduce() method do in Java Streams?",
            options: [
                "Transforms each element",
                "Filters elements based on a condition",
                "Combines stream elements into a single result",
                "Sorts the elements"
            ],
            answer: 2,
        },
        {
            q: "Which of these correctly sums all elements in a stream?",
            options: [
                "numbers.stream().filter(n -> n > 0)",
                "numbers.stream().map(n -> n * 2)",
                "numbers.stream().reduce(0, (a,b) -> a + b)",
                "numbers.stream().sorted()"
            ],
            answer: 2,
        },
        {
            q: "What type of value does reduce() return?",
            options: [
                "A new Stream",
                "A single value (like int, double, or object)",
                "A collection",
                "Nothing"
            ],
            answer: 1,
        },
        {
            q: "Can reduce() be used for non-numeric data (like Strings)?",
            options: ["Yes", "No", "Only for integers", "Only with map()"],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>🧮 Stream <code>reduce()</code> in Java</h1>
            <p>
                The <b>reduce()</b> method in Java Streams is used to <b>combine</b> all elements of a stream into a single result.
                It’s often used for operations like summing numbers, finding maximum values, concatenating strings, or combining objects.
            </p>

            <h2>🔹 Key Points</h2>
            <ul>
                <li><code>reduce()</code> takes a <b>starting value</b> and a <b>BinaryOperator</b> (a function combining two elements).</li>
                <li>It processes elements one by one and accumulates the result.</li>
                <li>It returns a <b>single value</b> — not a stream.</li>
                <li>Common use cases: sum, product, max/min, concatenation, or combining objects.</li>
            </ul>

            <h2>🔹 Example 1: Sum of Numbers</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Sum using reduce
        int sum = numbers.stream()
            .reduce(0, (a, b) -> a + b);

        System.out.println("Sum: " + sum);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: Finding the Maximum Number</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(10, 20, 5, 30);

int max = numbers.stream()
    .reduce(Integer.MIN_VALUE, (a, b) -> a > b ? a : b);

System.out.println("Max: " + max); // Output: 30`}</code>
            </pre>

            <h2>🔹 Example 3: Concatenating Strings</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> words = Arrays.asList("Java", "is", "awesome");

String sentence = words.stream()
    .reduce("", (a, b) -> a + " " + b);

System.out.println(sentence.trim()); // Output: Java is awesome`}</code>
            </pre>

            <h2>🔹 Example 4: Using reduce() with map()</h2>
            <p>We can combine <code>map()</code> and <code>reduce()</code> to create functional pipelines:</p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

int squareSum = numbers.stream()
    .map(n -> n * n)          // square each element
    .reduce(0, Integer::sum); // sum them

System.out.println("Sum of squares: " + squareSum);`}</code>
            </pre>

            <h2>💡 Real-World Example: Total Salary Calculation</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`class Employee {
    String name;
    double salary;
    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class Example {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 90000),
            new Employee("Bob", 70000),
            new Employee("Charlie", 120000)
        );

        double totalSalary = employees.stream()
            .map(e -> e.salary)
            .reduce(0.0, Double::sum);

        System.out.println("Total Salary: " + totalSalary);
    }
}`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>reduce()</code> for aggregation — summing, combining, or merging elements.</li>
                <li>Prefer <code>Integer::sum</code> or <code>Double::sum</code> for readability.</li>
                <li>When working with objects, use <code>map()</code> first to extract numeric fields.</li>
                <li>Keep reduce operations <b>stateless</b> — no modifying external variables.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(2, 4, 6, 8, 10);

        int product = nums.stream()
            .reduce(1, (a, b) -> a * b); // multiply all numbers

        System.out.println("Product: " + product); // Output: 3840
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Reduce Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
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
                                        const copy = selected.slice();
                                        copy[idx] = oidx;
                                        setSelected(copy);
                                    }}
                                />{" "}
                                {option}
                                {showAnswers && item.answer === oidx && (
                                    <span style={{ color: "green", marginLeft: 10 }}>✔ Correct</span>
                                )}
                                {showAnswers && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 10 }}>✗</span>
                                )}
                            </label>
                        ))}
                    </div>
                ))}
                {!showAnswers && (
                    <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            fontWeight: 600,
                            borderRadius: 5,
                            background: "#198754",
                            color: "white",
                            border: "none",
                        }}
                    >
                        Check Answers
                    </button>
                )}
            </form>

            {showAnswers && (
                <div style={{ marginTop: 20, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Great job! You got them all right!"
                        : "Review the notes above and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Use <code>reduce()</code> when you need to combine stream elements into a single result.
                Combine it with <code>map()</code> for more powerful pipelines — for example,
                mapping employee salaries and then reducing them to a total.
            </p>
        </div>
    );
}
