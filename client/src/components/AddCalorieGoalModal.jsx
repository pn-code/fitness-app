import React, { useState } from "react";
import serverAPI from "../api/serverAPI";

const AddCalorieGoalModal = ({ closeModal, user, setUser }) => {
    const [calorieGoal, setCalorieGoal] = useState("");

    const handleSubmitCalorieGoal = async (e) => {
        e.preventDefault();
        if (user?._id && calorieGoal !== "" && user?._id != 1) {
            try {
                await serverAPI.put(
                    `/user/${user._id}`,
                    { calorieGoal: calorieGoal },
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
        
        setUser((user) => ({
            ...user,
            calorieGoal,
        }));

        closeModal();
    };

    return (
        <div className="fixed left-0 top-0 bg-gray-700/90 w-[100%] h-[100vh] flex flex-col justify-center items-center z-[9999]">
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
