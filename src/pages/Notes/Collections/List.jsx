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
            options: [
                "ArrayList and LinkedList",
                "HashSet and TreeSet",
                "HashMap and TreeMap",
                "Stack only"
            ],
            answer: 0
        },
        {
            q: "Which method is used to get an element at a specific index?",
            options: ["get(index)", "add(index)", "remove(index)", "set(index)"],
            answer: 0
        },
        {
            q: "Which List implementation is best for frequent insertions and deletions?",
            options: [
                "ArrayList",
                "LinkedList",
                "Vector",
                "HashSet"
            ],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>List Interface in Java</h1>

            <p>
                In Java, the <b>List</b> interface is part of the <code>java.util</code> package and represents
                an <b>ordered collection</b> (also known as a sequence). Lists allow duplicate elements and maintain
                the insertion order — meaning elements are stored and retrieved in the same order.
            </p>

            <h2>🔹 Key Features of List</h2>
            <ul>
                <li>Maintains insertion order.</li>
                <li>Allows duplicate elements.</li>
                <li>Supports positional access — elements can be accessed using an index.</li>
                <li>Can contain <code>null</code> values.</li>
                <li>Dynamic — grows or shrinks in size automatically.</li>
            </ul>

            <h2>🔹 Common Implementations of List Interface</h2>
            <ul>
                <li><b>ArrayList</b> – Best for fast random access and searching.</li>
                <li><b>LinkedList</b> – Best for frequent insertions and deletions.</li>
                <li><b>Vector</b> – Synchronized version of ArrayList (thread-safe).</li>
                <li><b>Stack</b> – Follows LIFO (Last In, First Out) principle; extends Vector.</li>
            </ul>

            <h2>🔹 Example 1: Using ArrayList</h2>
            <p><b>ArrayList</b> is backed by a dynamic array. It provides fast access (O(1)) but slower insertions/removals in the middle.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple"); // duplicates allowed

        System.out.println(fruits);
        System.out.println("Element at index 1: " + fruits.get(1));
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[Apple, Banana, Apple]
Element at index 1: Banana`}</code>
            </pre>

            <h2>🔹 Example 2: Using LinkedList</h2>
            <p><b>LinkedList</b> is implemented as a doubly linked list. It is efficient for inserting or deleting elements frequently.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new LinkedList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.remove(1); // removes element at index 1

        System.out.println(numbers);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[10, 30]`}</code>
            </pre>

            <h2>🔹 Example 3: Using Vector</h2>
            <p><b>Vector</b> is similar to ArrayList but is synchronized — meaning it is thread-safe and can be used in multithreaded environments.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("Java");
        vector.add("Python");
        vector.add("C++");

        System.out.println(vector);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[Java, Python, C++]`}</code>
            </pre>

            <h2>🔹 Example 4: Using Stack</h2>
            <p><b>Stack</b> extends Vector and follows the LIFO (Last In, First Out) principle.</p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("A");
        stack.push("B");
        stack.push("C");

        System.out.println(stack);
        System.out.println("Top element: " + stack.peek());
        stack.pop();
        System.out.println("After pop: " + stack);
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`[A, B, C]
Top element: C
After pop: [A, B]`}</code>
            </pre>

            <h2>🔹 When to Use Which List?</h2>
            <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
                <thead>
                    <tr style={{ background: "#f1f1f1" }}>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Type</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Best Use Case</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Performance Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>ArrayList</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fast access, read-heavy operations</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>O(1) access, O(n) insertion/deletion in middle</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>LinkedList</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Frequent insertions/deletions</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>O(1) insertion/deletion, O(n) access</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Vector</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Thread-safe operations</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Synchronized but slower</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Stack</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>LIFO operations (undo, backtracking)</td>
                        <td style={{ border: "1px solid #ccc", padding: "8px" }}>Push/pop at one end</td>
                    </tr>
                </tbody>
            </table>

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
                💡 <b>Tip:</b> Use <code>ArrayList</code> when access speed matters, and <code>LinkedList</code> when insertion/deletion
                frequency is high. For thread safety, prefer <code>Vector</code> or modern alternatives like
                <code> CopyOnWriteArrayList</code>.
            </p>
        </div>
    );
}
