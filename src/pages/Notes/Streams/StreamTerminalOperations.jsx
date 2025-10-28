import { useState } from "react";

export default function StreamTerminalOperations() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "Which of the following is a terminal operation?",
            options: ["filter()", "map()", "count()", "sorted()"],
            answer: 2,
        },
        {
            q: "What does findFirst() return?",
            options: [
                "A single integer value",
                "An Optional containing the first element",
                "A List of elements",
                "Nothing"
            ],
            answer: 1,
        },
        {
            q: "Which method checks if any element matches a condition?",
            options: ["anyMatch()", "allMatch()", "noneMatch()", "findAny()"],
            answer: 0,
        },
        {
            q: "What does max() or min() return in a Stream?",
            options: [
                "The maximum/minimum element wrapped in an Optional",
                "A count of elements",
                "A sorted list",
                "A boolean"
            ],
            answer: 0,
        },
        {
            q: "Which of these is NOT a terminal operation?",
            options: ["count()", "collect()", "map()", "forEach()"],
            answer: 2,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 800, margin: "auto" }}>
            <h1>🎯 Stream Terminal Operations in Java</h1>
            <p>
                **Terminal operations** in Java Streams trigger the processing of data.
                Once a terminal operation is called, the stream is consumed and can’t be reused.
                These operations typically return a result such as a number, boolean, Optional, or collection.
            </p>

            <h2>🔹 1. count()</h2>
            <p>Counts the number of elements in the stream.</p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
long count = numbers.stream().filter(n -> n % 2 == 0).count();
System.out.println("Even numbers count: " + count); // 2`}</code>
            </pre>

            <h2>🔹 2. min() and max()</h2>
            <p>
                Finds the smallest or largest element in the stream, returning an <code>Optional&lt;T&gt;</code>.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(10, 20, 5, 30);

int min = numbers.stream().min(Integer::compareTo).get();
int max = numbers.stream().max(Integer::compareTo).get();

System.out.println("Min: " + min); // 5
System.out.println("Max: " + max); // 30`}</code>
            </pre>

            <h2>🔹 3. findFirst() and findAny()</h2>
            <p>
                Returns an <code>Optional&lt;T&gt;</code> containing the first or any element in the stream.
                Useful when you only need one result.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

Optional<String> first = names.stream().findFirst();
Optional<String> any = names.parallelStream().findAny();

System.out.println("First: " + first.get());
System.out.println("Any: " + any.get());`}</code>
            </pre>

            <h2>🔹 4. anyMatch(), allMatch(), noneMatch()</h2>
            <p>
                These operations return a boolean value based on conditions applied to elements in the stream.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<Integer> numbers = Arrays.asList(2, 4, 6, 8);

boolean anyOdd = numbers.stream().anyMatch(n -> n % 2 != 0);
boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0);
boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);

System.out.println("Any odd? " + anyOdd);        // false
System.out.println("All even? " + allEven);      // true
System.out.println("No negatives? " + noneNegative); // true`}</code>
            </pre>

            <h2>🔹 5. forEach()</h2>
            <p>
                Performs an action for each element. It’s a **terminal operation** that’s often used for displaying results.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`List<String> names = Arrays.asList("Java", "Spring", "Stream");
names.stream().forEach(System.out::println);`}</code>
            </pre>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Use <code>findFirst()</code> for ordered streams (like lists).</li>
                <li>Use <code>findAny()</code> in parallel streams for performance.</li>
                <li>Use <code>allMatch()</code> and <code>noneMatch()</code> for validations.</li>
                <li>Check <code>Optional.isPresent()</code> before calling <code>get()</code> to avoid exceptions.</li>
                <li>Combine <code>filter()</code> with <code>count()</code> or <code>anyMatch()</code> for efficient checks.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Practice {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(12, 5, 8, 20, 15);

        boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
        long countAbove10 = numbers.stream().filter(n -> n > 10).count();
        Optional<Integer> max = numbers.stream().max(Integer::compareTo);

        System.out.println("Has even: " + hasEven);
        System.out.println("Count > 10: " + countAbove10);
        System.out.println("Max number: " + max.get());
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Terminal Operations Quiz</h2>
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
                        ? "🎉 Great job! You mastered terminal operations!"
                        : "Review the examples and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Terminal operations are the “end” of a stream pipeline.
                They trigger execution and produce results — whether a count, a boolean, or a single value.
                Combine them with <code>filter()</code>, <code>map()</code>, or <code>sorted()</code>
                for powerful and expressive data processing in Java.
            </p>
        </div>
    );
}
