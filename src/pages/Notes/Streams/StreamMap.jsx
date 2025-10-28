import { useState } from "react";

export default function StreamMap() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does the map() method do in Java Streams?",
            options: [
                "Filters elements based on a condition",
                "Transforms elements into another form",
                "Reduces elements to a single value",
                "Sorts elements"
            ],
            answer: 1,
        },
        {
            q: "Which of these is a valid map operation?",
            options: [
                "numbers.stream().filter(n -> n % 2 == 0)",
                "numbers.stream().map(n -> n * 2)",
                "numbers.stream().reduce((a,b) -> a+b)",
                "numbers.stream().forEach(System.out::println)"
            ],
            answer: 1,
        },
        {
            q: "map() returns what type of stream?",
            options: [
                "A new stream with transformed elements",
                "A single value",
                "Nothing",
                "Original list only"
            ],
            answer: 0,
        },
        {
            q: "Can map() be chained with other stream operations?",
            options: ["Yes", "No", "Only with filter()", "Only with reduce()"],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 800, margin: "auto" }}>
            <h1>🔄 Stream <code>map()</code> in Java</h1>
            <p>
                The <b>map()</b> method in Java Streams is used to <b>transform elements</b> of a stream into another form.
                It applies a given function to every element and returns a new stream of transformed values.
                This operation is often used to modify data, convert types, or extract specific fields from objects.
            </p>

            <h2>🔹 Key Characteristics</h2>
            <ul>
                <li><code>map()</code> is an <b>intermediate operation</b> — it returns another stream, not a result.</li>
                <li>Each element is transformed based on a provided function (a <b>lambda expression</b>).</li>
                <li>It does <b>not modify</b> the original data — it creates a new stream with the results.</li>
                <li>Can be chained with other operations like <code>filter()</code>, <code>sorted()</code>, or <code>reduce()</code>.</li>
            </ul>

            <h2>🔹 Example 1: Doubling Each Number</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Multiply each number by 2
        List<Integer> doubled = numbers.stream()
            .map(n -> n * 2)
            .toList();

        System.out.println("Doubled Numbers: " + doubled);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: Converting Strings to Uppercase</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("alice", "bob", "charlie");

List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .toList();

System.out.println(upperNames); // Output: [ALICE, BOB, CHARLIE]`}</code>
            </pre>

            <h2>🔹 Example 3: Extracting a Field from Objects</h2>
            <p>
                You can use <code>map()</code> to transform complex objects into specific fields.
                This is useful when working with lists of entities like employees or students.
            </p>
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
            new Employee("Bob", 75000),
            new Employee("Charlie", 120000)
        );

        // Extract all employee names
        List<String> names = employees.stream()
            .map(e -> e.name)
            .toList();

        System.out.println(names); // Output: [Alice, Bob, Charlie]
    }
}`}</code>
            </pre>

            <h2>🔹 Combining <code>map()</code> with Other Stream Operations</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> result = Arrays.asList(1, 2, 3, 4, 5, 6).stream()
    .filter(n -> n % 2 == 1)  // keep only odd numbers
    .map(n -> n * n)          // square each odd number
    .sorted()                 // sort ascending
    .toList();

System.out.println(result); // Output: [1, 9, 25]`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>map()</code> for element transformation — not for filtering or reducing.</li>
                <li>Keep the mapping function <b>pure</b> — no side effects (avoid modifying external variables).</li>
                <li>Use method references like <code>String::toUpperCase</code> for cleaner code.</li>
                <li>Chain <code>map()</code> with <code>filter()</code> or <code>reduce()</code> for powerful pipelines.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(2, 4, 6, 8);

        int sumOfSquares = nums.stream()
            .map(n -> n * n)        // square each number
            .reduce(0, Integer::sum); // sum them

        System.out.println("Sum of Squares: " + sumOfSquares); // Output: 120
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Map Quiz</h2>
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
                        ? "🎉 Excellent! You got all correct!"
                        : "Review the notes above and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Use <code>map()</code> when you need to transform elements — such as converting strings to uppercase,
                squaring numbers, or extracting specific fields from objects.
                It pairs perfectly with <code>filter()</code> for selecting data and <code>reduce()</code> for summarizing results.
            </p>
        </div>
    );
}
