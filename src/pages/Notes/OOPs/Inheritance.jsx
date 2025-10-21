import { useState } from "react";

export default function Inheritance() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    const quiz = [
        {
            q: "What is inheritance in Java?",
            options: [
                "A way to create loops",
                "A mechanism where a class acquires properties and methods of another class",
                "A way to define constants",
                "A process of running multiple threads"
            ],
            answer: 1
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
            q: "Which statement about inheritance is correct?",
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
                Inheritance is one of the key principles of Object-Oriented Programming (OOP). It allows one class (called the <strong>child class</strong> or <strong>subclass</strong>) to acquire the properties and behaviors (fields and methods) of another class (called the <strong>parent class</strong> or <strong>superclass</strong>).
            </p>

            <h2>🔹 Why Use Inheritance?</h2>
            <ul>
                <li><strong>Code Reusability:</strong> You can use the existing class code without rewriting it.</li>
                <li><strong>Improved Maintainability:</strong> Changes made to a parent class automatically apply to its children.</li>
                <li><strong>Hierarchical Classification:</strong> It represents real-world relationships like “Dog is an Animal”.</li>
            </ul>

            <h2>🔹 Real-World Example</h2>
            <p>
                Imagine you’re creating software for a zoo. You can create a parent class <code>Animal</code> that contains features common to all animals (like <code>eat()</code> and <code>sleep()</code>).
                Then, you can create subclasses like <code>Dog</code> and <code>Cat</code> that inherit from <code>Animal</code> and have their own unique behaviors (like <code>bark()</code> or <code>meow()</code>).
            </p>

            <h2>🔹 Syntax</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class ParentClass {
    // properties and methods
}

class ChildClass extends ParentClass {
    // additional properties and methods
}`}</code>
            </pre>

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

            <h2>🔹 Output</h2>
            <pre style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px' }}>
                <code>{`This animal eats food
Dog barks`}</code>
            </pre>

            <h2>🔹 Types of Inheritance in Java</h2>
            <ul>
                <li><strong>Single Inheritance:</strong> One class inherits from another.</li>
                <li><strong>Multilevel Inheritance:</strong> A class inherits from another class, which itself inherits from another class.</li>
                <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from the same parent.</li>
                <li><strong>Multiple Inheritance (through Interfaces):</strong> Java doesn’t support multiple inheritance using classes to avoid ambiguity, but it’s possible using interfaces.</li>
            </ul>

            <h2>🧠 Example: Multilevel Inheritance</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Mammal extends Animal {
    void walk() {
        System.out.println("Walking...");
    }
}

class Dog extends Mammal {
    void bark() {
        System.out.println("Barking...");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();   // from Animal
        dog.walk();  // from Mammal
        dog.bark();  // from Dog
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
                💡 <strong>Tip:</strong> Use inheritance to promote code reuse and to represent real-world relationships between classes.
                However, avoid using deep inheritance hierarchies — they can make code harder to maintain.
            </p>
        </div>
    );
}
