import React from "react";
import Popup from "reactjs-popup";
import "../styles/journal.css";
import Entry from "../components/Entry";
import EntryForm from "../components/EntryForm";

const Journal = (props) => {
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
                        <EntryForm/>
                    </Popup>
                </header>
                <main className="journal-entries--container">
                    <Entry />
                </main>
            </main>
        </div>
    );
};

export default Journal;
