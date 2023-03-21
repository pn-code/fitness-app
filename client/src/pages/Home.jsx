import React from "react";
import { Link } from "react-router-dom";
import WeightGraph from "../components/WeightGraph";

const Home = ({ user }) => {
    return (
        <div className="w-full">
            {user && (
                <main className="text-white mx-10 my-5 flex flex-col gap-8">
                    <header className="flex justify-between items-center">
                        <h2 className="text-3xl font-semibold">{`Hello, ${user.firstName}.`}</h2>
                        <Link
                            to="/FAQs"
                            className="btn-blue w-32 text-xl text-center mt-0"
                        >
                            See FAQs
                        </Link>
                    </header>

                    {user?._id == 1 && (
                        <div className="text-red-400 text-sm">
                            <h4 className="font-semibold">WARNING: </h4>
                            <span>
                                TEST USER / GUEST INFORMATION IS NOT SAVED.
                            </span>
                        </div>
                    )}

                    <WeightGraph weightData={user.weights} />
                </main>
            )}
        </div>
    );
};

export default Home;
