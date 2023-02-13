import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const canLogin = (username != "") && (password != "");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("https://fitness-api-gssp.onrender.com/login", {
                username,
                password,
            });
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col bg-[#040324] text-white px-10 pt-10 gap-2 items-center">
            <h1 className="text-3xl text-center">Login</h1>
            <form className="bg-[#040324] flex flex-col items-center justify-center gap-3">
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
                    disabled={!canLogin}
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
