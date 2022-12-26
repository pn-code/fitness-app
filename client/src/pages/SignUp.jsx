import { Link } from "react-router-dom";

const SignUp = () => {
    const API = "http://localhost:3000/api/register";

    return (
        <div>
            <form action={API} method="POST">
                <label htmlFor="first_name">First Name: </label>
                <input id="first_name" name="first_name" type="text" />
                <label htmlFor="last_name">Last Name: </label>
                <input id="last_name" name="last_name" type="text" />
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" />
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" />
                <label htmlFor="confirm_password">Confirm Password: </label>
                <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                />
                <button type="submit">Register</button>
            </form>
            <Link to="/fitness-app/login">
                Already have an account? Log in.
            </Link>
        </div>
    );
};

export default SignUp;
