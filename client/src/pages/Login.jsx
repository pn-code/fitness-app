const Login = () => {
    const handleLogin = async () => {
        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "json/application" },
            body: JSON.stringify(token)
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" />
                <button type="submit" onSubmit={handleLogin}>Log In</button>
            </form>
        </div>
    )
}

export default Login;