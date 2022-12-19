import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import logoIcon from "../images/navbar/lightning.svg";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                <Link to="/fitness-app/">
                    <img className="logo-img" src={logoIcon} alt="lightning" />
                    <h1 className="logo-text">Fitness</h1>
                </Link>
            </div>
            <NavLinks />
        </nav>
    );
};

export default Navbar;
