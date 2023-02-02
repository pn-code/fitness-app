import React from "react";

const LandingPage = () => {
    return (
        // Container
        <div className="flex flex-col bg-[#040324]">
            {/* HERO SECTION */}
            <div className="text-white flex flex-col justify-center items-center my-6">
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
                    <button className="px-5 py-2 rounded-sm bg-[#272626]">JOIN NOW</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
