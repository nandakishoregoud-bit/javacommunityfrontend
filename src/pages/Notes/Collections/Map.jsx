import { useState } from "react";

export default function Map() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which of the following is true about Map in Java?",
            options: [
                "It allows duplicate keys",
                "It stores key-value pairs with unique keys",
                "It is ordered by insertion only",
                "It does not allow null values for keys"
            ],
            answer: 1
        },
        {
            q: "Which classes implement the Map interface?",
            options: ["HashMap and TreeMap", "ArrayList and LinkedList", "HashSet and TreeSet", "Stack and Queue"],
            answer: 0
        },
        {
            q: "Which method is used to retrieve a value for a specific key?",
            options: ["get(key)", "add(key)", "remove(key)", "set(key)"],
            answer: 0
        },
        {
            q: "Can a Map contain a null key?",
            options: ["Yes, only one null key", "No", "Yes, multiple null keys", "Depends on the Map type"],
            answer: 3
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Map Interface in Java</h1>
            <p>
                A <b>Map</b> stores key-value pairs where keys are unique. Common implementations include <b>HashMap</b> and <b>TreeMap</b>.
            </p>

            <h2>🔹 Example: Using HashMap</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");

        System.out.println(map); // Output: {1=Apple, 2=Banana, 3=Cherry}
        System.out.println("Value for key 2: " + map.get(2)); // Output: Banana
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Using TreeMap</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("C", 3);
        treeMap.put("A", 1);
        treeMap.put("B", 2);

        System.out.println(treeMap); // Output: {A=1, B=2, C=3} (sorted by key)
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Map Quiz</h2>
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
                💡 Tip: Use <b>HashMap</b> for fast access and <b>TreeMap</b> for sorted keys. Keys must be unique, but values can be duplicated.
            </p>
        </div>
    );
}
