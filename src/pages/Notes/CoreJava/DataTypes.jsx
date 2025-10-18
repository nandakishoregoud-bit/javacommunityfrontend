import { useState } from "react";

export default function DataTypes() {
  // Simple client-side answer state
  const [showAnswers, setShowAnswers] = useState(false);
  const [selected, setSelected] = useState(Array(5).fill(null));

  // Quiz questions and correct indices
  const quiz = [
    {
      q: "Which data type is used to store a single character in Java?",
      options: ["byte", "char", "int", "boolean"],
      answer: 1,
    },
    {
      q: "What is the size of an int in Java?",
      options: ["8 bits", "16 bits", "32 bits", "64 bits"],
      answer: 2,
    },
    {
      q: "What is the default value of a boolean in Java?",
      options: ["true", "false", "null", "0"],
      answer: 1,
    },
    {
      q: "Which is the most suitable for storing prices like 99.99?",
      options: ["int", "double", "char", "long"],
      answer: 1,
    },
    {
      q: "Which is the smallest primitive data type in terms of size?",
      options: ["byte", "short", "float", "int"],
      answer: 0,
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
      <h1> Data Types in Java</h1>
      <p>
        In Java, <b>data types</b> specify what kind of data a variable can store. They are divided into <b>Primitive</b> (basic built-in) and <b>Non-Primitive</b> (objects and arrays) types.
      </p>

      <h2>Primitive Data Types</h2>
      <ul>
        <li><b>byte</b> – 8-bit integer (e.g., <code>byte age = 25;</code>)</li>
        <li><b>short</b> – 16-bit integer (e.g., <code>short year = 2025;</code>)</li>
        <li><b>int</b> – 32-bit integer (<code>int score = 9000;</code>)</li>
        <li><b>long</b> – 64-bit integer (<code>long distance = 1_000_000L;</code>)</li>
        <li><b>float</b> – 32-bit floating point (<code>float weight = 60.5f;</code>)</li>
        <li><b>double</b> – 64-bit floating point (<code>double price = 19.99;</code>)</li>
        <li><b>char</b> – single 16-bit Unicode character (<code>char grade = 'A';</code>)</li>
        <li><b>boolean</b> – true/false (<code>boolean isOpen = false;</code>)</li>
      </ul>

      <h2>Non-Primitive Data Types</h2>
      <p>
        These store more complex data: <b>String</b> (e.g., <code>String name = "Java";</code>), <b>Arrays</b>, <b>Classes</b>, etc.
      </p>

      <h2>🧩 Practice Example</h2>
      <pre style={{background:'#eee', padding:'10px', borderRadius:'5px'}}>
        <code>{`public class Main {
  public static void main(String[] args) {
    int apples = 10;
    double cost = 1.5;
    boolean available = true;
    System.out.println("Apples: " + apples);
    System.out.println("Total cost: $" + (apples * cost));
    System.out.println("Available: " + available);
  }
}`}</code>
      </pre>

      <h2>📝 Test Yourself: Java Data Types Quiz</h2>
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
                    let copy = selected.slice();
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
          <button type="submit" style={{padding: '8px 16px', fontWeight:600, borderRadius: 5, background:'#198754', color:'white', border:'none'}}>
            Check Answers
          </button>
        )}
      </form>
      {showAnswers && (
        <div style={{marginTop:20, fontWeight:600}}>
          {selected.every((sel, idx) => sel === quiz[idx].answer)
            ? "🎉 Great job! You got them all right!"
            : "Review the explanations above and try again!"}
        </div>
      )}
    </div>
  );
}
