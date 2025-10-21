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
                <strong>Polymorphism</strong> is one of the four main principles of Object-Oriented Programming (OOP).
                The word “Polymorphism” means <strong>“many forms”</strong>. In Java, it allows an object, method, or operator
                to behave in different ways depending on the context.
            </p>

            <p>
                It enables the same method or object to have multiple implementations. For example, the <code>draw()</code> method
                in different classes like <code>Circle</code> and <code>Rectangle</code> can perform different actions even though
                the method name is the same.
            </p>

            <h2>🔹 Why Use Polymorphism?</h2>
            <ul>
                <li><strong>Flexibility:</strong> You can write code that works with objects of different classes seamlessly.</li>
                <li><strong>Reusability:</strong> You can reuse methods with different implementations.</li>
                <li><strong>Maintainability:</strong> Easier to update or extend your program.</li>
            </ul>

            <h2>🔹 Real-World Analogy</h2>
            <p>
                Think of the word <b>“draw”</b> — the meaning depends on the context.
                An artist “draws” a picture, a bank “draws” money, and a curtain “draws” closed.
                The same action (draw) behaves differently depending on the object — that’s **Polymorphism!**
            </p>

            <h2>🔹 Types of Polymorphism in Java</h2>
            <ul>
                <li><strong>Compile-time Polymorphism (Static Polymorphism):</strong> Achieved using <b>method overloading</b>. The decision about which method to call is made at compile time.</li>
                <li>compile-time Polymorphism is nothing but more then one method having same name in same class but with different parameters to perform different tasks is nothing but method<strong> Overloading</strong></li>
                <li><strong>Runtime Polymorphism (Dynamic Polymorphism):</strong> Achieved using <b>method overriding</b>. The decision about which method to call is made at runtime based on the actual object type.</li>
                <li>Runtime Polymorphism is nothing but more then one method having same name with same parameters but in parent and child class to perform same tasks is nothing but method <strong>Overriding</strong></li>
            </ul>

            <h2>🔹 Example 1: Method Overloading (Compile-time Polymorphism)</h2>
            <p>
                In method overloading, multiple methods in the same class have the same name but different parameter types or counts.
                The compiler decides which version to use based on the arguments.
            </p>
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

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`15
6.0`}</code>
            </pre>

            <h2>🔹 Example 2: Method Overriding (Runtime Polymorphism)</h2>
            <p>
                In method overriding, a subclass provides a specific implementation of a method that is already defined in its superclass.
                The method that gets executed is determined at runtime, depending on the object type.
            </p>
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
        Animal myDog = new Dog(); // reference type = Animal, object type = Dog
        myDog.sound(); // calls overridden method in Dog
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`Bark`}</code>
            </pre>

            <h2>🔹 Example 3: Polymorphism in Action</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Rectangle();

        s1.draw();
        s2.draw();
    }
}`}</code>
            </pre>

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`Drawing a circle
Drawing a rectangle`}</code>
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
                💡 <strong>Tip:</strong> Use polymorphism to make your code flexible and maintainable.
                Overloading is decided at <b>compile-time</b>, while overriding is decided at <b>runtime</b>.
                This helps you design extensible and reusable code.
            </p>
        </div>
    );
}
