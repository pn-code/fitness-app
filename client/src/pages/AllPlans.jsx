import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Plan from "../components/Plan";

const AllPlans = ({ user, API_URL }) => {
    const planAPI = `${API_URL}/plans/`;

    const [allPlans, setAllPlans] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [filteredPlans, setFilteredPlans] = useState([]);

    const applySearchFilter = (e) => {
        e.preventDefault();
        const regex = new RegExp(searchFilter, "i");
        const filterAllPlans = allPlans.filter(
            ({ title, emphasis, desc, user }) =>
                [title, emphasis, desc, user].some((item) => item.match(regex))
        );

        setFilteredPlans(filterAllPlans);
    };

    const fetchPlans = async () => {
        const res = await axios.get(`${planAPI}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        setAllPlans(res.data.plans);
        setFilteredPlans(res.data.plans);
    };

    useEffect(() => {
        if (user) {
            fetchPlans();
        }
    }, [user]);

    return (
        <div>
            <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
                <div className="mb-5">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-4xl font-bold">All Plans</h2>

                        <div className="flex gap-4">
                            <Link
                                to="/my-plans"
                                className="btn-blue mt-0 text-center"
                            >
                                Back to My Plans
                            </Link>
                        </div>
                    </div>

                    <form
                        onSubmit={applySearchFilter}
                        className="flex items-center justify-center mb-8 gap-2"
                    >
                        <input
                            onChange={(e) => setSearchFilter(e.target.value)}
                            value={searchFilter}
                            placeholder="Search..."
                            id="search"
                            name="search"
                            className="input-bl w-[92%] md:max-w-[800px] h-10 bg-blue-900 text-white placeholder-slate-300 mt-4"
                        />
                        <button
                            type="submit"
                            className="btn-blue-light w-16 justify-center items-center"
                        >
                            <BiSearch className="text-center" size={26} />
                        </button>
                    </form>

                    <main className="plans--container">
                        {allPlans.length === 0 && (
                            <h4>You currently have no training plans.</h4>
                        )}
                        <ul className="flex flex-col gap-6">
                            {filteredPlans.map((plan) => (
                                <Plan
                                    plan={plan}
                                    key={plan._id}
                                    user={user}
                                    planAPI={planAPI}
                                />
                            ))}
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AllPlans;
