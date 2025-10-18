import { Routes, Route } from "react-router-dom";
import DataTypes from "./DataTypes";
import Methods from "./Methods";
import ExceptionHandling from "./ExceptionHandling";
import IndexControlStatements from "./ControlStatements/index";

export default function CoreJava() {
    return (
        <Routes>
            <Route index element={<p>Welcome to Core Java! Select a subtopic from the sidebar.</p>} />
            <Route path="datatypes" element={<DataTypes />} />
            <Route path="control-statements/*" element={<IndexControlStatements />} />
            <Route path="methods" element={<Methods />} />
            <Route path="exception-handling" element={<ExceptionHandling />} />
        </Routes>
    );
}
