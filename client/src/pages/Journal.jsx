import React from "react";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";
import { useEffect } from "react";

const Journal = (props) => {
	const [addEntry, setAddEntry] = React.useState(false);
	const [entries, setEntries] = React.useState([]);
	const API_URL = "http://localhost:3000/journal/";

	// Checks database for entries array
	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((res) => setEntries(res.entries));
	}, []);

	const renderEntries = entries.map((entry) => (
		<Entry
			entryInfo={entry}
			key={entry._id}
			id={entry._id}
			setEntries={setEntries}
			API_URL={API_URL}
		/>
	));

	return (
		<div className="text-white mx-10 my-5 flex flex-col gap-2 sm:justify-center sm:items-center sm:mt-16">
			<main className="">

				<div className="flex justify-between mb-7">
					<h2 className="text-4xl font-bold">Journal</h2>
					<button
						className="btn-blue-light mt-0"
						type="button"
						onClick={() => setAddEntry((prevState) => !prevState)}
					>
						{addEntry ? "Return to Journal" : "Add Entry"}
					</button>
				</div>

				{addEntry && (
					<EntryForm setEntries={setEntries} API_URL={API_URL} />
				)}
				{!addEntry && (
					<main className="journal-entries--container">
						{entries.length === 0 && (
							<h4>You have no saved journal entries.</h4>
						)}
						{entries.length > 0 && renderEntries}
					</main>
				)}
			</main>
		</div>
	);
};

export default Journal;
