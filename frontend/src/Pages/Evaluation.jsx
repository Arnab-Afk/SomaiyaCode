import React, { useEffect, useState } from 'react';

const Evaluation = ({reponse}) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const ans=JSON.parse(localStorage.getItem('interviewAnswer'));
  console.log(ans);
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions'));
    const storedAnswers = JSON.parse(localStorage.getItem('interviewAnswers'));
    if (storedQuestions && storedAnswers) {
      setQuestions(storedQuestions);
      setAnswers(storedAnswers);
    } else {
      console.log('No data available');
      console.log(ans);
    }
  }, []);
  
    
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Evaluation</h2>
      {questions.length === 0 ? (
        <p className="text-gray-600">No interview data found. Please complete the interview first.</p>
      ) : (
        ans.questions.map((question, index) => (
          <div key={index} className="bg-white shadow-md rounded w-full max-w-xl p-6 mb-4">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Question {index + 1}: {question.question}
            </h3>
            <b><p className="text-gray-700">Your Answer: {question.answer_given}</p></b>
            <p className="text-gray-700">{question.actual_answer}</p>
          </div>
        ))
      )}
      <h1>
        Final Score: {ans.score}
      </h1>
    </div>
  );
};

export default Evaluation;
