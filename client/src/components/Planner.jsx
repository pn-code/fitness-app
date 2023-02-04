import React from "react";
import { useState } from "react";
import "../styles/planner.css";

const Planner = (props) => {
    const { setSavedPlans, updateData } = props;

    // Page State
    const [formPage, setFormPage] = useState(0);

    // Plan States
    const [planTitle, setPlanTitle] = useState("");
    const [planEmphasis, setPlanEmphasis] = useState("");

    // Exercise States
    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const API = "http://localhost:3000/plans";

    const handleExercise = () => {};

    const handleChange = (e) => {
        setPlan((prevPlan) => {
            return { ...prevPlan, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        if (formPage < 3) {
            setFormPage((page) => page + 1);
        } else {
            // Save to array
            setSavedPlans((prevSavedPlans) => [plan, ...prevSavedPlans]);
            // Reset Form
            setPlan({});
        }
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
                {/* PAGE #1 */}
                {formPage === 0 && (
                    <>
                        <div>
                            <label htmlFor="title">* Plan Title: </label>
                            <input
                                className="input-bl"
                                id="title"
                                name="title"
                                type="text"
                                onChange={(e) => setPlanTitle(e.target.value)}
                                value={planTitle}
                                minLength={4}
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
                                minLength={4}
                                onChange={(e) =>
                                    setPlanEmphasis(e.target.value)
                                }
                                value={planEmphasis}
                                required
                            />
                        </div>
                    </>
                )}

                {formPage === 1 && (
                    <>
                        <div>
                            <label htmlFor="name">Exercise Name: </label>
                            <input
                                className="input-bl-lg"
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                minLength={8}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="sets">Sets: </label>
                            <input
                                className="input-bl"
                                id="sets"
                                name="sets"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required
                                value={sets}
                            />
                        </div>
                        <div>
                            <label htmlFor="reps">Reps: </label>
                            <input
                                className="input-bl"
                                id="reps"
                                name="reps"
                                type="text"
                                onChange={(e) => setReps(e.target.value)}
                                required
                                value={reps}
                            />
                        </div>
                    </>
                )}

                <div className="flex flex-row gap-2">
                    {formPage == 1 && (
                        <button
                            className="btn-blue-light"
                            type="button"
                            onClick={handleExercise}
                        >
                            Add Exercise
                        </button>
                    )}
                    <button
                        className="btn-blue"
                        type="button"
                        onClick={handleSubmit}
                    >
                        {formPage < 3 ? "Next" : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Planner;
