import { Link } from "react-router-dom"

const Login = (props) => {
    const { API_URL } = props;

    return (
        <div>
            <h1>Login</h1>
            <form method="POST" action={`${API_URL}/login`}>
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" />
                <button type="submit">Log In</button>
            </form>
            <span>Don't have an account?
                <Link to="/fitness-app/sign-up">Sign Up</Link>
            </span>
        </div>
    )
}

export default Login;