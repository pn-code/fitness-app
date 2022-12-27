import React from "react";

const Entry = (props) => {
    const { entryInfo, id, setEntries, API_URL } = props;

    const deleteEntry = async (id) => {
        // Remove from entries array
        setEntries((prevEntries) =>
            prevEntries.filter((entry) => id != entry._id)
        );
        // findAndDelete from db
        fetch(API_URL + id, {
            method: "DELETE",
            headers: { "Content-Type": "json/application" }
        })
    };

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
            <div className="btn--container">
                <button onClick={() => deleteEntry(id)}>Remove</button>
            </div>
        </div>
    );
};

export default Entry;
