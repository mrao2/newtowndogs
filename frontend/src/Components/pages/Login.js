import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
// import useFetch from "../useFetch";

// const {data: logins, isPending, error} = useFetch('/api/data');

async function login (email, password) {
  try {
    const response = await fetch("/Login", {
      method: "POST",
      body: JSON.stringify({
      email: email,
      password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
    //.then looking for good or bad response & then updating isloggedin based on that. 
}
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const history = useHistory();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        if (response.data) {
          console.log(response.success);
          // setIsLoggedIn(true); //set login status to true
          console.log("Login successful!");
            //redirect to home page
            history.push("/Homepage");
        } else {
          console.log("Login unsuccessful!!!!!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
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
      </form>
    </div>
  );
  }


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   // Hash the password
  //   const hashedPassword = await bcrypt.hash(ownerPassword, 10); 
  
  //   // create an o2bject containing the profile data including the hashed password
  //   const profileData = {
  //     ownerFirstName,
  //     ownerLastName,
  //     // ... (other fields)
  //     ownerEmail,
  //     ownerPassword: hashedPassword,
  //     // ... (other fields)
  //   };
  
  //   // sends profile data back
  //   try {
  //     const response = await fetch("http://localhost:3001/submit-profile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(profileData),
  //     });
  
  //     if (response.ok) {
  //       console.log("Profile data submitted successfully");
  //     } else {
  //       console.error("Error submitting profile data");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting profile data", error);
  //   }
  // };

export default Login;
