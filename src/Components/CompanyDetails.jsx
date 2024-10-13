import React from "react";
import { useParams } from "react-router-dom";
import ProblemTab from "./ProblemTab";

const CompanyDetails = () => {
  const { name } = useParams();

  const companyData = {
    KPMG: {
      package: "₹12 LPA",
      conversionRate: "30%",
      interviewRounds: 3,
      pyq: "Link to KPMG Previous Year Questions",
      usefulLinks: "Useful links for KPMG Interview Preparation",
    },
    Deloitte: {
      package: "₹15 LPA",
      conversionRate: "25%",
      interviewRounds: 4,
      pyq: "Link to Deloitte Previous Year Questions",
      usefulLinks: "Useful links for Deloitte Interview Preparation",
    },
    Accenture: {
      package: "₹10 LPA",
      conversionRate: "35%",
      interviewRounds: 2,
      pyq: "Link to Accenture Previous Year Questions",
      usefulLinks: "Useful links for Accenture Interview Preparation",
    },
  };

  const company = companyData[name];

  if (!company) {
    return <p>Company not found</p>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-6">{name} Resources</h2>
        <p className="text-gray-700 mb-2">Package: {company.package}</p>
        <p className="text-gray-700 mb-2">
          Conversion Rate: {company.conversionRate}
        </p>
        <p className="text-gray-700 mb-2">
          Interview Rounds: {company.interviewRounds}
        </p>
        <p className="text-gray-700 mb-2">
          PYQ:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            {company.pyq}
          </a>
        </p>
        <p className="text-gray-700">
          Useful Links:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            {company.usefulLinks}
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <ProblemTab />
      </div>
    </>
  );
};

export default CompanyDetails;
