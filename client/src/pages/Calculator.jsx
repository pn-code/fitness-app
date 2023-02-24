import React, { useState } from "react";
import CaloriePlan from "../components/CaloriePlan";
import bulkIcon from "../images/bulk.svg";
import cutIcon from "../images/cut.svg";
import maintainIcon from "../images/maintain.svg";
import { AiFillQuestionCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router";

const Calculator = ({ user, setUser, API_URL }) => {
    const [metric, setMetric] = useState(false);
    const [calories, setCalories] = useState(null);
    const [showActivity, setShowActivity] = useState(false);

    // Input States
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("");
    const [activity, setActivity] = useState("");

    const [cm, setCm] = useState("");
    const [lb, setLb] = useState("");
    const [kg, setKg] = useState("");
    const [feet, setFeet] = useState("");
    const [inch, setInch] = useState("");

    const Navigate = useNavigate();

    const saveWeightAndCaloriesToUser = async (weight, calorieGoal) => {
        // Weight by default is kg, so convert to lbs
        const weightInPounds = parseInt(weight * 2.205);

        // Create weight object to store under user measurements
        const newWeight = {
            pounds: weightInPounds,
            kilograms: weight,
            date: new Date(),
        };

        // Create updated user object
        const updatedObj = user.weights
            ? {
                  calorieGoal,
                  weights: [...user.weights, newWeight],
              }
            : {
                  calorieGoal,
                  weights: [newWeight],
              };

        // Set it in DB
        try {
            await axios.put(`${API_URL}/user/${user._id}`, updatedObj, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            });
        } catch (err) {
            console.error(err);
        }

        // Set it on client side
        setUser((user) => ({ ...user, ...updatedObj }));
        Navigate("/");
    };

    const handleCalculatePlans = (e) => {
        e.preventDefault();
        if (gender == "male") {
            setCalories((10 * weight + 6.25 * height - 5 * age + 5) * activity);
        } else if (gender == "female") {
            setCalories(
                (10 * weight + 6.25 * height - 5 * age - 161) * activity
            );
        }
    };

    const handleWeight = (e) => {
        if (e.target.name === "kg") {
            setKg(e.target.value);
            setWeight(e.target.value);
        } else if (e.target.name === "lb") {
            setLb(e.target.value);
            setWeight(Number(e.target.value) * 0.453592);
        }
    };

    const handleHeight = (e) => {
        if (e.target.name === "cm") {
            setCm(e.target.value);
            setHeight(e.target.value);
        } else if (e.target.name === "feet") {
            setFeet(e.target.value);
            setHeight((Number(e.target.value) * 12 + Number(inch)) * 2.54);
        } else if (e.target.name === "inch") {
            const total = Number(feet) * 12 + Number(e.target.value);
            setInch(e.target.value);
            setHeight(total * 2.54);
        }
    };

    const changeMetric = () => {
        setMetric((metric) => !metric);
    };

    return (
        <div className="text-white mx-10 my-5 flex flex-col gap-2 sm:justify-center sm:items-center sm:mt-16">
            {/* HEADER */}
            <div className="mb-5">
                <h2 id="top" className="text-4xl font-bold">
                    Calorie Calculator
                </h2>

                <span>
                    Using{" "}
                    <a
                        className="hover:underline"
                        target="_blank"
                        rel="noreferrer"
                        href="https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation"
                    >
                        Mifflin St. Jeor Formula.
                    </a>
                </span>
            </div>

            <form
                onSubmit={(e) => handleCalculatePlans(e)}
                className="flex flex-col gap-4 rounded-md justify-center bg-gray-700 items-center py-8 mb-20 sm:w-[500px]"
            >
                <span className="text-md font-semibold sm:text-2xl">
                    Find your starting point.
                </span>

                {/* Weight Input */}
                {metric ? (
                    <div className="flex flex-col gap-2 sm:px-8">
                        <label htmlFor="input">Weight in kilograms:</label>
                        <input
                            className="input-bl mb-3"
                            id="kg"
                            name="kg"
                            placeholder="weight in kg"
                            type="number"
                            onChange={(e) => handleWeight(e)}
                            value={kg}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 sm:px-8">
                        <label htmlFor="input">Weight in pounds</label>
                        <input
                            className="input-bl mb-3"
                            id="lb"
                            name="lb"
                            placeholder="weight in lb"
                            type="number"
                            onChange={(e) => handleWeight(e)}
                            value={lb}
                        />
                    </div>
                )}

                {/* Height Input */}
                {metric ? (
                    <div className="flex flex-col gap-1 sm:px-8">
                        <label htmlFor="cm">Height (cm):</label>
                        <input
                            className="input-bl"
                            id="cm"
                            name="cm"
                            type="number"
                            placeholder="height in cm"
                            onChange={(e) => handleHeight(e)}
                            value={cm}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <span>Height (ft & in):</span>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="inch">Feet:</label>
                            <input
                                className="input-bl"
                                id="feet"
                                name="feet"
                                type="number"
                                placeholder="feet"
                                onChange={(e) => handleHeight(e)}
                                value={feet}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="inch">Inches:</label>
                            <input
                                className="input-bl"
                                id="inch"
                                name="inch"
                                type="number"
                                placeholder="inches"
                                onChange={(e) => handleHeight(e)}
                                value={inch}
                            />
                        </div>
                    </div>
                )}

                {/* Age Input */}
                <div className="flex flex-col gap-2 sm:px-8">
                    <label htmlFor="age">Age:</label>
                    <input
                        className="input-bl"
                        id="age"
                        name="age"
                        type="number"
                        placeholder="age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-2 sm:px-8 mt-2 sm:flex-row">
                    <span htmlFor="gender">Gender:</span>
                    <div className="flex gap-8">
                        <div className="flex items-center justify-center">
                            <input
                                defaultChecked
                                onChange={(e) => setGender(e.target.value)}
                                value="male"
                                id="gender-male"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Male</label>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                onChange={(e) => setGender(e.target.value)}
                                value="female"
                                id="gender-female"
                                name="gender"
                                className="w-4 mr-2"
                                type="radio"
                            />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>
                </div>

                {/* Activity */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <div className="flex justify-between">
                        <label className="mr-[2px]" htmlFor="activity">
                            Activity:
                        </label>
                        <AiFillQuestionCircle
                            onClick={() => setShowActivity((show) => !show)}
                            className="cursor-pointer"
                            size={20}
                            color="#FDCA15"
                        />
                    </div>

                    <select
                        onChange={(e) => setActivity(e.target.value)}
                        className="text-black rounded-sm px-1 py-1"
                        name="activity"
                        id="activity"
                    >
                        <option value="">SELECT AN OPTION</option>
                        <option value={1.2}>Sedentary</option>
                        <option value={1.375}>Lightly Active</option>
                        <option value={1.55}>Moderately Active</option>
                        <option value={1.725}>Very Active</option>
                        <option value={1.9}>Extremely Active</option>
                    </select>
                </div>

                {/* Activity Caption */}
                {showActivity && (
                    <ul className="flex flex-col gap-2 mx-8 w-[180px] sm:text-sm sm:w-[250px]">
                        <li>
                            <span className="text-[#FDCA15]">Sedentary</span> -
                            Little to no exercise, such as a desk job with no
                            additional physical activity
                        </li>
                        <li>
                            <span className="text-[#FDCA15]">
                                Lightly Active
                            </span>{" "}
                            - Light exercise 1-2 days/week
                        </li>
                        <li>
                            <span className="text-[#FDCA15]">
                                Moderately Active
                            </span>{" "}
                            - Moderate exercise 3-5 days/week
                        </li>
                        <li>
                            <span className="text-[#FDCA15]">Very Active</span>{" "}
                            - Hard exercise 6-7 days/week
                        </li>
                        <li>
                            <span className="text-[#FDCA15]">
                                Extremely Active
                            </span>{" "}
                            - Hard daily exercise and physical job or two times
                            a day training
                        </li>
                    </ul>
                )}

                <div className="flex flex-col sm:flex-row sm:gap-2">
                    <button
                        className="btn-blue-light"
                        type="button"
                        onClick={changeMetric}
                    >
                        Change Units
                    </button>
                    <button className="btn-blue" type="submit">
                        Calculate
                    </button>
                </div>
            </form>

            {calories && (
                <div className="calculator--output">
                    {calories && (
                        <div className="flex flex-col justify-center items-center my-4 gap-2">
                            <h3 className="text-xl">Your Results: </h3>
                            <p>
                                Your daily calorie consumption required for
                                maintenance is around{" "}
                                <span className="text-[#FDCA15]">
                                    {parseInt(calories)} calories.
                                </span>
                            </p>
                        </div>
                    )}

                    <h3 className="text-center mb-8 font-bold underline">
                        Choose Your Calorie Plan Below.
                    </h3>

                    <div className="bg-slate-700 rounded-lg p-5 mb-16 sm:bg-transparent">
                        <div className="flex flex-col gap-8">
                            <CaloriePlan
                                imgSrc={maintainIcon}
                                setPlan={() =>
                                    saveWeightAndCaloriesToUser(
                                        weight,
                                        parseInt(calories)
                                    )
                                }
                                planName="Maintain"
                                planInfo="To maintain your weight, you should aim to hit your maintenance
                            calories."
                                calorieGoal={parseInt(calories)}
                            />
                            <CaloriePlan
                                imgSrc={bulkIcon}
                                setPlan={() =>
                                    saveWeightAndCaloriesToUser(
                                        weight,
                                        `${
                                            parseInt(calories) + 300
                                        } - ${parseInt(calories + 500)}`
                                    )
                                }
                                planName="Bulk"
                                planInfo="To gain weight, add
                                300-500 calories to your maintenance calories."
                                calorieGoal={`${
                                    parseInt(calories) + 300
                                } - ${parseInt(calories + 500)}`}
                            />
                            <CaloriePlan
                                imgSrc={cutIcon}
                                setPlan={() =>
                                    saveWeightAndCaloriesToUser(
                                        weight,
                                        `${parseInt(
                                            calories - 1000
                                        )}-${parseInt(calories - 500)}`
                                    )
                                }
                                planName="Cut"
                                planInfo="To lose weight, remove
                                500-1000 calories from your maintenance calories."
                                calorieGoal={`${parseInt(
                                    calories - 1000
                                )}-${parseInt(calories - 500)}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;
