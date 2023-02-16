import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const { user } = props;

    const handleClick = () => {
        setOpen((open) => !open);
    };

    return (
        <nav className="flex justify-between items-center p-5 flex-row bg-[#040324]">
            {/* LOGO */}
            <div>
                <Link style={{ textDecoration: "none" }} to="/">
                    <h1 className="text-[20px] font-black text-white sm:text-3xl">
                        FITNESS
                    </h1>
                </Link>
            </div>

            {/* MOBILE -> HAMBURGER MENU */}
            {user && (
                <div className="relative sm:hidden cursor-pointer">
                    <button className="bg-[#040324]" onClick={handleClick}>
                        <GiHamburgerMenu size={28} color="white" />
                    </button>
                    {open && <NavMenu setOpen={setOpen} />}
                </div>
            )}

            {/* NAVLINKS */}
            {user && (
                <ul className="hidden sm:flex text-white gap-5">
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/"
                        >
                            <AiFillHome size={16} color="white" />
                            <span className="sm:text-lg">HOME</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/calculator"
                        >
                            <AiFillCalculator size={16} color="white" />
                            <span className="sm:text-lg">CALCULATE</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/my-plans"
                        >
                            <AiFillBuild size={16} color="white" />
                            <span className="sm:text-lg">PLANS</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/journal"
                        >
                            <IoIosJournal size={16} color="white" />
                            <span className="sm:text-lg">JOURNAL</span>
                        </Link>
                    </li>
                    <li className="hover:scale-110 ease-linear duration-200">
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/profile"
                        >
                            <CgProfile size={16} color="white" />
                            <span className="sm:text-lg">PROFILE</span>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
