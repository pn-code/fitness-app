import React from "react";

const EntryForm = (props) => {
    const [entry, setEntry] = React.useState({
        date: null,
        plan: null,
        calories: null,
        macros: null,
        notes: null,
    });

    const handleChange = (e) => {
        setEntry((prevEntry) => {
            return { ...prevEntry, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="EntryForm">
            <form>
                <div className="entry-form-tab">
                    <h4>New Journal Entry</h4>
                </div>
                <fieldset>
                    <label htmlFor="date">Date: </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleChange}
                        value={entry.date}
                        required
                    />
                    <label htmlFor="plan">Exercise Plan: </label>
                    <select
                        id="plan"
                        name="plan"
                        onChange={handleChange}
                        value={entry.plan}
                    >
                        <option>NONE</option>
                    </select>
                    <label htmlFor="calories">Calorie Intake (kCal)</label>
                    <input
                        type="number"
                        id="calories"
                        name="calories"
                        onChange={handleChange}
                        placeholder="Enter Caloric Intake"
                        value={entry.calories}
                        required
                    />
                    <label htmlFor="macros">
                        Macronutrients: (Carbohydrates / Fat / Protein)
                    </label>
                    <input
                        type="text"
                        id="macros"
                        name="macros"
                        onChange={handleChange}
                        placeholder="Carbohydrates / Fat / Protein"
                        value={entry.macros}
                    />
                    <label id="notes">Notes: </label>
                    <textarea
                        id="notes"
                        cols="30"
                        rows="10"
                        name="notes"
                        onChange={handleChange}
                        value={entry.notes}
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
