import React from "react";
import { Link } from "react-router-dom";
import "../styles/planner.css";

const Planner = (props) => {
    const [plan, setPlan] = React.useState({});

    const handleChange = (e) => {
        setPlan((prevPlan) => {
            return { ...prevPlan, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="container">
            <main className="Planner">
                <div className="planner--info">
                    <h2>Welcome to the Planner</h2>
                    <div className="my-plans--container">
                        <Link to="/my-plans">
                            <span className="saved-plans-amount">
                                My Plans : {props.savedPlans.length}
                            </span>
                        </Link>
                    </div>
                    <p>
                        The planner does a variety of things. Here you can
                        create a training plan to fit your specific fitness
                        goals.
                    </p>
                </div>
                <div className="form--container">
                    <form>
                        <legend>Planner</legend>
                        <fieldset>
                            <label>Plan Name: </label>
                            <input
                                name="name"
                                placeholder="Plan Name"
                                onChange={handleChange}
                                required
                            />
                            <label>Type of Training: </label>
                            <select name="type" onChange={handleChange}>
                                <option default>Select an option</option>
                                <option>Resistance</option>
                                <option>Cardio</option>
                            </select>
                        </fieldset>

                        {plan.type === "Resistance" && (
                            <fieldset>
                                <label>Style of Training: </label>
                                <select name="style" onChange={handleChange}>
                                    {" "}
                                    <option>SELECT STYLE</option>
                                    <option>Strength</option>
                                    <option>Hypertrophy</option>
                                    <option>Endurance</option>
                                </select>
                                <label>Training Split: </label>
                                <select name="split" onChange={handleChange}>
                                    <option>SELECT SPLIT</option>
                                    <option>Upper / Lower</option>
                                    <option>Full Body</option>
                                </select>
                            </fieldset>
                        )}
                        {plan.type === "Cardio" && (
                            <fieldset>
                                <label>Style of Training: </label>
                                <select name="style" onChange={handleChange}>
                                    <option>Select Intensity</option>
                                    <option>Low Intensity</option>
                                    <option>High Intensity</option>
                                    <option>Mixed Intensities</option>
                                </select>
                            </fieldset>
                        )}
                        {plan.type === "Resistance" && (
                            <fieldset>
                                <label>Anterior Deltoids: </label>
                                <select name="ant_delt" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Overhead Press</option>
                                    <option>Military Press</option>
                                    <option>DB Press</option>
                                </select>
                                <label>Lateral Deltoids: </label>
                                <select name="lat_delt" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Lateral Raises</option>
                                    <option>Banded Face Pulls</option>
                                    <option>Upright Row</option>
                                </select>
                                <label>Posterior Deltoids: </label>
                                <select
                                    name="post_delt"
                                    onChange={handleChange}
                                >
                                    <option>NONE</option>
                                    <option>Reverse Fly</option>
                                    <option>Rear Delt Machine</option>
                                    <option>Banded Face Pulls</option>
                                </select>
                                <label>Chest: </label>
                                <select name="chest_1" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Bench Press</option>
                                    <option>Dips</option>
                                    <option>Push-ups</option>
                                </select>
                                <label>Supplementary Chest: </label>
                                <select name="chest_2" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Bench Press</option>
                                    <option>Incline Bench Press</option>
                                    <option>Decline Bench Press</option>
                                    <option>Push-ups</option>
                                    <option>Dips</option>
                                </select>
                                <label>Back: </label>
                                <select name="back_1" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Pull-up</option>
                                    <option>Bent-over Row</option>
                                    <option>Machine Row</option>
                                </select>
                                <label>Supplementary Back: </label>
                                <select name="back_2" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Pull-up</option>
                                    <option>Bent-over Row</option>
                                    <option>Machine Row</option>
                                    <option>T-Bar Rows</option>
                                    <option>Pull-overs</option>
                                </select>
                                <label>Abdominals: </label>
                                <select name="ab_1" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Supplementary Abdominals 1: </label>
                                <select name="ab_2" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Supplementary Abdominals 2: </label>
                                <select name="ab_3" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Biceps: </label>
                                <select name="biceps" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>EZ-bar Curls</option>
                                    <option>Barbell Curls</option>
                                    <option>DB Curls</option>
                                </select>
                                <label>Triceps: </label>
                                <select name="triceps" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Bench Dips</option>
                                    <option>Tricep Pushdowns</option>
                                    <option>Skull Crushers</option>
                                </select>
                                <label>Hips: </label>
                                <select name="hips" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Hip Thrusts</option>
                                </select>
                                <label>Quadriceps: </label>
                                <select name="quads_1" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Squats</option>
                                    <option>ATG Split Squats</option>
                                    <option>Leg Press</option>
                                    <option>Sissy Squats</option>
                                    <option>Pistol Squats</option>
                                </select>
                                <label>Hamstrings: </label>
                                <select name="hams_1" onChange={handleChange}>
                                    <option>NONE</option>
                                    <option>Deadlifts</option>
                                    <option>RDL</option>
                                    <option>Nordic Curls</option>
                                </select>
                                <label>Calves and Tibs: </label>
                                <select name="calves" onChange={handleChange}>
                                    <option value="None">
                                        No, I'm scared...
                                    </option>
                                    <option value="Calf & Tib Raises">
                                        Yes, please!
                                    </option>
                                </select>
                            </fieldset>
                        )}

                        <button
                            type="button"
                            onClick={() => {
                                props.savePlan(plan);
                                setPlan({});
                            }}
                        >
                            Save Plan
                        </button>
                    </form>
                </div>
                <div className="plan--container"></div>
            </main>
        </div>
    );
};

export default Planner;
