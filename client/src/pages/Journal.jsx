import React from "react";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";
import { useEffect } from "react";

const Journal = (props) => {
    const [addEntry, setAddEntry] = React.useState(false);
    const [entries, setEntries] = React.useState([]);
    const API_URL = "http://localhost:3000/api/journal/"

    // Checks database for entries array
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(res => setEntries(res.entries))
    }, [])

    // const handleSubmit = () => {
    //     setSavedEntries((prevSavedEntries) => [newEntry, ...prevSavedEntries]);
    //     updateData();
    //     setNewEntry({
    //         date: null,
    //         exercisePlan: null,
    //         calorieIntake: null,
    //         macro: null,
    //         notes: null,
    //     });
    // };

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
        <div className="container">
            <main className="Journal">
                <header className="journal--info">
                    <h2 className="page-header">Journal</h2>
                    <button
                        type="button"
                        onClick={() => setAddEntry((prevState) => !prevState)}
                    >
                        {addEntry ? "Return to Journal" : "Add Entry"}
                    </button>
                </header>
                {addEntry && (
                    <EntryForm
                    // handleChange={handleChange}
                    // handleSubmit={handleSubmit}
                    // renderPlans={renderPlans}
                    />
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
