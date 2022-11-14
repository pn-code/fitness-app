import React from "react";
import Plan from "../components/Plan";
import "../styles/my-plans.css";
import Planner from "../components/Planner";

const MyPlans = () => {
    const [savedPlans, setSavedPlans] = React.useState([]);
    const [renderPlanner, setRenderPlanner] = React.useState(false);

    const planElements = savedPlans.map((plan) => <Plan planDisplay={plan} />);

    return (
        <div className="container">
            <div className="MyPlans">
                <header>
                    <div className="MyPlans--info">
                        <h2>{!renderPlanner ? `My Training Plans` : `Create a Plan`}</h2>
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
                {renderPlanner && <Planner setSavedPlans={setSavedPlans} />}
            </div>
        </div>
    );
};

export default MyPlans;
