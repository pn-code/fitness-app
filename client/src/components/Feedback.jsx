import axios from "axios";
import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const Feedback = (props) => {
    const { user } = props;

    const client = `http://localhost:3000`;

    const [feedback, setFeedback] = useState({
        author: user._id,
        email: user.email,
        title: "",
        text: "",
    });

    const handleChange = (e) => {
        setFeedback((prevFeedback) => {
            return { ...prevFeedback, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async () => {
        axios({
            method: "POST",
            url: `${client}/feedback`,
            data: { feedback },
        }).then((res) => console.log(`Successfully sent message: ${res}`));
    };

    return (
        <div className="flex flex-col py-8 mx-10 bg-gray-700 text-white p-4 rounded-lg sm:justify-center">
            <h2 className="text-4xl font-bold mb-4 sm:text-center">Send Feedback</h2>
            <form className="flex flex-col gap-2 sm:items-center">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="input-bl w-96"
                        id="title"
                        name="title"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="text">Message:</label>
                    <textarea
                        className="input-bl w-96 resize-none"
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button className="btn-blue w-96" type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Feedback;
