import React, { useState } from "react";
import Entry from "../components/Entry";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import serverAPI from "../api/serverAPI";

const Journal = ({ user }) => {
    const [entries, setEntries] = React.useState([]);
    const [plans, setPlans] = useState([]);

    const fetchPlans = async () => {
        if (user._id != 1) {
            const res = await serverAPI.get(`/plans/${user?._id}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });
            setPlans(res.data.plans);
        }
    };

    useEffect(() => {
        if (user._id) {
            fetchPlans();
        }
    }, []);

    const fetchEntries = async () => {
        if (user._id != 1) {
            const res = await serverAPI.get(`/journal/${user._id}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });
            setEntries(res.data.entries);
        }
    };

    useEffect(() => {
        if (user) {
            fetchEntries();
        }
    }, [user]);

    return (
        <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
            <div className="flex justify-between items-center mb-7">
                <h2 className="text-3xl font-bold">Journal</h2>
                <Link className="btn-blue mt-0" to="/add-entry" state={plans}>
                    Add Entry
                </Link>
            </div>

            <main className="flex flex-col gap-4">
                {entries.length === 0 && (
                    <h4>You have no saved journal entries.</h4>
                )}
                {user?._id && (
                    <div className="text-red-400 text-sm mt-2">
                        <h4 className="font-semibold">WARNING: </h4>
                        <span>TEST USER / GUEST PLANS ARE NOT SAVED.</span>
                    </div>
                )}
                {entries.length > 0 &&
                    entries.map((entry, idx) => (
                        <Entry
                            user={user}
                            entry={entry}
                            plans={plans}
                            key={entry._id || idx}
                            setEntries={setEntries}
                        />
                    ))}
            </main>
        </div>
    );
};

export default Journal;
