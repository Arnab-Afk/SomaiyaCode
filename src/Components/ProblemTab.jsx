import React from "react";
import problem from "./problem"; // Adjust the path as necessary

const ProblemTab = ({ onSelectProblem }) => {
  return (
    <div className="p-10">
      {/* Problem list */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Solution</th>
              <th className="px-4 py-2">Acceptance</th>
              <th className="px-4 py-2">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problem.map((prob, index) => (
              <tr
                key={index}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => onSelectProblem(prob)} // Call the passed function
              >
                <td className="px-4 py-2">{prob.status}</td>
                <td className="px-4 py-2">{prob.title}</td>
                <td className="px-4 py-2 text-blue-500">{prob.solution}</td>
                <td className="px-4 py-2">{prob.acceptance}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-white 
                      ${prob.difficulty === "Easy" ? "bg-green-500" : ""}
                      ${prob.difficulty === "Medium" ? "bg-yellow-500" : ""}
                      ${prob.difficulty === "Hard" ? "bg-red-500" : ""}
                    `}
                  >
                    {prob.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemTab;
