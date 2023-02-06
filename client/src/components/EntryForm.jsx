import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const EntryForm = ({ user, setEntries, setAddEntry, fetchEntries, API_URL }) => {
	const [entry, setEntry] = useState({
		userId: user._id,
		date: "",
		plan: "",
		calories: 2000,
		macros: "",
		notes: "",
	});

	const handleChange = (e) => {
		setEntry((prevEntry) => {
			return { ...prevEntry, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async () => {
		// Submit data to database
		const res = await axios.post(API_URL, entry);

		// Add entry to entries array
		setEntries((prevEntries) => [entry, ...prevEntries]);

		// Reset entry state
		setEntry({
			_id: uuidv4() + "hello world",
			userId: user._id + "user_id",
			date: "",
			plan: "",
			calories: 2000,
			macros: "",
			notes: "",
		});

		setAddEntry(false);
		fetchEntries();
	};

	return (
		<div className="mb-5">
			<form className="flex flex-col justify-center items-center bg-gray-700 py-5 rounded-lg">
				<h4 className="text-xl font-semibold mb-4">
					New Journal Entry
				</h4>
				<fieldset className="flex flex-col gap-2">
					<div className="flex flex-col gap-1">
						<label htmlFor="date">Date: </label>
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
						<label htmlFor="plan">Exercise Plan: </label>
						<select
							className="input-bl-lg w-72"
							id="plan"
							name="plan"
							onChange={handleChange}
							value={entry.plan}
						>
							<option>NONE</option>
						</select>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="calories">Calorie Intake (kCal)</label>
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
						<label htmlFor="macros">
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
						<label id="notes">Notes: </label>
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
						onClick={handleSubmit}
						type="button"
						className="btn-blue w-72"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EntryForm;
