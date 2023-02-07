import React, { useState, useEffect } from "react";
import { BsCalculatorFill, BsJournalRichtext } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import previewImage from "../images/fitness-preview.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 640px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 640px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        // Container
        <div className="flex flex-col bg-[#040324] text-white px-10 gap-16">
            {/* HERO SECTION */}
            <div className="flex flex-col justify-center items-center mt-6 sm:my-72 gap-2 sm:gap-4">
                <h2 className="font-semibold text-2xl sm:text-5xl">
                    DISCOVER YOUR INNER STRENGTH
                </h2>
                <span className="text-md sm:text-3xl">
                    Your dream body has never been easier to reach.
                </span>
                <span className="text-sm text-[#FDCA15] sm:text-2xl">
                    Sign up now and enjoy fitness tools that are guaranteed to
                    work!
                </span>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/fitness-app/sign-up">
                        <button className="text-xl px-5 py-2 sm:px-8 sm:py-4 mt-3 rounded-sm bg-[#272626] font-semibold sm:text-3xl hover:bg-white hover:text-gray-800">
                            JOIN NOW
                        </button>
                    </Link>
                    <Link to="/fitness-app/login">
                        <span className="text-sm sm:text-lg hover:text-gray-400">
                            Already have an account? Log In.
                        </span>
                    </Link>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-semibold text-2xl sm:text-5xl mb-5">MANIFEST GREATNESS</h2>
                <img className="rounded-md mb-3 max-h-[700px]" src={previewImage} />
                <span className="text-sm sm:text-lg">
                    Image by{" "}
                    <a
                    className="hover:underline"
                        target="_about"
                        rel="noreferrer"
                        href="https://unsplash.com/@alexlperson"
                    >
                        Alex Person
                    </a>
                </span>
            </div>

            {/* FEATURES SECTION */}
            <div className="flex flex-col gap-8 my-5 sm: sm:my-20 sm:gap-20 lg:items-center">
                <h1 className="font-black text-3xl sm:text-5xl sm:mb-10">
                    USE OUR TOOLS TO:
                </h1>
                {/* CALCULATE */}
                <div className="flex gap-8 sm:gap-16 hover:scale-105 duration-200 ease-linear lg:w-[575px]">
                    <div className="flex justify-center items-center bg-white w-[70px] h-[70px] sm:h-52 sm:w-52 rounded-xl">
                        <BsCalculatorFill
                            size={matches ? 180 : 60}
                            color="#6184FE"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold sm:text-5xl mb-2">
                            CALCULATE
                        </h2>
                        <span className="text-sm sm:text-2xl">
                            Find your starting point.
                        </span>
                    </div>
                </div>
                {/* PLAN */}
                <div className="flex gap-8 sm:gap-16 hover:scale-105 duration-200 ease-linear">
                    <div className="flex justify-center items-center bg-white w-[70px] h-[70px] sm:h-52 sm:w-52 rounded-xl">
                        <BiRun size={matches ? 180 : 60} color="#6184FE" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold sm:text-5xl mb-2">
                            PLAN
                        </h2>
                        <span className="text-sm sm:text-2xl">
                            Take control of your workouts.
                        </span>
                    </div>
                </div>
                {/* TRACK */}
                <div className="flex gap-8 sm:gap-16 hover:scale-105 duration-200 ease-linear">
                    <div className="flex justify-center items-center bg-white w-[70px] h-[70px] sm:h-52 sm:w-52 rounded-xl">
                        <BsJournalRichtext
                            size={matches ? 180 : 60}
                            color="#6184FE"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold sm:text-5xl mb-2">
                            TRACK
                        </h2>
                        <span className="text-sm sm:text-2xl">
                            Add success to your to do list.
                        </span>
                    </div>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="flex flex-col justify-center items-center gap-8 mb-20 mt-12 sm:my-60 sm:gap-16">
                <span className="font-semibold text-2xl sm:text-5xl">
                    What are you waiting for?
                </span>
                <Link to="/fitness-app/sign-up">
                    <button className="text-xl px-5 py-2 sm:px-20 sm:py-8 rounded-md bg-[#272626] font-semibold sm:text-5xl hover:bg-white hover:text-gray-800">
                        JOIN NOW
                    </button>
                </Link>
                <h2 className="text-[#FDCA15] text-xl font-black mb-10 sm:text-2xl">
                    SUCCESS GUARANTEED!
                </h2>
            </div>
        </div>
    );
};

export default LandingPage;
