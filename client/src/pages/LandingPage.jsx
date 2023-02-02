import React, { useState, useEffect } from "react";
import { BsCalculatorFill, BsJournalRichtext } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import previewImage from "../images/fitness-preview.jpg";

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
            <div className="flex flex-col justify-center items-center mt-10 sm:my-80 gap-2 sm:gap-4">
                <h2 className="font-semibold text-[16px] mb-2 sm:text-5xl">
                    DISCOVER YOUR INNER STRENGTH
                </h2>
                <span className="text-[12px] sm:text-3xl">
                    Your dream body has never been easier to reach.
                </span>
                <span className="text-[12px] text-[#FDCA15] sm:text-2xl">
                    Sign up now and enjoy fundamental fitness tools that are
                    guaranteed to work!
                </span>
                <div>
                    <button className="px-5 py-2 sm:px-8 sm:py-4 mt-3 rounded-sm bg-[#272626] font-semibold sm:text-3xl hover:bg-white hover:text-gray-800">
                        JOIN NOW
                    </button>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div>
                <img src={previewImage} />
            </div>

            {/* FEATURES SECTION */}
            <div className="flex flex-col gap-8 my-5 sm:gap-20 lg:items-center">
                {/* CALCULATE */}
                <div className="flex gap-8 sm:gap-16 hover:scale-105 duration-200 ease-linear">
                    <div className="flex justify-center items-center bg-white w-[70px] h-[70px] sm:h-52 sm:w-52 rounded-xl">
                        <BsCalculatorFill
                            size={matches ? 180 : 60}
                            color="#6184FE"
                        />
                    </div>
                    <div>
                        <h2 className="text-[20px] font-bold sm:text-5xl mb-8">
                            CALCULATE
                        </h2>
                        <span className="text-[12px] sm:text-2xl">
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
                        <h2 className="text-[20px] font-bold sm:text-5xl mb-8">PLAN</h2>
                        <span className="text-[12px] sm:text-2xl">
                            Take control of your workouts.
                        </span>
                    </div>
                </div>
                {/* TRACK */}
                <div className="flex gap-8 sm:gap-16 hover:scale-105 duration-200 ease-linear">
                    <div className="flex justify-center items-center bg-white w-[70px] h-[70px] sm:h-52 sm:w-52 rounded-xl">
                        <BsJournalRichtext size={matches ? 180 : 60} color="#6184FE" />
                    </div>

                    <div>
                        <h2 className="text-[20px] font-bold sm:text-5xl mb-8">TRACK</h2>
                        <span className="text-[12px] sm:text-2xl">
                            Add success to your to do list.
                        </span>
                    </div>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="flex flex-col justify-center items-center gap-4 mb-20">
                <span className="font-semibold text-[16px]">
                    So what are you waiting for?
                </span>
                <button className="px-5 py-2 rounded-sm bg-[#272626] font-semibold">
                    JOIN NOW
                </button>
                <h2 className="text-[#FDCA15] text-[20px] font-black mb-10">
                    SUCCESS GUARANTEED!
                </h2>
            </div>
        </div>
    );
};

export default LandingPage;
