import React, { useState } from "react";

const CaloriePlan = (props) => {
  const { imgSrc, planName, planInfo, calorieGoal, setPlan } = props;
  const [isClicked, setIsClicked] = useState(false);

  const setUserPlan = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <div className="h-72 sm:h-96 sm:bg-slate-700 sm:rounded-md">
      {!isClicked ? (
        <div
          className="h-full w-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-800 hover:scale-110 duration-200 ease-in-out rounded-md"
          onClick={setUserPlan}
        >
          <h3 className="text-lg mt-4">{planName}</h3>
          <div className="h-52 w-52 sm:w-32 sm:h-32">
            <img src={imgSrc} />
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-800 duration-200 ease-in-out rounded-md">
          <h4 className="text-lg font-semibold mb-4">{planName}</h4>
          <p>
            {planInfo}
            <br></br>
            <br></br>
            <span>GOAL: </span>
            <span className="text-[#6d63f7]">{calorieGoal} calories.</span>
          </p>
          <button onClick={setPlan} className="btn-blue" type="button">
            Set Plan
          </button>
        </div>
      )}
    </div>
  );
};

export default CaloriePlan;
