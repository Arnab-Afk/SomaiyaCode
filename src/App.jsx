import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Problems from "./Pages/Problems";
import Contest from "./Pages/Contest";
import Discuss from "./Pages/Discuss";
import InterviewPrep from "./Pages/InterviewPrep";
import Store from "./Pages/Store";
import CurrentProb from "./Pages/CurrentProb";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import ClipLoader from "react-spinners/ClipLoader";
import CompanyDetails from "./Components/CompanyDetails";
import ResumeCheck from "./Pages/ResumeCheck";
import ResumeCheckResult from "./Components/ResumeCheckResult";
import AiInterview from "./Pages/AiInterview"
import Assessment from "./Pages/Assessment";

function App() {
  // const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <ClipLoader
  //         size={150}
  //         color={"#4A90E2"}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //       />
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  //       <h1 className="text-4xl font-bold mb-4">
  //         Please Login to Access the App
  //       </h1>
  //       <LoginButton />
  //     </div>
  //   );
  // }

  return (
    <>
      <Router>
        <Navbar />
        {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <Profile />
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div> */}

        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/company/:name" element={<CompanyDetails />} />
            <Route path="/store" element={<Store />} />
            <Route path="/currentProb" element={<CurrentProb />} />
            <Route path="/resumecheck" element={<ResumeCheck />} />
            <Route path="/aiinterview" element={<AiInterview />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resumecheckresult" element={<ResumeCheckResult />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
