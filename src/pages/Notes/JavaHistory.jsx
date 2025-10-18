// src/pages/Notes/JavaHistory.jsx
import React from "react";

export default function JavaHistory() {
    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>Java — History, Architecture & Core Concepts</h1>

            <section>
                <h2>What is Java?</h2>
                <p>
                    <strong>Java</strong> is a high-level, class-based, object-oriented programming language
                    designed to be platform-independent, robust, and easy to use. It was created to let developers
                    write code once and run it anywhere that provides a Java Virtual Machine (JVM).
                </p>

                <h3>Brief History</h3>
                <p>
                    Java was first developed at <strong>Sun Microsystems</strong> by James Gosling and his team in the early 1990s.
                    The project began as <strong>Oak</strong> and later renamed to Java. The first public release was
                    <strong> Java 1.0 (1995)</strong>. Since then Java evolved through many versions and is widely used in
                    enterprise, mobile, cloud and embedded systems.
                </p>

                <h3>Key Features</h3>
                <ul>
                    <li><strong>Platform independence:</strong> Java programs compile to bytecode that runs on any JVM.</li>
                    <li><strong>Object-oriented:</strong> Java uses classes and objects, encouraging modular code.</li>
                    <li><strong>Automatic memory management:</strong> Garbage collection reduces manual memory work.</li>
                    <li><strong>Rich standard library:</strong> Powerful APIs for collections, IO, concurrency, networking, etc.</li>
                    <li><strong>Strong typing and security:</strong> Compile-time checks and runtime security model.</li>
                </ul>

                <h3>Advantages</h3>
                <p>
                    Java's portability, large ecosystem, mature tooling (IDEs, build tools), and strong community support
                    make it a safe choice for many long-term projects. It's commonly used in enterprise servers,
                    Android apps (Java or JVM languages), and backend systems.
                </p>

                <h3>JDK, JRE and JVM — what’s the difference?</h3>
                <p>
                    These three are commonly mentioned together. Here's a simple breakdown:
                </p>
                <ul>
                    <li>
                        <strong>JVM (Java Virtual Machine):</strong> The runtime engine that executes Java bytecode. It provides
                        platform-independent execution by translating bytecode to machine code at runtime.
                    </li>
                    <li>
                        <strong>JRE (Java Runtime Environment):</strong> A package that contains the JVM plus standard libraries
                        required to run Java programs. End-users typically install JRE to run Java apps.
                    </li>
                    <li>
                        <strong>JDK (Java Development Kit):</strong> A superset of JRE. It includes the JRE plus development tools
                        such as <code>javac</code> (compiler), <code>jar</code>, debuggers, and other utilities. Developers install JDK.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Java Architecture — Compilation & Execution Process</h2>
                <p>
                    Java uses a two-step approach: source code → bytecode → execution. The critical pieces are:
                </p>
                <ol>
                    <li>
                        <strong>Source code (.java):</strong> You write Java code in files ending with <code>.java</code>.
                    </li>
                    <li>
                        <strong>Compilation (javac):</strong> The Java compiler (<code>javac</code>) turns <code>.java</code> into
                        platform-independent <code>.class</code> files containing bytecode.
                    </li>
                    <li>
                        <strong>Execution (java):</strong> The JVM loads the bytecode and executes it on the host machine,
                        handling platform-specific details.
                    </li>
                </ol>

                <h3>Simple example</h3>
                <p>Create a file <code>HelloWorld.java</code>:</p>
                <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                    {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
                </pre>
                <p>Compile and run from terminal:</p>
                <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                    {`javac HelloWorld.java   # produces HelloWorld.class (bytecode)
java HelloWorld         # JVM loads HelloWorld.class and runs it`}
                </pre>
                <p>
                    The generated <code>.class</code> file contains bytecode that any JVM on any OS can execute.
                </p>
            </section>

            <section>
                <h2>Bytecode and JVM Internals</h2>
                <p>
                    <strong>Bytecode</strong> is the intermediate, low-level instruction set produced by <code>javac</code>.
                    Bytecode is not directly machine code — instead it is executed (or translated to machine code) by the JVM.
                </p>

                <h3>Why bytecode?</h3>
                <ul>
                    <li>Portability: the same <code>.class</code> file can run on any platform with a JVM.</li>
                    <li>Security: the JVM can verify bytecode before execution to prevent illegal operations.</li>
                    <li>Optimization: modern JVMs perform JIT (Just-In-Time) compilation to convert hot bytecode paths into optimized native code.</li>
                </ul>

                <h3>JVM components (high-level)</h3>
                <p>The JVM is complex; here are the main parts you should know as a beginner:</p>
                <ul>
                    <li>
                        <strong>Class Loader:</strong> Loads <code>.class</code> files into JVM memory and separates namespaces
                        (bootstrap, extension, application class loaders).
                    </li>
                    <li>
                        <strong>Bytecode Verifier:</strong> Checks bytecode correctness and security properties before execution.
                    </li>
                    <li>
                        <strong>Runtime Data Areas:</strong> Memory areas used by JVM:
                        <ul>
                            <li><strong>Method Area:</strong> stores class-level information (bytecode, static variables).</li>
                            <li><strong>Heap:</strong> where objects are allocated (garbage-collected).</li>
                            <li><strong>Stack:</strong> each thread has its own stack for method frames, local variables, and return addresses.</li>
                            <li><strong>PC Register:</strong> program counter for each thread.</li>
                            <li><strong>Native Method Stack:</strong> used when calling native (non-Java) code.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Execution Engine (Interpreter + JIT):</strong> Interprets bytecode and the JIT compiles frequently used code paths to native machine code for speed.
                    </li>
                    <li>
                        <strong>Garbage Collector (GC):</strong> Automatically reclaims memory from objects that are no longer reachable.
                    </li>
                </ul>

                <h3>Example: how JIT helps</h3>
                <p>
                    When a loop or method is executed frequently, the JIT compiles that bytecode into optimized native code,
                    so performance approaches that of compiled languages like C++ for hot code paths.
                </p>
            </section>

            <section>
                <h2>Java Versions & Platforms (SE, EE, ME)</h2>

                <h3>Java Editions</h3>
                <ul>
                    <li>
                        <strong>Java SE (Standard Edition):</strong> The core Java platform — language, standard libraries,
                        core APIs (collections, IO, concurrency), and the basis for all Java development.
                    </li>
                    <li>
                        <strong>Java EE (Enterprise Edition), now Jakarta EE:</strong> Built on top of Java SE, provides APIs for
                        large-scale enterprise features: servlets, JSP, CDI, EJB (historically), JPA, JMS, web services, and more.
                        Used to build robust server-side applications.
                    </li>
                    <li>
                        <strong>Java ME (Micro Edition):</strong> A smaller, trimmed-down platform for embedded devices, IoT, and
                        resource-constrained environments. (Less common today than earlier mobile-era usage.)
                    </li>
                </ul>

                <h3>Version history highlights (practical view)</h3>
                <p>
                    Java evolved steadily with major, developer-impacting releases:
                </p>
                <ul>
                    <li><strong>Java 1.0 (1995):</strong> initial public release.</li>
                    <li><strong>Java 1.1 (1997):</strong> inner classes, JDBC, RMI.</li>
                    <li><strong>Java 5 (2004):</strong> generics, enhanced for-loop, enums, annotations.</li>
                    <li><strong>Java 8 (2014):</strong> lambda expressions, Stream API, new Date-Time API — very influential.</li>
                    <li><strong>Java 9+ (2017 onward):</strong> modular system (JPMS), faster release cadence, additions like var, records, pattern matching and virtual threads (ongoing improvements).</li>
                    <li><strong>LTS (Long Term Support) versions:</strong> Java 8, Java 11, Java 17 are LTS releases many production systems prefer.</li>
                </ul>

                <h3>Which edition / version should you use?</h3>
                <p>
                    For learning core Java, start with the latest Java SE (LTS recommended — e.g., Java 17 or Java 11).
                    For enterprise work, learn Jakarta EE concepts after you’re comfortable with Java SE.
                </p>
            </section>

            <section>
                <h2>Practical Examples & Small Exercises</h2>

                <h3>1. Simple class and object</h3>
                <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                    {`// Person.java
public class Person {
    private String name;
    public Person(String name) { this.name = name; }
    public void sayHi() { System.out.println("Hi, I'm " + name); }

    public static void main(String[] args) {
        Person p = new Person("Asha");
        p.sayHi(); // Hi, I'm Asha
    }
}`}
                </pre>

                <h3>2. How compilation & JVM fit in (try it)</h3>
                <ol>
                    <li>Save the above code as <code>Person.java</code>.</li>
                    <li>Run <code>javac Person.java</code> — this creates <code>Person.class</code>.</li>
                    <li>Run <code>java Person</code> — the JVM executes the bytecode and prints output.</li>
                </ol>

                <h3>3. Small bytecode inspection (optional)</h3>
                <p>
                    You can view the bytecode instructions using <code>javap -c Person</code> (the <code>javap</code> tool is included in JDK).
                    This is useful to see what the compiler produced and is a good learning exercise to understand JVM execution.
                </p>

                <h3>4. Quick memory layout concept</h3>
                <p>
                    Think of a running Java program as:
                </p>
                <ul>
                    <li><strong>Heap:</strong> where all created objects live.</li>
                    <li><strong>Stack:</strong> where method calls and local variables are stored per thread.</li>
                    <li><strong>Method area:</strong> class-level data (static fields, bytecode references).</li>
                </ul>
                <p>
                    The garbage collector periodically finds unreachable objects on the heap and frees memory for reuse. You
                    do not call <code>free</code> like in C — the JVM manages it for you.
                </p>
            </section>

            <section>
                <h2>Recommended Learning Path for These Topics</h2>
                <ol>
                    <li>Start with basic syntax & <code>main()</code> — write small programs and run them.</li>
                    <li>Learn classes & objects, constructors, and basic OOP concepts.</li>
                    <li>Practice compilation & understand how <code>javac</code> and <code>java</code> work.</li>
                    <li>Explore the JVM: run <code>javap</code>, and read simple bytecode output.</li>
                    <li>Study memory areas and try small experiments (create objects in loops, observe GC logs if curious).</li>
                    <li>Read about JDK vs JRE, and install an LTS JDK to follow modern tutorials (Java 11 or 17 recommended).</li>
                </ol>
            </section>

            <section>
                <h2>Closing Notes</h2>
                <p style={{ fontStyle: "italic", color: "#333" }}>
                    These fundamentals form the backbone of everything you do in Java — from writing simple console apps to building
                    large enterprise systems. Take your time experimenting: compile small programs, inspect bytecode, and try
                    running code on different machines (or containers) to experience the "Write Once, Run Anywhere" advantage.
                </p>

                
            </section>
        </div>
    );
}
