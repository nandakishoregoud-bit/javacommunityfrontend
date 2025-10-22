import MyImg from "../assets/my pic.jpg";

export default function About() {
    return (
        <div
            style={{
                padding: "2rem",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // ✅ centers the whole section
            }}
        >
            <h1>About Java Connect</h1>
            <p style={{ maxWidth: "800px", textAlign: "center" }}>
                <strong>Java Connect</strong> is a community-driven platform dedicated to helping
                Java enthusiasts learn, practice, and grow together. Our goal is to make
                Java learning simple, structured, and accessible for everyone — from
                beginners to advanced developers.
            </p>

            <p style={{ maxWidth: "800px", textAlign: "center" }}>
                We provide hands-on examples, tutorials, and coding exercises focused on
                real-world problem-solving. Java Connect was built with passion using
                modern web technologies like <strong>React</strong> and <strong>Spring Boot</strong>.
            </p>

            <p style={{ maxWidth: "800px", textAlign: "center" }}>
                Our mission is to empower learners to become confident developers who
                understand both the fundamentals and advanced aspects of the Java
                ecosystem.
            </p>

            {/* Developer Section */}
            <section
                style={{
                    marginTop: "3rem",
                    padding: "1.5rem 2rem",
                    backgroundColor: "#1e293b", // ✅ dark background for contrast
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                    maxWidth: "700px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    color: "#fff", // ✅ make all text white by default
                    flexWrap: "wrap", // ✅ mobile friendly
                }}
            >
                <img
                    src={MyImg}
                    alt="Developer"
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #38bdf8",
                        boxShadow: "0 0 10px rgba(56,189,248,0.5)",
                    }}
                />

                <div style={{ maxWidth: "400px", textAlign: "left" }}>
                    <h2 style={{ marginBottom: "0.3rem", color: "#38bdf8" }}>
                        Yesu vv Nanda Kishore Goud
                    </h2>
                    <p style={{ margin: "0.3rem 0" }}>
                        <strong>Developer & Founder of Java Connect</strong>
                    </p>
                    <p style={{ margin: "0.3rem 0" }}>
                        Passionate Java Developer focused on creating engaging learning experiences
                        through modern web technologies and real-world coding projects.
                    </p>

                    <p style={{ marginTop: "0.5rem" }}>
                        📧 E-mail:{" "}
                        <a
                            href="mailto:vvnandakishoregoudyesu@gmail.com"
                            style={{ color: "#2563eb", textDecoration: "none" }}
                        >
                             vvnandakishoregoudyesu@gmail.com
                        </a>
                    </p>

                    <p style={{ marginTop: "0.5rem" }}>
                        🔗 LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/yvv-nanda-kishore-01136032b"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2563eb", textDecoration: "none" }}
                        >
                            Yvv Nanda Kishore
                        </a>
                    </p>

                    <p style={{ marginTop: "0.5rem" }}>
                        💼 Portfolio:{" "}
                        <a
                            href="https://yvv-nanda-kishore-portfolio.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2563eb", textDecoration: "none" }}
                        >
                            yvv-nanda-kishore-portfolio.netlify.app
                        </a>
                    </p>

                    <p style={{ marginTop: "0.5rem" }}>
                        🧠 GitHub:{" "}
                        <a
                            href="https://github.com/nandakishoregoud-bit"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2563eb", textDecoration: "none" }}
                        >
                            nandakishoregoud-bit
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
