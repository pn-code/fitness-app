import React, { useState } from "react";
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
            {redirect && <Navigate replace to="/landing" />}
            {user && (
                <main className="text-white mx-10 my-5 flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold mb-6">{`Welcome ${user.firstName},`}</h2>
                    <section className="flex flex-col gap-6">
                        <p className="text-xl">
                            When I built this website, I had one goal in mind...
                            <br />
                            <br />
                            I wanted to free people all around the world.
                            <br />
                            <br />
                            The fitness tools found here will allow for any
                            person to reach their fitness goals.
                        </p>
                        <span className="text-[#FDCA15] text-xl font-bold">
                            Fitness is yours to take.
                        </span>
                    </section>
                </main>
            )}
        </div>
    );
};

export default Home;
