import React from "react";

const Calculator = () => {
    const [metric, setMetric] = React.useState(false);
    const [calories, setCalories] = React.useState(0);
    const [weight, setWeight] = React.useState(0)

    const handleChange = (e) => {
        setWeight(e.target.value);
    }

    const calculateCal = () => {
        setCalories(() => metric === true ? Math.round(weight * 33.333333) : weight * 15);
    };

    console.log(metric)
    const changeMetric = () => {
        setMetric(metric => !metric)
    }

    return (
        <div className="container">
            <main className="Calculator">
                <div className="form--container">
                    <form>
                        <div>
                            <button type="button" onClick={changeMetric}>{metric === true ? `Metric (kg)` : `Imperial (lb)`}</button>
                        </div>
                        <label>Weight: </label>
                        <input placeholder="weight in pounds" type="number" onChange={handleChange}/>
                        <button type="button" onClick={calculateCal}>
                            Submit
                        </button>
                        <div className="calculator--output">
                            Your daily calorie consumption required for maintenance is around {calories} calories.
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Calculator;
