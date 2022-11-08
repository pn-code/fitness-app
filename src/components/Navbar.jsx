
import homeIcon from '../images/navbar/home.svg'
import calculatorIcon from '../images/navbar/calculator.svg';
import plannerIcon from '../images/navbar/planner.svg';
import journalIcon from '../images/navbar/journal.svg';
import profileIcon from '../images/navbar/profile.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className="container">
        <nav className="Navbar">
            <h1 className="logo"><Link to="/">Fitness</Link></h1>
            <ul>
                <li>
                    <Link to="/"><img src={homeIcon}/></Link>
                </li>
                <li>
                    <Link to="/calculator"><img src={calculatorIcon}/></Link>
                </li>
                <li>
                    <Link to="/planner"><img src={plannerIcon}/></Link>
                </li>
                <li>
                    <Link to="/journal"><img src={journalIcon}/></Link>
                </li>
                <li>
                    <Link to="/profile"><img src={profileIcon}/></Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;