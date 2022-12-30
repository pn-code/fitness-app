import React from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import "../styles/my-plans.css";
import Planner from "../components/Planner";

const API = `http://localhost:3000/plans/`;

const MyPlans = (props) => {
    const { user, userData, setFetchData } = props;
    const [savedPlans, setSavedPlans] = React.useState([]);
    const [renderPlanner, setRenderPlanner] = React.useState(false);

    // Loads savedPlans on start with information from database
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => setSavedPlans(res.plans));
    }, []);

    const deletePlan = async (id) => {
        // Delete from savedEntries via setSavedEntries
        setSavedPlans((prevSavedPlans) =>
            prevSavedPlans.filter((plan) => id !== plan._id)
        );
        // // Delete selected plan from database
        fetch(API + id, { method: "DELETE" });
    };

    // Map over savedPlans and display on the page
    const planElements = savedPlans.map((plan) => (
        <Plan
            plan={plan}
            key={plan._id}
            id={plan._id}
            deletePlan={deletePlan}
        />
    ));

    return (
        <div className="container">
            <div className="MyPlans">
                <header>
                    <div className="MyPlans--info">
                        <h2 className="page-header">
                            {!renderPlanner
                                ? `Training Plans`
                                : `Create a Plan`}
                        </h2>
                        <button
                            onClick={() =>
                                setRenderPlanner(
                                    (prevRenderPlanner) => !prevRenderPlanner
                                )
                            }
                        >
                            {!renderPlanner
                                ? `Create New Plan`
                                : `My Plans: ${savedPlans.length}`}
                        </button>
                    </div>
                </header>
                {!renderPlanner && (
                    <main className="plans--container">
                        {savedPlans.length === 0 && (
                            <h4>You currently have no training plans.</h4>
                        )}
                        {planElements}
                    </main>
                )}
                {renderPlanner && (
                    <Planner
                        setSavedPlans={setSavedPlans}
                        deletePlan={deletePlan}
                    />
                )}
            </div>
        </div>
    );
};

export default MyPlans;
