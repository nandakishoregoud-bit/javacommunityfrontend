import { useState } from "react";

export default function StreamAdvancedOperations() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "What does distinct() do in a Stream?",
            options: [
                "Sorts elements",
                "Removes duplicate elements",
                "Skips elements",
                "Filters null values"
            ],
            answer: 1,
        },
        {
            q: "Which method is used to limit the number of elements processed?",
            options: [
                "skip()",
                "distinct()",
                "limit()",
                "reduce()"
            ],
            answer: 2,
        },
        {
            q: "What does flatMap() do in Java Streams?",
            options: [
                "Flattens nested structures and maps elements",
                "Combines two lists",
                "Filters elements",
                "Sorts elements"
            ],
            answer: 0,
        },
        {
            q: "Which method is used for debugging inside a stream pipeline?",
            options: [
                "peek()",
                "map()",
                "filter()",
                "reduce()"
            ],
            answer: 0,
        },
        {
            q: "What does skip(3) do?",
            options: [
                "Skips the first 3 elements of the stream",
                "Takes only 3 elements",
                "Removes duplicates",
                "Stops the stream after 3 elements"
            ],
            answer: 0,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>⚙️ Advanced Stream Operations in Java</h1>
            <p>
                Beyond the core operations (<code>filter</code>, <code>map</code>, <code>reduce</code>),
                Java Streams also provide several **advanced utilities** for fine-tuning data pipelines —
                such as removing duplicates, limiting results, flattening collections, or inspecting elements.
            </p>

            <h2>🔹 1. distinct() – Remove Duplicates</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class DistinctExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 4, 5);

        List<Integer> unique = numbers.stream()
            .distinct()
            .toList();

        System.out.println("Unique Numbers: " + unique);
    }
}`}</code>
            </pre>
            <p>💡 <b>Tip:</b> <code>distinct()</code> relies on <code>equals()</code> to detect duplicates, so for custom objects, make sure to override <code>equals()</code> and <code>hashCode()</code>.</p>

            <h2>🔹 2. limit() and skip() – Control Stream Size</h2>
            <p>
                These are useful for **pagination** or **partial processing** of data.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50, 60);

// Take first 3 elements
List<Integer> firstThree = numbers.stream()
    .limit(3)
    .toList();

// Skip first 2 elements
List<Integer> afterSkip = numbers.stream()
    .skip(2)
    .toList();

System.out.println("First 3: " + firstThree); // [10, 20, 30]
System.out.println("After skip: " + afterSkip); // [30, 40, 50, 60]`}</code>
            </pre>

            <h2>🔹 3. flatMap() – Flatten Nested Collections</h2>
            <p>
                When you have nested collections (like <code>List&lt;List&lt;T&gt;&gt;</code>),
                <code>flatMap()</code> "flattens" them into a single stream.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<List<Integer>> data = List.of(
    List.of(1, 2),
    List.of(3, 4),
    List.of(5, 6)
);

List<Integer> flattened = data.stream()
    .flatMap(List::stream)
    .toList();

System.out.println(flattened); // [1, 2, 3, 4, 5, 6]`}</code>
            </pre>
            <p>💡 <b>Use flatMap when:</b> You want to process elements inside nested structures (e.g., lists inside lists, or streams of streams).</p>

            <h2>🔹 4. peek() – Debugging Helper</h2>
            <p>
                <code>peek()</code> lets you view elements as they flow through the stream pipeline — helpful for debugging.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> result = Stream.of(1, 2, 3, 4, 5)
    .filter(n -> n % 2 == 1)
    .peek(n -> System.out.println("After filter: " + n))
    .map(n -> n * 10)
    .peek(n -> System.out.println("After map: " + n))
    .toList();`}</code>
            </pre>
            <p>💡 <b>Note:</b> Use <code>peek()</code> only for debugging or logging — it’s not meant to change data.</p>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>distinct()</code> to remove duplicates before sorting or collecting.</li>
                <li>Use <code>limit()</code> and <code>skip()</code> for pagination (e.g., “page 2 = skip(10).limit(10)”).</li>
                <li>Use <code>flatMap()</code> to simplify nested data structures.</li>
                <li>Use <code>peek()</code> for debugging streams — not for logic.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<List<String>> names = List.of(
            List.of("Alice", "Bob"),
            List.of("Charlie", "David"),
            List.of("Alice", "Eve")
        );

        List<String> result = names.stream()
            .flatMap(List::stream)       // flatten
            .distinct()                  // remove duplicates
            .skip(1)                     // skip the first
            .limit(3)                    // take next 3
            .peek(System.out::println)   // debug
            .toList();

        System.out.println("Final Result: " + result);
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Advanced Quiz</h2>
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
                        ? "🎉 Excellent! You mastered advanced operations!"
                        : "Review your notes and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Combine these advanced operations to make your stream pipelines more powerful —
                e.g., <code>flatMap()</code> + <code>distinct()</code> + <code>limit()</code> = perfect for filtering
                and flattening data efficiently.
            </p>
        </div>
    );
}
