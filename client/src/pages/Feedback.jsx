import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import serverAPI from "../api/serverAPI";

const Feedback = ({ user }) => {
    const [feedback, setFeedback] = useState({
        author: user._id,
        email: user.email,
        title: "",
        text: "",
    });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFeedback((prevFeedback) => {
            return { ...prevFeedback, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        const res = await serverAPI.post(`/feedback`, feedback, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        });
        setSent(true);
        setLoading(false);
    };

    return (
        <div className="flex flex-col py-8 mx-10 bg-gray-700 text-white p-4 rounded-lg sm:justify-center">
            <h2 className="text-2xl font-bold mb-4 sm:text-center">
                Send Feedback
            </h2>
            {!sent ? (
                <form className="flex flex-col gap-2 sm:items-center">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title">Title:</label>
                        <input
                            className="input-bl w-54 sm:w-96"
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            value={feedback.title}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text">Message:</label>
                        <textarea
                            className="input-bl w-54 sm:w-96 resize-none"
                            name="text"
                            id="text"
                            cols="30"
                            rows="10"
                            onChange={handleChange}
                            value={feedback.text}
                        ></textarea>
                    </div>

                    <button
                        disabled={loading}
                        className="btn-blue sm:w-96"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="flex flex-col sm:items-center">
                    <span className="sm:text-center">Feedback sent!</span>
                    <button className="btn-blue-light sm:w-96">
                        <Link to="/profile">Return to Profile</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Feedback;
