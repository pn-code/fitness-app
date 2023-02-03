import React from "react";
import CaloriePlan from "../components/CaloriePlan";
import bulkIcon from "../images/bulk.svg";
import cutIcon from "../images/cut.svg";
import maintainIcon from "../images/maintain.svg";

const Calculator = () => {
    const [metric, setMetric] = React.useState(false);
    const [calories, setCalories] = React.useState(null);
    const [weight, setWeight] = React.useState(0);

    const handleChange = (e) => {
        setWeight(e.target.value);
    };

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

            <form className="flex flex-col gap-4 rounded-md">
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">
                        Find your starting point.
                    </span>
                    <div className="metric--container">
                        <button
                            className="bg-[#4b46c7] px-3 py-1 rounded-lg text-white hover:text-[#4b46c7] hover:bg-gray-200"
                            type="button"
                            onClick={changeMetric}
                        >
                            Change Units
                        </button>
                    </div>
                </div>

                {/* Weight Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="input">
                        Weight ({metric ? `in kilograms` : `in pounds`}):
                    </label>
                    <input
                        className="input-bl mb-3"
                        id="input"
                        placeholder={`weight in ${
                            metric ? "kilograms" : "pounds"
                        }`}
                        type="number"
                        onChange={handleChange}
                    />
                </div>

                {/* Age Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age:</label>
                    <input
                        className="input-bl"
                        id="age"
                        type="number"
                        placeholder="age"
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col mt-2 gap-2">
                    <span htmlFor="gender">Gender:</span>
                    <div className="flex gap-8">
                        <div className="flex items-center justify-center">
                            <input
                                id="gender-male"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Male</label>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                id="gender-female"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>
                </div>

                <button
                    className="calculate-btn"
                    type="button"
                    onClick={calculateCal}
                >
                    Calculate
                </button>
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
