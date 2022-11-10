import React from "react";
import { Link } from "react-router-dom";
import "../styles/my-plans.css";

const MyPlans = (props) => {
    const planElements = props.savedPlans.map((plan) => {
        return (
            <div className="saved-plan--container">
                <h3>{plan.name}</h3>
                <h4>{plan.type}</h4>
                <h5>{plan.style}</h5>
                {plan.split === "Upper / Lower" && (
                    <div className="split--container">
                        <div className="upper-day">
                            <h4>Upper Day</h4>
                            <ul>
                                <li>Anterior Deltoids: {plan.ant_delt}</li>
                                <li>Back 1: {plan.back_1}</li>
                                <li>Chest 1: {plan.chest_1}</li>
                                <li>Back 1: {plan.back_2}</li>
                                <li>Chest 2: {plan.chest_2}</li>
                                <li>Posterior Deltoids: {plan.post_delt}</li>
                                <li>Lateral Deltoids: {plan.lat_delt}</li>
                                <li>Biceps: {plan.biceps}</li>
                                <li>Triceps: {plan.triceps}</li>
                            </ul>
                        </div>
                        <div className="lower-day">
                            <h4>Lower Day</h4>
                            <ul>
                                <li>Quadriceps: {plan.quads_1}</li>
                                <li>Hamstrings: {plan.hams_1}</li>
                                <li>Hips: {plan.hips}</li>
                                <li>Calves and Tibs: {plan.calves}</li>
                                <li>Abdominals 1: {plan.ab_1}</li>
                                <li>Abdominals 2: {plan.ab_2}</li>
                                <li>Abdominals 3: {plan.ab_3}</li>
                            </ul>
                        </div>
                    </div>
                )}
                {plan.split === "Full Body" && (
                    <div className="split--container">
                        <div className="full-body-1">
                            <h4>Full Body Day 1</h4>
                            <ul>
                                <li>Anterior Deltoids: {plan.ant_delt}</li>
                                <li>Back 1: {plan.back_1}</li>
                                <li>Chest 2: {plan.chest_2}</li>
                                <li>Quadriceps: {plan.quadriceps}</li>
                                <li>Hips: {plan.hips}</li>
                                <li>Biceps: {plan.biceps}</li>
                                <li>Triceps: {plan.triceps}</li>
                                <li>Abdominals 1: {plan.abs_1}</li>
                                <li>Abdominals 2: {plan.ab_2}</li>
                            </ul>
                        </div>
                        <div className="full-body-1">
                            <h4>Full Body Day 2</h4>
                            <ul>
                                <li>Lateral Deltoids: {plan.lat_delt}</li>
                                <li>Posterior Deltoids:{plan.post_delt}</li>
                                <li>Chest 1: {plan.chest_1}</li>
                                <li>Back 1: {plan.back_2}</li>
                                <li>Hamstrings: {plan.hams_1}</li>
                                <li>Triceps: {plan.triceps}</li>
                                <li>Abdominals 1: {plan.ab_1}</li>
                                <li>Abdominals 3: {plan.ab_3}</li>
                                <li>Calves and Tibs: {plan.calves}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className="container">
            <div className="MyPlans">
                <header>
                    <div>
                        <h2>My Training Plans</h2>
                        <Link to="/fitness-app/planner">Back to Planner</Link>
                    </div>
                    <span>
                        This is where all your training plans are stored.
                    </span>
                </header>
                <main className="plans--container">{planElements}</main>
            </div>
        </div>
    );
};

export default MyPlans;
