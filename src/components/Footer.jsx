export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} <strong>JavaConnect</strong>. Built with ☕ and ❤️ for Java developers.</p>
            <p>Join the community. Keep coding. Keep growing.</p>
            <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</a> |
            <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a> |
            <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a> |
            <a href="/terms" style={{ color: "#fff", textDecoration: "none" }}>Terms & Conditions</a>
        </footer>
    );
}
