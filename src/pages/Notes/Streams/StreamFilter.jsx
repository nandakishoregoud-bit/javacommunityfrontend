import { useState } from "react";

export default function StreamFilter() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What does the filter() method do in Java Streams?",
            options: [
                "Transforms each element",
                "Selects elements based on a condition",
                "Reduces elements to a single value",
                "Sorts the elements"
            ],
            answer: 1,
        },
        {
            q: "Which of these will select only even numbers from a list?",
            options: [
                "numbers.stream().map(n -> n*2)",
                "numbers.stream().filter(n -> n % 2 == 0)",
                "numbers.stream().reduce((a,b) -> a+b)",
                "numbers.stream().forEach(System.out::println)"
            ],
            answer: 1,
        },
        {
            q: "Filter method returns what type of stream?",
            options: [
                "A new stream with selected elements",
                "A single value",
                "An array",
                "Nothing"
            ],
            answer: 0,
        },
        {
            q: "Can filter() be combined with other stream operations?",
            options: ["Yes", "No", "Only with map()", "Only with reduce()"],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>🔍 Stream <code>filter()</code> in Java</h1>
            <p>
                The <b>filter()</b> method in Java Streams allows you to select elements from a collection
                based on a given <b>boolean condition</b>.
                It helps create a subset of elements that meet specific criteria — for example, getting only
                even numbers, names starting with “A”, or objects with certain properties.
            </p>

            <h2>🔹 How It Works</h2>
            <ul>
                <li><code>filter()</code> takes a <b>Predicate</b> (a condition returning true or false).</li>
                <li>It keeps only the elements that satisfy this condition.</li>
                <li>It returns a <b>new Stream</b> containing only those selected elements.</li>
                <li>Does not modify the original collection.</li>
            </ul>

            <h2>🔹 Example 1: Filtering Even Numbers</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        // Filter even numbers
        List<Integer> evenNumbers = numbers.stream()
            .filter(n -> n % 2 == 0)
            .toList();

        System.out.println("Even Numbers: " + evenNumbers);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: Filtering Names Starting with 'A'</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Alice", "Bob", "Ankit", "David");

List<String> filteredNames = names.stream()
    .filter(n -> n.startsWith("A"))
    .toList();

System.out.println(filteredNames); // Output: [Alice, Ankit]`}</code>
            </pre>

            <h2>🔹 Combining filter() with Other Stream Operations</h2>
            <p>
                The <b>filter()</b> method can be chained with other stream operations like
                <code>map()</code>, <code>sorted()</code>, and <code>reduce()</code> to build
                powerful and readable data pipelines.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> result = Arrays.asList(1, 2, 3, 4, 5, 6).stream()
    .filter(n -> n % 2 == 1)    // keep only odd numbers
    .map(n -> n * 2)            // double them
    .sorted()                   // sort ascending
    .toList();

System.out.println(result); // Output: [2, 6, 10]`}</code>
            </pre>

            <h2>💡 Real-World Example: Filtering Objects</h2>
            <p>You can use <code>filter()</code> with objects in collections as well:</p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`class Employee {
    String name;
    double salary;
    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class FilterExample {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 90000),
            new Employee("Bob", 50000),
            new Employee("Charlie", 120000)
        );

        List<Employee> highEarners = employees.stream()
            .filter(e -> e.salary > 80000)
            .toList();

        highEarners.forEach(e -> System.out.println(e.name));
        // Output: Alice, Charlie
    }
}`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>filter()</code> to simplify conditional logic on collections.</li>
                <li>Prefer <code>filter()</code> over loops for readability and maintainability.</li>
                <li>Don’t modify external variables inside filter — keep it <b>pure</b> and stateless.</li>
                <li>Combine with <code>map()</code> and <code>collect()</code> for complex data transformations.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(3, 7, 2, 8, 5);

        List<Integer> filtered = nums.stream()
            .filter(n -> n > 4) // keep numbers greater than 4
            .map(n -> n * 10)
            .toList();

        System.out.println(filtered); // Output: [70, 80, 50]
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Filter Quiz</h2>
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
                💡 <b>Tip:</b> Use <code>filter()</code> when you need to extract specific elements that satisfy
                a condition. Combine it with <code>map()</code> for transformation,
                <code>sorted()</code> for ordering, or <code>reduce()</code> for aggregation to build
                powerful data-processing pipelines.
            </p>
        </div>
    );
}
