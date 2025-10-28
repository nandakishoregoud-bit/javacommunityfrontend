import { Routes, Route } from "react-router-dom";
import StreamBasics from "./StreamBasics";
import StreamFilter from "./StreamFilter";
import StreamMap from "./StreamMap";
import StreamReduce from "./StreamReduce";
import StreamSorted from "./StreamSorted";
import StreamCollect from "./StreamCollect";
import StreamAdvancedOperations from "./StreamAdvancedOperations";
import StreamSummary from "./StreamSummary";

export default function Streams() {
    return (
        <Routes>
            <Route index element={<p>Welcome to Streams API! Select a subtopic from the sidebar.</p>} />
            <Route path="stream-basics" element={<StreamBasics />} />
            <Route path="stream-filter" element={<StreamFilter />} />
            <Route path="stream-map" element={<StreamMap />} />
            <Route path="stream-reduce" element={< StreamReduce />} />
            <Route path="stream-sorted" element={< StreamSorted />} />
            <Route path="stram-collect" element={< StreamCollect />} />
            <Route path="stream-advanced-operations" element={<StreamAdvancedOperations />} />
            <Route path="stream-summary" element={< StreamSummary />} />
        </Routes>  
    );
}
