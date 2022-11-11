const Plan = (props) => {
    const { planDisplay } = props;

    return (
        <div className="plan--container">
        <h3>{planDisplay.name}</h3>
        <h4>{planDisplay.type}</h4>
        <h5>{planDisplay.style}</h5>
        {planDisplay.split === "Upper / Lower" && (
            <div className="split--container">
                <div className="upper-day">
                    <h4>Upper Day</h4>
                    <ul>
                        <li>Anterior Deltoids: {planDisplay.ant_delt}</li>
                        <li>Back 1: {planDisplay.back_1}</li>
                        <li>Chest 1: {planDisplay.chest_1}</li>
                        <li>Back 1: {planDisplay.back_2}</li>
                        <li>Chest 2: {planDisplay.chest_2}</li>
                        <li>Posterior Deltoids: {planDisplay.post_delt}</li>
                        <li>Lateral Deltoids: {planDisplay.lat_delt}</li>
                        <li>Biceps: {planDisplay.biceps}</li>
                        <li>Triceps: {planDisplay.triceps}</li>
                    </ul>
                </div>
                <div className="lower-day">
                    <h4>Lower Day</h4>
                    <ul>
                        <li>Quadriceps: {planDisplay.quads_1}</li>
                        <li>Hamstrings: {planDisplay.hams_1}</li>
                        <li>Hips: {planDisplay.hips}</li>
                        <li>Calves and Tibs: {planDisplay.calves}</li>
                        <li>Abdominals 1: {planDisplay.ab_1}</li>
                        <li>Abdominals 2: {planDisplay.ab_2}</li>
                        <li>Abdominals 3: {planDisplay.ab_3}</li>
                    </ul>
                </div>
            </div>
        )}
        {planDisplay.split === "Full Body" && (
            <div className="split--container">
                <div className="full-body-1">
                    <h4>Full Body Day 1</h4>
                    <ul>
                        <li>Anterior Deltoids: {planDisplay.ant_delt}</li>
                        <li>Back 1: {planDisplay.back_1}</li>
                        <li>Chest 2: {planDisplay.chest_2}</li>
                        <li>Quadriceps: {planDisplay.quadriceps}</li>
                        <li>Hips: {planDisplay.hips}</li>
                        <li>Biceps: {planDisplay.biceps}</li>
                        <li>Triceps: {planDisplay.triceps}</li>
                        <li>Abdominals 1: {planDisplay.abs_1}</li>
                        <li>Abdominals 2: {planDisplay.ab_2}</li>
                    </ul>
                </div>
                <div className="full-body-1">
                    <h4>Full Body Day 2</h4>
                    <ul>
                        <li>Lateral Deltoids: {planDisplay.lat_delt}</li>
                        <li>Posterior Deltoids:{planDisplay.post_delt}</li>
                        <li>Chest 1: {planDisplay.chest_1}</li>
                        <li>Back 1: {planDisplay.back_2}</li>
                        <li>Hamstrings: {planDisplay.hams_1}</li>
                        <li>Triceps: {planDisplay.triceps}</li>
                        <li>Abdominals 1: {planDisplay.ab_1}</li>
                        <li>Abdominals 3: {planDisplay.ab_3}</li>
                        <li>Calves and Tibs: {planDisplay.calves}</li>
                    </ul>
                </div>
            </div>
        )}
    </div>
    )
}

export default Plan;