import React from "react";
import { Link } from "react-router-dom";
import Plan from "../components/Plan";
import "../styles/my-plans.css";

const MyPlans = (props) => {
    
    const planElements = props.savedPlans.map(plan => <Plan planDisplay={plan}/>);

    return (
        <div className="container">
            <div className="MyPlans">
                <header>
                    <div className="MyPlans--info">
                        <h2>My Training Plans</h2>
                        <Link to="/fitness-app/planner">Create New Plan</Link>
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
