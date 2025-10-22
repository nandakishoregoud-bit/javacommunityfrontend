export default function Contact() {
    return (
        <div
            style={{
                padding: "3rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f8fafc",
                minHeight: "90vh",
            }}
        >
            <h1 style={{ color: "#1e293b", marginBottom: "1rem" }}>Contact Us</h1>
            <p style={{ maxWidth: "700px", color: "#475569", marginBottom: "2rem" }}>
                We’d love to hear from you! Whether you have a question, feedback, or an
                idea for collaboration — feel free to reach out. Your message matters to us.
            </p>

            <div
                style={{
                    backgroundColor: "#1e293b",
                    color: "#fff",
                    padding: "2rem 3rem",
                    borderRadius: "16px",
                    maxWidth: "600px",
                    width: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
            >
                <h2 style={{ color: "#38bdf8", marginBottom: "1rem" }}>Get in Touch</h2>

                <div style={{ marginBottom: "1rem" }}>
                    <h3 style={{ marginBottom: "0.3rem" }}>📧 Email</h3>
                    <a
                        href="mailto:vvnandakishoregoudyesu@gmail.com"
                        style={{
                            color: "#2563eb",
                            textDecoration: "none",
                            fontSize: "1.1rem",
                        }}
                    >
                        vvnandakishoregoudyesu@gmail.com
                    </a>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <h3 style={{ marginBottom: "0.3rem" }}>📞 Mobile</h3>
                    <p style={{ fontSize: "1.1rem", margin: 0, color:"#2563eb" }}>+91 95735 36697</p>
                </div>

                <div>
                    <h3 style={{ marginBottom: "0.5rem" }}>🌐 Connect with Us</h3>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            display: "flex",
                            justifyContent: "center",
                            gap: "1.2rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        <li>
                            <a
                                href="https://javacommunity.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#2563eb", textDecoration: "none" }}
                            >
                                Website
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/yvv-nanda-kishore-01136032b"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#2563eb", textDecoration: "none" }}
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/nandakishoregoud-bit"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#2563eb", textDecoration: "none" }}
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "#2563eb", textDecoration: "none" }}
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <p style={{ marginTop: "2rem", color: "#94a3b8", fontSize: "0.9rem" }}>
                © {new Date().getFullYear()} Java Connect. All rights reserved.
            </p>
        </div>
    );
}
