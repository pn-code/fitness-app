import React from "react";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="container">
            <main className="Home">
                <section className="introduction">
                    <h1>Hello!</h1>
                    <h3>
                        If this is your first time here, please read this...
                    </h3>
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
            </main>
        </div>
    );
};

export default Home;
