import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serverAPI from "../api/serverAPI";

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false);

    const Navigate = useNavigate();

    const canSubmit = email !== "" && password !== "" && loading !== true;

    const loginUser = async (e) => {
        setFormError(false);
        setLoading(true);
        e.preventDefault();
        try {
            const res = await serverAPI.post(`/auth/login`, {
                email,
                password,
            });

            if (res.status === 200) {
                setUser(res.data);
                Navigate("/");
            } else {
                throw new Error("Invalid Credentials");
            }
        } catch (error) {
            setFormError(true);
        }
        setLoading(false);
    };

    const loginAsGuest = async () => {
        const res = await serverAPI.post(`/auth/guest`);
        if (res.status === 200) {
            setUser(res.data);
            Navigate("/");
        } else {
            throw new Error("Invalid Credentials");
        }
    };

    return (
        <div className="flex flex-col bg-[#040324] text-white px-10 pt-10 gap-2 items-center mt-10">
            <h1 className="text-3xl text-center">Login</h1>
            {formError && (
                <span className="text-red-400 font-semibold">
                    Invalid Credentials!
                </span>
            )}
            <form
                onSubmit={loginUser}
                className="bg-[#040324] flex flex-col items-center justify-center gap-3"
            >
                <div className="flex flex-col">
                    <label htmlFor="email">Email: </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="input-bl"
                        id="email"
                        name="email"
                        type="email"
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

                <section className="flex gap-4">
                    <button
                        disabled={!canSubmit}
                        className="bg-[#3731e0] text-white mt-5 px-5 py-2 rounded-lg hover:bg-white hover:text-[#040324] ease-in duration-150"
                        type="submit"
                    >
                        Log In
                    </button>
                    <button
                        onClick={loginAsGuest}
                        className="bg-blue-900 text-gray-100 mt-5 px-5 py-2 rounded-lg hover:bg-white hover:text-[#040324] ease-in duration-150"
                        type="button"
                    >
                        Login as Guest
                    </button>
                </section>
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
