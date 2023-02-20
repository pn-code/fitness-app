import { useState } from "react";

const Plan = ({ user, plan, deletePlan }) => {
	const [view, setView] = useState(false);

	const handleView = () => {
		setView((view) => !view);
	};

	return (
		// Show this when view is false...
		<div
			className="bg-slate-700 px-6 py-3 rounded-md"
		>
			<div className="flex flex-col justify-between">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-lg font-bold">{plan.title}</h3>
					<span className="text-lg font-semibold">
						{plan.emphasis}
					</span>
				</div>
				<h4 className="font-semibold mt-2">Description: </h4>
				<p className="text mb-4">{plan.desc}</p>
				{!view && (
					<span onClick={handleView} className="text-xs text-center cursor-pointer">Click to View</span>
				)}
			</div>

			{view && (
				<ul className="flex flex-col gap-1 pb-2">
					<h4 className="font-semibold">Exercises:</h4>
					{plan.exercises.map((exercise, idx) => {
						if (exercise.name !== "") {
							return (
								<li key={idx}>
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
					{plan.userId === user._id && (
						<button
							className="bg-red-500 rounded-md mt-4 py-1 hover:bg-red-400"
							onClick={() => deletePlan(plan._id, plan.userId)}
						>
							Remove Plan
						</button>
					)}
					<span onClick={handleView} className=" mt-8 text-xs text-center cursor-pointer">
						Click to Close
					</span>
				</div>
			)}
		</div>
	);
};

export default Plan;
