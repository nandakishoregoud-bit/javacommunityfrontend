import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function QuestionDetails() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openAnswerId, setOpenAnswerId] = useState(null);
    const [answerForm, setAnswerForm] = useState({ content: "" });
    const [feedbackForms, setFeedbackForms] = useState({});
    const [flagsStatus, setFlagsStatus] = useState({}); // { contentId: { flagged: boolean, flagId: UUID } }
    const [modal, setModal] = useState({ open: false, contentId: null, type: null, reason: "" });

    const user = useMemo(() => JSON.parse(localStorage.getItem("user")), []);
    
    
        useEffect(() => {
            if (!user) {
                setError("Please login to view full content of the posts.");
                setLoading(false);
                return;
            }
    
            loadQuestions();
        }, [user,id]);


    const loadQuestion = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/questions/getquestion/${id}`);
            const q = res.data.data;
            setQuestion(q);

            // check flag for question
            const questionFlag = await checkFlagStatus(q.id, "question");
            setFlagsStatus(prev => ({ ...prev, [q.id]: questionFlag }));

            // check flags for answers and feedbacks
            for (const answer of q.answerDto || []) {
                const answerFlag = await checkFlagStatus(answer.id, "answer");
                setFlagsStatus(prev => ({ ...prev, [answer.id]: answerFlag }));

                for (const fb of q.feedbacks?.filter(fb => fb.answerId === answer.id) || []) {
                    const fbFlag = await checkFlagStatus(fb.id, "feedback");
                    setFlagsStatus(prev => ({ ...prev, [fb.id]: fbFlag }));
                }
            }
        } catch {
            setError("Failed to fetch question.");
        } finally {
            setLoading(false);
        }
    };

    const checkFlagStatus = async (contentId, type) => {
        try {
            const params = {};
            if (type === "question") params.questionId = contentId;
            if (type === "answer") params.answerId = contentId;
            if (type === "feedback") params.feedbackId = contentId;

            const res = await api.get(`/flag/check/${user.id}`, { params });
            return { flagged: true, flagId: res.data.data.id };
        } catch {
            return { flagged: false, flagId: null };
        }
    };

    // -------------------- ANSWER HANDLERS --------------------
    const handleAnswerChange = (e) => setAnswerForm({ ...answerForm, [e.target.name]: e.target.value });

    const handleAnswerSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert("Please login to post an answer.");
        try {
            const payload = {
                id: answerForm.id || undefined,
                questionId: id,
                content: answerForm.content,
                answeredBy: user.id
            };
            if (answerForm.id) await api.put(`/answers/edit/answer/${user.id}`, payload);
            else await api.post(`/answers/post/answer/${user.id}`, payload);

            setAnswerForm({ content: "" });
            loadQuestion();
        } catch {
            alert("Failed to save answer.");
        }
    };

    const handleEditAnswer = (answer) => setAnswerForm({ content: answer.content, id: answer.id });
    const handleDeleteAnswer = async (answerId) => {
        if (!window.confirm("Are you sure you want to delete this answer?")) return;
        try {
            await api.delete(`/answers/delete/user/${user.id}/answer/${answerId}`);
            loadQuestion();
        } catch {
            alert("Failed to delete answer.");
        }
    };

    // -------------------- FEEDBACK HANDLERS --------------------
    const handleFeedbackChange = (answerId, value) => setFeedbackForms({ ...feedbackForms, [answerId]: value });

    const handleFeedbackSubmit = async (answerId, existingFeedback) => {
        if (!user) return alert("Please login to post feedback.");
        const value = feedbackForms[answerId]?.trim();
        if (!value) return;

        try {
            if (existingFeedback) {
                await api.put(`/feedback/update/feedback/${user.id}`, {
                    id: existingFeedback.id,
                    questionId: id,
                    answerId,
                    feedback: value,
                    givenBy: user.id
                });
            } else {
                await api.post(`/feedback/post/feedback/${user.id}`, {
                    questionId: id,
                    answerId,
                    feedback: value,
                    givenBy: user.id
                });
            }
            setFeedbackForms({ ...feedbackForms, [answerId]: "" });
            loadQuestion();
        } catch {
            alert("Failed to save feedback.");
        }
    };

    const handleDeleteFeedback = async (feedbackId) => {
        if (!window.confirm("Are you sure you want to delete this feedback?")) return;
        try {
            await api.delete(`/feedback/delete/${user.id}/${feedbackId}`);
            loadQuestion();
        } catch {
            alert("Failed to delete feedback.");
        }
    };

    // -------------------- FLAG HANDLERS --------------------
    const openFlagModal = (contentId, type) => setModal({ open: true, contentId, type, reason: "" });
    const closeFlagModal = () => setModal({ open: false, contentId: null, type: null, reason: "" });

    const handleFlagSubmit = async () => {
        if (!modal.reason.trim()) return alert("Please provide a reason");
        const payload = { flagedById: user.id, flagedRession: modal.reason };
        if (modal.type === "question") payload.flagedOnQuestionId = modal.contentId;
        if (modal.type === "answer") payload.flagedOnAnswerId = modal.contentId;
        if (modal.type === "feedback") payload.flagedOnFeedBackId = modal.contentId;

        try {
            const res = await api.post(`/flag/${user.id}`, payload);
            setFlagsStatus(prev => ({ ...prev, [modal.contentId]: { flagged: true, flagId: res.data.data?.id || null } }));
            closeFlagModal();
            loadQuestion();
            alert("Flagged successfully");
        } catch (err) {
            alert(err?.response?.data?.message || "Failed to flag");
        }
    };

    const handleUnflag = async (contentId) => {
        const flagId = flagsStatus[contentId]?.flagId;
        if (!flagId) return;
        try {
            await api.delete(`/flag/unflag/user/${user.id}/${flagId}`);
            setFlagsStatus(prev => ({ ...prev, [contentId]: { flagged: false, flagId: null } }));
            loadQuestion();
            alert("Unflagged successfully");
        } catch {
            alert("Failed to unflag");
        }
    };

    const getFeedbacksForAnswer = (answerId) => question.feedbacks?.filter(fb => fb.answerId === answerId) || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!question) return null;

    return (
        <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>

            {/* Question Title + Flag/Unflag */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>{question.title}</h2>
                {user && (
                    flagsStatus[question.id]?.flagged ?
                        <button onClick={() => handleUnflag(question.id)}>❌ Unflag</button> :
                        <button onClick={() => openFlagModal(question.id, "question")}>🚩 Flag</button>
                )}
            </div>

            <p>{question.description}</p>

            {/* Answer Form */}
            {user && (
                <form onSubmit={handleAnswerSubmit} style={{ marginBottom: "2rem" }}>
                    <textarea
                        name="content"
                        value={answerForm.content}
                        onChange={handleAnswerChange}
                        placeholder="Write your answer..."
                        required
                        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
                    />
                    <button type="submit" style={{ background: "#2563eb", color: "#fff", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
                        {answerForm.id ? "Update Answer" : "Post Answer"}
                    </button>
                </form>
            )}

            {/* Answers & Feedbacks */}
            <h3>Answers:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {question.answerDto?.map(answer => {
                    const feedbacks = getFeedbacksForAnswer(answer.id);
                    const isOwner = user?.id?.toString() === answer.answeredBy?.toString();
                    return (
                        <li key={answer.id} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1rem", marginBottom: "1rem" }}>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p><strong>{answer.answerByName}:</strong> {answer.content}</p>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    {isOwner && <button onClick={() => handleEditAnswer(answer)}>✏️</button>}
                                    {isOwner && <button onClick={() => handleDeleteAnswer(answer.id)}>🗑️</button>}
                                    {user && (
                                        flagsStatus[answer.id]?.flagged ?
                                            <button onClick={() => handleUnflag(answer.id)}>❌ Unflag</button> :
                                            <button onClick={() => openFlagModal(answer.id, "answer")}>🚩 Flag</button>
                                    )}
                                </div>
                            </div>

                            {/* Feedback Toggle */}
                            <button onClick={() => setOpenAnswerId(openAnswerId === answer.id ? null : answer.id)} style={{ background: "none", border: "none", color: "#2563eb", textDecoration: "underline", cursor: "pointer" }}>
                                💬 {feedbacks.length} Feedback{feedbacks.length !== 1 ? "s" : ""}
                            </button>

                            {openAnswerId === answer.id && (
                                <div style={{ marginTop: "0.5rem", paddingLeft: "1rem", borderLeft: "3px solid #2563eb" }}>
                                    {feedbacks.map(fb => {
                                        const isFbOwner = user?.id?.toString() === fb.givenBy?.toString();
                                        return (
                                            <div key={fb.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                                <p><strong>{fb.givenByName}:</strong> {fb.feedback}</p>
                                                <div style={{ display: "flex", gap: "5px" }}>
                                                    {isFbOwner && <button onClick={() => handleFeedbackSubmit(answer.id, fb)}>✏️</button>}
                                                    {isFbOwner && <button onClick={() => handleDeleteFeedback(fb.id)}>🗑️</button>}
                                                    {user && (
                                                        flagsStatus[fb.id]?.flagged ?
                                                            <button onClick={() => handleUnflag(fb.id)}>❌ Unflag</button> :
                                                            <button onClick={() => openFlagModal(fb.id, "feedback")}>🚩 Flag</button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {user && (
                                        <div>
                                            <textarea
                                                placeholder="Write feedback..."
                                                value={feedbackForms[answer.id] || ""}
                                                onChange={(e) => handleFeedbackChange(answer.id, e.target.value)}
                                                style={{ width: "100%", padding: "6px", borderRadius: "4px", marginBottom: "4px" }}
                                            />
                                            <button onClick={() => handleFeedbackSubmit(answer.id, null)}>Post</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* Flag Modal */}
            {modal.open && (
                <div style={{
                    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                    background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", width: "300px" }}>
                        <h3>Provide reason</h3>
                        <textarea value={modal.reason} onChange={e => setModal({ ...modal, reason: e.target.value })} style={{ width: "100%", height: "80px", marginBottom: "10px" }} />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button onClick={handleFlagSubmit}>Submit</button>
                            <button onClick={closeFlagModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
