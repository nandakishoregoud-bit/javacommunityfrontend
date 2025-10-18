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
            answer: 1
        },
        {
            q: "Which of these will select only even numbers from a list?",
            options: [
                "numbers.stream().map(n -> n*2)",
                "numbers.stream().filter(n -> n % 2 == 0)",
                "numbers.stream().reduce((a,b) -> a+b)",
                "numbers.stream().forEach(System.out::println)"
            ],
            answer: 1
        },
        {
            q: "Filter method returns what type of stream?",
            options: [
                "A new stream with selected elements",
                "A single value",
                "An array",
                "Nothing"
            ],
            answer: 0
        },
        {
            q: "Can filter() be combined with other stream operations?",
            options: ["Yes", "No", "Only with map()", "Only with reduce()"],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Stream Filter in Java</h1>
            <p>
                The <b>filter()</b> method allows selecting elements from a collection based on a given condition.
                It produces a new stream containing only elements that match the condition.
            </p>

            <h2>🔹 Example: Using filter()</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
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

            <h2>📝 Test Yourself: Stream Filter Quiz</h2>
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
                💡 Tip: Use <b>filter()</b> to create a subset of a collection based on conditions, and you can chain it with other stream operations like <b>map()</b> or <b>reduce()</b>.
            </p>
        </div>
    );
}
