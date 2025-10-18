import { useState } from "react";

export default function Set() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which of the following is true about Set in Java?",
            options: [
                "It allows duplicate elements",
                "It is an ordered collection",
                "It is unordered and does not allow duplicates",
                "It only stores numbers"
            ],
            answer: 2
        },
        {
            q: "Which classes implement the Set interface?",
            options: ["HashSet and LinkedHashSet", "ArrayList and LinkedList", "HashMap and TreeMap", "Stack and Queue"],
            answer: 0
        },
        {
            q: "Can a Set contain null elements?",
            options: ["Yes, only one null element", "No", "Yes, multiple null elements", "Depends on the implementation"],
            answer: 0
        },
        {
            q: "What happens when you add a duplicate element to a Set?",
            options: ["It replaces the old element", "It ignores the new element", "It throws an error", "It stores both elements"],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Set Interface in Java</h1>
            <p>
                A <b>Set</b> is an unordered collection that does not allow duplicates. Common implementations include <b>HashSet</b> and <b>LinkedHashSet</b>.
            </p>

            <h2>🔹 Example: Using HashSet</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> fruits = new HashSet<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple"); // duplicate ignored

        System.out.println(fruits); // Output: [Apple, Banana]
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Using LinkedHashSet</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Integer> numbers = new LinkedHashSet<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(10); // duplicate ignored

        System.out.println(numbers); // Output: [10, 20] (insertion order preserved)
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Set Quiz</h2>
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
                💡 Tip: Use <b>HashSet</b> for fast access, <b>LinkedHashSet</b> to preserve insertion order. Duplicates are automatically ignored.
            </p>
        </div>
    );
}
