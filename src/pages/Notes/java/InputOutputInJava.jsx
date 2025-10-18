export default function InputOutputInJava() {
    return (
        <div style={{ padding: "1rem", lineHeight: 1.8, maxWidth: 900, margin: "auto" }}>
            <h1>Input and Output in Java using <code>Scanner</code> and <code>System.out</code></h1>

            <p>
                In any programming language, <strong>input and output (I/O)</strong> are two of the most
                fundamental operations. Input allows the user to provide data to a program, while output
                allows the program to display results or information to the user.
            </p>

            <h2>🖨️ What is Output in Java?</h2>
            <p>
                Output means displaying information to the screen. In Java, we commonly use{" "}
                <code>System.out.print()</code> and <code>System.out.println()</code> methods to send
                output to the console (standard output stream).
            </p>

            <h3>Example:</h3>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`public class OutputExample {
    public static void main(String[] args) {
        System.out.print("Hello ");
        System.out.println("World!");
        System.out.println("Java is awesome!");
    }
}`}
            </pre>

            <h3>🧾 Output:</h3>
            <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                {`Hello World!
Java is awesome!`}
            </pre>

            <h3>💡 Explanation:</h3>
            <ul>
                <li><code>System.out.print()</code> → Prints text **without** moving to a new line.</li>
                <li><code>System.out.println()</code> → Prints text **and then moves** to the next line.</li>
                <li>
                    <code>System.out</code> is a built-in output stream connected to the console — it is
                    part of the <code>java.lang</code> package, which is automatically imported.
                </li>
            </ul>

            <h2>⌨️ What is Input in Java?</h2>
            <p>
                Input means reading data from the user. Java provides several ways to read input, but the
                most common and beginner-friendly way is using the{" "}
                <strong><code>Scanner</code></strong> class.
            </p>

            <h3>🧰 Importing the Scanner Class</h3>
            <p>
                The <code>Scanner</code> class is part of the <code>java.util</code> package, so we need
                to import it before using it:
            </p>

            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`import java.util.Scanner;`}
            </pre>

            <h2>📥 Reading Input using Scanner</h2>
            <p>
                To take input from the user, follow these steps:
            </p>

            <ol>
                <li>Import the <code>java.util.Scanner</code> class.</li>
                <li>Create a <code>Scanner</code> object linked to <code>System.in</code>.</li>
                <li>Use various methods like <code>nextInt()</code>, <code>nextLine()</code>, <code>nextDouble()</code>, etc., to read input.</li>
                <li>Close the Scanner object after use (good practice).</li>
            </ol>

            <h3>Example:</h3>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // Step 1: Create Scanner object

        System.out.print("Enter your name: ");
        String name = sc.nextLine(); // Step 2: Read string input

        System.out.print("Enter your age: ");
        int age = sc.nextInt(); // Step 3: Read integer input

        System.out.println("Hello, " + name + "! You are " + age + " years old.");

        sc.close(); // Step 4: Close Scanner
    }
}`}
            </pre>

            <h3>🧾 Sample Output:</h3>
            <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                {`Enter your name: Kishore
Enter your age: 22
Hello, Kishore! You are 22 years old.`}
            </pre>

            <h3>💬 Explanation:</h3>
            <ul>
                <li><code>new Scanner(System.in)</code> → Creates a Scanner object to read from the keyboard.</li>
                <li><code>nextLine()</code> → Reads a full line of text (including spaces).</li>
                <li><code>nextInt()</code> → Reads an integer value.</li>
                <li><code>close()</code> → Closes the scanner to prevent memory leaks.</li>
            </ul>

            <h2>🎯 Commonly Used Scanner Methods</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead style={{ backgroundColor: "#f0f0f0" }}>
                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>next()</code></td>
                        <td>Reads a single word (stops at space)</td>
                        <td><code>String s = sc.next();</code></td>
                    </tr>
                    <tr>
                        <td><code>nextLine()</code></td>
                        <td>Reads a full line including spaces</td>
                        <td><code>String s = sc.nextLine();</code></td>
                    </tr>
                    <tr>
                        <td><code>nextInt()</code></td>
                        <td>Reads an integer value</td>
                        <td><code>int x = sc.nextInt();</code></td>
                    </tr>
                    <tr>
                        <td><code>nextDouble()</code></td>
                        <td>Reads a double (decimal) value</td>
                        <td><code>double d = sc.nextDouble();</code></td>
                    </tr>
                    <tr>
                        <td><code>nextBoolean()</code></td>
                        <td>Reads a boolean (true/false)</td>
                        <td><code>boolean b = sc.nextBoolean();</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>⚠️ Common Mistakes with Scanner</h2>
            <ul>
                <li>
                    Mixing <code>nextInt()</code> and <code>nextLine()</code> without handling the newline.
                    <br />
                    After reading an integer using <code>nextInt()</code>, add an extra <code>sc.nextLine()</code>
                    to consume the leftover newline character.
                </li>
                <li>Forgetting to close the Scanner object — this can cause resource leaks.</li>
                <li>Expecting <code>next()</code> to read sentences — it only reads a single word.</li>
            </ul>

            <h2>🧮 Example: Adding Two Numbers</h2>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`import java.util.Scanner;

public class SumExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        
        int sum = a + b;
        System.out.println("Sum = " + sum);

        sc.close();
    }
}`}
            </pre>

            <h3>Output:</h3>
            <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                {`Enter first number: 10
Enter second number: 20
Sum = 30`}
            </pre>

            <h2>💡 System.out Formatting Tips</h2>
            <ul>
                <li>You can format output using <code>System.out.printf()</code> just like in C language.</li>
                <li>Example:
                    <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                        {`double price = 25.6789;
System.out.printf("Price: %.2f", price); // Output: Price: 25.68`}
                    </pre>
                </li>
            </ul>

            <h2>🎓 Summary</h2>
            <ul>
                <li><code>System.out.print()</code> and <code>System.out.println()</code> are used for displaying output.</li>
                <li><code>Scanner</code> class is used for taking input from the user.</li>
                <li>Use appropriate methods like <code>nextInt()</code>, <code>nextDouble()</code>, and <code>nextLine()</code> based on the data type.</li>
                <li>Always close your <code>Scanner</code> object when done.</li>
            </ul>

            <p style={{ marginTop: "2rem" }}>
                🎯 <strong>Next Step:</strong> Try writing programs that take user input to calculate areas,
                convert temperatures, or check conditions (like if a number is even or odd). This will
                strengthen your understanding of input/output handling in Java.
            </p>
        </div>
    );
}
