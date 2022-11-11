import React from "react";
import "../styles/calculator.css";

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
            (metric === false && weight < 80)
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
            <main className="Calculator">
                <div className="calculator--info">
                    <h2>Calorie Calculator</h2>
                </div>
                <div className="form--container">
                    <form>
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
                        <label className="weight--label">Weight: </label>
                        <input
                            id="weight--input"
                            placeholder="weight in pounds"
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
                        <div className="calculator--output">
                            {calories && (
                                <p>
                                    <strong>
                                        Your daily calorie consumption required
                                        for maintenance is around {calories}{" "}
                                        calories.
                                    </strong>
                                </p>
                            )}

                            <h3>How can I use this information?</h3>
                            <p>
                                This calorie calculator can be used to calculate the
                                daily calorie consumption a person needs to eat to
                                maintain, lose, or gain weight.
                            </p>

                            <div className="calorie-plan">
                                <h4>Maintenance</h4>
                                <p>
                                    If you feel that your weight is perfect as
                                    it is, you should aim to hit your
                                    maintenance calories.
                                    <br></br>
                                    <br></br>
                                    {calories && (
                                        <strong>
                                            Aim for {calories} calories.
                                        </strong>
                                    )}
                                </p>
                            </div>
                            <div className="calorie-plan">
                                <h4>Bulk</h4>
                                <p>
                                    Otherwise, if you'd like to gain some
                                    weight, you can add 300-500 calories to your
                                    daily calorie consumption. It is not
                                    recommended, however, to go overboard with
                                    your calorie surplus.
                                    <br></br>
                                    <br></br>
                                    {calories && (
                                        <strong>
                                            Aim for {calories + 300}-
                                            {calories + 500} calories.
                                        </strong>
                                    )}
                                </p>
                            </div>
                            <div className="calorie-plan">
                                <h4>Cut</h4>
                                <p>
                                    Last, but not least, if you wish to lose
                                    weight, you should remove 500 calories from
                                    your maintenance calories to achieve
                                    approximately 1 pound per week. Make sure
                                    you are monitoring your weight loss and
                                    increase the calorie deficit to match your
                                    desired rate of weight loss.
                                    <br></br>
                                    <br></br>
                                    {calories && (
                                        <strong>
                                            Aim for {calories - 1000}-
                                            {calories - 500} calories.
                                        </strong>
                                    )}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Calculator;
