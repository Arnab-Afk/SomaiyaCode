import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
const ResumeCheckResult = () => {
  const location = useLocation();

  const { result } = location.state || {};
  let OverallScore = result.report["Overall Score"];
  if (!result) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-md">
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
    <div className="w-full p-8 bg-white shadow-sm rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Somaiya ATS</h2>

      <div className="mt-6 p-4 gap-4 text-white  flex flex-col rounded-md">
        <div className="flex flex-row gap-4 items-start">
          {/* Summary and Report Section */}
          <div className="flex flex-col w-[900px] gap-5">
            <div className="flex flex-col gap-2 rounded-md  bg-green-700 hover:cursor-pointer hover:p-4 transition: duration-500 p-5 ">
              <h3 className="text-3xl font-semibold">Summary:</h3>
              <p className="italic">{result.summary}</p>
            </div>
            <div className="flex flex-col gap-5">
              {/* <h3 className="text-3xl font-semibold">Report:</h3> */}
              <div className="flex flex-col gap-2 rounded-md  bg-green-700 hover:cursor-pointer hover:p-4 transition: duration-500 p-5">
                <p className="font-semibold ">Interpretation:</p>

                <p className="italic leading-tight">
                  {result.report.interpretation}
                </p>
              </div>
              <div className="flex flex-col rounded-md  bg-green-700 hover:cursor-pointer hover:p-4 transition: duration-500 p-5">
                <p className="text-white">
                  Overall Score:{" "}
                  <span className="font-semibold">
                    {result.report.overallScore}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Improvements Section */}
          <div className="hover:cursor-pointer hover:p-4 transition: duration-500 p-5 rounded-md bg-green-700 text-white shadow-sm">
            <h3 className="text-3xl font-semibold mb-4">Improvements</h3>
            <ul className="list-disc list-inside">
              {result.improvement.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 hover:cursor-pointer hover:p-4 transition: duration-500  bg-green-700 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Feedback</h3>
          <ul className="list-disc list-inside">
            {result.overallview.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Check Another Resume
        </Link>
      </div>
    </div>
  );
};

export default ResumeCheckResult;
