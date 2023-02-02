import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import logoIcon from "../images/navbar/lightning.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
    const { user } = props;

    return (
        <nav className="flex justify-between items-center p-5 flex-row bg-[#040324]">
            {/* LOGO */}
            <div>
                <Link style={{ textDecoration: "none" }} to="/fitness-app/">
                    <h1 className="text-2xl font-black text-white">FITNESS</h1>
                </Link>
            </div>

            {/* MOBILE -> HAMBURGER MENU */}
            <div>
                <GiHamburgerMenu size={32} color="white"/>
            </div>

            {/* {user && <NavLinks user={user}/>} */}
        </nav>
    );
};

export default Navbar;
