import React, { useState } from "react";
import "../styles/home.css";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

const Home = (props) => {
    const { user } = props;
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!user) {
                setRedirect(true);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [user]);

    return (
        <div className="container">
            {redirect && <Navigate replace to="/fitness-app/landing" />}
            {user && (
                <main className="text-white mx-10 my-5 flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold mb-6">{`Welcome ${user.first_name},`}</h2>
                    <section className="flex flex-col gap-6">
                        <p className="text-xl">
                            When I built this website, I had one goal in mind...
                            <br />
                            <br />
                            I wanted to free people all around the world.
                            <br />
                            <br />
                            These fitness tools I've built into this website
                            will allow for any person to reach their fitness
                            goals. 
                        </p>
                        <span className="text-[#FDCA15] text-xl font-bold">
                            Fitness is yours to take.
                        </span>
                    </section>
                    {!user && (
                        <section className="sign-up--section">
                            <h3>Sign-Up</h3>
                            <p>
                                <strong>
                                    If you want to get your fitness goals in
                                    line, then look no further.{" "}
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
            )}
        </div>
    );
};

export default Home;
