import React, { useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";

const Entry = ({ entry, setEntries, journalAPI }) => {
	const [viewEntry, setViewEntry] = useState(false);
	const formattedDate = DateTime.fromISO(entry.date).toFormat(
		"LLL dd, yyyy"
	);

	const deleteEntry = async (id) => {
		// findAndDelete from db
		await axios.delete(journalAPI + id);

		// Remove from entries array
		setEntries((prevEntries) =>
			prevEntries.filter((entry) => id != entry._id)
		);
	};

	return (
		<div className="flex flex-col gap-2 bg-gray-700 px-5 py-4 rounded-md">
			<section className="date--container">
				<h4 className="text-lg font-semibold mb-2">{formattedDate}</h4>
			</section>
			<section className="flex justify-between sm:flex-col sm:gap-2">
				<div>Calories: {entry.calories} Cal</div>
				<div>Macros (C/F/P): {entry.macros}</div>
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
					<section className="exercise--container">
						<div>
							Exercise Plan:{" "}
							{entry.plan === ""
								? "NONE SELECTED"
								: entry.plan}
						</div>
					</section>
					<section className="notes--container">
						<div>Notes: {entry.notes}</div>
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
