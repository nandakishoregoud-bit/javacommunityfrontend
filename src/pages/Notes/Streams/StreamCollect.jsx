import { useState } from "react";

export default function StreamCollect() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does the collect() method do in Java Streams?",
            options: [
                "Terminates the stream and gathers results",
                "Filters elements based on condition",
                "Sorts the elements",
                "Transforms elements into another type"
            ],
            answer: 0,
        },
        {
            q: "Which collector is used to gather stream elements into a List?",
            options: [
                "Collectors.toSet()",
                "Collectors.toList()",
                "Collectors.toMap()",
                "Collectors.joining()"
            ],
            answer: 1,
        },
        {
            q: "Which collector groups elements by a property?",
            options: [
                "Collectors.partitioningBy()",
                "Collectors.groupingBy()",
                "Collectors.toMap()",
                "Collectors.mapping()"
            ],
            answer: 1,
        },
        {
            q: "What type of operation is collect() in streams?",
            options: ["Intermediate", "Terminal", "Optional", "Lazy"],
            answer: 1,
        }
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>🧺 Stream <code>collect()</code> in Java</h1>
            <p>
                The <b>collect()</b> method is a <b>terminal operation</b> in Java Streams that gathers elements
                from a stream into a collection such as a <code>List</code>, <code>Set</code>, or <code>Map</code>.
                It’s one of the most powerful features of the Stream API, often used for summarizing, grouping,
                and transforming data.
            </p>

            <h2>🔹 Basic Example: Collecting to a List</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Collect even numbers into a List
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());

        System.out.println("Even Numbers: " + evens);
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Collecting to a Set</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Alice", "Bob", "Alice", "Charlie");

Set<String> uniqueNames = names.stream()
    .collect(Collectors.toSet());

System.out.println("Unique Names: " + uniqueNames); // Removes duplicates`}</code>
            </pre>

            <h2>🔹 Example: Collecting to a Map</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

Map<String, Integer> nameLengthMap = names.stream()
    .collect(Collectors.toMap(
        name -> name,             // Key mapper
        name -> name.length()     // Value mapper
    ));

System.out.println(nameLengthMap); // {Alice=5, Bob=3, Charlie=7}`}</code>
            </pre>

            <h2>🔹 Example: Grouping Data</h2>
            <p>
                You can use <code>Collectors.groupingBy()</code> to group elements based on a specific property.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`class Student {
    String name;
    String grade;
    Student(String name, String grade) {
        this.name = name;
        this.grade = grade;
    }
}

public class Example {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Alice", "A"),
            new Student("Bob", "B"),
            new Student("Charlie", "A"),
            new Student("David", "B")
        );

        // Group students by grade
        Map<String, List<Student>> grouped = students.stream()
            .collect(Collectors.groupingBy(s -> s.grade));

        grouped.forEach((grade, list) -> {
            System.out.println(grade + ": " +
                list.stream().map(s -> s.name).toList());
        });
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Joining Strings</h2>
            <p>
                The <code>Collectors.joining()</code> method combines all strings in a stream into a single string.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Java", "Spring", "Streams");

String joined = names.stream()
    .collect(Collectors.joining(", "));

System.out.println(joined); // Output: Java, Spring, Streams`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>Collectors.toList()</code> or <code>toSet()</code> for simple collections.</li>
                <li>Use <code>groupingBy()</code> for organizing data logically (like students by grade).</li>
                <li>Use <code>toMap()</code> when you need key-value pairs.</li>
                <li>Use <code>joining()</code> for readable string combinations.</li>
                <li>Combine with <code>filter()</code>, <code>map()</code>, or <code>sorted()</code> for powerful pipelines.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Alex");

        // Find names starting with 'A' and collect to List
        List<String> result = names.stream()
            .filter(n -> n.startsWith("A"))
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Names starting with A: " + result);
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Collect Quiz</h2>
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
                💡 <b>Tip:</b> The <code>collect()</code> method is like a “final container” for stream results.
                It’s perfect for converting processed data into collections, maps, or readable strings.
                Combine it with <code>filter()</code>, <code>map()</code>, <code>sorted()</code>, and
                <code>reduce()</code> for clean and powerful stream pipelines.
            </p>
        </div>
    );
}
