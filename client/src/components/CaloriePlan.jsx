import React from "react";

const CaloriePlan = (props) => {
    const { imgSrc, planName, planInfo, calorieGoal } = props;
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked((IsClicked) => !IsClicked);
    };

    return (
        <div className="h-72">
            {!isClicked ? (
                <div
                    className="h-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-110 duration-200 ease-in-out hover:text-black rounded-md"
                    onClick={handleClick}
                >
                    <h3 className="text-lg">{planName}</h3>
                    <img src={imgSrc} />
                </div>
            ) : (
                <div className="h-full flex flex-col py-2 px-4 justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-110 duration-200 ease-in-out hover:text-black rounded-md" onClick={handleClick}>
                    <h4 className="text-lg font-semibold mb-4">{planName}</h4>
                    <p>
                        {planInfo}
                        <br></br>
                        <br></br>
                        <span>GOAL: </span>
                        <span className="text-[#6d63f7]">{calorieGoal} calories.</span>
                        
                    </p>
                </div>
            )}
        </div>
    );
};

export default CaloriePlan;
