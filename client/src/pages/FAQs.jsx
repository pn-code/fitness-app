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

                            <h6 className="underline">
                                Step 1: Set your weight & daily goal.
                            </h6>

                            <p className="block text-gray-300 text-[15px]">
                                Click on weight/daily goal by the top-left
                                corner or visit the CALCULATE link and select a
                                plan.
                            </p>

                            <h6 className="underline">
                                Step 2: Add or create an exercise plan.
                            </h6>
                            <p className="block text-gray-300 text-[15px]">
                                Visit the PLANS link to add/create a plan.
                            </p>

                            <h5 className="underline">
                                Step 3: Utilize the journal.
                            </h5>
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
                        <section className="text-[16px] flex flex-col gap-2">
                            <p>
                                Exercise selection can be simple, but can be
                                overcomplicated quickly. If you do not know what
                                exercises to choose and how to put together a
                                plan, read this before moving forward.
                            </p>

                            <h6 className="mt-2">
                                Choose 1-2 movements for each muscle group
                                listed below.
                            </h6>

                            <ul className="list-disc mx-5">
                                <li>Back</li>
                                <li>Chest & Shoulders</li>
                                <li>Hamstrings & Glutes</li>
                                <li>Quadriceps</li>
                                <li>(Optional) Abdominals</li>
                                <li>(Optional) Biceps</li>
                                <li>(Optional) Triceps</li>
                                <li>(Optional) Calves</li>
                                <li>(Optional) Forearms</li>
                                <li>(Optional) Neck</li>
                            </ul>

                            <p>
                                As you can see there are several large muscle
                                groups that you should target. There are also
                                smaller muscle groups I've included that are
                                optional. Please feel free to include other
                                muscle groups you may feel are important.
                            </p>

                            <p>
                                Here's a simple exercise plan I've created from
                                the muscle groups I deemed mandatory above:
                            </p>

                            <ul className="list-disc mx-5">
                                <li>
                                    <h6>Back:</h6>
                                    <span>Pull-ups & Rows</span>
                                </li>
                                <li>
                                    <h6>Chest & Shoulders:</h6>
                                    <span>Bench Press & Overhead Press</span>
                                </li>
                                <li>
                                    <h6>Hamstrings & Glutes:</h6>
                                    <span>Deadlifts & Leg Curls</span>
                                </li>
                                <li>
                                    <h6>Quadriceps:</h6>
                                    <span>Back Squats</span>
                                </li>
                            </ul>

                            <p>
                                Now that you have your exercises. You can set
                                them up to fit into your desired training split.
                            </p>
                        </section>
                    </article>
                </section>

                <section></section>
            </main>
        </div>
    );
};

export default FAQs;
