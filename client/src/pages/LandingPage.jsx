import React from "react";

const LandingPage = () => {
    return (
        // Container
        <div className="flex flex-col bg-[#040324] text-white ">
            {/* HERO SECTION */}
            <div className="flex flex-col justify-center items-center my-6">
                <h2 className="font-semibold text-[16px] mb-2">
                    DISCOVER YOUR INNER STRENGTH
                </h2>
                <span className="text-[12px] mx-12 mb-2">
                    Your dream body has never been easier to reach.
                </span>
                <span className="text-[12px] mx-14 mb-6 text-[#FDCA15]">
                    Sign up now and enjoy fundamental fitness tools that are
                    guaranteed to work!
                </span>
                <div>
                    <button className="px-5 py-2 rounded-sm bg-[#272626]">
                        JOIN NOW
                    </button>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div></div>

            {/* FEATURES SECTION */}
            <div className="flex flex-col gap-8">
                {/* CALCULATE */}
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2>CALCULATE</h2>
                        <span>Find your starting point.</span>
                    </div>
                </div>
                {/* PLAN */}
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2>PLAN</h2>
                        <span>Take control of your workouts.</span>
                    </div>
                </div>
                {/* TRACK */}
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2>TRACK</h2>
                        <span>Add success to your to do list.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
