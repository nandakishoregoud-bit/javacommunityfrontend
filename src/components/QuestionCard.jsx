import { useNavigate } from "react-router-dom";

export default function QuestionCard({ question }) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleClick = (e) => {
        e.preventDefault(); // prevent Link default navigation
        if (!user) {
            alert("⚠️ Please login to view question details.");
            return;
        }
        navigate(`/questions/${question.id}`);
    };

    return (
        <div
            className="question-card"
            onClick={handleClick}
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            }}
        >
            <h3 style={{ marginBottom: "0.5rem", color: "#2563eb" }}>{question.title}</h3>
            <p style={{ marginBottom: "0.75rem", color: "#4b5563" }}>
                {(question.description || "No description available").slice(0, 100)}...
            </p>
            <p style={{ marginBottom: "0.5rem", color: "#2563eb" }}>
                {question.difficulty}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                💬 {question.answerCount || 0} Answer{question.answerCount !== 1 ? "s" : ""}
            </p>
        </div>
    );
}
