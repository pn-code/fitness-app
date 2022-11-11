import React from "react";
import Popup from "reactjs-popup";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";

const Journal = (props) => {
    const { savedPlans } = props;

    const [newEntry, setNewEntry] = React.useState({
        date: null,
        exercisePlan: null,
        calorieIntake: null,
        macro: null,
        notes: null,
    });

    const [savedEntries, setSavedEntries] = React.useState([]);
    console.log(savedEntries);

    const handleChange = (e) => {
        setNewEntry((prevNewEntry) => {
            return { ...prevNewEntry, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        setSavedEntries((prevSavedEntries) => [newEntry, ...prevSavedEntries]);
        setNewEntry({
            date: null,
            exercisePlan: null,
            calorieIntake: null,
            macro: null,
            notes: null,
        });
    };

    const renderEntries = savedEntries.map((entry) => (
        <Entry entryInfo={entry} savedPlans={savedPlans}/>
    ));

    return (
        <div className="container">
            <main className="Journal">
                <header className="journal--info">
                    <h2>Journal</h2>
                    <Popup
                        trigger={<button>Add Entry</button>}
                        position="center center"
                        modal
                    >
                        <EntryForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            savedPlans={savedPlans}
                        />
                    </Popup>
                </header>
                <main className="journal-entries--container">
                    {savedEntries.length === 0 && (
                        <h4>You have no saved journal entries.</h4>
                    )}
                    {savedEntries.length > 0 && renderEntries}
                </main>
            </main>
        </div>
    );
};

export default Journal;
