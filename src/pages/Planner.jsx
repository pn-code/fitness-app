import React from "react";
import "../styles/planner.css";

const Planner = () => {
    const [plan, setPlan] = React.useState({
        type: null,
        style: null,
        details: null,
    });

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
                            <label>Type of Training: </label>
                            <select name="type" onChange={handleChange}>
                                <option>Select an option</option>
                                <option>Resistance</option>
                                <option>Cardio</option>
                            </select>
                        </fieldset>

                            {plan.type === "Resistance" && (
                                <fieldset>
                                    <label>Style of Training: </label>
                                    <select
                                        name="style"
                                        onChange={handleChange}
                                    >
                                        <option>Strength</option>
                                        <option>Hypertrophy</option>
                                        <option>Endurance</option>
                                    </select>
                                    <label>Training Split: </label>
                                    <select>
                                        <option>Upper / Lower</option>
                                        <option>Full Body</option>
                                    </select>
                                </fieldset>
                            )}
                            {plan.type === "Cardio" && (
                                <fieldset>
                                    <label>Style of Training: </label>
                                    <select
                                        name="style"
                                        onChange={handleChange}
                                    >
                                        <option>Low Intensity</option>
                                        <option>High Intensity</option>
                                        <option>Mixed Intensities</option>
                                    </select>
                                </fieldset>
                            )}
                        {plan.type === "Resistance" && (
                            <fieldset>
                                <label>Anterior Deltoids: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Overhead Press</option>
                                    <option>Military Press</option>
                                    <option>DB Press</option>
                                </select>
                                <label>Lateral Deltoids: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Lateral Raises</option>
                                    <option>Banded Face Pulls</option>
                                    <option>Upright Row</option>
                                </select>
                                <label>Posterior Deltoids: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Reverse Fly</option>
                                    <option>Rear Delt Machine</option>
                                    <option>Banded Face Pulls</option>
                                </select>
                                <label>Chest: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Bench Press</option>
                                    <option>Dips</option>
                                    <option>Push-ups</option>
                                </select>
                                <label>Supplementary Chest: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Bench Press</option>
                                    <option>Incline Bench Press</option>
                                    <option>Decline Bench Press</option>
                                    <option>Push-ups</option>
                                    <option>Dips</option>
                                </select>
                                <label>Back: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Pull-up</option>
                                    <option>Bent-over Row</option>
                                    <option>Machine Row</option>
                                </select>
                                <label>Supplementary Back: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Pull-up</option>
                                    <option>Bent-over Row</option>
                                    <option>Machine Row</option>
                                    <option>T-Bar Rows</option>
                                    <option>Pull-overs</option>
                                </select>
                                <label>Abdominals: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Supplementary Abdominals 1: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Supplementary Abdominals 2: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Sit-ups</option>
                                    <option>Leg Raises</option>
                                    <option>Ab Rollers</option>
                                </select>
                                <label>Biceps: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>EZ-bar Curls</option>
                                    <option>Barbell Curls</option>
                                    <option>DB Curls</option>
                                </select>
                                <label>Triceps: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Bench Dips</option>
                                    <option>Tricep Pushdowns</option>
                                    <option>Skull Crushers</option>
                                </select>
                                <label>Hips: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Hip Thrusts</option>
                                </select>
                                <label>Quadriceps: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Squats</option>
                                    <option>ATG Split Squats</option>
                                    <option>Leg Press</option>
                                    <option>Sissy Squats</option>
                                    <option>Pistol Squats</option>
                                </select>
                                <label>Hamstrings: </label>
                                <select>
                                    <option>NONE</option>
                                    <option>Deadlifts</option>
                                    <option>RDL</option>
                                    <option>Nordic Curls</option>
                                </select>
                                <label>Calves and Tibs: </label>
                                <select>
                                    <option>Yes, please!</option>
                                    <option>No, I'm scared...</option>
                                </select>
                            </fieldset>
                        )}

                        <button type="button">Submit Plan</button>
                    </form>
                </div>
                <div className="plan--container"></div>
            </main>
        </div>
    );
};

export default Planner;
