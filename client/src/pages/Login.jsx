import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser, API_URL }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const Navigate = useNavigate();

    const canSubmit = (username !== "" && password !== "") && loading !== true;

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/login`, {
                username,
                password,
            });
            
            if (res.data.status == "Success") {
                setUser(res.data.user);
                Navigate("/")
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    };

    return (
        <div className="flex flex-col bg-[#040324] text-white px-10 pt-10 gap-2 items-center mt-10">
            <h1 className="text-3xl text-center">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-[#040324] flex flex-col items-center justify-center gap-3"
            >
                <div className="flex flex-col">
                    <label htmlFor="username">Username: </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="input-bl"
                        id="username"
                        name="username"
                        type="text"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password: </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="input-bl"
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>

                <button
                    disabled={!canSubmit}
                    className="bg-[#3731e0] text-white mt-5 px-5 py-2 rounded-lg hover:bg-white hover:text-[#040324] ease-in duration-150"
                    type="submit"
                >
                    Log In
                </button>
            </form>

            <Link to="/sign-up">
                <span className="text-white text-[12px] sm:text-sm hover:text-gray-400">
                    Don't have an account? Sign up!
                </span>
            </Link>
        </div>
    );
};

export default Login;
