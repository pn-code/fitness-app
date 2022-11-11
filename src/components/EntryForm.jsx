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
                    <input type="date"/>
                    <label>Exercise Selection: </label>
                    <select>
                        <option>Hello World</option>
                    </select>
                    <label>Calorie Intake (kCal)</label>
                    <input type="number" placeholder="Enter Caloric Intake"/>
                    <label>Macronutrients: (Carbohydrates / Fat / Protein)</label>
                    <input type="text" placeholder="Carbohydrates / Fat / Protein"/>
                    <label>Notes: </label>
                    <textarea  cols="30" rows="10"></textarea>
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EntryForm;