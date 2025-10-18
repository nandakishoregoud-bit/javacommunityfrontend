export default function MainMethodAndArgs() {
    return (
        <div style={{ padding: "1rem", lineHeight: 1.8 }}>
            <h1>Understanding the <code>main()</code> Method & Command-Line Arguments</h1>
            <p>
                In Java, every program starts execution from one special method — the{" "}
                <code>main()</code> method. Without it, the Java Virtual Machine (JVM) won’t
                know where to begin. In this lesson, we’ll explore what the{" "}
                <code>main()</code> method is, how it works, and how we can pass inputs
                to our program using <strong>command-line arguments</strong>.
            </p>

            <h2>🧠 What is the <code>main()</code> Method?</h2>
            <p>
                The <code>main()</code> method is the entry point of any standalone Java
                application. When you run your program, the JVM searches for this method
                and starts execution from there.
            </p>

            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`public class Example {
    public static void main(String[] args) {
        System.out.println("Program started...");
    }
}`}
            </pre>

            <h2>🔍 Breaking Down the <code>main()</code> Method</h2>
            <ul>
                <li>
                    <strong>public</strong> — means the method is accessible by the JVM from anywhere.
                </li>
                <li>
                    <strong>static</strong> — allows the JVM to call this method without
                    creating an object of the class.
                </li>
                <li>
                    <strong>void</strong> — means the method does not return any value.
                </li>
                <li>
                    <strong>main</strong> — the name recognized by the JVM as the program’s
                    starting point.
                </li>
                <li>
                    <strong>String[] args</strong> — an array that stores command-line
                    arguments (inputs) passed during program execution.
                </li>
            </ul>

            <h3>💬 Why is it <code>public static void</code>?</h3>
            <p>
                - It’s <b>public</b> so JVM (which is outside the class) can access it.<br />
                - It’s <b>static</b> so that no object creation is needed to call it.<br />
                - It’s <b>void</b> because it doesn’t return anything — its job is just to
                start the program.
            </p>

            <h2>💡 Can We Change the Order or Modify It?</h2>
            <p>
                You can’t change the method name or remove the <code>String[] args</code>.
                However, you can write it in a few equivalent ways:
            </p>
            <ul>
                <li><code>public static void main(String args[])</code></li>
                <li><code>public static void main(String... args)</code> (using varargs)</li>
            </ul>
            <p>
                These are all valid. The JVM accepts them as long as the signature matches.
            </p>

            <h2>⚙️ Command-Line Arguments</h2>
            <p>
                Command-line arguments let us pass data to our program while running it
                from the terminal. These values are stored in the <code>args</code> array.
            </p>

            <h3>Example:</h3>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`public class CommandExample {
    public static void main(String[] args) {
        System.out.println("Number of arguments: " + args.length);

        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}`}
            </pre>

            <h3>➡️ How to Run This Program</h3>
            <ol>
                <li>Save the file as <code>CommandExample.java</code>.</li>
                <li>Compile it using: <code>javac CommandExample.java</code></li>
                <li>Run it and pass arguments:
                    <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                        {`java CommandExample Java SpringBoot React`}
                    </pre>
                </li>
                <li>
                    Output:
                    <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                        {`Number of arguments: 3
Argument 0: Java
Argument 1: SpringBoot
Argument 2: React`}
                    </pre>
                </li>
            </ol>

            <h2>📘 Practical Example — Greeting Program</h2>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`public class Greeting {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Hello, " + args[0] + "!");
        } else {
            System.out.println("Hello, User!");
        }
    }
}`}
            </pre>

            <p>
                ➤ Run this program with:
                <br />
                <code>java Greeting Kishore</code>
            </p>

            <p>
                Output:
                <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                    {`Hello, Kishore!`}
                </pre>
            </p>

            <p>
                If you run it without any argument (<code>java Greeting</code>), it will print:
                <pre style={{ background: "#f5f5f5", padding: "0.5rem", borderRadius: "8px" }}>
                    {`Hello, User!`}
                </pre>
            </p>

            <h2>🎯 Summary</h2>
            <ul>
                <li>The <code>main()</code> method is the starting point of every Java program.</li>
                <li>It must be declared as <code>public static void main(String[] args)</code>.</li>
                <li><code>args</code> is used to take input from the user during execution.</li>
                <li>Command-line arguments help make programs dynamic and flexible.</li>
            </ul>

            <h2>🚀 Next Step</h2>
            <p>
                Now that you understand how the <code>main()</code> method and arguments work,
                try creating programs that perform operations based on user input — like
                calculating the sum of numbers or printing personalized messages.
            </p>
        </div>
    );
}
