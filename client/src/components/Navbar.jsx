import React, { useState } from "react";
import NavMenu from "./NavMenu";
import AddWeightModal from "./AddWeightModal";
import AddCalorieGoalModal from "./AddCalorieGoalModal";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);
    const [openAddWeightModal, setOpenAddWeightModal] = useState(false);
    const [openAddCalorieGoalModal, setOpenAddCalorieGoalModal] =
        useState(false);

    const currentUserWeight = user?.weights?.length > 0
        ? user?.weights[user.weights.length - 1].pounds
        : null;
    const currentCalorieGoal = user?.calorieGoal;

    const handleOpenMobileNavbar = () => {
        setOpen((open) => !open);
    };

    return (
        <nav className="flex justify-between items-center p-5 flex-row bg-[#040324] text-white">
            {/* LOGO */}
            <div>
                <Link style={{ textDecoration: "none" }} to="/">
                    <h1 className="text-[24px] font-black text-white sm:text-3xl">
                        FITNESS
                    </h1>
                </Link>

                {openAddWeightModal && (
                    <AddWeightModal
                        user={user}
                        setUser={setUser}
                        closeModal={() => setOpenAddWeightModal(false)}
                    />
                )}

                {openAddCalorieGoalModal && (
                    <AddCalorieGoalModal
                        user={user}
                        setUser={setUser}
                        closeModal={() => setOpenAddCalorieGoalModal(false)}
                    />
                )}

                {/* Weight & Calorie Plan Section */}
                {user && (
                    <section className="flex gap-2 text-sm">
                        <div className="flex gap-1">
                            <h3 className="text-yellow-500">Weight:</h3>
                            <span
                                onClick={() => setOpenAddWeightModal(true)}
                                className="hover:underline cursor-pointer"
                            >
                                {currentUserWeight
                                    ? `${currentUserWeight} lbs`
                                    : "Add Weight"}
                            </span>
                        </div>
                        /
                        <div className="flex gap-1">
                            <h3 className="text-yellow-500">Daily Goal:</h3>
                            <span
                                onClick={() => setOpenAddCalorieGoalModal(true)}
                                className="hover:underline cursor-pointer"
                            >
                                {currentCalorieGoal
                                    ? `${currentCalorieGoal} calories`
                                    : "Add Calorie Range"}{" "}
                            </span>
                        </div>
                    </section>
                )}
            </div>

            {/* MOBILE -> HAMBURGER MENU */}
            {user && (
                <div className="relative md:hidden cursor-pointer z-[999]">
                    <button
                        className="bg-[#040324]"
                        onClick={handleOpenMobileNavbar}
                    >
                        <GiHamburgerMenu size={28} color="white" />
                    </button>
                    {open && <NavMenu setOpen={setOpen} />}
                </div>
            )}

            {/* NAVLINKS */}
            {user && (
                <ul className="hidden md:flex text-white gap-5">
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/"
                        >
                            <AiFillHome size={16} color="white" />
                            <span className="text-lg">HOME</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/calculator"
                        >
                            <AiFillCalculator size={16} color="white" />
                            <span className="text-lg">CALCULATE</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/my-plans"
                        >
                            <AiFillBuild size={16} color="white" />
                            <span className="text-lg">PLANS</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/journal"
                        >
                            <IoIosJournal size={16} color="white" />
                            <span className="text-lg">JOURNAL</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/profile"
                        >
                            <CgProfile size={16} color="white" />
                            <span className="text-lg">PROFILE</span>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
