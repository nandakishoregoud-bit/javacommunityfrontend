import { useState } from "react";

export default function StreamSummary() {
    const [showAnswers, setShowAnswers] = useState(false);
    const [selected, setSelected] = useState(Array(5).fill(null));

    const quiz = [
        {
            q: "Which Stream operation is used to transform elements?",
            options: ["filter()", "map()", "collect()", "forEach()"],
            answer: 1,
        },
        {
            q: "Which operation gathers results into a List or Set?",
            options: ["reduce()", "collect()", "flatMap()", "sorted()"],
            answer: 1,
        },
        {
            q: "What is the purpose of reduce() in Streams?",
            options: [
                "Filter elements",
                "Transform elements",
                "Combine elements into a single result",
                "Collect elements into a list",
            ],
            answer: 2,
        },
        {
            q: "Which combination removes duplicates and sorts results?",
            options: [
                "filter() and reduce()",
                "map() and collect()",
                "distinct() and sorted()",
                "limit() and skip()",
            ],
            answer: 2,
        },
        {
            q: "Which Stream operation triggers the processing (terminal)?",
            options: ["map()", "filter()", "collect()", "peek()"],
            answer: 2,
        },
    ];

    return (
        <div style={{ fontFamily: "Arial", lineHeight: 2, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>🚀 Java Streams – Complete Summary & Final Practice</h1>
            <p>
                Congratulations! 🎉 You’ve now explored all major Stream operations in Java:
                from transforming data with <code>map()</code> to collecting results with
                <code>collect()</code>. Let’s quickly recap what you’ve mastered and
                see how everything fits together in a single real-world example.
            </p>

            <h2>🔹 Recap of Stream Operations</h2>
            <ul>
                <li><b>filter()</b> → Select elements that match a condition.</li>
                <li><b>map()</b> → Transform each element into another form.</li>
                <li><b>reduce()</b> → Combine all elements into a single result.</li>
                <li><b>sorted()</b> → Sort elements (natural or custom order).</li>
                <li><b>collect()</b> → Gather results into a List, Set, or Map.</li>
                <li><b>distinct()</b> → Remove duplicates.</li>
                <li><b>flatMap()</b> → Flatten nested collections.</li>
                <li><b>limit() / skip()</b> → Take or skip elements.</li>
                <li><b>peek()</b> → Inspect elements during processing (for debugging).</li>
                <li><b>count(), min(), max(), findFirst(), anyMatch()</b> → Terminal summary operations.</li>
            </ul>

            <h2>🌟 Real-World Example: Employee Data Processing</h2>
            <p>
                Let’s use everything together to process a list of employees — filtering, sorting, mapping,
                and collecting in one clean Stream pipeline.
            </p>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`import java.util.*;
import java.util.stream.*;

class Employee {
    String name;
    String department;
    double salary;

    Employee(String name, String department, double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

public class StreamSummary {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000),
            new Employee("Bob", "HR", 50000),
            new Employee("Charlie", "IT", 82000),
            new Employee("David", "Finance", 60000),
            new Employee("Eve", "IT", 90000),
            new Employee("Frank", "Finance", 60000)
        );

        // Stream pipeline example
        List<String> topItEmployees = employees.stream()
            .filter(e -> e.department.equals("IT"))               // Step 1: Only IT department
            .filter(e -> e.salary > 70000)                        // Step 2: Salary > 70k
            .sorted(Comparator.comparingDouble(e -> -e.salary))   // Step 3: Sort descending by salary
            .map(e -> e.name.toUpperCase())                       // Step 4: Convert names to uppercase
            .distinct()                                           // Step 5: Remove duplicates
            .limit(3)                                             // Step 6: Take top 3
            .collect(Collectors.toList());                        // Step 7: Collect as List

        System.out.println("Top IT Employees: " + topItEmployees);

        // Use reduce to get total IT salary
        double totalItSalary = employees.stream()
            .filter(e -> e.department.equals("IT"))
            .map(e -> e.salary)
            .reduce(0.0, Double::sum);

        System.out.println("Total IT Salary: " + totalItSalary);
    }
}`}</code>
            </pre>

            <h2>🧠 Explanation</h2>
            <ul>
                <li><code>filter()</code> → Selects employees from IT with salary above 70k.</li>
                <li><code>sorted()</code> → Sorts by descending salary.</li>
                <li><code>map()</code> → Converts names to uppercase.</li>
                <li><code>distinct()</code> → Removes duplicate names (if any).</li>
                <li><code>limit()</code> → Keeps only the top 3 results.</li>
                <li><code>collect()</code> → Gathers the final list.</li>
                <li><code>reduce()</code> → Calculates total salary of IT employees.</li>
            </ul>

            <h2>✅ Best Practices</h2>
            <ul>
                <li>Always prefer Streams for readable and concise data processing.</li>
                <li>Keep pipelines short and logical — avoid overusing chaining.</li>
                <li>Use <code>collect()</code> for output collections, and <code>reduce()</code> for summaries.</li>
                <li>Check <code>Optional</code> results safely before accessing.</li>
                <li>For complex multi-step pipelines, use method references and helper functions for clarity.</li>
            </ul>

            <h2>🧩 Practice Challenge</h2>
            <pre style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
                <code>{`// Challenge:
// From a list of integers, find the sum of the top 3 even numbers
// after doubling each of them.

List<Integer> numbers = Arrays.asList(5, 2, 8, 10, 3, 12, 6);

int result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .sorted(Comparator.reverseOrder())
    .limit(3)
    .reduce(0, Integer::sum);

System.out.println("Sum of top 3 doubled even numbers: " + result);`}</code>
            </pre>

            <h2>📝 Final Stream Mastery Quiz</h2>
            <form
                onSubmit={(e) => {
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
                                        const copy = selected.slice();
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
                        ? "🎉 Fantastic! You’re now a Java Streams Pro!"
                        : "Almost there — review the lessons and try again!"}
                </div>
            )}

            <p style={{ background: "#e0f2fe", padding: "1rem", borderRadius: "8px" }}>
                💡 <b>Final Tip:</b> Streams are not just syntax — they represent a **functional way of thinking**.
                Use them to write cleaner, faster, and more expressive Java code.
                With practice, you’ll be able to process data elegantly using just a few lines of Stream code!
            </p>
        </div>
    );
}
