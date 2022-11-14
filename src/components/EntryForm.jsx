import React from "react";

const EntryForm = (props) => {
    return (
        <div className="EntryForm">
            <form>
                <div className="entry-form-tab">
                    <h4>New Entry</h4>
                    <span onClick={props.close}>X</span>
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
                <button type="button" onClick={props.handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EntryForm;
