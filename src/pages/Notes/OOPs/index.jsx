import { Routes, Route } from "react-router-dom";
import ClassObject from "./ClassesObjects";
import Inheritance from "./Inheritance";
import Encapsulation from "./Encapsulation";
import Polymorphism from "./Polymorphism";

export default function OOPs() {
    return (
        <Routes>
            <Route index element={<p>Welcome to OOPs Concepts! Select a subtopic from the sidebar.</p>} />
            <Route path="classes-objects" element={<ClassObject />} />
            <Route path="inheritance" element={<Inheritance />} />
            <Route path="encapsulation" element={<Encapsulation />} />
            <Route path="polymorphism" element={<Polymorphism />} />
        </Routes>
    );
}
