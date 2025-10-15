import { useEffect, useState, useMemo } from "react";
import api from "../utils/api";
import QuestionCard from "../components/QuestionCard";

export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const QUESTIONS_PER_PAGE = 20;

    useEffect(() => {
        api.get("/questions/getall/questions")
            .then(res => {
                const data = Array.isArray(res.data.data) ? res.data.data : [];
                setQuestions(data);
            })
            .catch(() => setQuestions([]));
    }, []);

    // Filtered and searched questions
    const filteredQuestions = useMemo(() => {
        let result = [...questions];

        if (filter !== "All") {
            result = result.filter(q => q.difficulty === filter);
        }

        if (searchTerm.trim()) {
            const lowerSearch = searchTerm.toLowerCase();
            result = result.filter(q =>
                q.title.toLowerCase().includes(lowerSearch) ||
                (q.description && q.description.toLowerCase().includes(lowerSearch))
            );
        }

        return result;
    }, [questions, filter, searchTerm]);

    // Pagination
    const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);
    const paginatedQuestions = useMemo(() => {
        const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
        return filteredQuestions.slice(start, start + QUESTIONS_PER_PAGE);
    }, [filteredQuestions, currentPage]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1); // reset page
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // reset page
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
            <h1 style={{ marginBottom: "1rem" }}>All Questions</h1>

            {/* Filter and Search */}
            <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                    <label htmlFor="difficulty" style={{ marginRight: "0.5rem" }}>Filter by Difficulty:</label>
                    <select id="difficulty" value={filter} onChange={handleFilterChange} style={{ padding: "0.4rem", borderRadius: "5px" }}>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search by title or keywords..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ padding: "0.4rem", borderRadius: "5px", width: "250px" }}
                    />
                </div>
            </div>

            {/* Questions Grid */}
            {paginatedQuestions.length > 0 ? (
                <div className="questions-grid">
                    {paginatedQuestions.map(q => <QuestionCard key={q.id} question={q} />)}
                </div>
            ) : (
                <p>No questions found.</p>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", gap: "0.5rem", flexWrap: "wrap" }}>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Prev</button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            style={{
                                padding: "0.5rem 1rem",
                                background: currentPage === i + 1 ? "#2563eb" : "#f0f0f0",
                                color: currentPage === i + 1 ? "#fff" : "#000",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Next</button>
                </div>
            )}
        </div>
    );
}
