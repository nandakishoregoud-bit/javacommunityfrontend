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
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import StreamReduce from "./pages/Notes/Streams/StreamReduce";
import StreamSorted from "./pages/Notes/Streams/StreamSorted";
import StreamCollect from "./pages/Notes/Streams/StreamCollect";
import StreamAdvancedOperations from "./pages/Notes/Streams/StreamAdvancedOperations";
import StreamSummary from "./pages/Notes/Streams/StreamSummary";
import JdbcIntroduction from "./pages/Notes/Jdbc/JdbcIntroduction";
import JdbcConnectionSetup from "./pages/Notes/Jdbc/JdbcConnectionSetup";
import JdbcDriverTypes from "./pages/Notes/Jdbc/JdbcDriverTypes";
import JdbcSqlBasics from "./pages/Notes/Jdbc/JdbcSqlBasics";
import JdbcStatements from "./pages/Notes/Jdbc/JdbcStatements";
import JdbcExecuteMethods from "./pages/Notes/Jdbc/JdbcExecuteMethods";
import JdbcHandlingResults from "./pages/Notes/Jdbc/JdbcHandlingResults";
import JdbcTransactions from "./pages/Notes/Jdbc/JdbcTransactions";
import JdbcBatchProcessing from "./pages/Notes/Jdbc/JdbcBatchProcessing";
import JdbcResultSet from "./pages/Notes/Jdbc/JdbcResultSet";
import JdbcDatabaseMetaData from "./pages/Notes/Jdbc/JdbcDatabaseMetaData";
import JdbcScrollableUpdatableResultSet from "./pages/Notes/Jdbc/JdbcScrollableUpdatableResultSet";
import JdbcHandlingLargeData from "./pages/Notes/Jdbc/JdbcHandlingLargeData";
import JdbcStoredProcedures from "./pages/Notes/Jdbc/JdbcStoredProcedures";
import JdbcProjectOverview from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectOverview";
import JdbcProjectRequirements from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectRequirements";
import JdbcProjectSetup from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectSetup";
import JdbcProjectModelAndDAO from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectModelAndDAO";
import JdbcProjectMenuInterface from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectMenuInterface";
import JdbcProjectExceptionHandling from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectExceptionHandling";
import JdbcProjectPackagingAndRunning from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectPackagingAndRunning";
import JdbcProjectSummary from "./pages/Notes/Jdbc/Jdbcproject/JdbcProjectSummary";

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />

            <Route path="/notes" element={<NotesLayout topic="javaTopics" />}>
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
              <Route path="streams/stream-reduce" element={<StreamReduce />} />
              <Route path="streams/stream-sorted" element={<StreamSorted />} />
              <Route path="streams/stream-collect" element={<StreamCollect />} />
              <Route path="streams/stream-advanced-operations" element={<StreamAdvancedOperations />} />
              <Route path="streams/stream-summary" element={<StreamSummary />} />

              
            </Route>
            <Route path="/notes/jdbc/*" element={<NotesLayout topic="jdbc" />}>
              <Route index element={<JavaHistory />} />
              <Route path="intro" element={< JdbcIntroduction />} />
              <Route path="connection" element={< JdbcConnectionSetup />} />
              <Route path="drivers" element={< JdbcDriverTypes />} />
              <Route path="sql-basics" element={< JdbcSqlBasics />} />
              <Route path="statement" element={< JdbcStatements />} />
              <Route path="execute-methods" element={< JdbcExecuteMethods />} />
              <Route path="results" element={< JdbcHandlingResults />} />
              <Route path="transactions" element={< JdbcTransactions />} />
              <Route path="batch" element={<JdbcBatchProcessing />} />
              <Route path="resultset" element={< JdbcResultSet />} />
              <Route path="databasemetadata" element={< JdbcDatabaseMetaData />} />
              <Route path="scrollable-updatable-resultset" element={< JdbcScrollableUpdatableResultSet />} />
              <Route path="handling-large-data" element={< JdbcHandlingLargeData />} />
              <Route path="stored-procedures" element={< JdbcStoredProcedures />} />
              <Route path="project-overview" element={<JdbcProjectOverview />} />
              <Route path="project-requriements" element={<JdbcProjectRequirements />} />
              <Route path="project-setup" element={< JdbcProjectSetup />} />
              <Route path="project-model-dao" element={< JdbcProjectModelAndDAO />} />
              <Route path="project-menu-interface" element={< JdbcProjectMenuInterface />} />
              <Route path="project-exception-handling" element={< JdbcProjectExceptionHandling />} />
              <Route path="project-packaging-running" element={< JdbcProjectPackagingAndRunning />} />
              <Route path="project-summary" element={< JdbcProjectSummary />} />
            </Route>
            
            
            <Route path="/notes/advanced-java/*" element={<NotesLayout topic="advanced-java" />} />
            <Route path="/notes/frameworks/*" element={<NotesLayout topic="frameworks" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
