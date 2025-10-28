import { useState } from "react";

export default function ExceptionHandling() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "Which keyword is used to handle exceptions in Java?",
            options: ["try", "catch", "throw", "All of the above"],
            answer: 3,
        },
        {
            q: "Which class is the parent of all exception classes in Java?",
            options: ["Error", "Throwable", "RuntimeException", "Exception"],
            answer: 1,
        },
        {
            q: "What block always executes, whether an exception occurs or not?",
            options: ["try", "catch", "finally", "throw"],
            answer: 2,
        },
        {
            q: "Which exception is unchecked?",
            options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"],
            answer: 2,
        },
        {
            q: "How do you define a custom exception?",
            options: [
                "By extending Throwable",
                "By extending Exception or RuntimeException",
                "By using try-catch",
                "By using throws keyword only"
            ],
            answer: 1,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            
            <h1>🚨 Exception Handling in Java</h1>
            <p>
                In Java, <b>exceptions</b> are unexpected events or errors that interrupt the normal flow of a program.
                Exception Handling allows developers to handle such errors gracefully and prevent program crashes.
            </p>

            <h2>Types of Exceptions</h2>
            <ul>
                <li>
                    <b>Checked Exceptions</b> – Checked during compilation. Must be handled using <code>try-catch</code> or declared with <code>throws</code>.
                    <br />Example: <code>IOException</code>, <code>SQLException</code>
                </li>
                <li>
                    <b>Unchecked Exceptions</b> – Occur during runtime. No need for mandatory handling.
                    <br />Example: <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>
                </li>
                <li>
                    <b>Errors</b> – Serious issues like <code>OutOfMemoryError</code> that applications should not try to handle.
                </li>
            </ul>

            <h2>Try-Catch Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Main {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;  // This will cause ArithmeticException
    } catch (ArithmeticException e) {
      System.out.println("Cannot divide by zero!");
    } finally {
      System.out.println("Finally block always runs.");
    }
  }
}`}</code>
            </pre>

            <h2>Custom Exceptions</h2>
            <p>You can define your own exceptions by extending <code>Exception</code> or <code>RuntimeException</code>:</p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`class MyException extends Exception {
  public MyException(String message) {
    super(message);
  }
}`}</code>
            </pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Handle only exceptions you can recover from.</li>
                <li>Use <code>finally</code> or try-with-resources for cleanup (like closing files).</li>
                <li>Log exceptions for debugging purposes.</li>
                <li>Throw meaningful custom exceptions for better readability.</li>
            </ul>

            <h2>🧩 Practice Example</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`public class Main {
  static void checkAge(int age) throws Exception {
    if (age < 18) throw new Exception("Not eligible!");
    else System.out.println("Welcome!");
  }

  public static void main(String[] args) {
    try {
      checkAge(16);
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`}</code>
            </pre>

            <h2>📝 Test Yourself: Java Exception Handling Quiz</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setShowAnswers(true);
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
                                />{" "}
                                {option}
                                {showAnswers && item.answer === oidx && (
                                    <span style={{ color: "green", marginLeft: 10 }}>✔ Correct</span>
                                )}
                                {showAnswers && selected[idx] === oidx && selected[idx] !== item.answer && (
                                    <span style={{ color: "red", marginLeft: 10 }}>✗</span>
                                )}
                            </label>
                        ))}
                    </div>
                ))}
                {!showAnswers && (
                    <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            fontWeight: 600,
                            borderRadius: 5,
                            background: "#198754",
                            color: "white",
                            border: "none",
                        }}
                    >
                        Check Answers
                    </button>
                )}
            </form>

            {showAnswers && (
                <div style={{ marginTop: 20, fontWeight: 600 }}>
                    {selected.every((sel, idx) => sel === quiz[idx].answer)
                        ? "🎉 Great job! You got them all right!"
                        : "Review the notes above and try again!"}
                </div>
            )}
        </div>
    );
}
