const Plan = (props) => {
  const { plan, id, deletePlan } = props;

  return (
    <div className="plan--container">
      <h3 className="plan-title">{plan.name}</h3>

      <div className="plan-settings">
        <h4>Emphasis: {plan.emphasis}</h4>
      </div>

        {plan.exercises.map(exercise => {
            if (exercise.name !== "") {
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

      <div className="btn--container">
        <button className={id} onClick={() => deletePlan(id)}>Remove Plan</button>
      </div>
    </div>
  );
};

export default Plan;
