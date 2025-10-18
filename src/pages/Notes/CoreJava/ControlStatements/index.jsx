import { Routes, Route } from "react-router-dom";
import ConditionalStatements from "./conditionalStatements";
import LoopingStatements from "./LoopingStatements";

export default function IndexControlStatements() {
    return (
        <Routes>
            <Route index element={<p>Select a subtopic: Conditional or Looping Statements.</p>} />
            <Route path="conditional-statements" element={<ConditionalStatements />} />
            <Route path="looping-statements" element={<LoopingStatements />} />
        </Routes>
    );
}
