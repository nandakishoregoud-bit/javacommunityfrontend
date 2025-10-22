import { Link } from "react-router-dom";
import javaImage from "../assets/javacommunity.png";
import jamesGosling from "../assets/jamesgosling.jpg";
import billyjoy from "../assets/billyjoy.jpeg";
import patrickNaughton from "../assets/patricknaughton.jpeg";
import herbSchildt from "../assets/HerbertSchildt.jpeg";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Welcome to <span>JavaConnect</span>
                    </h1>
                    <p>
                        A friendly platform for Java developers to ask questions, share knowledge,
                        and grow together as a global coding community. From beginners exploring
                        their first <code>Hello World</code> to professionals working on enterprise applications —
                        JavaConnect brings everyone together.
                    </p>
                    <Link to="/questions" className="explore-btn">
                        🚀 Explore Questions
                    </Link>
                </div>

                <div className="hero-image">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                        alt="Java Logo"
                    />
                </div>
            </section>

            {/* About JavaConnect */}
            <section className="about-section">
                <h2>🌐 Why JavaConnect?</h2>
                <p>
                    The world of Java is vast — from building Android apps to large-scale enterprise
                    systems. Yet, developers often struggle to find clear explanations, structured learning
                    paths, and real-world discussions in one place. That’s where <b>JavaConnect</b> comes in.
                </p>
                <ul>
                    <li>💬 <b>Ask Questions</b> — Get help from experienced Java developers.</li>
                    <li>📘 <b>Learn by Example</b> — Access structured notes and code samples.</li>
                    <li>🤝 <b>Collaborate & Contribute</b> — Share your solutions and mentor others.</li>
                    <li>📰 <b>Stay Updated</b> — Know the latest tools, frameworks, and trends in Java.</li>
                </ul>
                <p>
                    Whether you're preparing for interviews, brushing up on core concepts, or exploring
                    new technologies like Spring Boot or Microservices, JavaConnect provides a space for
                    constant learning and growth.
                </p>
            </section>

            {/* Java Learning Resources Section */}
            <section className="learning-section">
                <h2>📚 Learn Java Step by Step</h2>
                <p>
                    At JavaConnect, we believe in learning by doing. Our tutorials and discussions are structured to
                    help you progress from fundamentals to advanced topics at your own pace. Here are some of the key areas you can explore:
                </p>
                <ul>
                    <li>☕ <b>Core Java</b> — Understand OOP concepts, collections, and exception handling with practical examples.</li>
                    <li>🌱 <b>Spring Boot</b> — Learn how to build production-ready applications quickly using modern frameworks.</li>
                    <li>🧩 <b>Microservices</b> — Dive into scalable system design and distributed architecture with Java.</li>
                    <li>🧠 <b>Interview Preparation</b> — Explore real-world coding challenges and Java interview questions.</li>
                    <li>🌍 <b>Community Articles</b> — Read tutorials, guides, and discussions written by experienced Java developers.</li>
                </ul>
                <p>
                    Every topic comes with examples, explanations, and discussions to help you truly understand the “why” behind the code.
                    We encourage you to participate, ask questions, and share your experience — because that’s what makes our community thrive.
                </p>
            </section>

            {/* Community Section */}
            <section className="community-section">
                <div className="community-image">
                    <img src={javaImage} alt="Developer Community" />
                </div>

                <div className="community-content">
                    <h2>👥 Join Our Developer Community</h2>
                    <p>
                        Java has one of the largest developer communities in the world — trusted by
                        millions of professionals and learners alike. At JavaConnect, we bring that same
                        collaborative spirit online, making it easier to learn and connect.
                    </p>
                    <Link to="/register" className="join-btn">
                        Join Now
                    </Link>
                </div>
            </section>

            {/* Java Legends Section */}
            <section className="java-legends">
                <h2>💡 The Minds Behind Java</h2>
                <p>
                    Java’s journey began in the mid-1990s with a small team at Sun Microsystems, and
                    since then, it has evolved into one of the most powerful programming languages ever
                    created. Here are a few remarkable individuals who shaped its history:
                </p>

                <div className="legend-list">
                    <div className="legend">
                        <img
                            src={jamesGosling}
                            alt="James Gosling"
                        />
                        <h3>James Gosling</h3>
                        <p>
                            Known as the <b>“Father of Java”</b>, James Gosling designed Java in 1995 while
                            working at Sun Microsystems. His vision was to create a language that could
                            “write once, run anywhere”.
                        </p>
                    </div>

                    <div className="legend">
                        <img
                            src={billyjoy}
                            alt="Bill Joy"
                        />
                        <h3>Bill Joy</h3>
                        <p>
                            Co-founder of Sun Microsystems, Joy played a crucial role in Java’s architecture
                            and API design. He also contributed significantly to UNIX and the vi editor.
                        </p>
                    </div>

                    <div className="legend">
                        <img
                            src={patrickNaughton}
                            alt="Patrick Naughton"
                        />
                        <h3>Patrick Naughton</h3>
                        <p>
                            One of the original members of the “Green Team”, Naughton helped design the
                            first Java compiler and runtime environment, which made Java platform-independent.
                        </p>
                    </div>

                    <div className="legend">
                        <img
                            src={herbSchildt}
                            alt="Herbert Schildt"
                        />
                        <h3>Herbert Schildt</h3>
                        <p>
                            A renowned author of several Java books, Schildt has helped millions of learners
                            understand Java with his clear explanations and hands-on examples.
                        </p>
                    </div>
                </div>

                <p>
                    These pioneers laid the foundation for a language that continues to evolve even today,
                    influencing everything from Android to enterprise systems and cloud computing.
                </p>
            </section>

            {/* Closing Section */}
            <section className="closing-section">
                <h2>🚀 Start Your Java Journey Today!</h2>
                <p>
                    JavaConnect is built by developers, for developers. Whether you’re writing your first
                    line of code or optimizing backend microservices, our mission is to make learning Java
                    simple, practical, and community-driven.
                </p>
                <Link to="/register" className="join-btn">
                    Get Started
                </Link>
            </section>

            {/* Footer Section */}
            <footer className="footer1">
                <div className="footer1-content">
                    <h3>About JavaConnect</h3>
                    <p>
                        JavaConnect is an independent learning and collaboration platform for Java enthusiasts.
                        Our mission is to make Java education accessible and community-driven. We are not affiliated
                        with Oracle or the official Java brand.
                    </p>
                    <p>
                        Explore tutorials, share your knowledge, and connect with like-minded developers who are passionate about
                        Java, Spring Boot, Microservices, and backend engineering.
                    </p>
                    <p>📧 Contact us: support@javaconnect.dev</p>
                    <p>© {new Date().getFullYear()} JavaConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
