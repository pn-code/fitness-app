import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    // const { user } = props;
    const user = true;

    const handleClick = () => {
        setOpen((open) => !open);
    };

    return (
        <nav className="flex justify-between items-center p-5 flex-row bg-[#040324]">
            {/* LOGO */}
            <div>
                <Link style={{ textDecoration: "none" }} to="/fitness-app/">
                    <h1 className="text-[20px] font-black text-white">FITNESS</h1>
                </Link>
            </div>

            {/* MOBILE -> HAMBURGER MENU */}
            <div className="relative sm:hidden cursor-pointer">
                <button className="bg-[#040324]" onClick={handleClick}>
                    <GiHamburgerMenu size={28} color="white" />
                </button>
                {open && <NavMenu setOpen={setOpen}/>}
            </div>



            {/* NAVLINKS */}
            {user && (
                <ul className="hidden sm:flex text-white gap-5">
                    <li>
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/fitness-app/"
                        >
                            <AiFillHome size={16} color="white" />
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/fitness-app/calculator"
                        >
                            <AiFillCalculator size={16} color="white" />
                            <span>CALCULATE</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/fitness-app/my-plans"
                        >
                            <AiFillBuild size={16} color="white" />
                            <span>PLANS</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/fitness-app/journal"
                        >
                            <IoIosJournal size={16} color="white" />
                            <span>JOURNAL</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex gap-1 justify-center items-center"
                            to="/fitness-app/profile"
                        >
                            <CgProfile size={16} color="white" />
                            <span>PROFILE</span>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
