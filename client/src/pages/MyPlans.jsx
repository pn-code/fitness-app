import React, { useState } from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import Planner from "./Planner";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPlans = ({ user, API_URL }) => {
    const [userPlans, setUserPlans] = useState([]);
    const [savedPlans, setSavedPlans] = useState([]);
    const [renderPlanner, setRenderPlanner] = useState(false);

    const planAPI = `${API_URL}/plans/`;

    const fetchPlans = async () => {
        const res = await axios.get(`${planAPI}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        setUserPlans(res.data.plans.filter((plan) => plan.userId === user._id));
        setSavedPlans(
            res.data.plans
                .filter((plan) => plan.saved.includes(user._id))
                .filter((plan) => plan.userId !== user._id)
        );
    };

    useEffect(() => {
        if (user) {
            fetchPlans();
        }
    }, [user]);

    return (
        <div>
            {renderPlanner ? (
                <Planner
                    user={user}
                    fetchPlans={fetchPlans}
                    setRenderPlanner={setRenderPlanner}
                    renderPlanner={renderPlanner}
                    userPlans={userPlans}
                    setUserPlans={setUserPlans}
                    planAPI={planAPI}
                />
            ) : (
                <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
                    <div className="mb-5">
                        <div className="flex justify-between items-center mb-7">
                            <h2 className="text-4xl font-bold">
                                {!renderPlanner && "Plans"}
                            </h2>
                            <div className="flex gap-4">
                                <button
                                    className="btn-blue-light mt-0"
                                    onClick={() =>
                                        setRenderPlanner(
                                            (prevRenderPlanner) =>
                                                !prevRenderPlanner
                                        )
                                    }
                                >
                                    {!renderPlanner
                                        ? `New Plan`
                                        : `My Plans: ${userPlans.length}`}
                                </button>
                                <Link
                                    to="/all-plans"
                                    className="btn-blue mt-0 text-center"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>

                        {!renderPlanner && (
                            <section className="plans--container">
                                <h2 className="text-purple-300 font-bold my-4 text-lg">
                                    My Plans
                                </h2>
                                {userPlans.length === 0 && (
                                    <h4>
                                        You currently have no training plans.
                                    </h4>
                                )}
                                <ul className="flex flex-col gap-6">
                                    {userPlans.map((plan) => (
                                        <Plan
                                            plan={plan}
                                            key={plan._id}
                                            user={user}
                                            planAPI={planAPI}
                                            setUserPlans={setUserPlans}
                                        />
                                    ))}
                                </ul>
                            </section>
                        )}

                        {!renderPlanner && (
                            <section className="plans--container">
                                <h2 className="text-purple-300 font-bold my-4 text-lg">
                                    Saved Plans
                                </h2>
                                {savedPlans.length === 0 && (
                                    <h4>
                                        You currently have no saved training
                                        plans.
                                    </h4>
                                )}
                                <ul className="flex flex-col gap-6">
                                    {savedPlans.map((plan) => (
                                        <Plan
                                            plan={plan}
                                            key={plan._id}
                                            user={user}
                                            planAPI={planAPI}
                                        />
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPlans;
