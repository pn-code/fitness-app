import React from "react";
import "../styles/calculator.css";
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

    return (
        <div className="container">
            <h2 className="page-header">Calculator</h2>
            <main className="Calculator">
                <form className="calculator--form">
                    <nav className="calculator-change-nav">
                        {" "}
                        <h3 className="calculator-app-header">Calorie Calculator</h3>
                        <div className="metric--container">
                            <button
                                className="metric-btn"
                                type="button"
                                onClick={changeMetric}
                            >
                                {metric === true
                                    ? `Metric (kg)`
                                    : `Imperial (lb)`}
                            </button>
                        </div>
                    </nav>
                    <label className="weight--label">
                        Weight {metric ? "(kg)" : "(lb)"}:{" "}
                    </label>
                    <input
                        id="weight--input"
                        placeholder={`weight in ${
                            metric ? "kilograms" : "pounds"
                        }`}
                        type="number"
                        onChange={handleChange}
                    />
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
                                        Your daily calorie consumption required
                                        for maintenance is around {calories}{" "}
                                        calories.
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
                            To ensure adequate progress, make sure you are
                            actively monitoring your weight loss. Modify your
                            calorie plan to fit your current weight on at least
                            a monthly basis.
                            <br />
                            <br />
                            <strong>
                                Please consult your physician before making any
                                abrupt changes to your diet and exercise plan.
                                This is not medical advice...proceed at your own
                                risk.
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
                )}
            </main>
        </div>
    );
};

export default Calculator;
