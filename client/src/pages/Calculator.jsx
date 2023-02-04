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

    const [cm, setCm] = useState("");
    const [lb, setLb] = useState("");
    const [kg, setKg] = useState("");
    const [feet, setFeet] = useState("");
    const [inch, setInch] = useState("");

    const handleSubmit = () => {
        if (gender == "male") {
            setCalories(10 * weight + 6.25 * height - 5 * age + 5);
        } else if (gender == "female") {
            setCalories(10 * weight + 6.25 * height - 5 * age - 161);
        }
    };

    const handleWeight = (e) => {
        if (e.target.name === "kg") {
            setKg(e.target.value);
            setWeight(e.target.value);
        } else if (e.target.name === "lb") {
            setLb(e.target.value);
            setWeight(Number(e.target.value) * 0.453592);
        }
    };

    const handleHeight = (e) => {
        if (e.target.name === "cm") {
            setCm(e.target.value);
            setHeight(e.target.value);
        } else if (e.target.name === "feet") {
            setFeet(e.target.value);
            setHeight((Number(e.target.value) * 12 + Number(inch)) * 2.54);
        } else if (e.target.name === "inch") {
            const total = Number(feet) * 12 + Number(e.target.value);
            setInch(e.target.value);
            setHeight(total * 2.54);
        }
    };

    const changeMetric = () => {
        setMetric((metric) => !metric);
    };

    console.log(calories);

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
                {metric ? (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="input">Weight in kilograms:</label>
                        <input
                            className="input-bl mb-3"
                            id="kg"
                            name="kg"
                            placeholder="weight in kg"
                            type="number"
                            onChange={(e) => handleWeight(e)}
                            value={kg}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="input">Weight in pounds</label>
                        <input
                            className="input-bl mb-3"
                            id="lb"
                            name="lb"
                            placeholder="weight in lb"
                            type="number"
                            onChange={(e) => handleWeight(e)}
                            value={lb}
                        />
                    </div>
                )}

                {/* Height Input */}
                {metric ? (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cm">Height (cm):</label>
                        <input
                            className="input-bl"
                            id="cm"
                            name="cm"
                            type="number"
                            placeholder="height in cm"
                            onChange={(e) => handleHeight(e)}
                            value={cm}
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
                                    onChange={(e) => handleHeight(e)}
                                    value={feet}
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
                                    onChange={(e) => handleHeight(e)}
                                    value={inch}
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

                <div className="flex flex-col sm:flex-row sm:gap-2">
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
                        onClick={handleSubmit}
                    >
                        Calculate
                    </button>
                </div>
            </form>
            {calories && (
                <div className="calculator--output">
                    {calories && (
                        <div className="flex flex-col justify-center items-center my-4 gap-2">
                            <h3 className="text-xl">Your Results: </h3>
                            <p>
                                Your daily calorie consumption required for
                                maintenance is around{" "}
                                <span className="text-[#FDCA15]">
                                    {parseInt(calories)} calories.
                                </span>
                            </p>
                        </div>
                    )}
                    {/* <h3>About</h3>
                    <h4>How </h4>
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
                    </p> */}
                    <h3 className="text-center mb-4 font-bold underline">Choose Your Calorie Plan Below. </h3>
                    <div className="bg-slate-700 rounded-lg p-5 mb-20">
                        <div className="flex flex-col justify-center">
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
                                calorieGoal={`${calories + 300}-${
                                    calories + 500
                                }`}
                            />
                            <CaloriePlan
                                imgSrc={cutIcon}
                                planName="Cut"
                                planInfo="If you wish to lose weight, you should remove
                                500 calories from your maintenance calories to
                                achieve approximately 1 pound per week."
                                calorieGoal={`${calories - 1000}-${
                                    calories - 500
                                }`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;
