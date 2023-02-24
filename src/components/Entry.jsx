import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import DeleteModal from "../components/DeleteModal";
import serverAPI from "../api/serverAPI";

const Entry = ({ user, entry, plans, setEntries }) => {
    const [viewEntry, setViewEntry] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const formattedDate = DateTime.fromISO(entry.date).toFormat("LLL dd, yyyy");

    const deleteEntry = async (e, id) => {
        e.preventDefault();

        await serverAPI.delete(`/journal/${id}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });

        setEntries((prevEntries) =>
            prevEntries.filter((entry) => id != entry._id)
        );
    };

    return (
        <div className="flex flex-col gap-2 bg-gray-700 px-5 py-4 rounded-md">
            {openDeleteModal && (
                <DeleteModal
                    action={(e) => deleteEntry(e, entry._id)}
                    closeModal={() => setOpenDeleteModal(false)}
                />
            )}

            <section className="date--container">
                <h4 className="text-lg font-semibold mb-2">{formattedDate}</h4>
            </section>

            <section className="flex flex-col sm:flex-row justify-between sm:gap-2">
                <div className="flex gap-2 items-center my-2">
                    <h3 className="font-semibold">Calories:</h3>{" "}
                    {entry.calories} Cal
                </div>
                <div className="flex gap-2">
                    <h3 className="font-semibold">Macros (C/F/P): </h3>
                    <span>{entry.macros}</span>
                </div>
            </section>

            {!viewEntry && (
                <div
                    onClick={() => setViewEntry(true)}
                    className="text-xs text-center mt-4 cursor-pointer"
                >
                    <span>Click to View</span>
                </div>
            )}

            {viewEntry && (
                <>
                    <section>
                        <div className="flex flex-col sm:items-center sm:flex-row gap-2 my-2">
                            <h3 className="font-semibold"> Exercise Plan: </h3>
                            <span>
                                {entry.plan === ""
                                    ? "NONE SELECTED"
                                    : entry.plan}
                            </span>
                        </div>

                        {entry.exercises.length > 0 && (
                            <div className="my-4">
                                <h3 className="font-semibold mb-2">
                                    Exercises:{" "}
                                </h3>
                                {entry.exercises.map((exercise) => (
                                    <div key={exercise.id}>
                                        <h4 className="text-yellow-400">
                                            {exercise.name}
                                        </h4>
                                        <span>
                                            {exercise.sets} sets of{" "}
                                            {exercise.reps} reps @{" "}
                                            {exercise.weight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    <section className="notes--container">
                        <div>
                            <h3 className="font-semibold">Notes: </h3>
                            <span>{entry.notes}</span>
                        </div>
                    </section>
                    <div className="flex justify-between gap-[16%] mt-5">
                        <Link
                            className="bg-green-600 py-4 rounded-md hover:bg-green-400 text-center flex-1"
                            to={`/edit-entry/${entry._id}`}
                            state={{ entry, plans }}
                        >
                            Edit
                        </Link>
                        <button
                            className="bg-red-500 py-4 rounded-md hover:bg-red-400 flex-1"
                            onClick={() => setOpenDeleteModal(true)}
                        >
                            Remove
                        </button>
                    </div>
                    {viewEntry && (
                        <div
                            onClick={() => setViewEntry(false)}
                            className="text-xs text-center mt-8 cursor-pointer"
                        >
                            <span>Click to Close</span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Entry;
