import { Routes, Route } from "react-router-dom";
import List from "./List";
import Set from "./Set";
import Map from "./Map";

export default function Collections() {
    return (
        <Routes>
            <Route index element={<p>Welcome to Collections Framework! Select a subtopic from the sidebar.</p>} />
            <Route path="list" element={<List />} />
            <Route path="set" element={<Set />} />
            <Route path="map" element={<Map />} />
        </Routes>
    );
}
