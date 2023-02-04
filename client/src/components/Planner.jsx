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
    const [desc, setDesc] = useState("");

    // Exercise States
    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const [exercises, setExercises] = useState([]);

    const API = "http://localhost:3000/plans";

    const handleExercise = () => {
        const exercise = {
            name,
            sets,
            reps,
        };
        setExercises((exercises) => [...exercises, exercise]);
        setName("");
        setSets("");
        setReps("");
    };

    const handleSubmit = (e) => {
        if (formPage < 2) {
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

            <form className="flex flex-col gap-4 items-start justify-start sm:items-center sm:justify-center bg-transparent">
                {/* PAGE #1 */}
                {formPage === 0 && (
                    <>
                        <div>
                            <label htmlFor="title">* Plan Title: </label>
                            <input
                                className="input-bl w-60"
                                id="title"
                                name="title"
                                type="text"
                                onChange={(e) => setPlanTitle(e.target.value)}
                                value={planTitle}
                                minLength={4}
                                required
                                placeholder="Plan Title"
                            />
                        </div>
                        <div>
                            <label htmlFor="emphasis">* Emphasis: </label>
                            <input
                                className="input-bl w-60"
                                id="emphasis"
                                name="emphasis"
                                type="text"
                                minLength={4}
                                onChange={(e) =>
                                    setPlanEmphasis(e.target.value)
                                }
                                value={planEmphasis}
                                required
                                placeholder="Emphasis"
                            />
                        </div>
                        <div>
                            <label htmlFor="desc">Description</label>
                            <textarea
                                className="rounded-md text-black px-2 py-1 w-60"
                                name="desc"
                                id="desc"
                                cols="30"
                                rows="10"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                                placeholder="Enter a description"
                                maxLength={200}
                            ></textarea>
                        </div>
                    </>
                )}
                {/* PAGE 2 */}
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
                                value={name}
                            />
                        </div>
                        <div>
                            <label htmlFor="sets">Sets: </label>
                            <input
                                className="input-bl"
                                id="sets"
                                name="sets"
                                type="text"
                                onChange={(e) => setSets(e.target.value)}
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
                        <button
                            className="btn-blue-light"
                            type="button"
                            onClick={handleExercise}
                        >
                            Add Exercise
                        </button>
                    </>
                )}

                {/* PAGE #3 */}
                {formPage === 2 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">Title:</h2>
                            <span>{planTitle}</span>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">
                                Emphasis:{" "}
                            </h2>
                            <span>{planTitle}</span>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">
                                Description:{" "}
                            </h2>
                            <p>{desc}</p>
                        </div>

                        <ul className="flex flex-col">
                            <h2 className="text-xl font-semibold">
                                Exercise List:
                            </h2>
                            {exercises.map((exercise) => (
                                <li>
                                    <h5>{exercise.name}</h5>
                                    <span>
                                        {exercise.sets} sets of {exercise.reps}{" "}
                                        reps
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    {(formPage == 1 || formPage == 2) && (
                        <button
                            className="btn-blue"
                            type="button"
                            onClick={() => setFormPage((page) => page - 1)}
                        >
                            Back
                        </button>
                    )}
                    <button
                        className="btn-blue"
                        type="button"
                        onClick={handleSubmit}
                    >
                        {formPage < 2 ? "Next" : "Submit"}
                    </button>
                </div>

                {/* Exercises */}
                {formPage == 1 && exercises.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-5">
                        <h2 className="text-xl font-semibold">
                            Exercise List:
                        </h2>
                        {exercises.map((exercise) => (
                            <li>
                                <h5>{exercise.name}</h5>
                                <span>
                                    {exercise.sets} sets of {exercise.reps} reps
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default Planner;
