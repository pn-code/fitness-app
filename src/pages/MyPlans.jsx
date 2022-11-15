import React from "react";
import Plan from "../components/Plan";
import "../styles/my-plans.css";
import Planner from "../components/Planner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utility/firebase";

const MyPlans = (props) => {
    const { user, userData, setFetchData } = props;
    const [savedPlans, setSavedPlans] = React.useState([]);
    const [renderPlanner, setRenderPlanner] = React.useState(false);

    React.useEffect(() => {
        setFetchData(true)
    }, [])

    React.useEffect(() => {
        if (user) {
            setSavedPlans(userData.plans);
        }
    }, [userData]);

    const updateData = async (plan) => {
        if (user) {
            await setDoc(
                doc(db, "users", user.uid),
                {
                    plans: [plan, ...savedPlans],
                },
                { merge: true }
            );
        }
    };

    const removePlan = async (e) => {
        // Remove from savedEntries via setSavedEntries
        setSavedPlans((prevSavedPlans) =>
            prevSavedPlans.filter((plan) => plan.id !== e.target.className)
        );
        // Use setDoc to send data to database
        if (user) {
            await setDoc(
                doc(db, "users", user.uid),
                {
                    plans: savedPlans.filter(
                        (plan) => plan.id !== e.target.className
                    ),
                },
                { merge: true }
            );
        }
    };

    const planElements = savedPlans.map((plan) => (
        <Plan planDisplay={plan} key={plan.id} id={plan.id} removePlan={removePlan}/>
    ));

    return (
        <div className="container">
            <div className="MyPlans">
                <header>
                    <div className="MyPlans--info">
                        <h2>
                            {!renderPlanner
                                ? `My Training Plans`
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
                        updateData={updateData}
                    />
                )}
            </div>
        </div>
    );
};

export default MyPlans;
