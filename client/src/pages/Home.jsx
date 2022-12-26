import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="container">
            <main className="Home">
                <section className="introduction">
                    <h2>{`Welcome Guest,`}</h2>
                    {}
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
                <section className="sign-up--section">
                    <h2>Sign-Up</h2>
                    <p>
                        <strong>
                            If you want to get your fitness goals in line, then
                            look no further.{" "}
                        </strong>
                        <br />
                        <br />
                        Create an account with us to make significant progress
                        towards your fitness goals.
                    </p>
                    <div className="sign-up--container">
                        <Link to="/fitness-app/sign-up">
                            <button>Sign Up</button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
