import { useState } from "react";

export default function Map() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "Which of the following is true about Map in Java?",
            options: [
                "It allows duplicate keys",
                "It stores key-value pairs with unique keys",
                "It allows duplicate keys and values",
                "It is ordered and sorted by default"
            ],
            answer: 1
        },
        {
            q: "Which classes implement the Map interface?",
            options: ["HashMap, LinkedHashMap, TreeMap, Hashtable", "ArrayList and LinkedList", "HashSet and TreeSet", "Stack and Queue"],
            answer: 0
        },
        {
            q: "Which Map maintains insertion order?",
            options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
            answer: 2
        },
        {
            q: "Which Map is synchronized and thread-safe?",
            options: ["HashMap", "LinkedHashMap", "Hashtable", "TreeMap"],
            answer: 2
        },
        {
            q: "Which Map stores entries in sorted order of keys?",
            options: ["HashMap", "TreeMap", "LinkedHashMap", "ConcurrentHashMap"],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1rem", maxWidth: 900, margin: "auto" }}>
            <h1>Map Interface in Java</h1>
            <p>
                The <b>Map</b> interface in Java is part of the <b>java.util</b> package and represents a collection that stores
                <b> key-value pairs</b>. Each key in a Map is unique, and each key maps to exactly one value.
            </p>
            <p>
                Maps are not part of the Collection hierarchy, but they are widely used for tasks like
                storing user data, caching, or managing configurations.
            </p>

            <h2>🔹 Commonly Used Map Implementations</h2>
            <ul>
                <li><b>HashMap</b> – Unordered, allows one null key and multiple null values, very fast.</li>
                <li><b>LinkedHashMap</b> – Maintains insertion order, slightly slower than HashMap.</li>
                <li><b>TreeMap</b> – Sorts keys in natural or custom order, no null keys allowed.</li>
                <li><b>Hashtable</b> – Thread-safe but legacy, does not allow null keys or values.</li>
            </ul>

            <h2>🔹 When to Use Each</h2>
            <ul>
                <li>✅ Use <b>HashMap</b> when you need fast access and don’t care about order.</li>
                <li>✅ Use <b>LinkedHashMap</b> when you want predictable insertion order.</li>
                <li>✅ Use <b>TreeMap</b> when you need keys sorted automatically.</li>
                <li>✅ Use <b>Hashtable</b> in legacy code or for synchronized maps (but prefer ConcurrentHashMap instead).</li>
            </ul>

            <h2>🔹 When to Use Which Map?</h2>
            <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ background: "#f1f1f1" }}>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Type</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Ordering</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Allows null key/value</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Thread-safe</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>When to Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>HashMap</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Unordered</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>1 null key, many null values</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>❌ No (0)</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fast lookups</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>LinkedHashMap</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Insertion Order</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>✅ Yes</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>❌ No </td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Maintain order</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>TreeMap</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Sorted order</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>❌ No null key</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>❌ No</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Sorted keys</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Hashtable</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Unordered</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>❌ No null</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>✅ Yes</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Legacy thread-safe</td>
                    </tr>
                </tbody>
            </table>
            <h2>🔹 Example 1: Using HashMap</h2>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "6px" }}>
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

            <h2>🔹 Example 2: Using LinkedHashMap</h2>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "6px" }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> linkedMap = new LinkedHashMap<>();
        linkedMap.put("C", 3);
        linkedMap.put("A", 1);
        linkedMap.put("B", 2);

        System.out.println(linkedMap); // Output: {C=3, A=1, B=2} (insertion order)
    }
}`}</code>
            </pre>

            <h2>🔹 Example 3: Using TreeMap</h2>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "6px" }}>
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

            <h2>🔹 Example 4: Using Hashtable</h2>
            <pre style={{ background: "#f5f5f5", padding: "10px", borderRadius: "6px" }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<Integer, String> table = new Hashtable<>();
        table.put(1, "Alpha");
        table.put(2, "Beta");
        table.put(3, "Gamma");

        System.out.println(table); // Output: {3=Gamma, 2=Beta, 1=Alpha} (unordered)
    }
}`}</code>
            </pre>

            <h2>🧠 Test Yourself: Map Quiz</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowAnswers(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "20px 0" }}>
                        <div style={{ marginBottom: 8 }}>
                            {idx + 1}. {item.q}
                        </div>
                        {item.options.map((option, oidx) => (
                            <label key={oidx} style={{ display: "block", marginBottom: 4 }}>
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
                                {" "}{option}
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
                            borderRadius: 6,
                            background: "#198754",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
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

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px", marginTop: 30 }}>
                💡 <b>Tip:</b> Use <b>HashMap</b> for speed, <b>LinkedHashMap</b> for predictable order,
                <b> TreeMap</b> for sorting, and <b>Hashtable</b> for legacy thread-safe needs.
            </p>
        </div>
    );
}
