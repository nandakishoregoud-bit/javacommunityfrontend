import { useState } from "react";

export default function Polymorphism() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is polymorphism in Java?",
            options: [
                "A type of loop",
                "Ability of objects to take multiple forms",
                "A type of variable",
                "A way to create arrays"
            ],
            answer: 1
        },
        {
            q: "Which of these is an example of compile-time polymorphism?",
            options: [
                "Method overloading",
                "Method overriding",
                "Inheritance",
                "Object creation"
            ],
            answer: 0
        },
        {
            q: "Which of these is an example of runtime polymorphism?",
            options: [
                "Method overloading",
                "Method overriding",
                "For loop",
                "Static variable"
            ],
            answer: 1
        },
        {
            q: "Polymorphism improves which aspect of programming?",
            options: [
                "Code reusability and flexibility",
                "Only execution speed",
                "Only variable declaration",
                "Looping structure"
            ],
            answer: 0
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Polymorphism in Java</h1>
            <p>
                Polymorphism allows objects to take multiple forms. It enables the same method or object to behave differently
                in different situations. It mainly includes <b>method overloading</b> (compile-time) and <b>method overriding</b> (runtime).
            </p>

            <h2>🔹 Example: Method Overloading (Compile-time)</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        System.out.println(math.add(5, 10));    // calls int version
        System.out.println(math.add(2.5, 3.5)); // calls double version
    }
}`}</code>
            </pre>

            <h2>🔹 Example: Method Overriding (Runtime)</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound(); // calls overridden method in Dog
    }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Polymorphism Quiz</h2>
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
                💡 Tip: Use polymorphism to write flexible and reusable code. Overloading is determined at compile-time, while overriding is determined at runtime.
            </p>
        </div>
    );
}
