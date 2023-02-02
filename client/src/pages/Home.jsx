import React from "react";
import "../styles/home.css";
import { Link, Navigate } from "react-router-dom";

const Home = (props) => {
    const { user } = props;
    const redirect = user == null;

    return (
        <div className="container">
            {redirect && <Navigate replace to="/fitness-app/landing" />}
            <main className="Home">
                <h2>{`Welcome ${user ? user.first_name : `Guest`},`}</h2>
                <section className="about">
                    <h3>About</h3>
                    <p>
                        This fitness app was developed to access fundamental
                        fitness tools required for achieve success no matter
                        your fitness standards.
                        <br></br>
                        <br></br>
                        Feel free to try out the functionalities built in to
                        this website
                    </p>
                    <ul>
                        <li>
                            Calculator - Determine how you can meet your fitness
                            goals.
                        </li>
                        <li>
                            Planner - Create exercise plans to attack your
                            fitness goals!
                        </li>
                        <li>
                            Journal - Keep track of your calories and exercise
                            each day.
                        </li>
                    </ul>
                </section>
                {!user && (
                    <section className="sign-up--section">
                        <h3>Sign-Up</h3>
                        <p>
                            <strong>
                                If you want to get your fitness goals in line,
                                then look no further.{" "}
                            </strong>
                            <br />
                            <br />
                            Create an account with us to make significant
                            progress towards your fitness goals.
                        </p>
                        <div className="sign-up--container">
                            <Link to="/fitness-app/sign-up">
                                <button>Sign Up</button>
                            </Link>
                            <Link to="/fitness-app/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Home;
