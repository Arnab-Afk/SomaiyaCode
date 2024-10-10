import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Problems from "./Pages/Problems";
import Contest from "./Pages/Contest";
import Discuss from "./Pages/Discuss";
import InterviewPrep from "./Pages/InterviewPrep";
import Store from "./Pages/Store";
import CurrentProb from "./Pages/CurrentProb";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/store" element={<Store />} />
          <Route path="/currentProb" element={<CurrentProb />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
