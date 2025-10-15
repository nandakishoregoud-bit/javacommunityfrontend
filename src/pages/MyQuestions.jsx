import { useEffect, useState, useMemo } from "react";
import api from "../utils/api";
import QuestionCard from "../components/QuestionCard";

export default function MyQuestions() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState(null);
    const [form, setForm] = useState({ title: "", description: "", difficulty: "", tags: "" });

    const user = useMemo(() => JSON.parse(localStorage.getItem("user")), []);


    useEffect(() => {
        if (!user) {
            setError("Please login to view your posts.");
            setLoading(false);
            return;
        }

        loadQuestions();
    }, [user]);

    const loadQuestions = () => {
        console.log("Fetching MyQuestions from backend...");
        api.get(`/questions/getquestion/user/${user.id}`)
            .then(res => {
                setQuestions(Array.isArray(res.data.data) ? res.data.data : []);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load your questions.");
                setLoading(false);
            });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            const payload = {
                ...form,
                userId: user.id,
                tags: form.tags.split(",").map(tag => tag.trim()),
            };

            if (editingQuestion) {
                await api.put(`/questions/update/question/${editingQuestion.id}`, payload);
            } else {
                await api.post(`/questions/post/question/${user.id}`, payload);
            }

            loadQuestions();
            setShowForm(false);
            setEditingQuestion(null);
            setForm({ title: "", description: "", difficulty: "", tags: "" });
        } catch (err) {
            alert("Failed to save question");
        }
    };

    const handleEdit = (q) => {
        setEditingQuestion(q);
        setForm({
            title: q.title,
            description: q.description,
            difficulty: q.difficulty,
            tags: Array.isArray(q.tags) ? q.tags.join(", ") : "",
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this question?")) return;
        try {
            await api.delete(`/questions/delete/question/${id}/user/${user.id}`);
            loadQuestions();
        } catch (err) {
            alert("Failed to delete question");
        }
    };

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

    return (
        <div style={{ maxWidth: "900px", margin: "2rem auto", position: "relative" }}>
            <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>My Questions</h1>

            {questions.length > 0 ? (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {questions.map(q => (
                        <div
                            key={q.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "15px",
                                background: "#fff",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <QuestionCard question={q} />
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px", gap: "10px" }}>
                                <button
                                    onClick={() => handleEdit(q)}
                                    style={{
                                        background: "#2563eb",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(q.id)}
                                    style={{
                                        background: "#ef4444",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                    }}
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: "center" }}>You haven’t posted any questions yet.</p>
            )}

            {/* Floating + Button */}
            {user && (
                <button
                    onClick={() => setShowForm(true)}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        fontSize: "30px",
                        cursor: "pointer",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    }}
                >
                    +
                </button>
            )}

            {/* Modal Form */}
            {showForm && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "400px",
                        }}
                    >
                        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                            {editingQuestion ? "Edit Question" : "Post New Question"}
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                required
                                name="title"
                                placeholder="Title"
                                value={form.title}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                }}
                            />
                            <textarea
                                required
                                name="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    height: "100px",
                                }}
                            />

                            {/* Dropdown for Difficulty */}
                            <select
                                required
                                name="difficulty"
                                value={form.difficulty}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="" disabled>Select Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForm(false);
                                        setEditingQuestion(null);
                                        setForm({ title: "", description: "", difficulty: "", tags: "" });
                                    }}
                                    style={{
                                        background: "#ccc",
                                        border: "none",
                                        padding: "10px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        background: "#2563eb",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {editingQuestion ? "Update" : "Post"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
}
