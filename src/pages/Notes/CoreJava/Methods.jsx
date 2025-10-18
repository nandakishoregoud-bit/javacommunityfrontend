import { useState } from "react";

export default function Methods() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is a method in Java?",
            options: [
                "A variable inside a class",
                "A block of code that performs a task",
                "A type of loop",
                "A type of conditional statement"
            ],
            answer: 1
        },
        {
            q: "Which keyword is used to define a method that doesn't return any value?",
            options: ["void", "return", "static", "public"],
            answer: 0
        },
        {
            q: "How do you call a method named `greet` in Java?",
            options: ["greet();", "call greet;", "greet;", "execute greet()"],
            answer: 0
        },
        {
            q: "What is the purpose of method parameters?",
            options: [
                "To store the return value",
                "To pass information into the method",
                "To define a loop inside the method",
                "To declare a class variable"
            ],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Methods in Java</h1>
            <p>
                Methods are blocks of code that perform a specific task. They allow us to reuse code, make programs organized,
                and make debugging easier.
            </p>

            <h2>🔹 Defining a Method</h2>
            <p>
                A method is defined with a name, optional parameters, and a return type. The <code>void</code> return type means
                the method does not return a value.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`public void greet() {
    System.out.println("Hello, welcome!");
}`}</code>
            </pre>

            <h2>🔹 Calling a Method</h2>
            <p>
                Once a method is defined, you can call it using its name followed by parentheses:
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`public class Main {
    public static void main(String[] args) {
        greet(); // calling the method
    }

    public static void greet() {
        System.out.println("Hello, welcome!");
    }
}`}</code>
            </pre>

            <h2>🔹 Methods with Parameters</h2>
            <p>
                Methods can take inputs called <b>parameters</b>, which allow them to work with different data.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

public static void main(String[] args) {
    greet("Alice");
    greet("Bob");
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Methods Quiz</h2>
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
                💡 Tip: Use methods to organize code, avoid repetition, and make programs easier to read and maintain.
            </p>
        </div>
    );
}
