import React, { useState } from "react";

export default function Operators() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "Which operator is used for logical AND in Java?",
            options: ["&", "&&", "|", "||"],
            answer: 1,
            explanation: "‘&&’ is the logical AND operator; it checks both conditions must be true."
        },
        {
            q: "What will be the result of 10 % 3?",
            options: ["3", "1", "0", "10"],
            answer: 1,
            explanation: "The modulus operator (%) returns the remainder of division. 10 % 3 = 1."
        },
        {
            q: "Which operator is used to assign a value to a variable?",
            options: ["=", "==", "=>", "!="],
            answer: 0,
            explanation: "‘=’ is the assignment operator; it assigns the right-hand value to the left-hand variable."
        },
        {
            q: "What does the expression (++x) do?",
            options: ["Increments after use", "Decrements after use", "Increments before use", "No change"],
            answer: 2,
            explanation: "‘++x’ is a pre-increment operator; it increases the value before using it."
        },
        {
            q: "Which operator has the highest precedence?",
            options: ["&&", "*", "+", "="],
            answer: 1,
            explanation: "Multiplication (*) has higher precedence than logical and assignment operators."
        }
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>Operators in Java</h1>

            <p>
                Operators are special symbols in Java that perform specific operations on variables and values.
                They are essential in programming to perform calculations, comparisons, and decision-making.
            </p>

            <h2>1️⃣ Arithmetic Operators</h2>
            <p>
                Used to perform mathematical operations such as addition, subtraction, multiplication, division, and modulus.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int a = 10, b = 5;
System.out.println(a + b); // 15
System.out.println(a - b); // 5
System.out.println(a * b); // 50
System.out.println(a / b); // 2
System.out.println(a % b); // 0`}
            </pre>
            <p><b>Note:</b> Division between two integers results in an integer value (no decimals).</p>

            <h2>2️⃣ Relational Operators</h2>
            <p>
                These are used to compare two values. They always return a boolean result (<code>true</code> or <code>false</code>).
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int x = 10, y = 20;
System.out.println(x == y); // false
System.out.println(x != y); // true
System.out.println(x > y);  // false
System.out.println(x < y);  // true
System.out.println(x >= y); // false
System.out.println(x <= y); // true`}
            </pre>

            <h2>3️⃣ Logical Operators</h2>
            <p>
                Logical operators are used to combine multiple conditions.
            </p>
            <ul>
                <li><b>&& (AND):</b> true if both conditions are true.</li>
                <li><b>|| (OR):</b> true if at least one condition is true.</li>
                <li><b>! (NOT):</b> reverses the logical value.</li>
            </ul>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int a = 5, b = 10;
System.out.println(a > 0 && b > 0); // true
System.out.println(a > 0 || b < 0); // true
System.out.println(!(a > 0));       // false`}
            </pre>

            <h2>4️⃣ Assignment Operators</h2>
            <p>
                These are used to assign values to variables. They can also perform operations and assign the result simultaneously.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int num = 10;
num += 5; // num = num + 5 -> 15
num -= 3; // num = num - 3 -> 12
num *= 2; // num = num * 2 -> 24
num /= 6; // num = num / 6 -> 4
num %= 3; // num = num % 3 -> 1`}
            </pre>

            <h2>5️⃣ Unary Operators</h2>
            <p>
                These operate on a single operand to increment/decrement or change its sign.
            </p>
            <ul>
                <li><b>++</b> → Increment</li>
                <li><b>--</b> → Decrement</li>
                <li><b>+</b> → Unary plus (no effect)</li>
                <li><b>-</b> → Negation</li>
            </ul>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int x = 5;
System.out.println(++x); // 6 (pre-increment)
System.out.println(x--); // 6 (post-decrement, prints before changing)
System.out.println(-x);  // -5`}
            </pre>

            <h2>6️⃣ Bitwise Operators</h2>
            <p>
                These operators work on bits (binary level). Commonly used in low-level programming, flags, or embedded systems.
            </p>
            <ul>
                <li><b>&</b> → Bitwise AND</li>
                <li><b>|</b> → Bitwise OR</li>
                <li><b>^</b> → Bitwise XOR (Exclusive OR)</li>
                <li><b>~</b> → Bitwise NOT</li>
                <li><b>&lt;&lt;</b> → Left shift</li>
                <li><b>&gt;&gt;</b> → Right shift</li>
            </ul>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int a = 5;  // 0101
int b = 3;  // 0011
System.out.println(a & b);  // 1 (0001)
System.out.println(a | b);  // 7 (0111)
System.out.println(a ^ b);  // 6 (0110)
System.out.println(~a);     // -6 (bitwise NOT)
System.out.println(a << 1); // 10 (shift left)
System.out.println(a >> 1); // 2 (shift right)`}
            </pre>

            <h2>7️⃣ Ternary Operator</h2>
            <p>
                The ternary operator (<code>?:</code>) is a shorthand for <code>if-else</code> statements.
            </p>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int age = 18;
String result = (age >= 18) ? "Adult" : "Minor";
System.out.println(result); // Adult`}
            </pre>

            <h2>8️⃣ Operator Precedence</h2>
            <p>
                Operator precedence determines which operator is evaluated first in an expression.
                Java follows standard mathematical precedence rules.
            </p>
            <ul>
                <li><b>Highest:</b> (), ++, --</li>
                <li><b>Then:</b> *, /, %</li>
                <li><b>Then:</b> +, -</li>
                <li><b>Then:</b> &lt;, &gt;, ==, !=</li>
                <li><b>Then:</b> &&, ||</li>
                <li><b>Lowest:</b> =</li>
            </ul>
            <pre style={{ background: "#f7f7f7", padding: 10, borderRadius: 6 }}>
                {`int result = 10 + 5 * 2;  // * has higher precedence, result = 20
int value = (10 + 5) * 2;  // () changes order, result = 30`}
            </pre>

            <h2>🧠 Quick Quiz</h2>
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
