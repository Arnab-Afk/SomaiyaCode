import React from "react";

const PTabOne = () => {
  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-1 p-5  text-white bg-gradient-to-r from-green-900 to-green-700 rounded-lg w-[300px]">
          <p className="text-xl leading-tight">
            LeetCode Interview Crash Course:
          </p>
          <p className="text-white/50 text-xs">
            System Design For Interviews and Beyond
          </p>
          <button className="mt-4 bg-white p-2 w-[120px] text-sm text-green-800  rounded-lg">
            Start Learning
          </button>
        </div>
        <div className="flex flex-col gap-1 p-5  text-white bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg w-[300px]">
          <p className="text-xl leading-tight">
            LeetCode Interview Crash Course:
          </p>
          <p className="text-white/50 text-xs">
            System Design For Interviews and Beyond
          </p>
          <button className="mt-4 bg-white p-2 w-[120px] text-sm text-green-800  rounded-lg">
            Start Learning
          </button>
        </div>
        <div className="flex flex-col gap-1 p-5  text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg w-[300px]">
          <p className="text-xl leading-tight">
            LeetCode Interview Crash Course:
          </p>
          <p className="text-white/50 text-xs">
            System Design For Interviews and Beyond
          </p>
          <button className="mt-4 bg-white p-2 w-[120px] text-sm text-green-800  rounded-lg">
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default PTabOne;
