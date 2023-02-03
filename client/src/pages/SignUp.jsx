import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
    const API = "http://localhost:3000/register";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    return (
        <div className="flex flex-col bg-[#040324] text-white px-10 gap-16">
            <form
                className="bg-[#040324] flex flex-col items-center justify-center gap-3"
                action={API}
                method="POST"
            >
                <h2 className="text-3xl text-center mb-4">SIGN UP</h2>
                <div className="flex flex-col">
                    <label htmlFor="first_name">First Name: </label>
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className="input-bl"
                        id="first_name"
                        name="first_name"
                        type="text"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="last_name">Last Name: </label>
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        className="input-bl"
                        id="last_name"
                        name="last_name"
                        type="text"
                    />
                </div>

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

                <div className="flex flex-col">
                    <label htmlFor="confirm_password">Confirm Password: </label>
                    <input
                        onChange={(e) => setConfirmPw(e.target.value)}
                        value={confirmPw}
                        className="input-bl"
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                    />
                </div>

                <button
                    className="bg-[#3731e0] text-white mt-5 px-5 py-2 rounded-lg hover:bg-white hover:text-[#040324] ease-in duration-150"
                    type="submit"
                >
                    Register
                </button>
                <Link to="/fitness-app/login">
                    <span className="text-white text-[12px] sm:text-sm hover:text-gray-400">
                        Already have an account? Log In.
                    </span>
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
