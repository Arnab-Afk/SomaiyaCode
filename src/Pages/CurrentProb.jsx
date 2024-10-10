import React from "react";
import CodeEditor from "../Components/CodeEditor";

const CurrentProb = ({ problem }) => {
  if (!problem) {
    return null; // If no problem is selected, render nothing
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center gap-5">
          <button className="p-1 hover:bg hover:bg-gray-300 text-white pl-6 pr-6 bg-gray-400 rounded-lg">
            Run
          </button>
          <button className="p-1 hover:bg hover:bg-gray-300 text-white pl-6 pr-6 bg-gray-400 rounded-lg">
            Submit
          </button>
        </div>
        <div className="flex flex-row m-10 justify-between">
          <div className="flex flex-col bg-white shadow-sm rounded-lg p-2">
            <div className="flex flex-row pt-6">
              <button className="p-1 hover:bg hover:bg-gray-300 text-white pl-6 pr-6 bg-gray-400 rounded-lg">
                Description
              </button>
            </div>
            <div className="p-3 max-w-lg">
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
          <div className="">
            <CodeEditor />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentProb;
