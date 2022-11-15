import React from "react";
import Popup from "reactjs-popup";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utility/firebase";
import uniqid from "uniqid";

const Journal = (props) => {
    const { user, userData, setFetchData } = props;

    const [savedEntries, setSavedEntries] = React.useState([]);
    const [newEntry, setNewEntry] = React.useState({
        id: uniqid(),
        date: null,
        exercisePlan: null,
        calorieIntake: null,
        macro: null,
        notes: null,
    });

    React.useEffect(() => {
        setFetchData(true)
    }, [])

    React.useEffect(() => {
        if (user) {
            setSavedEntries(userData.journal);
        }
    }, [userData]);

    const handleChange = (e) => {
        setNewEntry((prevNewEntry) => {
            return { ...prevNewEntry, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = () => {
        setSavedEntries((prevSavedEntries) => [newEntry, ...prevSavedEntries]);
        updateData();
        setNewEntry({
            id: uniqid(),
            date: null,
            exercisePlan: null,
            calorieIntake: null,
            macro: null,
            notes: null,
        });
    };

    const updateData = async () => {
        if (user) {
            await setDoc(
                doc(db, "users", user.uid),
                {
                    journal: [newEntry, ...savedEntries],
                },
                { merge: true }
            );
        }
    };

    const removeEntry = async (e) => {
        // Remove from savedEntries via setSavedEntries
        setSavedEntries((prevSavedEntries) =>
            prevSavedEntries.filter((entry) => entry.id !== e.target.className)
        );
        // Use setDoc to send data to database
        if (user) {
            await setDoc(
                doc(db, "users", user.uid),
                {
                    journal: savedEntries.filter(
                        (entry) => entry.id !== e.target.className
                    ),
                },
                { merge: true }
            );
        }
    };

    const renderPlans = userData.plans.map(plan => <option>{plan.name}</option>)

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
                    <h2>Journal</h2>
                    <Popup
                        trigger={<button>Add Entry</button>}
                        position="center center"
                        modal
                    >
                        <EntryForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            renderPlans={renderPlans}
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
