export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>
                <p style={{ color: "#475569", textAlign: "center", marginBottom: "2rem" }}>
                    <strong>Effective Date:</strong> October 2025
                </p>

                <p style={{ color: "#475569" }}>
                    At <strong>Java Connect</strong>, accessible from{" "}
                    <a
                        href="https://javacommunity.onrender.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        javacommunity.onrender.com
                    </a>
                    , we value your privacy. This Privacy Policy describes how we collect, use,
                    and protect your personal information.
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>Information We Collect</h2>
                <ul style={{ color: "#475569", marginLeft: "1.5rem" }}>
                    <li>Basic analytics data such as IP address, browser type, and visit duration.</li>
                    <li>Information you provide when contacting us (e.g., email address).</li>
                </ul>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>How We Use Your Information</h2>
                <ul style={{ color: "#475569", marginLeft: "1.5rem" }}>
                    <li>To improve the quality and performance of our content.</li>
                    <li>To communicate with users and respond to inquiries.</li>
                    <li>To monitor traffic and prevent abuse or technical issues.</li>
                </ul>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>Third-Party Services</h2>
                <p style={{ color: "#475569" }}>
                    We may use third-party services such as <strong>Google Analytics</strong> and{" "}
                    <strong>Google AdSense</strong>. These services may collect information
                    using cookies to personalize ads and analyze traffic. You can learn more in
                    Google’s privacy policy at{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        policies.google.com/privacy
                    </a>
                    .
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>Your Privacy Rights</h2>
                <p style={{ color: "#475569" }}>
                    You may request access to, correction of, or deletion of your personal
                    information by contacting us at{" "}
                    <a
                        href="mailto:vvnandakishoregoudyesu@gmail.com"
                        style={{ color: "#2563eb", textDecoration: "none" }}
                    >
                        vvnandakishoregoudyesu@gmail.com
                    </a>
                    .
                </p>

                <h2 style={{ color: "#1e293b", marginTop: "2rem" }}>Changes to This Policy</h2>
                <p style={{ color: "#475569" }}>
                    We may update this policy from time to time. The updated version will be
                    posted on this page with a new effective date. Continued use of our site
                    after changes means you accept the new terms.
                </p>

                <p style={{ color: "#475569", marginTop: "2rem" }}>
                    Thank you for trusting <strong>Java Connect</strong>.
                </p>
            </div>

            <p style={{ marginTop: "2rem", color: "#94a3b8", fontSize: "0.9rem" }}>
                © {new Date().getFullYear()} Java Connect. All rights reserved.
            </p>
        </div>
    );
}
