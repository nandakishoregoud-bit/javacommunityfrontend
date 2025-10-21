import { useState } from "react";

export default function Queue() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which of the following best describes a Queue in Java?",
            options: [
                "Stores elements in LIFO order",
                "Stores elements in FIFO order",
                "Stores elements in sorted order",
                "Stores key-value pairs"
            ],
            answer: 1
        },
        {
            q: "Which interface represents a Queue in Java?",
            options: ["List", "Set", "Queue", "Map"],
            answer: 2
        },
        {
            q: "Which method removes the head of the queue?",
            options: ["add()", "peek()", "poll()", "push()"],
            answer: 2
        },
        {
            q: "Which implementation of Queue is synchronized?",
            options: ["PriorityQueue", "LinkedList", "ArrayDeque", "ConcurrentLinkedQueue"],
            answer: 3
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Queue Interface in Java</h1>
            <p>
                A <b>Queue</b> in Java is a collection used to hold elements before processing, following the
                <b> FIFO (First In, First Out)</b> principle. The element added first is removed first.
                Common implementations are <b>LinkedList</b>, <b>PriorityQueue</b>, and <b>ArrayDeque</b>.
            </p>

            <h2>🔹 Types of Queues</h2>
            <ul>
                <li><b>LinkedList</b>: Basic queue implementation, allows null elements.</li>
                <li><b>PriorityQueue</b>: Orders elements based on priority (natural ordering or custom comparator).</li>
                <li><b>ArrayDeque</b>: A resizable array-based double-ended queue (can add/remove from both ends).</li>
                <li><b>ConcurrentLinkedQueue</b>: Thread-safe, non-blocking queue used in concurrent applications.</li>
                <li><b>BlockingQueue</b>: Used in multithreading; waits for space when full or elements when empty.</li>
            </ul>

            <h2>🔹 Example 1: Simple Queue (LinkedList)</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.add("A");
        queue.add("B");
        queue.add("C");

        System.out.println("Queue: " + queue); 
        System.out.println("Removed: " + queue.poll()); // Removes 'A'
        System.out.println("Queue after poll: " + queue);
    }
}`}</code>
            </pre>

            <h2>🔹 Example 2: PriorityQueue</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(30);
        pq.add(10);
        pq.add(20);

        System.out.println("PriorityQueue: " + pq); // Automatically sorted order
        System.out.println("Head element: " + pq.peek());
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Queue Quiz</h2>
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
                        ? "🎉 Great job! You got all correct!"
                        : "Keep practicing — review the concepts again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Tip:</b> Use <b>LinkedList</b> when you need a simple queue,
                <b>PriorityQueue</b> for ordering by priority, and
                <b>ConcurrentLinkedQueue</b> for thread-safe operations.
            </p>
        </div>
    );
}
