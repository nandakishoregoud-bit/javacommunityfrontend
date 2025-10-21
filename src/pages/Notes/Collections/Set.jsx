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
            options: [
                "HashSet and LinkedHashSet",
                "ArrayList and LinkedList",
                "HashMap and TreeMap",
                "Stack and Queue"
            ],
            answer: 0
        },
        {
            q: "Can a Set contain null elements?",
            options: [
                "Yes, only one null element",
                "No",
                "Yes, multiple null elements",
                "Depends on the implementation"
            ],
            answer: 0
        },
        {
            q: "What happens when you add a duplicate element to a Set?",
            options: [
                "It replaces the old element",
                "It ignores the new element",
                "It throws an error",
                "It stores both elements"
            ],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Set Interface in Java</h1>

            <p>
                A <b>Set</b> in Java is part of the <code>java.util</code> package and represents an
                <b> unordered collection</b> of unique elements — meaning it <b>does not allow duplicates</b>.
                Unlike a List, Set does not maintain insertion order (except for <b>LinkedHashSet</b>).
            </p>

            <h2>🔹 Key Features of Set</h2>
            <ul>
                <li>Does not allow duplicate elements.</li>
                <li>Can contain at most one <code>null</code> element.</li>
                <li>Unordered (unless using LinkedHashSet).</li>
                <li>Used when uniqueness of elements is important.</li>
            </ul>

            <h2>🔹 Types of Set Implementations</h2>
            <ul>
                <li><b>HashSet</b> – Fastest, unordered, allows one null.</li>
                <li><b>LinkedHashSet</b> – Maintains insertion order, slightly slower.</li>
                <li><b>TreeSet</b> – Sorted set, does not allow null, slower than HashSet.</li>
            </ul>

            <h2>🔹 Example 1: Using HashSet</h2>
            <p><b>HashSet</b> stores elements in a hash table — fast for add, remove, and lookup operations.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> fruits = new HashSet<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple"); // duplicate ignored

        System.out.println(fruits);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[Banana, Apple] // order not guaranteed`}</code>
            </pre>

            <h2>🔹 Example 2: Using LinkedHashSet</h2>
            <p><b>LinkedHashSet</b> maintains the insertion order while still avoiding duplicates.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Integer> numbers = new LinkedHashSet<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(10); // duplicate ignored

        System.out.println(numbers);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[10, 20] // maintains insertion order`}</code>
            </pre>

            <h2>🔹 Example 3: Using TreeSet</h2>
            <p>
                <b>TreeSet</b> stores elements in a sorted (ascending) order and does not allow <code>null</code> values.
                It is implemented using a <code>TreeMap</code>.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> names = new TreeSet<>();
        names.add("John");
        names.add("Alice");
        names.add("Bob");

        System.out.println(names);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[Alice, Bob, John] // sorted order`}</code>
            </pre>

            <h2>🔹 When to Use Which Set?</h2>
            <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ background: "#f1f1f1" }}>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Type</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Order</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Duplicates</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Allows Null?</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Best For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>HashSet</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Unordered</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>No</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Yes (1)</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fast lookups</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>LinkedHashSet</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Insertion Order</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>No</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Yes (1)</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Preserving order</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>TreeSet</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Sorted (Ascending)</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>No</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>No</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Sorting elements</td>
                    </tr>
                </tbody>
            </table>

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
                💡 <b>Tip:</b> Use <b>HashSet</b> for speed, <b>LinkedHashSet</b> for maintaining order, and
                <b> TreeSet</b> for sorted data. Sets are ideal when you need unique elements!
            </p>
        </div>
    );
}
