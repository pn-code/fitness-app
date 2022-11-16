import React from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const { signIn } = props;
    return (
        <nav className="Navbar">
            <h1 className="logo">
                <Link to="/fitness-app/">Fitness</Link>
            </h1>
            <NavLinks/>
        </nav>
    );
};

export default Navbar;
