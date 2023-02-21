import React from "react";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";
import { useEffect } from "react";
import axios from "axios";

const Journal = ({ user, API_URL }) => {
    const [addEntry, setAddEntry] = React.useState(false);
    const [entries, setEntries] = React.useState([]);

    const journalAPI = `${API_URL}/journal/`;

    const fetchEntries = async () => {
        const res = await axios.get(`${journalAPI}${user._id}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        setEntries(res.data.entries);
    };

    useEffect(() => {
        if (user) {
            fetchEntries();
        }
    }, [user]);

    return (
        <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
            <div className="flex justify-between items-center mb-7">
                <h2 className="text-4xl font-bold">Journal</h2>
                <button
                    className="btn-blue-light mt-0"
                    type="button"
                    onClick={() => setAddEntry((prevState) => !prevState)}
                >
                    {addEntry ? "Back" : "Add Entry"}
                </button>
            </div>

            {addEntry && (
                <EntryForm
                    user={user}
                    setEntries={setEntries}
                    API_URL={API_URL}
                    journalAPI={journalAPI}
                    setAddEntry={setAddEntry}
                    fetchEntries={fetchEntries}
                />
            )}
            {!addEntry && (
                <main className="journal-entries--container">
                    {entries.length === 0 && (
                        <h4>You have no saved journal entries.</h4>
                    )}
                    {entries.length > 0 &&
                        entries.map((entry, idx) => (
                            <Entry
                                entry={entry}
                                key={entry._id || entries.idx}
                                setEntries={setEntries}
                                journalAPI={journalAPI}
                            />
                        ))}
                </main>
            )}
        </div>
    );
};

export default Journal;
