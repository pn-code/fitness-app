import React from "react";

const Entry = (props) => {
    const { entryInfo } = props;
    console.log(entryInfo.id);

    return (
        <div className="Entry">
            <section className="date--container">
                <h4>{entryInfo.date}</h4>
            </section>
            <section className="diet--container">
                <div>Calorie Consumption: {entryInfo.calorieIntake} Cal</div>
                <div>Macronutrients (C/F/P): {entryInfo.macro}</div>
            </section>
            <section className="exercise--container">
                <div>Exercise Plan: {entryInfo.exercisePlan}</div>
            </section>
            <section className="notes--container">
                <div>Additional Notes: {entryInfo.notes}</div>
            </section>
            <button
                className={entryInfo.id}
                onClick={(e) => props.removeEntry(e)}
            >
                Remove
            </button>
        </div>
    );
};

export default Entry;
