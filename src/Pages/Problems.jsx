import React, { useState } from "react";
import ProblemTab from "../Components/ProblemTab";
import PTabOne from "../Components/PTabOne";
import CurrentProb from "./CurrentProb";
import StudyPlan from "../Components/StudyPlan";
const Problems = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <>
      <div className="m-10 lg:ml-10 lg:mr-10 flex flex-col ">
        <StudyPlan />
        <ProblemTab onSelectProblem={setSelectedProblem} />
        <CurrentProb problem={selectedProblem} />
      </div>
    </>
  );
};

export default Problems;
