import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyQuestions from "./pages/MyQuestions";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import NotesLayout from "./pages/Notes/NotesLayout";
import CoreJavaIndex from "./pages/Notes/CoreJava/index";
import DataTypes from "./pages/Notes/CoreJava/DataTypes";
import Methods from "./pages/Notes/CoreJava/Methods";
import ExceptionHandling from "./pages/Notes/CoreJava/ExceptionHandling";
import OOPsIndex from "./pages/Notes/OOPs/index";
import ClassesObjects from "./pages/Notes/OOPs/ClassesObjects";
import Inheritance from "./pages/Notes/OOPs/Inheritance";
import Polymorphism from "./pages/Notes/OOPs/Polymorphism";
import Encapsulation from "./pages/Notes/OOPs/Encapsulation";
import StreamsIndex from "./pages/Notes/Streams/index";
import StreamBasics from "./pages/Notes/Streams/StreamBasics";
import StreamFilter from "./pages/Notes/Streams/StreamFilter";
import StreamMap from "./pages/Notes/Streams/StreamMap";
import CollectionsIndex from "./pages/Notes/Collections/index";
import List from "./pages/Notes/Collections/List";
import Set from "./pages/Notes/Collections/Set";
import Map from "./pages/Notes/Collections/Map";
import ConditionalStatements from "./pages/Notes/CoreJava/ConditionalStatements";
import LoopingStatements from "./pages/Notes/CoreJava/LoopingStatements";
import JavaHistory from "./pages/Notes/JavaHistory";
import InstallJava from "./pages/Notes/java/InstallJava";
import FirstJavaProgram from "./pages/Notes/java/FirstJavaProgram";
import MainMethodAndArgs from "./pages/Notes/java/MainMethodAndArgs";
import InputOutputInJava from "./pages/Notes/java/InputOutputInJava";
import TypeCastingVariablesConstants from "./pages/Notes/CoreJava/TypeCastingVariablesConstants";
import Operators from "./pages/Notes/CoreJava/Operators";
import ArraysInJava from "./pages/Notes/Arrays/ArraysInJava";
import Queue from "./pages/Notes/Collections/Queue";
import Stack from "./pages/Notes/Collections/Stack";


export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flexGrow: 1, padding: "2rem", background: "#f3f4f6" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/questions" element={<Questions />} />
            <Route path="/questions/:id" element={<QuestionDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-questions" element={<MyQuestions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/notes" element={<NotesLayout />}>
              <Route index element={<JavaHistory />} />

              <Route path="java/installjava" element={< InstallJava />} />
              <Route path="java/history" element={< JavaHistory />} />
              <Route path="java1/firstjavaprogram" element={< FirstJavaProgram />} />
              <Route path="java1/mainmethodandargs" element={< MainMethodAndArgs />} />
              <Route path="java1/inputoutput" element={< InputOutputInJava />} />

              {/* Core Java */}
              <Route path="core-java" element={<CoreJavaIndex />} />
              <Route path="core-java/datatypes" element={<DataTypes />} />
              <Route path="core-java/conditional-statements" element={<ConditionalStatements />} />
              <Route path="core-java/looping-statements" element={<LoopingStatements />} />

              <Route path="core-java/methods" element={<Methods />} />
              <Route path="core-java/exception-handling" element={<ExceptionHandling />} />
              <Route path="core-java/type-casting" element={<TypeCastingVariablesConstants />} />
              <Route path="core-java/operators" element={< Operators />} />

              <Route path="arrays/arraysinjava" element={< ArraysInJava />} />

              {/* OOPs */}
              <Route path="oops" element={<OOPsIndex />} />
              <Route path="oops/classes-objects" element={<ClassesObjects />} />
              <Route path="oops/inheritance" element={<Inheritance />} />
              <Route path="oops/polymorphism" element={<Polymorphism />} />
              <Route path="oops/encapsulation" element={<Encapsulation />} />

              <Route path="collections" element={<CollectionsIndex />} />
              <Route path="collections/list" element={<List />} />
              <Route path="collections/set" element={<Set />} />
              <Route path="collections/map" element={<Map />} />
              <Route path="collections/queue" element={<Queue />} />
              <Route path="collections/stack" element={<Stack />} />


              {/* Streams */}
              <Route path="streams" element={<StreamsIndex />} />
              <Route path="streams/stream-basics" element={<StreamBasics />} />
              <Route path="streams/stream-filter" element={<StreamFilter />} />
              <Route path="streams/stream-map" element={<StreamMap />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
