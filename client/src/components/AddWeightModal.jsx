import React from "react";
import { useState } from "react";

const AddWeightModal = ({ action, closeModal }) => {
    const [currentWeight, setCurrentWeight] = useState("")
    const [checkedUnitInput, setCheckedUnitInput] = useState("pounds")

console.log(checkedUnitInput)
    return (
        <div className="absolute left-0 right-0 top-[30%] bottom-0 m-auto w-[320px] z-[999]">
            <form
                onSubmit={action}
                className="bg-slate-900 text-white p-12 rounded-md"
            >
                <h1 className="text-2xl font-bold mb-2">Weight</h1>

                <fieldset className="flex flex-col gap-4">
                    <section>
                        <label htmlFor="current-weight">Current Weight: </label>
                        <input
                            className="input-bl w-36"
                            type="number"
                            placeholder="Current Weight"
                        />
                    </section>

                    <section className="flex justify-between mr-8">
                        <div className="flex items-center">
                            <input
                                defaultChecked
                                onClick={(e) => setCheckedUnitInput(e.target.value)}
                                name="unit"
                                className="mr-2 w-4 h-4"
                                type="radio"
                                value="pounds"
                                id="pounds"
                            />
                            <label htmlFor="pounds">pounds</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                name="unit"
                                className="mr-2 w-4 h-4"
                                type="radio"
                                onClick={(e) => setCheckedUnitInput(e.target.value)}
                                value="kilograms"
                                id="kilograms"
                            />
                            <label htmlFor="kilograms">kilograms</label>
                        </div>
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

export default AddWeightModal;
