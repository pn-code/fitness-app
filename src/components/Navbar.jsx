import React from "react";
import homeIcon from "../images/navbar/home.svg";
import calculatorIcon from "../images/navbar/calculator.svg";
import plannerIcon from "../images/navbar/planner.svg";
import journalIcon from "../images/navbar/journal.svg";
import profileIcon from "../images/navbar/profile.svg";
import { Link } from "react-router-dom";
import { auth } from "../utility/firebase";

const Navbar = (props) => {
    // const [loginStatus, setLoginStatus] = React.useState(false);

    // React.useEffect(() => {
    //     setLoginStatus(() => auth.currentUser ? true : false)
    // }, [auth.currentUser])

    return (
        <nav className="Navbar">
            <h1 className="logo">
                <Link to="/fitness-app/">Fitness</Link>
            </h1>
            <ul>
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
                    {!auth.currentUser && (
                        <button onClick={props.signIn}>Login</button>
                    )}
                    {auth.currentUser && (
                        <Link to="/fitness-app/profile">
                            <img src={profileIcon} />
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
