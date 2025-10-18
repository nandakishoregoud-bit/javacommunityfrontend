import { useState } from "react";

export default function StreamBasics() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is a Stream in Java?",
            options: [
                "A type of loop",
                "A way to read files only",
                "A sequence of elements supporting functional-style operations",
                "A type of variable"
            ],
            answer: 2
        },
        {
            q: "Which Stream operation is used to transform each element?",
            options: ["filter", "map", "reduce", "collect"],
            answer: 1
        },
        {
            q: "Which Stream operation is used to get a single value from elements?",
            options: ["map", "reduce", "forEach", "filter"],
            answer: 1
        },
        {
            q: "Streams support which style of programming?",
            options: ["Object-oriented only", "Functional-style operations", "Procedural only", "Loop-only"],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Stream Basics in Java</h1>
            <p>
                Streams allow functional-style operations on collections of data. You can perform operations like <b>map</b>, <b>filter</b>, and <b>reduce</b> in a concise and readable way.
            </p>

            <h2>🔹 Example: Stream Operations</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // map: multiply each number by 2
        List<Integer> doubled = numbers.stream()
                                       .map(n -> n * 2)
                                       .toList();
        System.out.println("Doubled: " + doubled);

        // filter: get only even numbers
        List<Integer> even = numbers.stream()
                                    .filter(n -> n % 2 == 0)
                                    .toList();
        System.out.println("Even: " + even);

        // reduce: sum of numbers
        int sum = numbers.stream()
                         .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stream Basics Quiz</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: '20px 0' }}>
                        <div style={{ marginBottom: 8 }}>{idx + 1}. {item.q}</div>
                        {item.options.map((option, oidx) => (
                            <label key={oidx} style={{ display: 'block', marginBottom: 2 }}>
                                <input
                                    type="radio"
                                    name={`q${idx}`}
                                    checked={selected[idx] === oidx}
                                    onChange={() => {
                                        const copy = [...selected];
                                        copy[idx] = oidx;
                                        setSelected(copy);
                                    }}
                                />
                                {" "} {option}
                                {showAnswers && item.answer === oidx && (
                                    <span style={{ color: 'green', marginLeft: 10 }}>&#10003; Correct</span>
                                )}
                                {showAnswers && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: 'red', marginLeft: 10 }}>✗</span>
                                )}
                            </label>
                        ))}
                    </div>
                ))}
                {!showAnswers && (
                    <button
                        type="submit"
                        style={{
                            padding: '8px 16px',
                            fontWeight: 600,
                            borderRadius: 5,
                            background: '#198754',
                            color: 'white',
                            border: 'none'
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
                💡 Tip: Use streams to write concise, readable, and functional-style code on collections. Common operations include <b>map</b>, <b>filter</b>, and <b>reduce</b>.
            </p>
        </div>
    );
}
