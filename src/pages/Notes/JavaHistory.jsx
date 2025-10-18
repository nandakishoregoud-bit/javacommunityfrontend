// src/pages/Notes/JavaHistory.jsx
export default function JavaHistory() {
    return (
        <div style={{ fontFamily: 'Arial', lineHeight: 2, padding: '1rem', maxWidth: 800, margin: 'auto' }}>
            <h1>Java History</h1>

            <p>
                Java is a high-level, class-based, object-oriented programming language
                that was designed to have as few implementation dependencies as possible.
                It allows developers to write once and run anywhere (WORA), meaning that
                compiled Java code can run on any platform that supports Java without
                recompilation.
            </p>

            <h2>Origins and Early Development</h2>
            <p>
                Java was originally developed by <strong>James Gosling</strong> and his team
                at Sun Microsystems in 1991. The project was initially called <strong>Oak</strong>,
                named after an oak tree that stood outside Gosling's office. Later, the name
                was changed to Java, inspired by Java coffee from Indonesia.
            </p>
            <p>
                The goal of the project was to create a language that could be used on
                digital devices like set-top boxes, TVs, and embedded systems, which required
                a platform-independent language. The team wanted a language that was simple,
                robust, and secure.
            </p>

            <h2>Java 1.0 and Public Release</h2>
            <p>
                Java 1.0 was officially released in <strong>1995</strong> with the slogan
                “Write Once, Run Anywhere”. This was possible due to the introduction
                of the <strong>Java Virtual Machine (JVM)</strong>, which allowed Java
                programs to run on any device with a JVM, regardless of the underlying
                hardware or operating system.
            </p>
            <p>
                Early Java gained popularity for its use in web applets, small programs
                that could run inside a web browser. It also introduced core concepts
                such as garbage collection, platform independence, and strong type
                checking, which made it more secure and reliable.
            </p>

            <h2>Major Versions and Evolution</h2>
            <ul>
                <li>
                    <strong>Java 1.1 (1997):</strong> Introduced inner classes, JavaBeans,
                    JDBC, and RMI (Remote Method Invocation).
                </li>
                <li>
                    <strong>Java 2 (1998–1999):</strong> Renamed as J2SE (Java 2 Standard Edition),
                    introduced Swing, Collections Framework, and the concept of
                    different editions (J2SE, J2EE, J2ME).
                </li>
                <li>
                    <strong>Java 5 (2004):</strong> Added generics, metadata (annotations),
                    enumerated types, and the enhanced for-loop.
                </li>
                <li>
                    <strong>Java 6 (2006):</strong> Performance improvements, scripting support,
                    and monitoring tools.
                </li>
                <li>
                    <strong>Java 7 (2011):</strong> Introduced try-with-resources, NIO.2, and
                    simplified language features like the diamond operator.
                </li>
                <li>
                    <strong>Java 8 (2014):</strong> A landmark release with lambda expressions,
                    Stream API, and a new Date-Time API.
                </li>
                <li>
                    <strong>Java 9 to 17 (2017–2021):</strong> Introduced modular programming (Java 9),
                    local-variable type inference (Java 10), enhanced switch expressions (Java 14),
                    records (Java 16), and sealed classes (Java 17, LTS version).
                </li>
                <li>
                    <strong>Java 18 and beyond:</strong> Ongoing development with features like pattern
                    matching, virtual threads (Project Loom), and further language and JVM enhancements.
                </li>
            </ul>

            <h2>Java Today</h2>
            <p>
                Java continues to be one of the most widely used programming languages
                in the world. It is heavily used in enterprise applications, Android
                development, cloud computing, big data technologies, and more.
                Its strong community support, platform independence, and continuous
                evolution ensure that Java remains relevant even decades after its creation.
            </p>

            <h2>Key Milestones</h2>
            <ul>
                <li>1991 – Java project started at Sun Microsystems.</li>
                <li>1995 – Java 1.0 officially released.</li>
                <li>1998 – Java 2 released with Swing and Collections Framework.</li>
                <li>2004 – Java 5 released with generics and annotations.</li>
                <li>2014 – Java 8 released with lambda expressions and Stream API.</li>
                <li>2021 – Java 17 released as Long Term Support (LTS).</li>
            </ul>
        </div>
    );
}
