import React, { useState } from "react";

const EntryForm = (props) => {
	const { setEntries, API_URL } = props;

	const [entry, setEntry] = useState({
		date: null,
		plan: null,
		calories: null,
		macros: null,
		notes: null,
	});

	const handleChange = (e) => {
		setEntry((prevEntry) => {
			return { ...prevEntry, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add entry to entries array
		setEntries((prevEntries) => [entry, ...prevEntries]);
		// Reset entry state
		setEntry({
			date: null,
			plan: null,
			calories: null,
			macros: null,
			notes: null,
		});
	};

	return (
		<div>
			<form className="flex flex-col justify-center items-center" action={API_URL} method="POST">
				<h4 className="text-xl font-semibold mb-4">
					New Journal Entry
				</h4>
				<fieldset className="flex flex-col gap-2">
					<div>
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

					<div>
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

					<div>
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

					<div>
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

					<div>
						<label id="notes">Notes: </label>
						<textarea
							className="w-72 rounded-sm text-black p-2"
							id="notes"
							cols="30"
							rows="10"
							name="notes"
							onChange={handleChange}
							value={entry.notes}
						></textarea>
					</div>
				</fieldset>
				<div className="flex">
					<button className="btn-blue w-72" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EntryForm;
