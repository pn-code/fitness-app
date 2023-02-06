import React, { useState } from "react";
import { DateTime } from "luxon";

const Entry = ({ entryInfo, id, setEntries, API_URL }) => {
	const [viewEntry, setViewEntry] = useState(false);
	const formattedDate = DateTime.fromISO(entryInfo.date).toFormat(
		"LLL dd, yyyy"
	);

	const deleteEntry = async (id) => {
		// Remove from entries array
		setEntries((prevEntries) =>
			prevEntries.filter((entry) => id != entry._id)
		);
		// findAndDelete from db
		fetch(API_URL + id, {
			method: "DELETE",
			headers: { "Content-Type": "json/application" },
		});
	};

	return (
		<div className="flex flex-col gap-2 bg-gray-800 px-5 py-4 rounded-md">
			<section className="date--container">
				<h4 className="text-lg font-semibold mb-2">{formattedDate}</h4>
			</section>
			<section className="flex justify-between">
				<div>Calories: {entryInfo.calories} Cal</div>
				<div>Macros (C/F/P): {entryInfo.macros}</div>
			</section>

			{!viewEntry && (
				<div
					onClick={() => setViewEntry(true)}
					className="text-xs text-center mt-4 cursor-pointer"
				>
					<span>Click to View Entry</span>
				</div>
			)}

			{viewEntry && (
				<>
					<section className="exercise--container">
						<div>
							Exercise Plan:
							{entryInfo.plan === ""
								? "NONE SELECTED"
								: entryInfo.plan}
						</div>
					</section>
					<section className="notes--container">
						<div>Notes: {entryInfo.notes}</div>
					</section>
					<div className="btn--container">
						<button onClick={() => deleteEntry(id)}>Remove</button>
					</div>
                    {viewEntry && (
				<div
					onClick={() => setViewEntry(false)}
					className="text-xs text-center mt-4 cursor-pointer"
				>
					<span>Click to Close Entry</span>
				</div>
			)}
				</>
			)}
		</div>
	);
};

export default Entry;
