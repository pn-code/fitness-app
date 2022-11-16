import React from "react";
import Popup from "reactjs-popup";

const EntryForm = (props) => {
    const { renderPlans } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Popup
            trigger={<button onClick={handleOpen}>Add Entry</button>}
            position="center center"
            modal
            open={isOpen}
            onOpen={handleOpen}
            content={<button onClick={handleClose}>X</button>}
        >
            <div className="EntryForm">
                <form>
                    <div className="entry-form-tab">
                        <h4>New Journal Entry</h4>
                        <span onClick={handleClose}>X</span>
                    </div>
                    <fieldset>
                        <label>Date: </label>
                        <input
                            type="date"
                            name="date"
                            onChange={props.handleChange}
                        />
                        <label>Exercise Plan: </label>
                        <select
                            name="exercisePlan"
                            onChange={props.handleChange}
                        >
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
                        <button
                            type="button"
                            onClick={() => {
                                props.handleSubmit();
                                handleClose();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {/* {(close) => (
            <EntryForm

            />
        )} */}
        </Popup>
    );
};

export default EntryForm;
