import React from "react";

const ContestOne = () => {
  return (
    <>
      <div className="flex flex-col gap-8 text-white w-full p-2 bg-gradient-to-r from-black/90 via-black/70 to-black/90">
        {/* Your content goes here */}
        <div className="ml-32">
          <button className="bg-white/20 p-1 pl-3 pr-3 mt-10 rounded-lg">
            Claim the secret reward
          </button>
        </div>
        <div className="flex flex-col items-center m-auto gap-4">
          <img src="cc.svg" className="w-40 " alt="" />
          <p className="text-2xl font-thin">
            <span className="font-medium">SomaiyaCode</span> Contest
          </p>
          <p className="text-sm mb-10 font-thin text-white/60">
            Contest every week. Compete and see your ranking
          </p>
        </div>
      </div>
    </>
  );
};

export default ContestOne;
