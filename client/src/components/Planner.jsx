import React from "react";
import { useState } from "react";
import "../styles/planner.css";

const Planner = (props) => {
    const { setSavedPlans, updateData } = props;
    const [formPage, setFormPage] = useState(0);
    const [plan, setPlan] = useState({});
    
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
        <div className="flex flex-col gap-3 text-lg">
            <span className="text-red-400">
                The symbol * means that the input field is required.
            </span>
            <form
                className="flex flex-col gap-4 items-start justify-start sm:items-center sm:justify-center bg-transparent"
                action={API}
                method="POST"
            >
                <div>
                    <label htmlFor="name">* Plan Name: </label>
                    <input
                        className="input-bl"
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        minLength={8}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emphasis">* Emphasis: </label>
                    <input
                        className="input-bl"
                        id="emphasis"
                        name="emphasis"
                        type="text"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="btn--container">
                    <button
                        className="btn-blue"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Planner;
