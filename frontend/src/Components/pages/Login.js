import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisiblity = () => {
        setShowPassword(!showPassword);
    };

    function handleSubmit(event) {
        event.preventDefault();
        //validate login info?
        // const isLoggedIn = true;
        // onLogin(isLoggedIn);
    }

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="ILoveDogs@dogs.com"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="dogsarethebest300!"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handlePasswordVisiblity}>
                    {showPassword ? "Hide" : "Show"}
                </button>
                <button type="submit" className="login-button">
                    {" "}
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
