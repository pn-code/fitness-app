import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = ({API_URL}) => {
    const API = `${API_URL}/auth/register`;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [register, setRegister] = useState(false);

    const Navigate = useNavigate();

    const registerUser = async () => {
        setLoading(true);

        const user = {
            firstName,
            lastName,
            email,
            password,
        };

        // If password & confirm password are equivalent, proceed with API call
        if (confirmPw === password) {
            try {
                const res = await axios.post(API, user);
                setMessage(res.data.message);
                if (res.data.status === "Success") {
                    setLoading(false);
                    setRegister(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        setLoading(false);
        Navigate("/login")
    };

    return (
        <div className="flex flex-col bg-[#040324] text-white px-10 gap-16">
            {register && <Navigate replace to="/login" />}
            <form className="bg-[#040324] flex flex-col items-center justify-center gap-3">
                <h2 className="text-3xl text-center mb-4">SIGN UP</h2>
                <span className="text-red-300">{message && message}</span>
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
                    disabled={loading}
                    onClick={registerUser}
                    className="bg-[#3731e0] text-white mt-5 px-5 py-2 rounded-lg hover:bg-white hover:text-[#040324] ease-in duration-150 disabled:bg-gray-700 disabled:cursor-not-allowed"
                    type="button"
                >
                    Register
                </button>
                <Link to="/login">
                    <span className="text-white text-[12px] sm:text-sm hover:text-gray-400">
                        Already have an account? Log In.
                    </span>
                </Link>
            </form>
        </div>
    );
};

export default SignUp;
