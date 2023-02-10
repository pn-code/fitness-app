import axios from "axios";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import barbellImg from "../images/barbell.jpg";

const PlannerPage = ({
    user,
    savedPlans,
    setSavedPlans,
    fetchPlans,
    renderPlanner,
    setRenderPlanner,
}) => {
    // Page State
    const [formPage, setFormPage] = useState(0);

    // Plan States
    const [title, setTitle] = useState("");
    const [emphasis, setEmphasis] = useState("");
    const [desc, setDesc] = useState("");

    // Exercise States
    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const [exercises, setExercises] = useState([]);

    const API_URL = "https://fitness-zp5c.onrender.com/plans";

    const handleExercise = () => {
        const exercise = {
            id: uuidv4(),
            name,
            sets,
            reps,
        };
        setExercises((exercises) => [...exercises, exercise]);
        setName("");
        setSets("");
        setReps("");
    };

    const handleSubmit = async () => {
        // Handle Page Increments
        if (formPage < 2) {
            setFormPage((page) => page + 1);
        } else {
            // Submit information to DB
            try {
                const plan = {
                    title,
                    emphasis,
                    desc,
                    exercises,
                    userId: user._id,
                };

                await axios.post(API_URL, plan, { withCredentials: true });

                // Save to array (Client-Sided Render)
                setSavedPlans((prevSavedPlans) => [plan, ...prevSavedPlans]);

                // Reset Form
                setTitle("");
                setEmphasis("");
                setDesc("");
                setExercises([]);
                setFormPage(0);

                fetchPlans();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const deleteExercise = (id) => {
        const updatedExercises = exercises.filter(
            (exercise) => exercise.id !== id
        );
        setExercises(updatedExercises);
    };

    return (
        <div className="flex justify-center gap-10 mb-6 text-white mx-10 my-5 sm:mt-16">
            {/* LEFT SIDE */}
            <div className="hidden lg:flex flex-col gap-2">
                <img
                    className="object-cover max-w-[460px] rounded-lg"
                    src={barbellImg}
                    alt="barbell in the sunlight"
                />
                <span className="text-center my-2">
                    Image by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                        href="https://unsplash.com/@eduardocanophotoco"
                    >
                        Eduardo Cano
                    </a>
                </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-3 text-lg h-[720px] rounded-lg px-8 py-5 bg-gray-700">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold">New Plan</h2>
                    <button
                        className="btn-blue-light mt-0"
                        onClick={() =>
                            setRenderPlanner(
                                (prevRenderPlanner) => !prevRenderPlanner
                            )
                        }
                    >
                        {!renderPlanner
                            ? `Create New Plan`
                            : `My Plans: ${savedPlans.length}`}
                    </button>
                </div>

                <span className="text-red-400">
                    The symbol * means that the input field is required.
                </span>

                <form className="flex flex-col gap-4 w-80 sm:w-96">
                    {/* PAGE #1 */}
                    {formPage === 0 && (
                        <>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title">* Plan Title: </label>
                                <input
                                    className="input-bl w-72 sm:w-96"
                                    id="title"
                                    name="title"
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    minLength={4}
                                    required
                                    placeholder="Plan Title"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="emphasis">* Emphasis: </label>
                                <input
                                    className="input-bl w-72 sm:w-96"
                                    id="emphasis"
                                    name="emphasis"
                                    type="text"
                                    minLength={4}
                                    onChange={(e) =>
                                        setEmphasis(e.target.value)
                                    }
                                    value={emphasis}
                                    required
                                    placeholder="Emphasis"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="desc">Description</label>
                                <textarea
                                    className="rounded-md text-black px-2 py-1 w-72 sm:w-96"
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
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Exercise Name: </label>
                                <input
                                    className="input-bl-lg w-72 sm:w-96"
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    minLength={8}
                                    required
                                    value={name}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="sets">Sets: </label>
                                <input
                                    className="input-bl w-72 sm:w-96"
                                    id="sets"
                                    name="sets"
                                    type="text"
                                    onChange={(e) => setSets(e.target.value)}
                                    required
                                    value={sets}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="reps">Reps: </label>
                                <input
                                    className="input-bl w-72 sm:w-96"
                                    id="reps"
                                    name="reps"
                                    type="text"
                                    onChange={(e) => setReps(e.target.value)}
                                    required
                                    value={reps}
                                />
                            </div>
                            <button
                                className="btn-blue-light w-72 sm:w-96"
                                type="button"
                                onClick={handleExercise}
                            >
                                Add Exercise
                            </button>
                        </>
                    )}

                    {/* PAGE #3 */}
                    {formPage === 2 && (
                        <div className="flex flex-col gap-4 justify-start">
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold">
                                    Title:
                                </h2>
                                <span>{title}</span>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold">
                                    Emphasis:{" "}
                                </h2>
                                <span>{emphasis}</span>
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
                                            {exercise.sets} sets of{" "}
                                            {exercise.reps} reps
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Navigation Buttons */}
                    <div className="flex gap-2 justify-end w-72 sm:w-96">
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
                    {/* END OF PAGES */}

                    {/* Exercises */}
                    {formPage == 1 && exercises.length > 0 && (
                        <ul className="flex flex-col gap-2 mt-5">
                            <h2 className="text-xl font-semibold">
                                Exercise List:
                            </h2>
                            {exercises.map((exercise) => (
                                <li>
                                    <div className="flex justify-between w-96">
                                        <h5>{exercise.name}</h5>
                                        <button
                                            onClick={() =>
                                                deleteExercise(exercise.id)
                                            }
                                            type="button"
                                            className="px-3 py-1 bg-red-600 text-white text-sm rounded-full hover:bg-red-400"
                                        >
                                            Delete Exercise
                                        </button>
                                    </div>

                                    <span>
                                        {exercise.sets} sets of {exercise.reps}{" "}
                                        reps
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PlannerPage;
