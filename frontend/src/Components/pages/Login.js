import React, { useState } from "react";
import "./Login.css";
// import useFetch from "../useFetch";

// const {data: logins, isPending, error} = useFetch('/api/data');
function login (email, password) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        email: email,
        password: password
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    //.then looking for good or bad response & then updating isloggedin based on that. 
}
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState("");
  const handlePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPattern.test(email);
    setShowEmailAlert(!isEmailValid);
  
    const isPasswordValid = password.length >= 8;
    setShowPasswordAlert(!isPasswordValid);
  
    if (isEmailValid && isPasswordValid) {
      login(email, password)
      .then((response) => {
        if (response.data && response.data.success) {
          setIsLoggedIn(true);
          console.log("Login successful!");
        } else {
          console.log("Login unsuccessful!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      })
    }

  }

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowEmailAlert(false);
          }}
          // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          required
        />
        {showEmailAlert && (
        <div className="invalid-email-alert">Invalid email format. Please try again.</div>
      )}

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          setShowPasswordAlert(false);
          }}
          minLength="8"
          required
        />

        {showPasswordAlert && (
          <div className="alert">Password must be at least 8 characters.</div>
        )}

        <button type="button" onClick={handlePasswordVisiblity}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <button onClick={handleSubmit} type="submit" className="login-button">
          {" "}
          Login
        </button>
        <h3>Not a member?</h3>
        <a href="/Profile" className="register-button">Sign Up</a>
      </form>
    </div>
  );
  }

export default Login;
