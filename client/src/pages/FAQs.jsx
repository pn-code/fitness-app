import React from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
    return (
        <div>
            <main className="text-white mx-10 my-5 flex flex-col gap-4">
                <h2 className="text-3xl font-semibold mb-6">
                    Frequently Asked Questions
                </h2>

                <section className="flex flex-col gap-6">
                    <article>
                        <h4 className="text-xl text-yellow-400 mb-2">
                            What is this website for?
                        </h4>
                        <p className="text-[16px]">
                            This fitness app was developed to provide users
                            access to fundamental fitness tools that will enable
                            user to achieve their fitness goals.
                        </p>
                    </article>

                    <article>
                        <h4 className="text-xl text-yellow-400 mb-2">
                            How do I start?
                        </h4>
                        <div className="flex flex-col gap-2 text-[16px]">
                            <h5>Simply follow this QUICK 3-STEP GUIDE:</h5>

                            <h6 className="underline">Step 1: Set your weight & daily goal.</h6>

                            <p className="block text-gray-300 text-[15px]">
                                Click on weight/daily goal by the top-left
                                corner or visit the CALCULATE link and select a
                                plan.
                            </p>

                            <h6 className="underline">Step 2: Add or create an exercise plan.</h6>
                            <p className="block text-gray-300 text-[15px]">
                                Visit the PLANS link to add/create a plan.
                            </p>

                            <h5 className="underline">Step 3: Utilize the journal.</h5>
                            <p className="block text-gray-300 text-[15px]">
                                Visit the JOURNAL link to add entries, fill out
                                exercise plans done, and calories consumed.
                            </p>
                        </div>
                    </article>

                    <article>
                        <h4 className="text-xl text-yellow-400 mb-2">
                            Exercise Selection
                        </h4>
                        <p className="text-[16px]">
                            Head over to our exercise explorer.
                        </p>
                    </article>
                </section>

                <section></section>
            </main>
        </div>
    );
};

export default FAQs;
