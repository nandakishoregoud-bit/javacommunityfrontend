import { useState } from "react";

export default function LoopingStatements() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(4).fill(null));

    
    const quiz = [
        {
            q: "Which loop executes at least once regardless of the condition?",
            options: ["for loop", "while loop", "do-while loop", "if-else loop"],
            answer: 2
        },
        {
            q: "Which loop is most suitable when the number of iterations is known?",
            options: ["while loop", "do-while loop", "for loop", "switch statement"],
            answer: 2
        },
        {
            q: "What is the output of: for(int i=0; i<3; i++) System.out.println(i);?",
            options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
            answer: 1
        },
        {
            q: "Which statement is used to skip the current iteration in a loop?",
            options: ["break", "continue", "return", "exit"],
            answer: 1
        }
    ];

    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1.5rem', maxWidth: 900, margin: 'auto' }}>
            <h1>Looping Statements in Java</h1>
            <p>
                Looping statements allow code to run repeatedly until a specific condition is met. They are useful when
                you want to avoid writing the same code multiple times.
            </p>

            <h2>1️⃣ The for loop</h2>
            <p>
                The <b>for loop</b> is best when you know in advance how many times you want to repeat a block of code.
                It has three parts: <code>initialization</code>, <code>condition</code>, and <code>increment/decrement</code>.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`for (int i = 1; i <= 5; i++) {
    System.out.println("Number: " + i);
}`}</code>
            </pre>
            <p>
                Here, <code>i</code> starts at 1, the loop runs while <code>i ≤ 5</code>, and <code>i++</code> increases i by 1 each time.
            </p>

            <h2>2️⃣ The while loop</h2>
            <p>
                The <b>while loop</b> is used when you don't know in advance how many times the loop should run.
                It checks the condition first; if the condition is false initially, the loop body may not run at all.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}`}</code>
            </pre>

            <h2>3️⃣ The do-while loop</h2>
            <p>
                The <b>do-while loop</b> is similar to the while loop, but it guarantees that the loop body runs at least once
                because the condition is checked <b>after</b> the loop body.
            </p>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '5px' }}>
                <code>{`int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);`}</code>
            </pre>

            <h2>📝 Test Yourself: Looping Statements Quiz</h2>
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
                💡 Tip: Use <b>for loops</b> when the number of iterations is known,
                <b>while loops</b> when you check a condition first,
                and <b>do-while loops</b> when the loop must execute at least once.
            </p>
        </div>
    );
}
