import React from "react";
import "../styles/planner.css";

const Planner = (props) => {
    const { setSavedPlans, updateData } = props;
    const [plan, setPlan] = React.useState({});
    const API = "http://localhost:3000/plans";

    const handleChange = (e) => {
        setPlan((prevPlan) => {
            return { ...prevPlan, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        // Save to array
        setSavedPlans((prevSavedPlans) => [plan, ...prevSavedPlans]);
        // Reset Form
        setPlan({});
    };

    return (
        <div className="container">
            <span>The symbol * means that the input field is required.</span>
            <form action={API} method="POST">
                <div className="plan--header">
                    <label htmlFor="name">* Plan Name: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        minLength={8}
                        required
                    />

                    <label htmlFor="emphasis">* Emphasis: </label>
                    <input
                        id="emphasis"
                        name="emphasis"
                        type="text"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="plan--exercises">
                    <h4>Exercise 1</h4>
                    <label htmlFor="exercise1_name">* Exercise Name: </label>
                    <input
                        id="exercise1_name"
                        name="exercise1_name"
                        type="text"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="exercise1_sets">* Sets: </label>
                    <input
                        id="exercise1_sets"
                        name="exercise1_sets"
                        type="number"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="exercise1_reps">* Reps: </label>
                    <input
                        id="exercise1_reps"
                        name="exercise1_reps"
                        type="number"
                        onChange={handleChange}
                        required
                    />

                    <h4>Exercise 2</h4>
                    <label htmlFor="exercise2_name">Exercise Name: </label>
                    <input
                        id="exercise2_name"
                        name="exercise2_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise2_sets">Sets: </label>
                    <input
                        id="exercise2_sets"
                        name="exercise2_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise2_reps">Reps: </label>
                    <input
                        id="exercise2_reps"
                        name="exercise2_reps"
                        type="number"
                        onChange={handleChange}
                    />

                    <h4>Exercise 3</h4>
                    <label htmlFor="exercise3_name">Exercise Name: </label>
                    <input
                        id="exercise3_name"
                        name="exercise3_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise3_sets">Sets: </label>
                    <input
                        id="exercise3_sets"
                        name="exercise3_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise3_reps">Reps: </label>
                    <input
                        id="exercise3_reps"
                        name="exercise3_reps"
                        type="number"
                        onChange={handleChange}
                    />

                    <h4>Exercise 4</h4>
                    <label htmlFor="exercise1_name">Exercise Name: </label>
                    <input
                        id="exercise4_name"
                        name="exercise4_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise4_sets">Sets: </label>
                    <input
                        id="exercise4_sets"
                        name="exercise4_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise4_reps">Reps: </label>
                    <input
                        id="exercise4_reps"
                        name="exercise4_reps"
                        type="number"
                        onChange={handleChange}
                    />

                    <h4>Exercise 5</h4>
                    <label htmlFor="exercise5_name">Exercise Name: </label>
                    <input
                        id="exercise5_name"
                        name="exercise5_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise5_sets">Sets: </label>
                    <input
                        id="exercise5_sets"
                        name="exercise5_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise5_reps">Reps: </label>
                    <input
                        id="exercise5_reps"
                        name="exercise5_reps"
                        type="number"
                        onChange={handleChange}
                    />

                    <h4>Exercise 6</h4>
                    <label htmlFor="exercise6_name">Exercise Name: </label>
                    <input
                        id="exercise6_name"
                        name="exercise6_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise6_sets">Sets: </label>
                    <input
                        id="exercise6_sets"
                        name="exercise6_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise6_reps">Reps: </label>
                    <input
                        id="exercise6_reps"
                        name="exercise6_reps"
                        type="number"
                        onChange={handleChange}
                    />

                    <h4>Exercise 7</h4>
                    <label htmlFor="exercise7_name">Exercise Name: </label>
                    <input
                        id="exercise7_name"
                        name="exercise7_name"
                        type="text"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise7_sets">Sets: </label>
                    <input
                        id="exercise7_sets"
                        name="exercise7_sets"
                        type="number"
                        onChange={handleChange}
                    />
                    <label htmlFor="exercise7_reps">Reps: </label>
                    <input
                        id="exercise7_reps"
                        name="exercise7_reps"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div className="btn--container">
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Planner;
