import { Routes, Route } from "react-router-dom";
import StreamBasics from "./StreamBasics";
import StreamFilter from "./StreamFilter";
import StreamMap from "./StreamMap";

export default function Streams() {
    return (
        <Routes>
            <Route index element={<p>Welcome to Streams API! Select a subtopic from the sidebar.</p>} />
            <Route path="stream-basics" element={<StreamBasics />} />
            <Route path="stream-filter" element={<StreamFilter />} />
            <Route path="stream-map" element={<StreamMap />} />
        </Routes>
    );
}
