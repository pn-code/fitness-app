import React from "react";
import { useState } from "react";
import axios from "axios";

const AddCalorieGoalModal = ({ closeModal, API_URL, user, setUser }) => {
    const [calorieGoal, setCalorieGoal] = useState("");
console.log(user)
    const handleSubmitCalorieGoal = async (e) => {
        e.preventDefault();
        if (user?._id && calorieGoal !== "") {
            try {
                await axios.put(
                    `${API_URL}/user/${user._id}`,
                    { calorieGoal: calorieGoal },
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );

                setUser((user) => ({
                    ...user,
                    calorieGoal,
                }));

                closeModal();
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="absolute left-0 right-0 top-[30%] bottom-0 m-auto w-[320px] z-[999]">
            <form
                onSubmit={(e) => handleSubmitCalorieGoal(e)}
                className="bg-slate-900 text-white p-12 rounded-md"
            >
                <h1 className="text-2xl font-bold mb-2">Calorie Goal</h1>
                <p className="text-sm text-red-300 mb-4">
                    If unsure, use the calculator page.
                </p>

                <fieldset className="flex flex-col gap-4">
                    <section className="flex flex-col gap-2 mb-4">
                        <label htmlFor="calorie-goal">Calorie Goal: </label>
                        <input
                            onChange={(e) => setCalorieGoal(e.target.value)}
                            value={calorieGoal}
                            className="input-bl w-52"
                            type="number"
                            placeholder="Desired Calorie Goal"
                            id="calorie-goal"
                        />
                    </section>
                </fieldset>

                <fieldset className="flex justify-between gap-2 sm:flex-row">
                    <button
                        onClick={closeModal}
                        type="button"
                        className="btn-blue bg-gray-500 w-28"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn-blue w-28">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddCalorieGoalModal;
