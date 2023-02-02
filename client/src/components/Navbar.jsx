import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = (props) => {
    // const { user } = props;
    const user = true;

    return (
        <nav className="flex justify-between items-center p-5 flex-row bg-[#040324]">
            {/* LOGO */}
            <div>
                <Link style={{ textDecoration: "none" }} to="/fitness-app/">
                    <h1 className="text-2xl font-black text-white">FITNESS</h1>
                </Link>
            </div>

            {/* MOBILE -> HAMBURGER MENU */}
            <div className="sm:hidden">
                <GiHamburgerMenu size={32} color="white" />
            </div>

            {/* NAVLINKS */}
            {user && (
                <ul className="hidden sm:flex text-white gap-5">
                    <li>
                        <Link className="flex gap-1 justify-center items-center" to="/fitness-app/">
                            <AiFillHome size={16} color="white"/>
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link  className="flex gap-1 justify-center items-center" to="/fitness-app/calculator">
                            <AiFillCalculator size={16} color="white"/>
                            <span>CALCULATE</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 justify-center items-center" to="/fitness-app/my-plans">
                            <AiFillBuild size={16} color="white"/>
                            <span>PLANS</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 justify-center items-center" to="/fitness-app/journal">
                            <IoIosJournal size={16} color="white"/>
                            <span>JOURNAL</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 justify-center items-center" to="/fitness-app/profile">
                            <CgProfile size={16} color="white"/>
                            <span>PROFILE</span>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
