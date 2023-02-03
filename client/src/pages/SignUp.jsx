import { Link } from "react-router-dom";

const SignUp = () => {
    const API = "http://localhost:3000/register";

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
                        className="input-bl"
                        id="first_name"
                        name="first_name"
                        type="text"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="last_name">Last Name: </label>
                    <input
                        className="input-bl"
                        id="last_name"
                        name="last_name"
                        type="text"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email: </label>
                    <input
                        className="input-bl"
                        id="email"
                        name="email"
                        type="email"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="username">Username: </label>
                    <input
                        className="input-bl"
                        id="username"
                        name="username"
                        type="text"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password: </label>
                    <input
                        className="input-bl"
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="confirm_password">Confirm Password: </label>
                    <input
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
