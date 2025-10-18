import React, { useState } from "react";

export default function TypeCastingVariablesConstants() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "Which type casting happens automatically in Java?",
            options: ["Narrowing", "Widening", "Explicit casting", "None of these"],
            answer: 1,
            explanation: "Widening casting happens automatically when converting a smaller type to a larger type (e.g., int to long)."
        },
        {
            q: "Which keyword is used to make a variable constant in Java?",
            options: ["constant", "immutable", "final", "static"],
            answer: 2,
            explanation: "The 'final' keyword is used to declare constants whose values cannot change after initialization."
        },
        {
            q: "Which type of variable belongs to the object rather than the class?",
            options: ["Static variable", "Local variable", "Instance variable", "Final variable"],
            answer: 2,
            explanation: "Instance variables are part of each object and each object has its own copy."
        },
        {
            q: "Which of the following requires explicit casting in Java?",
            options: ["int to long", "double to float", "byte to short", "int to long"],
            answer: 1,
            explanation: "Narrowing casting (like double to float) requires explicit casting because it may lose precision."
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>Type Casting, Variables & Constants in Java</h1>

            <h2>1️⃣ Type Casting</h2>
            <p>
                Type casting is the process of converting a value from one data type to another. Java supports two main types:
            </p>

            <h3>a) Widening Casting (Implicit)</h3>
            <p>
                Converting a smaller type to a larger type happens automatically. Example:
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`int myInt = 9;
double myDouble = myInt;  // Automatic casting: int to double
System.out.println(myInt);    // 9
System.out.println(myDouble); // 9.0`}
            </pre>
            <p><em>Explanation:</em> Widening is safe because larger types can hold all values of smaller types.</p>

            <h3>b) Narrowing Casting (Explicit)</h3>
            <p>
                Converting a larger type to a smaller type must be done manually using parentheses. Example:
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`double myDouble = 9.78;
int myInt = (int) myDouble;  // Manual casting: double to int
System.out.println(myDouble); // 9.78
System.out.println(myInt);    // 9`}
            </pre>
            <p><em>Explanation:</em> Narrowing may lose information (fractional part in this case), so explicit casting is required.</p>

            <h2>2️⃣ Variables in Java</h2>
            <p>
                Variables are containers that store data. In Java, we have three main types:
            </p>

            <h3>a) Local Variables</h3>
            <p>
                Declared inside methods, constructors, or blocks. They exist only during method execution.
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`public void myMethod() {
    int localVar = 10;  // local variable
    System.out.println(localVar);
}`}
            </pre>

            <h3>b) Instance Variables</h3>
            <p>
                Belong to objects. Each object has its own copy. Declared inside a class but outside methods.
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`public class Car {
    int speed;  // instance variable
}

Car car1 = new Car();
Car car2 = new Car();
car1.speed = 50;
car2.speed = 100;

System.out.println(car1.speed); // 50
System.out.println(car2.speed); // 100`}
            </pre>

            <h3>c) Static Variables (Class Variables)</h3>
            <p>
                Shared across all objects of a class. Declared with <code>static</code> keyword.
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`public class Car {
    static int wheels = 4;  // static variable
}

Car car1 = new Car();
Car car2 = new Car();
System.out.println(Car.wheels); // 4`}
            </pre>

            <h2>3️⃣ Constants in Java</h2>
            <p>
                Constants are variables whose values cannot change once assigned. Use the <code>final</code> keyword.
            </p>
            <pre style={{ background: "#f6f7f8", padding: "10px", borderRadius: 5 }}>
                {`final double PI = 3.14159;
// PI = 3.14; // ❌ This will give a compile-time error`}
            </pre>
            <p>
                Constants are useful for values that should remain unchanged, like mathematical constants, configuration values, or fixed settings.
            </p>

            <h2>4️⃣ Quiz Yourself</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowQuiz(true);
                }}
            >
                {quiz.map((item, idx) => (
                    <div key={idx} style={{ margin: "20px 0" }}>
                        <div style={{ marginBottom: 8 }}>{idx + 1}. {item.q}</div>
                        {item.options.map((option, oidx) => (
                            <label key={oidx} style={{ display: "block", marginBottom: 2 }}>
                                <input
                                    type="radio"
                                    name={`q${idx}`}
                                    checked={selected[idx] === oidx}
                                    onChange={() => {
                                        let copy = selected.slice();
                                        copy[idx] = oidx;
                                        setSelected(copy);
                                    }}
                                />
                                {" "} {option}
                                {showQuiz && item.answer === oidx && (
                                    <span style={{ color: "green", marginLeft: 10 }}>&#10003; Correct</span>
                                )}
                                {showQuiz && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 10 }}>✗</span>
                                )}
                            </label>
                        ))}
                        {showQuiz && (
                            <div style={{ fontStyle: "italic", color: "#555", marginTop: 4 }}>
                                Explanation: {item.explanation}
                            </div>
                        )}
                    </div>
                ))}
                {!showQuiz && (
                    <button type="submit" style={{ padding: "8px 16px", fontWeight: 600, borderRadius: 5, background: "#198754", color: "white", border: "none" }}>
                        Check Answers
                    </button>
                )}
            </form>
            {showQuiz && (
                <div style={{ marginTop: 20, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Excellent! You got all answers correct!"
                        : "✅ Review the explanations and try again!"}
                </div>
            )}
        </div>
    );
}
