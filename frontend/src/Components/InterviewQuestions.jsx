import React from 'react';

const InterviewQuestions = () => {
  const questions = JSON.parse(localStorage.getItem('questions'));
  console.log(questions);
  if (!questions) {
    window.location.href = '/interview-prep';
    return null;
  }

  return (
    <div>
      {/* Table of questions in Tailwind CSS */}
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Questions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {questions.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {item.question}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewQuestions;