import { useState } from "react";

export default function StreamSorted() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does the sorted() method do in Java Streams?",
            options: [
                "Filters elements based on a condition",
                "Sorts elements in natural or custom order",
                "Transforms each element",
                "Reduces elements into a single value"
            ],
            answer: 1,
        },
        {
            q: "Which of these sorts elements in descending order?",
            options: [
                "stream.sorted()",
                "stream.sorted(Comparator.reverseOrder())",
                "stream.map()",
                "stream.filter()"
            ],
            answer: 1,
        },
        {
            q: "Can sorted() be used with custom Comparator logic?",
            options: ["Yes", "No", "Only for integers", "Only for strings"],
            answer: 0,
        },
        {
            q: "Is sorted() an intermediate or terminal operation?",
            options: ["Intermediate", "Terminal", "Both", "Neither"],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 800, margin: "auto" }}>
            <h1>📚 Stream <code>sorted()</code> in Java</h1>
            <p>
                The <b>sorted()</b> method in Java Streams is used to arrange elements in a specific order.
                It can sort elements in their <b>natural order</b> (like ascending for numbers or alphabetical for strings),
                or using a <b>custom Comparator</b> for more control.
            </p>

            <h2>🔹 Key Points</h2>
            <ul>
                <li><code>sorted()</code> is an <b>intermediate operation</b> — it returns a new Stream.</li>
                <li>By default, it sorts using the <b>natural order</b> (requires elements to implement <code>Comparable</code>).</li>
                <li>It can also accept a <b>Comparator</b> for custom sorting.</li>
                <li>Does not modify the original collection — produces a new sorted stream.</li>
            </ul>

            <h2>🔹 Example 1: Sorting Numbers in Natural Order</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 3, 9, 1, 4);

        List<Integer> sorted = numbers.stream()
            .sorted()
            .toList();

        System.out.println("Sorted Numbers: " + sorted);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: Sorting in Reverse Order</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(5, 3, 9, 1, 4);

List<Integer> reverseSorted = numbers.stream()
    .sorted(Comparator.reverseOrder())
    .toList();

System.out.println("Reverse Sorted: " + reverseSorted); // Output: [9, 5, 4, 3, 1]`}</code>
            </pre>

            <h2>🔹 Example 3: Sorting Strings Alphabetically</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Charlie", "Alice", "Bob");

List<String> sortedNames = names.stream()
    .sorted()
    .toList();

System.out.println(sortedNames); // Output: [Alice, Bob, Charlie]`}</code>
            </pre>

            <h2>🔹 Example 4: Sorting with Custom Comparator</h2>
            <p>Use a <code>Comparator</code> when you want to sort based on a custom rule (like string length or salary).</p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("John", "Alexander", "Bob", "Chris");

List<String> byLength = names.stream()
    .sorted(Comparator.comparingInt(String::length))
    .toList();

System.out.println(byLength); // Output: [Bob, John, Chris, Alexander]`}</code>
            </pre>

            <h2>💡 Real-World Example: Sorting Objects by Field</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`class Student {
    String name;
    int marks;

    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

public class Example {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Alice", 85),
            new Student("Bob", 92),
            new Student("Charlie", 78)
        );

        // Sort by marks (ascending)
        List<Student> sortedByMarks = students.stream()
            .sorted(Comparator.comparingInt(s -> s.marks))
            .toList();

        // Sort by name (alphabetical)
        List<Student> sortedByName = students.stream()
            .sorted(Comparator.comparing(s -> s.name))
            .toList();

        sortedByMarks.forEach(s -> System.out.println(s.name + " - " + s.marks));
    }
}`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>sorted()</code> for natural ordering (like numbers or strings).</li>
                <li>For objects, always provide a <code>Comparator</code> using <code>Comparator.comparing()</code>.</li>
                <li>Use <code>reversed()</code> to quickly invert sorting order.</li>
                <li>Chain with <code>filter()</code> or <code>map()</code> for readable data pipelines.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(3, 9, 1, 4, 7);

        List<Integer> result = nums.stream()
            .filter(n -> n > 3)
            .sorted(Comparator.reverseOrder())
            .map(n -> n * 10)
            .toList();

        System.out.println(result); // Output: [90, 70, 40]
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Sorted Quiz</h2>
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
                        : "Review your answers and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Use <code>sorted()</code> to arrange data cleanly inside streams —
                combine it with <code>filter()</code> for selection, and <code>map()</code> for transformation.
                For complex objects, use <code>Comparator.comparing()</code> or <code>thenComparing()</code>
                to sort by multiple fields (like name then marks).
            </p>
        </div>
    );
}
