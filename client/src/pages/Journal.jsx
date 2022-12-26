import React from "react";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";

const Journal = (props) => {
    const [addEntry, setAddEntry] = React.useState(false);
    const [savedEntries, setSavedEntries] = React.useState([]);

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

    // const removeEntry = async (e) => {
    //     // Remove from savedEntries via setSavedEntries
    //     setSavedEntries((prevSavedEntries) =>
    //         prevSavedEntries.filter((entry) => entry.id !== e.target.className)
    //     );
    //     // Use setDoc to send data to database
    //     if (user) {
    //         await setDoc(
    //             doc(db, "users", user.uid),
    //             {
    //                 journal: savedEntries.filter(
    //                     (entry) => entry.id !== e.target.className
    //                 ),
    //             },
    //             { merge: true }
    //         );
    //     }
    // };

    const renderEntries = savedEntries.map((entry) => (
        <Entry
            entryInfo={entry}
            removeEntry={removeEntry}
            key={entry.id}
            id={entry.id}
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
                        {savedEntries.length === 0 && (
                            <h4>You have no saved journal entries.</h4>
                        )}
                        {savedEntries.length > 0 && renderEntries}
                    </main>
                )}
            </main>
        </div>
    );
};

export default Journal;
