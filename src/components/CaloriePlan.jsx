import React from "react";

const CaloriePlan = (props) => {
    const { imgSrc, planName, planInfo, calorieGoal } = props;
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    const displayHidden = (
        <div className="CaloriePlan" onClick={handleClick}>
            <h3>{planName}</h3>
            <img src={imgSrc}/>
            <span>Click Here</span>
        </div>
    );

    const displayVisible = (
        <div className="CaloriePlan" onClick={handleClick}>
            <h4>{planName}</h4>
            <p>
                {planInfo}
                <br></br>
                <br></br>
                <strong>Aim for {calorieGoal} calories.</strong>
            </p>
        </div>
    );



    return <>{isClicked ? displayVisible : displayHidden}</>;
};

export default CaloriePlan;
