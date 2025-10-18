export default function FirstJavaProgram() {
    return (
        <div style={{ padding: "1rem", lineHeight: 1.8 }}>
            <h1>Writing Your First Java Program</h1>
            <p>
                After installing Java and setting up the PATH, the next step is to write your first
                Java program. This program will help you understand the structure and syntax of a
                basic Java class.
            </p>

            <h2>🧩 Step 1: Create a Java File</h2>
            <p>
                Open any text editor (like VS Code, Notepad++, or IntelliJ IDEA) and create a new file
                named <code>HelloWorld.java</code>. Every Java program must be saved with the same name
                as the class that contains the <code>main()</code> method.
            </p>

            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
            </pre>

            <h2>🧠 Step 2: Understanding the Code (Line by Line)</h2>

            <h3>1️⃣ <code>public class HelloWorld</code></h3>
            <p>
                - <b>class</b> is a keyword used to define a class — the basic building block in Java.<br />
                - <b>HelloWorld</b> is the name of the class. It must match the filename (<code>HelloWorld.java</code>).<br />
                - <b>public</b> means the class is visible to all other classes.
            </p>

            <h3>2️⃣ <code>public static void main(String[] args)</code></h3>
            <p>
                This is the entry point of any Java program — the JVM (Java Virtual Machine) starts execution from here.
            </p>
            <ul>
                <li><b>public</b> — makes the method accessible from anywhere.</li>
                <li><b>static</b> — allows the JVM to call the method without creating an object.</li>
                <li><b>void</b> — means the method doesn’t return any value.</li>
                <li>
                    <b>String[] args</b> — is an array that holds command-line arguments. For example,
                    if you run <code>java HelloWorld Kishore</code>, then <code>args[0]</code> = "Kishore".
                </li>
            </ul>

            <h3>3️⃣ <code>System.out.println("Hello, World!");</code></h3>
            <p>
                - <code>System</code> is a predefined class in <code>java.lang</code> package.<br />
                - <code>out</code> is a static object of <code>PrintStream</code> class, used for output.<br />
                - <code>println()</code> prints the given message and moves the cursor to the next line.<br />
                - You can also use <code>print()</code> instead of <code>println()</code> if you don’t want a new line.
            </p>

            <h2>💻 Step 3: Compile and Run the Program</h2>
            <ol>
                <li>Open Command Prompt or Terminal.</li>
                <li>Navigate to the directory where you saved <code>HelloWorld.java</code>.</li>
                <li>Compile using: <code>javac HelloWorld.java</code></li>
                <li>If no errors, run: <code>java HelloWorld</code></li>
                <li>You should see: <code>Hello, World!</code></li>
            </ol>

            <h2>✨ Alternate Ways to Write It</h2>
            <p>There are small variations you can try:</p>

            <h3>Example 1: Without <code>println()</code></h3>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`System.out.print("Hello, ");
System.out.print("World!");`}
            </pre>
            <p>This will print <b>Hello, World!</b> on the same line because <code>print()</code> doesn’t add a new line.</p>

            <h3>Example 2: Using Escape Sequences</h3>
            <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
                {`System.out.println("Hello,\\nWorld!");`}
            </pre>
            <p>
                <code>\\n</code> is a newline character. This prints the text on two lines.
            </p>

            <h2>🎯 Benefits of This Structure</h2>
            <ul>
                <li>Defines clear program entry point (<code>main</code>).</li>
                <li>Encourages encapsulation using classes.</li>
                <li>Ensures code portability — the same code runs on any platform with a JVM.</li>
                <li>Follows strict naming and syntax rules, promoting consistency.</li>
            </ul>

            <h2>🚀 Next Steps</h2>
            <p>
                Once you’ve successfully printed “Hello, World!”, try modifying the program to print your name or perform
                simple math operations. This helps you get comfortable with syntax and Java’s compilation process.
            </p>
        </div>
    );
}
