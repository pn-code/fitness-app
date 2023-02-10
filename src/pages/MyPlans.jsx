import React from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import Planner from "./Planner";
import axios from "axios";

const API_URL = "https://fitness-zp5c.onrender.com/plans/";

const MyPlans = ({ user}) => {
    const [savedPlans, setSavedPlans] = React.useState([]);
    const [renderPlanner, setRenderPlanner] = React.useState(false);

    const fetchPlans = async () => {
        const res = await axios.get(API_URL + user?._id);
        setSavedPlans(res.data.plans);
    };

    // Loads savedPlans on start with information from database
    useEffect(() => {
        if (user) {
            fetchPlans();
        }
    }, [user]);

    const deletePlan = async (planId, planUserId) => {
        // // Delete selected plan from database
        await axios.delete(API_URL, {
            data: {
                userId: user._id,
                planUserId: planUserId,
                currentPlanId: planId,
            },
        });

        // Delete from savedEntries via setSavedEntries
        setSavedPlans((prevSavedPlans) =>
            prevSavedPlans.filter((plan) => planId !== plan._id)
        );
    };

    return (
        <div>
            {renderPlanner ? (
                <Planner
                    user={user}
                    fetchPlans={fetchPlans}
                    setRenderPlanner={setRenderPlanner}
                    renderPlanner={renderPlanner}
                    savedPlans={savedPlans}
                    setSavedPlans={setSavedPlans}
                />
            ) : (
                <div className="text-white mx-10 my-5 flex flex-col gap-2 justify-center sm:justify-left sm:mt-16">
                    <div className="mb-5">
                        <div className="flex justify-between items-center mb-7">
                            <h2 className="text-4xl font-bold">
                                {!renderPlanner && "Plans"}
                            </h2>
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
                                    ? `Create New Plan`
                                    : `My Plans: ${savedPlans.length}`}
                            </button>
                        </div>

                        {!renderPlanner && (
                            <main className="plans--container">
                                {savedPlans.length === 0 && (
                                    <h4>
                                        You currently have no training plans.
                                    </h4>
                                )}
                                <ul className="flex flex-col gap-6">
                                    {savedPlans.map((plan) => (
                                        <Plan
                                            plan={plan}
                                            key={plan._id}
                                            deletePlan={deletePlan}
                                            user={user}
                                        />
                                    ))}
                                </ul>
                            </main>
                        )}
                        {renderPlanner && (
                            <Planner
                                user={user}
                                setSavedPlans={setSavedPlans}
                                deletePlan={deletePlan}
                                fetchPlans={fetchPlans}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPlans;
