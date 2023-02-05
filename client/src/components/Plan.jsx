import { useState } from "react";

const Plan = (props) => {
	const { plan, id, deletePlan } = props;
	const [view, setView] = useState(false);

	return (
		// Show this when view is false...
		<div className="bg-slate-700 px-6 py-3 rounded-md">
			<div className="flex justify-between">
				<div>
					<h3 className="text-lg">{plan.title}</h3>
					<span className="text-md">{plan.emphasis}</span>
				</div>
				<p>{plan.desc}</p>
			</div>

			{view && (
				<ul>
					{plan.exercises.map((exercise) => {
						if (exercise.name !== "") {
							return (
								<li>
									<div>
										<h4>{exercise.name}</h4>
										<p>{`${exercise.sets} x ${exercise.reps}`}</p>
									</div>
								</li>
							);
						}
					})}
				</ul>
			)}

			{/* <div className="btn--container">
				<button className={id} onClick={() => deletePlan(id)}>
					Remove Plan
				</button>
			</div> */}
		</div>
	);
};

export default Plan;
