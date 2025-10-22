export default function TermsAndConditions() {
    return (
        <div
            style={{
                padding: "3rem 1rem",
                backgroundColor: "#f8fafc",
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "800px",
                    backgroundColor: "#ffffff",
                    padding: "2.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    lineHeight: 1.8,
                }}
            >
                <h1 style={{ color: "#1e293b", textAlign: "center", marginBottom: "1rem" }}>
                    Terms and Conditions
                </h1>
                <p style={{ color: "#475569", textAlign: "center", marginBottom: "2rem" }}>
                    <strong>Effective Date:</strong> October 2025
                </p>

                <p style={{ color: "#475569" }}>
                    Welcome to <strong>Java Connect</strong> (
                    <a
                        href="https://javacommunity.onrender.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        javacommunity.onrender.com
                    </a>
                    ). By accessing or using our website, you agree to comply with and be bound
                    by the following terms and conditions.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>1. Acceptance of Terms</h2>
                <p style={{ color: "#475569" }}>
                    By using Java Connect, you confirm that you are at least 13 years old and
                    agree to these Terms. If you do not agree, please do not use our platform.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>2. Use of Content</h2>
                <p style={{ color: "#475569" }}>
                    All educational materials, tutorials, and resources provided on Java Connect
                    are for learning and personal development purposes. You may reference or
                    share our content for non-commercial purposes with proper attribution.
                    Redistribution or resale of content is strictly prohibited without prior
                    written permission.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>3. User Accounts</h2>
                <ul style={{ color: "#475569", marginLeft: "1.5rem" }}>
                    <li>Users are responsible for maintaining the confidentiality of their login details.</li>
                    <li>We reserve the right to suspend or terminate accounts found violating our policies.</li>
                </ul>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>4. Privacy and Data Usage</h2>
                <p style={{ color: "#475569" }}>
                    We respect your privacy. Please review our{" "}
                    <a
                        href="/privacy-policy"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        Privacy Policy
                    </a>{" "}
                    to understand how we handle your data.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>5. Disclaimer</h2>
                <p style={{ color: "#475569" }}>
                    Java Connect provides educational materials “as is.” While we strive for
                    accuracy, we make no warranties or guarantees about completeness,
                    reliability, or suitability for any purpose. Use of the content is at your
                    own risk.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>6. Limitation of Liability</h2>
                <p style={{ color: "#475569" }}>
                    Java Connect and its developers will not be held liable for any damages,
                    data loss, or issues arising from the use or inability to use our content or
                    website.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>7. Third-Party Links</h2>
                <p style={{ color: "#475569" }}>
                    Our site may include links to external websites (e.g., Google, LinkedIn,
                    GitHub). We are not responsible for their content, policies, or practices.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>8. Modifications to Terms</h2>
                <p style={{ color: "#475569" }}>
                    We may update these Terms periodically. Any changes will be posted here
                    with an updated effective date. Continued use of the site means you accept
                    those changes.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>9. Contact Us</h2>
                <p style={{ color: "#475569" }}>
                    For any questions about these Terms, please contact us at{" "}
                    <a
                        href="mailto:vvnandakishoregoudyesu@gmail.com"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        vvnandakishoregoudyesu@gmail.com
                    </a>
                    .
                </p>

                <p style={{ color: "#475569", marginTop: "2rem" }}>
                    Thank you for being part of <strong>Java Connect</strong> — a community built
                    for passionate learners and developers.
                </p>
            </div>

            <p style={{ marginTop: "2rem", color: "#94a3b8", fontSize: "0.9rem" }}>
                © {new Date().getFullYear()} Java Connect. All rights reserved.
            </p>
        </div>
    );
}
