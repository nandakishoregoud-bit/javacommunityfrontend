import React from "react";
import "./Footer.css"; // import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} <strong>JavaConnect</strong> — Built with ☕
                and ❤️ for Java developers.
            </p>
            <p className="footer-tagline">Join the community. Keep coding. Keep growing.</p>

            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms & Conditions</a>
            </div>
        </footer>
    );
}
