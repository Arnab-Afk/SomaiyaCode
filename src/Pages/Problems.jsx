import React, { useState } from "react";
import ProblemTab from "../Components/ProblemTab";
import PTabOne from "../Components/PTabOne";
import CurrentProb from "./CurrentProb";
const Problems = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <>
      <div className="m-10 lg:ml-32 lg:mr-32 flex flex-col ">
        <ProblemTab onSelectProblem={setSelectedProblem} />
        <CurrentProb problem={selectedProblem} />
      </div>
    </>
  );
};

export default Problems;
