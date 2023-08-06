import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';

// import useFetch from "../useFetch";

// const {data: logins, isPending, error} = useFetch('/api/data');
function login (email, password) {
  axios.post("http://localhost:3001/login", {
    email: email, 
    password: password, 
  });
}
function Login() {
  // const [username, setUsername] = useState("");
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
    login(email, password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
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
        <button onClick={handleSubmit} type="button" className="login-button">
          {" "}
          Login
        </button>
        <h3>Not a member?</h3>
        <button type="button" className="register-button"><a href="/Profile">Sign Up</a></button>
      </form>
    </div>
  );
  }

export default Login;
