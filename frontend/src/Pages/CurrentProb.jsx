import React from "react";
import CodeEditor from "../Components/CodeEditor";
import CodeAnalyzer from "../Components/CodeAnalyzer";

const CurrentProb = ({ problem }) => {
  if (!problem) {
    return null; // If no problem is selected, render nothing
  }

  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex flex-col ml-32 mr-32  justify-between">
          <div className="flex flex-col bg-white p-3 shadow-md rounded-lg ">
            <div className="p-3">
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {problem.title}
              </h1>

              {/* Difficulty */}
              <p className="text-sm font-semibold mb-4">
                Difficulty:
                <span
                  className={`inline-block ml-2 px-2 py-1 rounded-full text-white 
                  ${problem.difficulty === "Easy" ? "bg-green-500" : ""}
                  ${problem.difficulty === "Medium" ? "bg-yellow-500" : ""}
                  ${problem.difficulty === "Hard" ? "bg-red-500" : ""}
                  `}
                >
                  {problem.difficulty}
                </span>
              </p>

              {/* Description */}
              <p className="text-gray-800">{problem.description}</p>
            </div>
          </div>
          <div className="mt-10">
            <CodeEditor />
          </div>
          {/* <div className="">
            <CodeAnalyzer />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CurrentProb;
