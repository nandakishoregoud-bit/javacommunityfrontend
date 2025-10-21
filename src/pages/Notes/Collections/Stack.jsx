import { useState } from "react";

export default function Stack() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which data structure principle does Stack follow?",
            options: [
                "FIFO (First In, First Out)",
                "LIFO (Last In, First Out)",
                "Random access",
                "Priority-based"
            ],
            answer: 1
        },
        {
            q: "Which method adds an element to the top of the Stack?",
            options: ["pop()", "push()", "peek()", "add()"],
            answer: 1
        },
        {
            q: "Which method returns the top element without removing it?",
            options: ["pop()", "peek()", "top()", "get()"],
            answer: 1
        },
        {
            q: "Which class in Java provides a Stack implementation?",
            options: ["ArrayList", "LinkedList", "Stack", "Queue"],
            answer: 2
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Stack in Java</h1>
            <p>
                A <b>Stack</b> is a data structure that follows the
                <b> LIFO (Last In, First Out)</b> principle — the last element added
                is the first one to be removed. It’s used for tasks like undo operations,
                expression evaluation, and recursion management.
            </p>

            <h2>🔹 Characteristics of Stack</h2>
            <ul>
                <li>Operates on LIFO (Last In, First Out) principle.</li>
                <li>Elements are added and removed from the top only.</li>
                <li>Supports methods like <code>push()</code>, <code>pop()</code>, and <code>peek()</code>.</li>
                <li>Can be implemented using <b>Stack</b> class or <b>Deque</b>.</li>
            </ul>

            <h2>🔹 Example 1: Using Stack Class</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();

        stack.push("Java");
        stack.push("Python");
        stack.push("C++");

        System.out.println("Stack: " + stack);
        System.out.println("Top element: " + stack.peek());
        stack.pop();
        System.out.println("After pop: " + stack);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: Stack Using Deque (Recommended)</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);
        System.out.println("Top: " + stack.peek());
        stack.pop();
        System.out.println("After pop: " + stack);
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Stack Quiz</h2>
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
                        ? "🎉 Awesome! You mastered Stack!"
                        : "Review the concepts and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Use <b>Stack</b> class for basic cases and <b>Deque (ArrayDeque)</b>
                when performance and flexibility matter.
            </p>
        </div>
    );
}
