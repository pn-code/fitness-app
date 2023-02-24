import React from "react";
import { Link } from "react-router-dom";
import serverAPI from "../api/serverAPI";

const Profile = (props) => {
    const { user, setUser } = props;

    const logOutUser = async () => {
        await serverAPI.get(`/auth/logout`).then((res) => setUser(res.data));
        setUser(null);
    };

    return (
        <div className="text-white mx-10 my-5 flex flex-col gap-2 sm:justify-center sm:items-center sm:mt-16">
            <div className="mb-5">
                <header>
                    <h2 className="text-4xl font-bold">Profile</h2>
                    <span className="text-[#FDCA15]">
                        Hello, {user?.firstName}.
                    </span>
                </header>

                <main className="flex flex-col justify-evenly">
                    <Link className="btn-blue text-center" to="/feedback">
                        Send Feedback
                    </Link>
                    <a
                        className="btn-blue-light text-center"
                        href="https://github.com/pn-code"
                    >
                        Visit my GitHub
                    </a>
                    <button
                        onClick={logOutUser}
                        className="btn-blue bg-red-600"
                        type="button"
                    >
                        Log Out
                    </button>
                </main>
            </div>
        </div>
    );
};

export default Profile;
