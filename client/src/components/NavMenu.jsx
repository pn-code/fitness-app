import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillCalculator, AiFillBuild } from "react-icons/ai";
import { IoIosJournal } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavMenu = ({ setOpen }) => {
    const handleClick = () => {
        setOpen(false);
    };

    return (
        <div className="absolute -right-5 top-10 bg-[#36338d] w-[200px] h-[920px] rounded-md">
            <ul className="pt-10 p-5 bg-black/85 flex flex-col items-start justify-end text-white gap-16">
                <li>
                    <Link
                        onClick={handleClick}
                        className="flex gap-4 justify-center items-center"
                        to="/fitness-app/"
                    >
                        <AiFillHome size={30} color="white" />
                        <span className="text-xl">HOME</span>
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={handleClick}
                        className="flex gap-4 justify-center items-center"
                        to="/fitness-app/calculator"
                    >
                        <AiFillCalculator size={30} color="white" />
                        <span className="text-xl">CALCULATE</span>
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={handleClick}
                        className="flex gap-4 justify-center items-center"
                        to="/fitness-app/my-plans"
                    >
                        <AiFillBuild size={30} color="white" />
                        <span className="text-xl">PLANS</span>
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={handleClick}
                        className="flex gap-4 justify-center items-center"
                        to="/fitness-app/journal"
                    >
                        <IoIosJournal size={30} color="white" />
                        <span className="text-xl">JOURNAL</span>
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={handleClick}
                        className="flex gap-4 justify-center items-center"
                        to="/fitness-app/profile"
                    >
                        <CgProfile size={30} color="white" />
                        <span className="text-xl">PROFILE</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
