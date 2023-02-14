import React from "react";
import "../styles/profile.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = (props) => {
	const { user, setUser } = props;

	const handleLogOut = async () => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:3000/log-out",
		}).then((res) => setUser(res.data)).then(() => window.location.reload(false))
	};	

	return (
		<div className="text-white mx-10 my-5 flex flex-col gap-2 sm:justify-center sm:items-center sm:mt-16">
			<div className="mb-5">
				<header>
					<h2 className="text-4xl font-bold">Profile</h2>
					<span className="text-[#FDCA15]">
						Hello, {user?.first_name}.
					</span>
				</header>

				<main className="flex flex-col justify-evenly">
					<button className="btn-blue">Analytics</button>

					<Link
						className="btn-blue text-center"
						to="/feedback"
					>
						Send Feedback
					</Link>
					<button
						className="btn-blue bg-red-500"
						onClick={handleLogOut}
					>
						Log Out
					</button>
				</main>
			</div>
		</div>
	);
};

export default Profile;
