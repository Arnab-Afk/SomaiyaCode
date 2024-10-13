import React, { useState } from "react";
import problem from "./problem"; // Import your problem data

const ProblemTab = ({ onSelectProblem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("C");

  // Handle view solution button click
  const handleViewSolution = (prob) => {
    setSelectedProblem(prob);
    setSelectedLanguage("C"); // Default to C
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // setSelectedProblem(null);
  };

  // Handle language selection change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleClick = (prob) => {
    onSelectProblem(prob); // Pass selected problem to parent component
  };
  return (
    <div className="p-10">
      {/* Problem list */}
      <p>
        {" "}
        <p className="text-2xl">Most asked Problems</p>
      </p>
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
              >
                <td className="px-4 py-2">{prob.status}</td>
                <td className="px-4 py-2" onClick={() => handleClick(prob)}>
                  {prob.title}
                </td>
                <td className="px-4 py-2 text-blue-500">
                  <button onClick={() => handleViewSolution(prob)}>
                    View Solution
                  </button>
                </td>
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

      {/* Modal for viewing solution */}
      {isModalOpen && selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg w-[900px] h-5/6 overflow-y-auto p-6">
            <h2 className="text-xl font-bold mb-4">
              {selectedProblem.title} - Solution
            </h2>

            {/* Language selector */}
            <div className="mb-4">
              <label htmlFor="language" className="block font-medium mb-2">
                Select Language:
              </label>
              <select
                id="language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full border px-3 py-2 rounded-lg"
              >
                {Object.keys(selectedProblem.solutions).map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Solution code */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Code:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                <code>{selectedProblem.solutions[selectedLanguage].code}</code>
              </pre>
            </div>

            {/* Solution output */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Output:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
                <code>
                  {selectedProblem.solutions[selectedLanguage].output}
                </code>
              </pre>
            </div>

            {/* Close button */}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemTab;
