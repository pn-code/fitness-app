const Plan = (props) => {
  const { plan, id } = props;
  console.log(plan)

  return (
    <div className="plan--container">
      <h3 className="plan-title">{plan.title}</h3>

      <div className="plan-settings">
        <h4>Emphasis: {plan.emphasis}</h4>
      </div>
        {plan.exercises.map(exercise => {
            if (typeof exercise.name != "undefined") {
                return (                
                    <ul className="exercise-item">
                        <div>
                            <h4>{exercise.name}</h4>
                            <p>{`${exercise.sets} x ${exercise.reps}`}</p>
                        </div>
                    </ul>
                )
                }
            }
        )}
      <ul className="exercise-list">

      </ul>

      <div className="btn--container">
        <button className={id}>Remove Plan</button>
      </div>
    </div>
  );
};

export default Plan;
