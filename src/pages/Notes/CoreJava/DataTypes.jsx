import { useState } from "react";

export default function DataTypes() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [selected, setSelected] = useState(Array(5).fill(null));

  const quiz = [
    {
      q: "Which data type is used to store a single character in Java?",
      options: ["byte", "char", "int", "boolean"],
      answer: 1,
      explanation: "The 'char' data type is specifically designed to store a single 16-bit Unicode character."
    },
    {
      q: "What is the size of an int in Java?",
      options: ["8 bits", "16 bits", "32 bits", "64 bits"],
      answer: 2,
      explanation: "An 'int' in Java is always 32 bits (4 bytes), regardless of the platform."
    },
    {
      q: "What is the default value of a boolean in Java?",
      options: ["true", "false", "null", "0"],
      answer: 1,
      explanation: "The default value of a boolean variable is 'false'."
    },
    {
      q: "Which is the most suitable for storing prices like 99.99?",
      options: ["int", "double", "char", "long"],
      answer: 1,
      explanation: "A 'double' is suitable for decimal values. For precise financial calculations, 'BigDecimal' can also be used."
    },
    {
      q: "Which is the smallest primitive data type in terms of size?",
      options: ["byte", "short", "float", "int"],
      answer: 0,
      explanation: "'byte' is 8 bits, smaller than short (16 bits), int (32 bits), and float (32 bits)."
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1.5rem', maxWidth: 900, margin: 'auto' }}>
      <h1>Java Data Types Explained Step by Step</h1>

      <p>
        In Java, <strong>data types</strong> define the **kind of data** a variable can hold. Choosing the correct type is important for memory efficiency, precision, and clarity.
        Java divides data types into <strong>Primitive</strong> types (basic building blocks) and <strong>Non-Primitive</strong> types (objects, arrays, etc.).
      </p>

      <h2>1️⃣ Primitive Data Types</h2>
      <p>These are built-in, simple types that store single values directly in memory.</p>

      <ul>
        <li>
          <b>byte</b> – 8-bit integer <br />
          Example: <code>byte age = 25;</code><br />
          <em>Use case:</em> For small integers or memory-sensitive situations, like reading bytes from a file.
        </li>
        <li>
          <b>short</b> – 16-bit integer <br />
          Example: <code>short year = 2025;</code><br />
          <em>Use case:</em> Slightly larger numbers, less memory than int.
        </li>
        <li>
          <b>int</b> – 32-bit integer <br />
          Example: <code>int score = 9000;</code><br />
          <em>Use case:</em> Most commonly used integer type for counters, loops, and calculations.
        </li>
        <li>
          <b>long</b> – 64-bit integer <br />
          Example: <code>long distance = 1_000_000L;</code><br />
          <em>Use case:</em> Very large numbers, like population count, file sizes.
        </li>
        <li>
          <b>float</b> – 32-bit floating point <br />
          Example: <code>float weight = 60.5f;</code><br />
          <em>Use case:</em> Decimal values with moderate precision.
        </li>
        <li>
          <b>double</b> – 64-bit floating point <br />
          Example: <code>double price = 19.99;</code><br />
          <em>Use case:</em> Decimal values requiring more precision, default choice for decimals.
        </li>
        <li>
          <b>char</b> – single 16-bit Unicode character <br />
          Example: <code>char grade = 'A';</code><br />
          <em>Use case:</em> Letters, symbols, single characters. Can represent Unicode characters.
        </li>
        <li>
          <b>boolean</b> – true/false <br />
          Example: <code>boolean isOpen = false;</code><br />
          <em>Use case:</em> Conditions, flags, true/false status checks.
        </li>
      </ul>

      <h2>2️⃣ Non-Primitive Data Types</h2>
      <p>
        These are **reference types** that store the address of objects rather than the value itself.
        Examples include <b>String</b>, <b>Arrays</b>, <b>Classes</b>, and <b>Interfaces</b>.
      </p>
      <ul>
        <li><b>String:</b> Stores sequences of characters. Example: <code>String name = "Java";</code></li>
        <li><b>Arrays:</b> Store multiple values of the same type. Example: <code>int[] numbers = {1, 2, 3};</code></li>
        <li><b>Classes & Objects:</b> Represent real-world entities. Example: <code>Car myCar = new Car();</code></li>
      </ul>

      <h2>3️⃣ Step-by-Step Example</h2>
      <pre style={{ background: '#fdfdfdff', padding: '10px', borderRadius: '5px' }}>
        {`public class Main {
    public static void main(String[] args) {
        int apples = 10;          // Integer type
        double cost = 1.5;        // Decimal type
        boolean available = true;  // True/false type

        System.out.println("Apples: " + apples);
        System.out.println("Total cost: $" + (apples * cost));
        System.out.println("Available: " + available);
    }
}`}
      </pre>
      <p><em>Explanation:</em> Each variable is declared with a type and initialized. Then we output values using <code>System.out.println()</code>.</p>

      <h2>4️⃣ Why Choose the Right Data Type?</h2>
      <ul>
        <li>Memory efficiency: Smaller types use less memory.</li>
        <li>Precision: Decimal numbers need float/double, not int.</li>
        <li>Code readability: Clear types help others understand your code.</li>
        <li>Error prevention: Type mismatch errors help catch bugs early.</li>
      </ul>

      <h2>5️⃣ Java Data Types Quiz</h2>
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
            {showAnswers && (
              <div style={{ fontStyle: 'italic', color: '#555', marginTop: 4 }}>
                Explanation: {item.explanation}
              </div>
            )}
          </div>
        ))}
        {!showAnswers && (
          <button type="submit" style={{ padding: '8px 16px', fontWeight: 600, borderRadius: 5, background: '#198754', color: 'white', border: 'none' }}>
            Check Answers
          </button>
        )}
      </form>
      {showAnswers && (
        <div style={{ marginTop: 20, fontWeight: 600 }}>
          {selected.every((sel, idx) => sel === quiz[idx].answer)
            ? "🎉 Excellent! You got all answers correct!"
            : "✅ Review the explanations and try again!"}
        </div>
      )}
    </div>
  );
}
