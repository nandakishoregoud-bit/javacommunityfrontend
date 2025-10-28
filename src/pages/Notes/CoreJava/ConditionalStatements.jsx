import { useState } from "react";

export default function ConditionalStatements() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));


    const quiz = [
        {
            q: "What is the difference between if-else and switch statements?",
            options: [
                "if-else is for single condition, switch is for multiple ranges",
                "if-else is for ranges, switch is for fixed values",
                "There is no difference",
                "switch is faster but less readable"
            ],
            answer: 1
        },
        {
            q: "Can we use String values inside a switch statement in Java?",
            options: ["Yes, from Java 7 onwards", "No, never", "Only for constants", "Yes, but not recommended"],
            answer: 0
        },
        {
            q: "What happens if no case matches and there is no default case in a switch?",
            options: [
                "Program crashes",
                "Nothing happens, switch exits",
                "It prints null",
                "It loops infinitely"
            ],
            answer: 1
        },
        {
            q: "Which is more suitable for range-based conditions?",
            options: ["switch", "if-else", "for loop", "while loop"],
            answer: 1
        }
    ];

    return (
        <div style={{fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto"
}} >
            <h1>Conditional Statements in Java</h1>
            <p>
                Conditional statements allow your program to make decisions and execute specific blocks
                of code based on whether a condition is <b>true</b> or <b>false</b>.
            </p>

            <h2>Types of Conditional Statements</h2>
            <ul>
                <li><b>if</b> – executes a block if the condition is true</li>
                <li><b>if-else</b> – executes one block if true, another if false</li>
                <li><b>nested if</b> – an if inside another if</li>
                <li><b>else-if ladder</b> – tests multiple conditions sequentially</li>
                <li><b>switch</b> – selects one option from many fixed values</li>
            </ul>

            <h2>🧩 Example: if-else</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`int marks = 75;
if (marks >= 60) {
  System.out.println("First Class");
} else {
  System.out.println("Second Class");
}`}</code>
            </pre>

            <h2>🧩 Example: else-if Ladder</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`int marks = 85;
if (marks >= 90) {
  System.out.println("Grade A");
} else if (marks >= 75) {
  System.out.println("Grade B");
} else if (marks >= 60) {
  System.out.println("Grade C");
} else {
  System.out.println("Fail");
}`}</code>
            </pre>

            <h2>🧩 Example: switch Statement</h2>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`int day = 2;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  case 3: System.out.println("Wednesday"); break;
  default: System.out.println("Other day");
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Conditional Statements Quiz</h2>
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
                💡 Tip: Use <b>if-else</b> for range-based conditions, and <b>switch</b> for fixed values.
            </p>
        </div>
    );
}
