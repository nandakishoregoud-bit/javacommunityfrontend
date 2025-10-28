import { useState } from "react";

export default function StreamBasics() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "What is a Stream in Java?",
            options: [
                "A type of loop",
                "A way to read files only",
                "A sequence of elements supporting functional-style operations",
                "A type of variable"
            ],
            answer: 2,
        },
        {
            q: "Which Stream operation is used to transform each element?",
            options: ["filter", "map", "reduce", "collect"],
            answer: 1,
        },
        {
            q: "Which Stream operation is used to combine elements into a single result?",
            options: ["map", "reduce", "forEach", "filter"],
            answer: 1,
        },
        {
            q: "Which operation is non-terminal?",
            options: ["forEach", "map", "collect", "reduce"],
            answer: 1,
        },
        {
            q: "What is the advantage of Streams?",
            options: [
                "Less code and better readability",
                "Slower performance",
                "Manual iteration needed",
                "They replace collections completely"
            ],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 800, margin: "auto" }}>
            <h1>💧 Java Streams — Functional Programming Made Simple</h1>
            <p>
                In Java, <b>Streams</b> provide a modern and functional way to process data. Instead of writing loops, you can use Streams
                to perform operations like <code>filter</code>, <code>map</code>, and <code>reduce</code> in a clean and readable way.
            </p>

            <h2>🔹 What is a Stream?</h2>
            <p>
                A <b>Stream</b> is a sequence of elements (like a list of numbers or strings) that supports various functional-style operations
                to process data. Streams do <b>not</b> store elements; they simply process data from collections, arrays, or I/O sources.
            </p>

            <ul>
                <li>Introduced in <b>Java 8</b>.</li>
                <li>Supports <b>functional-style</b> operations on collections.</li>
                <li>Does <b>not modify</b> the original collection.</li>
                <li>Operations can be <b>intermediate</b> (like <code>map()</code>, <code>filter()</code>) or <b>terminal</b> (like <code>collect()</code>, <code>forEach()</code>).</li>
            </ul>

            <h2>🔹 Stream Operations Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        // filter: keep only even numbers
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .toList();
        System.out.println("Even Numbers: " + evens);

        // map: multiply each number by 2
        List<Integer> doubled = numbers.stream()
            .map(n -> n * 2)
            .toList();
        System.out.println("Doubled Numbers: " + doubled);

        // reduce: sum of all numbers
        int sum = numbers.stream()
            .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);
    }
}`}</code>
            </pre>

            <h2>🔹 Intermediate and Terminal Operations</h2>
            <ul>
                <li>
                    <b>Intermediate Operations</b> — return a new stream (can be chained).
                    Examples: <code>filter()</code>, <code>map()</code>, <code>sorted()</code>, <code>distinct()</code>.
                </li>
                <li>
                    <b>Terminal Operations</b> — produce a result or side effect.
                    Examples: <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code>, <code>count()</code>.
                </li>
            </ul>

            <h2>🔹 Stream Pipeline</h2>
            <p>A Stream pipeline usually consists of three parts:</p>
            <ol>
                <li><b>Source</b> — e.g., a Collection like List or Set.</li>
                <li><b>Intermediate Operations</b> — transform or filter the data.</li>
                <li><b>Terminal Operation</b> — produces a final result.</li>
            </ol>

            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

List<String> result = names.stream()
    .filter(n -> n.startsWith("A"))
    .map(String::toUpperCase)
    .sorted()
    .toList();

System.out.println(result); // [ALICE]`}</code>
            </pre>

            <h2>🔹 Parallel Streams</h2>
            <p>
                Java also supports <b>parallel streams</b> to perform operations concurrently using multiple threads.
                They can be created by calling <code>parallelStream()</code> instead of <code>stream()</code>.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);

int total = numbers.parallelStream()
    .mapToInt(n -> n * 2)
    .sum();

System.out.println("Parallel Sum: " + total);`}</code>
            </pre>

            <h2>💡 Best Practices</h2>
            <ul>
                <li>Use streams when performing bulk operations on collections.</li>
                <li>Avoid using them for very simple single operations — loops can be more efficient.</li>
                <li>Keep operations stateless and avoid modifying external variables inside streams.</li>
                <li>Prefer <code>map()</code> + <code>filter()</code> chaining instead of nested loops.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(3, 7, 2, 8, 5);

        int result = nums.stream()
            .filter(n -> n % 2 == 1)  // keep odd numbers
            .map(n -> n * 2)          // double each
            .reduce(0, Integer::sum); // sum them

        System.out.println("Result: " + result); // (3*2 + 7*2 + 5*2) = 30
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Java Streams Quiz</h2>
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
        </div>
    );
}
