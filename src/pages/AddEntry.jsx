import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";
import serverAPI from "../api/serverAPI";

const AddEntry = ({ user }) => {
    const { state: plans } = useLocation();
    const Navigate = useNavigate();

    const [entry, setEntry] = useState({
        userId: user._id,
        date: "",
        plan: "",
        exercises: [],
        calories: 2000,
        macros: "",
        notes: "",
    });

    const [viewAllExercises, setViewAllExercises] = useState(false);

    const handleChange = (e) => {
        setEntry((prevEntry) => ({
            ...prevEntry,
            [e.target.name]: e.target.value,
        }));
        if (e.target.name === "plan") {
            if (e.target.name === "") return;
            setEntry((prevEntry) => ({
                ...prevEntry,
                exercises: plans.filter((plan) => plan._id !== entry.plan)[0]
                    .exercises,
            }));
        }
    };

    const handleExerciseChanges = (e, exerciseId) => {
        const target = e.target.name;
        const value = e.target.value;
        const updatedExercises = entry.exercises.map((exercise) =>
            exercise.id === exerciseId
                ? { ...exercise, [target]: value }
                : exercise
        );
        setEntry((prevEntry) => ({
            ...prevEntry,
            exercises: updatedExercises,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit data to database
        await serverAPI.post(`/journal`, entry, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        Navigate("/journal");
    };

    const isSubmitPlanDisabled = ![entry.date, entry.calories].every(Boolean);

    return (
        <div className="flex justify-center mb-5 text-white">
            <form className="flex flex-col justify-center items-center p-10 bg-gray-700 py-5 rounded-lg">
                <div className="flex items-center mb-4 gap-8">
                    <h4 className="text-xl font-semibold mt-4">
                        Add Journal Entry
                    </h4>
                    <Link className="btn-blue" to="/journal">
                        Journal
                    </Link>
                </div>

                <fieldset className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label className="text-[18px]" htmlFor="date">
                            Date:{" "}
                        </label>
                        <input
                            className="input-bl-lg w-72"
                            type="date"
                            id="date"
                            name="date"
                            onChange={handleChange}
                            value={entry.date}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[18px]" htmlFor="plan">
                            Exercise Plan:{" "}
                        </label>
                        <select
                            className="input-bl-lg w-72"
                            id="plan"
                            name="plan"
                            onChange={handleChange}
                            value={entry.plan}
                        >
                            <option value="">NONE</option>
                            {plans.map((plan) => (
                                <option key={plan._id} value={plan.name}>
                                    {plan.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {entry.plan !== "" && (
                        <div>
                            <h4 className="text-[18px] flex gap-4">
                                Exercises:{" "}
                                <button
                                    className="hover:scale-110 duration-150 ease-in"
                                    onClick={() =>
                                        setViewAllExercises(
                                            (viewAllExercises) =>
                                                !viewAllExercises
                                        )
                                    }
                                    type="button"
                                >
                                    {viewAllExercises ? (
                                        <BsFillArrowUpCircleFill size={24} />
                                    ) : (
                                        <BsFillArrowDownCircleFill size={24} />
                                    )}
                                </button>
                            </h4>
                            {viewAllExercises && (
                                <div className="my-2">
                                    {entry.exercises.map((exercise, idx) => (
                                        <div className="mt-2" key={exercise.id}>
                                            <h4 className="text-yellow-400">
                                                {exercise.name}
                                            </h4>
                                            <div className="flex gap-8">
                                                <div className="flex flex-col">
                                                    <label htmlFor="sets">
                                                        Sets:
                                                    </label>
                                                    <input
                                                        onChange={(e) =>
                                                            handleExerciseChanges(
                                                                e,
                                                                exercise.id
                                                            )
                                                        }
                                                        value={
                                                            entry.exercises[idx]
                                                                .sets
                                                        }
                                                        className="input-bl w-16"
                                                        id="sets"
                                                        name="sets"
                                                        type="text"
                                                        placeholder="Sets"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label htmlFor="reps">
                                                        Reps:
                                                    </label>
                                                    <input
                                                        onChange={(e) =>
                                                            handleExerciseChanges(
                                                                e,
                                                                exercise.id
                                                            )
                                                        }
                                                        className="input-bl w-16"
                                                        id="reps"
                                                        name="reps"
                                                        type="text"
                                                        placeholder="Reps"
                                                        value={
                                                            entry.exercises[idx]
                                                                .reps
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label htmlFor="weight">
                                                        Weight:
                                                    </label>
                                                    <input
                                                        onChange={(e) =>
                                                            handleExerciseChanges(
                                                                e,
                                                                exercise.id
                                                            )
                                                        }
                                                        className="input-bl w-20"
                                                        id="weight"
                                                        name="weight"
                                                        type="text"
                                                        placeholder="Weight"
                                                        value={
                                                            entry.exercises[idx]
                                                                .weight
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex flex-col gap-1">
                        <label className="text-[18px]" htmlFor="calories">
                            Calorie Intake (kCal)
                        </label>
                        <input
                            className="input-bl-lg w-72"
                            type="number"
                            id="calories"
                            name="calories"
                            onChange={handleChange}
                            placeholder="Enter Caloric Intake"
                            value={entry.calories}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[18px]" htmlFor="macros">
                            Macronutrients (Optional):
                        </label>
                        <input
                            className="input-bl-lg w-72"
                            type="text"
                            id="macros"
                            name="macros"
                            onChange={handleChange}
                            placeholder="Carbohydrates / Fat / Protein"
                            value={entry.macros}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[18px]" id="notes">
                            Notes:{" "}
                        </label>
                        <textarea
                            className="w-72 rounded-sm text-black p-2"
                            id="notes"
                            cols="30"
                            rows="10"
                            name="notes"
                            placeholder="Add notes here..."
                            onChange={handleChange}
                            value={entry.notes}
                        ></textarea>
                    </div>
                </fieldset>
                <div className="flex">
                    <button
                        disabled={isSubmitPlanDisabled}
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                        className="btn-blue w-72"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEntry;
