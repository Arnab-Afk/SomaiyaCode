import React from "react";
import axios from "axios";
const Bann = () => {
  const userData = localStorage.getItem("result");
  if (!userData) {
    window.location.href = "/resumecheck";
  }
  const handleClick = async () => {
   
    const reponse = await axios.post("https://resume-screening-3.onrender.com/inter", {
      prompt: userData,
    });
    console.log(reponse.data.questions);
    const questions = reponse.data.questions;
    localStorage.setItem("questions", JSON.stringify(questions));
    window.location.href = "/interview-questions";
  };
  
  return (
    <>
      <div
        className="flex flex-row h-[95vh] bg-cover bg-center bg-no-repeat w-full p-8 text-white"
        style={{ backgroundImage: `url('an.jpg')` }} // Replace 'bg.png' with your actual image path or URL
      >
        <div className="flex flex-col ml-32 mr-32 w-1/2 items-start gap-3 justify-center h-full text-center">
          <h1 className="text-5xl font-extrabold ">Company Based Resources</h1>
          <p className="text-lg w-2/3 text-left leading-tight font-light ">
            Use these available resources to guide your career path and make a
            better future.
          </p>
          <a href="/problems">
            <button className="outline-none bg-transparent border-white p-3 pl-8 pr-8 border-2 rounded-md transition: duration-500 hover:bg-white hover:text-black">
              Get Started
            </button>
          </a>
          
            <button onClick={handleClick}className="outline-none bg-transparent border-white p-3 pl-8 pr-8 border-2 rounded-md transition: duration-500 hover:bg-white hover:text-black">
              AI Interview Questions
            </button>
          
        </div>
      </div>
    </>
  );
};

export default Bann;
