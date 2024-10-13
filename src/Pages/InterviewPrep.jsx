import React from 'react';
import { Link } from 'react-router-dom';

const InterviewPrep = () => {
  const companies = [
    {
      name: 'KPMG',
      description: 'Resources for preparing interviews at KPMG.'
    },
    {
      name: 'Deloitte',
      description: 'Resources for preparing interviews at Deloitte.'
    },
    {
      name: 'Accenture',
      description: 'Resources for preparing interviews at Accenture.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Interview Prep Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.name} className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
            <p className="text-gray-700 mb-4">{company.description}</p>
            <Link
              to={`/company/${company.name}`}
              className="text-blue-600 hover:underline"
            >
              View Resources
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPrep;
