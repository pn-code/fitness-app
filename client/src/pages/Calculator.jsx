import React, { useState } from "react";
import CaloriePlan from "../components/CaloriePlan";
import bulkIcon from "../images/bulk.svg";
import cutIcon from "../images/cut.svg";
import maintainIcon from "../images/maintain.svg";

const Calculator = () => {
    const [metric, setMetric] = useState(false);
    const [calories, setCalories] = useState(null);

    // Input States
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [feet, setFeet] = useState("");
    const [inch, setInch] = useState("")

    const calculateCal = () => {
        if (
            (metric === true && weight < 40) ||
            (metric === false && weight < 50) ||
            (metric === true && weight > 400) ||
            (metric === false && weight > 800)
        ) {
            alert("Please enter a valid weight.");
        } else {
            setCalories(() =>
                metric === true ? Math.round(weight * 33.333333) : weight * 15
            );
        }
    };

    const changeMetric = () => {
        setMetric((metric) => !metric);
    };

    // The calculation is called the Mifflin-St Jeor equation, a formula that has been shown to be the most accurate way of estimating calorie needs in numerous studies by the ADA (American Dietetic Association).
    return (
        <div className="text-white mx-10 my-5 flex flex-col gap-2">
            {/* HEADER */}
            <div>
                <h2 className="text-xl font-bold">Calorie Calculator</h2>
            </div>

            <form className="flex flex-col gap-4 rounded-md justify-center items-center">
                <div className="flex flex-col justify-between items-center gap-2">
                    <span className="text-md font-semibold">
                        Find your starting point.
                    </span>
                </div>

                {/* Weight Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="input">
                        Weight ({metric ? `in kilograms` : `in pounds`}):
                    </label>
                    <input
                        className="input-bl mb-3"
                        id="weight"
                        name="weight"
                        placeholder={`weight in ${
                            metric ? "kilograms" : "pounds"
                        }`}
                        type="number"
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                    />
                </div>

                {/* Height Input */}

                {metric ? (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="height">Height (cm):</label>
                        <input
                            className="input-bl"
                            id="height"
                            name="height"
                            type="number"
                            placeholder="height"
                            onChange={(e) => setHeight(e.target.value)}
                            value={age}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <span>Height in Imperial Units</span>
                        <div className="flex gap-5">
                            <div>
                                <label htmlFor="inch">Feet:</label>
                                <input
                                    className="input-bl w-20"
                                    id="feet"
                                    name="feet"
                                    type="number"
                                    placeholder="feet"
                                    onChange={(e) => setFeet(e.target.value)}
                                    value={age}
                                />
                            </div>
                            <div>
                                <label htmlFor="inch">Inches:</label>
                                <input
                                    className="input-bl w-20"
                                    id="inch"
                                    name="inch"
                                    type="number"
                                    placeholder="inches"
                                    onChange={(e) => setInch(e.target.value)}
                                    value={age}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Age Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age:</label>
                    <input
                        className="input-bl"
                        id="age"
                        name="age"
                        type="number"
                        placeholder="age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col mt-2 gap-2 sm:w-[240px]">
                    <span htmlFor="gender">Gender:</span>
                    <div className="flex gap-8">
                        <div className="flex items-center justify-center">
                            <input
                                onChange={(e) => setGender(e.target.value)}
                                value="male"
                                id="gender-male"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Male</label>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                onChange={(e) => setGender(e.target.value)}
                                value="female"
                                id="gender-female"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        className="btn-blue-light"
                        type="button"
                        onClick={changeMetric}
                    >
                        Change Units
                    </button>
                    <button
                        className="btn-blue"
                        type="button"
                        onClick={calculateCal}
                    >
                        Calculate
                    </button>
                </div>
            </form>
            {calories && (
                <div className="calculator--output">
                    {calories && (
                        <div className="calculator--results">
                            <h3>Your Results: </h3>
                            <p>
                                <strong>
                                    Your daily calorie consumption required for
                                    maintenance is around {calories} calories.
                                </strong>
                            </p>
                        </div>
                    )}
                    <h3>About</h3>
                    <p>
                        This calorie calculator can be used to calculate the
                        daily calorie consumption a person needs to eat to
                        maintain, lose, or gain weight.
                    </p>
                    <h3>How can I use this information?</h3>
                    <p>
                        To ensure adequate progress, make sure you are actively
                        monitoring your weight loss. Modify your calorie plan to
                        fit your current weight on at least a monthly basis.
                        <br />
                        <br />
                        <strong>
                            Please consult your physician before making any
                            abrupt changes to your diet and exercise plan. This
                            is not medical advice...proceed at your own risk.
                        </strong>
                    </p>

                    <h3>Calorie Plans: </h3>
                    <div className="calorie-plans--container">
                        <CaloriePlan
                            imgSrc={maintainIcon}
                            planName="Maintain"
                            planInfo="If you feel that your weight is perfect as it
                            is, you should aim to hit your maintenance
                            calories."
                            calorieGoal={calories}
                        />
                        <CaloriePlan
                            imgSrc={bulkIcon}
                            planName="Bulk"
                            planInfo="If you'd like to gain some weight, you can add
                                300-500 calories to your daily calorie
                                consumption. It is not recommended, however, to
                                go overboard with your calorie surplus."
                            calorieGoal={`${calories + 300}-${calories + 500}`}
                        />
                        <CaloriePlan
                            imgSrc={cutIcon}
                            planName="Cut"
                            planInfo="If you wish to lose weight, you should remove
                                500 calories from your maintenance calories to
                                achieve approximately 1 pound per week."
                            calorieGoal={`${calories - 1000}-${calories - 500}`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;
