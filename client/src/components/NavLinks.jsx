import React from "react";
import homeIcon from "../images/navbar/home.svg";
import calculatorIcon from "../images/navbar/calculator.svg";
import plannerIcon from "../images/navbar/planner.svg";
import journalIcon from "../images/navbar/journal.svg";
import profileIcon from "../images/navbar/profile.svg";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
    const { user } = props;

    return (
        <ul className="nav-links">
            <li>
                <Link to="/fitness-app/">
                    <img src={homeIcon} />
                </Link>
            </li>
            <li>
                <Link to="/fitness-app/calculator">
                    <img src={calculatorIcon} />
                </Link>
            </li>
            <li>
                <Link to="/fitness-app/my-plans">
                    <img src={plannerIcon} />
                </Link>
            </li>
            <li>
                <Link to="/fitness-app/journal">
                    <img src={journalIcon} />
                </Link>
            </li>
            <li>
                {!user && (
                    <Link to="/fitness-app/login">
                        <img src={profileIcon} />
                    </Link>
                )}
                {user && (
                    <Link to="/fitness-app/profile">
                        <img src={profileIcon} />
                    </Link>
                )}
            </li>
        </ul>
    );
};

export default NavLinks;
