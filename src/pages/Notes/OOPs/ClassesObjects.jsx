import { useState } from "react";

export default function ClassObject() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is a class in Java?",
            options: [
                "A variable that stores data",
                "A blueprint for creating objects",
                "A type of method",
                "A loop structure"
            ],
            answer: 1
        },
        {
            q: "What is an object in Java?",
            options: [
                "A function inside a class",
                "An instance of a class",
                "A data type",
                "A conditional statement"
            ],
            answer: 1
        },
        {
            q: "How do you create an object of a class named Car?",
            options: [
                "Car myCar = new Car();",
                "Car myCar();",
                "new Car = myCar;",
                "Car = new myCar();"
            ],
            answer: 0
        },
        {
            q: "Which keyword is used to create a new object?",
            options: ["new", "class", "static", "void"],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Classes & Objects in Java</h1>
            <p>
                A <b>class</b> is like a blueprint that defines the structure and behavior (variables and methods) of objects.
                An <b>object</b> is an instance of a class; it holds actual values and can use the methods defined in the class.
            </p>

            <h2>🔹 Example: Defining a Class</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`public class Car {
    String color;
    int speed;

    void display() {
        System.out.println("Color: " + color + ", Speed: " + speed);
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Creating and Using an Object</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // creating an object
        myCar.color = "Red";
        myCar.speed = 100;
        myCar.display(); // calling a method
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Classes & Objects Quiz</h2>
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
                💡 Tip: Use classes to define objects with properties and behaviors, and create objects to use them in your program.
            </p>
        </div>
    );
}
