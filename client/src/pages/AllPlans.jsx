import React from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import Planner from "./Planner";
import axios from "axios";
import { Link } from "react-router-dom";

const AllPlans = ({ user, API_URL }) => {
    const [allPlans, setAllPlans] = React.useState([]);

    const planAPI = `${API_URL}/plans/`;

    const fetchPlans = async () => {
        const res = await axios.get(`${planAPI}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        setAllPlans(res.data.plans);
    };

    // Loads allPlans on start with information from database
    useEffect(() => {
        if (user) {
            fetchPlans();
        }
    }, [user]);

    return (
        <div>
            <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
                <div className="mb-5">
                    <div className="flex justify-between items-center mb-7">
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

                    <main className="plans--container">
                        {allPlans.length === 0 && (
                            <h4>You currently have no training plans.</h4>
                        )}
                        <ul className="flex flex-col gap-6">
                            {allPlans.map((plan) => (
                                <Plan plan={plan} key={plan._id} user={user} />
                            ))}
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AllPlans;
