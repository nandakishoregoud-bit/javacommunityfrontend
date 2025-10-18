import { useState } from "react";

export default function Encapsulation() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is encapsulation in Java?",
            options: [
                "A way to create loops",
                "Wrapping data and methods together as a single unit",
                "Inheritance of classes",
                "Polymorphism of objects"
            ],
            answer: 1
        },
        {
            q: "Which access modifier is commonly used to achieve encapsulation?",
            options: ["public", "private", "protected", "default"],
            answer: 1
        },
        {
            q: "How do we allow controlled access to private variables?",
            options: [
                "By making them static",
                "Using getter and setter methods",
                "Using loops",
                "By overriding methods"
            ],
            answer: 1
        },
        {
            q: "Encapsulation helps in which of these?",
            options: [
                "Data hiding and code maintainability",
                "Creating loops",
                "Only inheritance",
                "Only overloading methods"
            ],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Encapsulation in Java</h1>
            <p>
                Encapsulation is the process of wrapping data (variables) and code (methods) together as a single unit.
                It allows restricting direct access to some components, improving security and maintainability.
            </p>

            <h2>🔹 Example: Encapsulation with Getter and Setter</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class Person {
    private String name; // private variable

    // Setter method
    public void setName(String name) {
        this.name = name;
    }

    // Getter method
    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Alice"); // setting value
        System.out.println(p.getName()); // getting value
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Encapsulation Quiz</h2>
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
                💡 Tip: Use encapsulation to hide internal object details and provide controlled access using getter and setter methods.
            </p>
        </div>
    );
}
