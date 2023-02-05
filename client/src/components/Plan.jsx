import { useState } from "react";

const Plan = (props) => {
  const { plan, id, deletePlan } = props;
  const [view, setView] = useState(false);

  const handleView = () => {
    setView((view) => !view);
  };

  return (
    // Show this when view is false...
    <div
      onClick={handleView}
      className="bg-slate-700 px-6 py-3 rounded-md cursor-pointer"
    >
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{plan.title}</h3>
          <span className="text-lg font-semibold">{plan.emphasis}</span>
        </div>
        <p className="text mb-4">{plan.desc}</p>
        {!view && <span className="text-xs text-center">Click to View</span>}
      </div>

      {view && (
        <ul className="flex flex-col gap-1">
          <h4 className="font-semibold">Exercises:</h4>
          {plan.exercises.map((exercise) => {
            if (exercise.name !== "") {
              return (
                <li>
                  <div className="flex justify-between">
                    <h4>{exercise.name}</h4>
                    <p>{`${exercise.sets} x ${exercise.reps}`}</p>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      )}

      {view && (
        <div className="flex flex-col">
          <button className="bg-red-500 rounded-md mt-4 py-1 hover:bg-red-400" onClick={() => deletePlan(id)}>
            Remove Plan
          </button>
          <span className="text-xs text-center mt-2">Click to Close</span>
        </div>
      )}
    </div>
  );
};

export default Plan;
