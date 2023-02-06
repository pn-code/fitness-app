import React from "react";
import { useEffect } from "react";
import Plan from "../components/Plan";
import Planner from "../components/Planner";
import axios from "axios";

const API = "http://localhost:3000/plans/";

const MyPlans = ({ user, userData, setFetchData }) => {
	const [savedPlans, setSavedPlans] = React.useState([]);
	const [renderPlanner, setRenderPlanner] = React.useState(false);

	const fetchPlans = async () => {
		const res = await axios.get(API + user?._id);
		setSavedPlans(res.data.plans);
	};

	// Loads savedPlans on start with information from database
	useEffect(() => {
		if (user) {
			fetchPlans();
		}
	}, [user]);

	const deletePlan = async (planId, planUserId) => {
		// // Delete selected plan from database
		await axios.delete(API, {
			data: {
				userId: user._id,
				planUserId: planUserId,
				currentPlanId: planId,
			},
		});

		// Delete from savedEntries via setSavedEntries
		setSavedPlans((prevSavedPlans) =>
			prevSavedPlans.filter((plan) => planId !== plan._id)
		);
	};

	return (
		<div className="text-white mx-10">
			<div className="MyPlans">
				<header>
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl mt-3">
							{!renderPlanner
								? `Training Plans`
								: `Create a Plan`}
						</h2>
						<button
							className="btn-blue-light"
							onClick={() =>
								setRenderPlanner(
									(prevRenderPlanner) => !prevRenderPlanner
								)
							}
						>
							{!renderPlanner
								? `Create New Plan`
								: `My Plans: ${savedPlans.length}`}
						</button>
					</div>
				</header>
				{!renderPlanner && (
					<main className="plans--container">
						{savedPlans.length === 0 && (
							<h4>You currently have no training plans.</h4>
						)}
						<ul className="flex flex-col gap-6">
							{savedPlans.map((plan) => (
								<Plan
									plan={plan}
									key={plan._id}
									deletePlan={deletePlan}
									user={user}
								/>
							))}
						</ul>
					</main>
				)}
				{renderPlanner && (
					<Planner
						user={user}
						setSavedPlans={setSavedPlans}
						deletePlan={deletePlan}
            fetchPlans={fetchPlans}
					/>
				)}
			</div>
		</div>
	);
};

export default MyPlans;
