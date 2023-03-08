import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavMenu = ({ setOpenNavMenu }) => {
    const closeNavMenu = () => {
        setOpenNavMenu(false);
    };

    return (
        <div className="fixed left-0 top-0 bg-gray-700 w-[100%] h-[100vh] flex flex-col justify-center items-center">
            <section className="flex items-center mb-10 gap-6">
                <h1 className="text-3xl font-bold">FITNESS</h1>
                <button
                    onClick={closeNavMenu}
                    className="btn-blue bg-blue-700 text-xl rounded-full mt-0 font-bold"
                >
                    X
                </button>
            </section>
            <ul className="flex flex-col gap-4 items-start">
                <li className="w-full">
                    <Link
                        onClick={closeNavMenu}
                        className="flex gap-4 items-center hover:bg-blue-700 py-2 px-8 rounded-md"
                        to="/"
                    >
                        <AiFillHome size={30} color="white" />
                        <span className="text-2xl font-semibold">HOME</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        onClick={closeNavMenu}
                        className="flex gap-4 items-center hover:bg-blue-700 py-2 px-8 rounded-md"
                        to="/calculator"
                    >
                        <AiFillCalculator size={30} color="white" />
                        <span className="text-2xl font-semibold">
                            CALCULATE
                        </span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        onClick={closeNavMenu}
                        className="flex gap-4 items-center hover:bg-blue-700 py-2 px-8 rounded-md"
                        to="/my-plans"
                    >
                        <AiFillBuild size={30} color="white" />
                        <span className="text-2xl font-semibold">PLANS</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        onClick={closeNavMenu}
                        className="flex gap-4 items-center hover:bg-blue-700 py-2 px-8 rounded-md"
                        to="/journal"
                    >
                        <IoIosJournal size={30} color="white" />
                        <span className="text-2xl font-semibold">JOURNAL</span>
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        onClick={closeNavMenu}
                        className="flex gap-4 items-center hover:bg-blue-700 py-2 px-8 rounded-md"
                        to="/profile"
                    >
                        <CgProfile size={30} color="white" />
                        <span className="text-2xl font-semibold">PROFILE</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
