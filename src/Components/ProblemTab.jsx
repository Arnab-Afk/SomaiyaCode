import React from "react";

const ProblemTab = ({ onSelectProblem }) => {
  // Dummy data for the problems
  const problems = [
    {
      status: "Solved",
      title: "Two Sum",
      solution: "View Solution",
      acceptance: "45%",
      difficulty: "Easy",
      description: `
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

Example 3:
Input: nums = [3, 3], target = 6
Output: [0, 1]`,
    },
    {
      status: "Attempted",
      title: "Longest Substring Without Repeating Characters",
      solution: "View Solution",
      acceptance: "29%",
      difficulty: "Medium",
      description:
        "Given a string `s`, find the length of the longest substring without repeating characters.",
    },
    {
      status: "Unsolved",
      title: "Median of Two Sorted Arrays",
      solution: "View Solution",
      acceptance: "36%",
      difficulty: "Hard",
      description:
        "Given two sorted arrays `nums1` and `nums2` of size `m` and `n`, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    },
  ];

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
            {problems.map((problem, index) => (
              <tr
                key={index}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => onSelectProblem(problem)} // Call the passed function
              >
                <td className="px-4 py-2">{problem.status}</td>
                <td className="px-4 py-2">{problem.title}</td>
                <td className="px-4 py-2 text-blue-500">{problem.solution}</td>
                <td className="px-4 py-2">{problem.acceptance}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-white 
                      ${problem.difficulty === "Easy" ? "bg-green-500" : ""}
                      ${problem.difficulty === "Medium" ? "bg-yellow-500" : ""}
                      ${problem.difficulty === "Hard" ? "bg-red-500" : ""}
                    `}
                  >
                    {problem.difficulty}
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
