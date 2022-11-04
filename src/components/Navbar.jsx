
import homeIcon from '../images/navbar/home.svg'
import calculatorIcon from '../images/navbar/calculator.svg';
import plannerIcon from '../images/navbar/planner.svg';
import journalIcon from '../images/navbar/journal.svg';
import profileIcon from '../images/navbar/profile.svg';

const Navbar = () => {
    return (
    <div className="container">
        <nav className="Navbar">
            <h1 className="logo">Fitness</h1>
            <ul>
                <li>
                    <a href=""><img src={homeIcon}/></a>
                </li>
                <li>
                    <a href=""><img src={calculatorIcon}/></a>
                </li>
                <li>
                    <a href=""><img src={plannerIcon}/></a>
                </li>
                <li>
                    <a href=""><img src={journalIcon}/></a>
                </li>
                <li>
                    <a href=""><img src={profileIcon}/></a>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar;