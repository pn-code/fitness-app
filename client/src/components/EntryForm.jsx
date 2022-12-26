import React from "react";

const EntryForm = (props) => {
    const { renderPlans } = props;

    return (
        <div className="EntryForm">
            <form>
                <div className="entry-form-tab">
                    <h4>New Journal Entry</h4>
                </div>
                <fieldset>
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        onChange={props.handleChange}
                    />
                    <label>Exercise Plan: </label>
                    <select name="exercisePlan" onChange={props.handleChange}>
                        <option>NONE</option>
                        {renderPlans}
                    </select>
                    <label>Calorie Intake (kCal)</label>
                    <input
                        type="number"
                        name="calorieIntake"
                        onChange={props.handleChange}
                        placeholder="Enter Caloric Intake"
                    />
                    <label>
                        Macronutrients: (Carbohydrates / Fat / Protein)
                    </label>
                    <input
                        type="text"
                        name="macro"
                        onChange={props.handleChange}
                        placeholder="Carbohydrates / Fat / Protein"
                    />
                    <label>Notes: </label>
                    <textarea
                        cols="30"
                        rows="10"
                        name="notes"
                        onChange={props.handleChange}
                    ></textarea>
                </fieldset>
                <div className="btn--container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EntryForm;
