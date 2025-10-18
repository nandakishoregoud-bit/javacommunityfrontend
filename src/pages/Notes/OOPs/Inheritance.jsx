import { useState } from "react";

export default function Inheritance() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is inheritance in Java?",
            options: [
                "A way to create loops",
                "A way to share variables between methods",
                "A mechanism where a class acquires properties and methods of another class",
                "A type of method"
            ],
            answer: 2
        },
        {
            q: "Which keyword is used to inherit a class in Java?",
            options: ["super", "this", "extends", "implements"],
            answer: 2
        },
        {
            q: "If class B inherits from class A, which class is the parent?",
            options: ["B", "A", "Both", "None"],
            answer: 1
        },
        {
            q: "Which of these is true about inheritance?",
            options: [
                "Child class can access parent class methods and variables (if not private)",
                "Parent class can access child class methods",
                "Inheritance removes all methods from child class",
                "Inheritance is used to create loops"
            ],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Inheritance in Java</h1>
            <p>
                Inheritance allows a class (child/subclass) to acquire the properties and methods of another class (parent/superclass).
                It helps in code reusability and establishing relationships between classes.
            </p>

            <h2>🔹 Example: Basic Inheritance</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`// Parent class
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // inherited from Animal
        myDog.bark(); // own method
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Inheritance Quiz</h2>
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
                💡 Tip: Use inheritance to reuse code from parent classes and create hierarchical relationships between classes.
            </p>
        </div>
    );
}
