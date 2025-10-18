import { useState } from "react";

export default function List() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which of the following is true about List in Java?",
            options: [
                "It does not allow duplicate elements",
                "It is unordered",
                "It is an ordered collection that allows duplicates",
                "It is only used for arrays"
            ],
            answer: 2
        },
        {
            q: "Which classes implement the List interface?",
            options: ["ArrayList and LinkedList", "HashSet and TreeSet", "HashMap and TreeMap", "Stack only"],
            answer: 0
        },
        {
            q: "Which method is used to get an element at a specific index?",
            options: ["get(index)", "add(index)", "remove(index)", "set(index)"],
            answer: 0
        },
        {
            q: "Can a List contain null elements?",
            options: ["Yes", "No", "Only in LinkedList", "Only in ArrayList"],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>List Interface in Java</h1>
            <p>
                A <b>List</b> is an ordered collection that allows duplicate elements. Common implementations include <b>ArrayList</b> and <b>LinkedList</b>.
            </p>

            <h2>🔹 Example: Using ArrayList</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple"); // duplicates allowed

        System.out.println(fruits); // Output: [Apple, Banana, Apple]
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Using LinkedList</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new LinkedList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println(numbers); // Output: [10, 20, 30]
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: List Quiz</h2>
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
                💡 Tip: Use <b>ArrayList</b> for fast random access and <b>LinkedList</b> for efficient insertions and deletions.
            </p>
        </div>
    );
}
