import React, { useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";

const Entry = ({ user, entry, setEntries, journalAPI }) => {
  const [viewEntry, setViewEntry] = useState(false);
  const formattedDate = DateTime.fromISO(entry.date).toFormat("LLL dd, yyyy");

  const deleteEntry = async (id) => {
    // findAndDelete from db
    await axios.delete(journalAPI + id, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });

    // Remove from entries array
    setEntries((prevEntries) => prevEntries.filter((entry) => id != entry._id));
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-700 px-5 py-4 rounded-md">
      <section className="date--container">
        <h4 className="text-lg font-semibold mb-2">{formattedDate}</h4>
      </section>

      <section className="flex justify-between sm:flex-col sm:gap-2">
        <div className="flex gap-2 items-center my-2">
          <h3 className="font-semibold">Calories:</h3> {entry.calories} Cal
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
            <div className="flex items-center gap-2 my-2">
              <h3 className="font-semibold"> Exercise Plan: </h3>
              <span>{entry.plan === "" ? "NONE SELECTED" : entry.plan}</span>
            </div>

            {entry.exercises.length > 0 && (
              <div className="my-4">
                <h3 className="font-semibold mb-2">Exercises: </h3>
                {entry.exercises.map((exercise) => (
                  <div key={exercise.id}>
                    <h4 className="text-yellow-400">{exercise.name}</h4>
                    <span>
                      {exercise.sets} sets of {exercise.reps} reps
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
          <div className="flex flex-col">
            <button
              className="bg-red-500 my-2 py-1 rounded-md hover:bg-red-400"
              onClick={() => deleteEntry(entry._id)}
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
