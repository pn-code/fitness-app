import React from "react";

const CaloriePlan = (props) => {
    const { imgSrc, planName, planInfo, calorieGoal } = props;
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked((IsClicked) => !IsClicked);
    };

    return (
        <div className="h-72 sm:h-96 sm:bg-slate-700 sm:rounded-md">
            {!isClicked ? (
                <div
                    className="h-full w-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-800 hover:scale-110 duration-200 ease-in-out rounded-md"
                    onClick={handleClick}
                >
                    <h3 className="text-lg mt-4">{planName}</h3>
                    <div className="h-52 w-52 sm:w-32 sm:h-32">
                        <img src={imgSrc} />
                    </div>
                </div>
            ) : (
                <div
                    className="h-full w-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-800 hover:scale-110 duration-200 ease-in-out rounded-md"
                    onClick={handleClick}
                >
                    <h4 className="text-lg font-semibold mb-4">{planName}</h4>
                    <p>
                        {planInfo}
                        <br></br>
                        <br></br>
                        <span>GOAL: </span>
                        <span className="text-[#6d63f7]">
                            {calorieGoal} calories.
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default CaloriePlan;
