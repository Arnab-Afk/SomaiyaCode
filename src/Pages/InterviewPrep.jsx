import React from 'react';

const InterviewPrep = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">Interview Prep Resources</h1>

      {/* Resources Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Resource Cards */}
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">KPMG</h3>
            <p className="text-gray-700 mb-4">Resources for preparing interviews at KPMG.</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Resources
            </a>
          </div>
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Deloitte</h3>
            <p className="text-gray-700 mb-4">Resources for preparing interviews at Deloitte.</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Resources
            </a>
          </div>
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Accenture</h3>
            <p className="text-gray-700 mb-4">Resources for preparing interviews at Accenture.</p>
            <a href="#" className="text-blue-600 hover:underline">
              View Resources
            </a>
          </div>
        </div>
      </div>

      {/* Company Details Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Company Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Company Cards */}
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">KPMG</h3>
            <p className="text-gray-700 mb-2">Package: ₹12 LPA</p>
            <p className="text-gray-700 mb-2">Conversion Rate: 30%</p>
            <p className="text-gray-700">Interview Rounds: 3</p>
          </div>
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Deloitte</h3>
            <p className="text-gray-700 mb-2">Package: ₹15 LPA</p>
            <p className="text-gray-700 mb-2">Conversion Rate: 25%</p>
            <p className="text-gray-700">Interview Rounds: 4</p>
          </div>
          <div className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Accenture</h3>
            <p className="text-gray-700 mb-2">Package: ₹10 LPA</p>
            <p className="text-gray-700 mb-2">Conversion Rate: 35%</p>
            <p className="text-gray-700">Interview Rounds: 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
