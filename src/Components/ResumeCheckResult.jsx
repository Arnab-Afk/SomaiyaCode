import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResumeCheckResult = () => {
  const location = useLocation();

  const { result } = location.state || {};

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">No Result Found</h2>
        <div className="text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Go back to Resume Check
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Resume Fit Result</h2>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Summary:</h3>
        <p>{result.summary}</p>
        <p>{result.report}</p>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Check Another Resume
        </Link>
      </div>
    </div>
  );
};

export default ResumeCheckResult;
