// import './App.css';
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [username, setUserName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    const blog = { title, body, author };
    setIsPending(true);

    fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/BlogHome')
    });

  };


  return (
  <span> 
    <div className="App">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={ownerFirstName}
            onChange={(event) => {
              setOwnerFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={ownerLastName}
            onChange={(event) => {
              setOwnerLastName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="lastName"
            value={ownerPhone}
            onChange={(event) => {
              setOwnerPhone(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Username (this will be displayed in blog posts)</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="text"
            name="lastName"
            value={ownerEmail}
            onChange={(event) => {
              setOwnerEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button className="createaccount-button">Create Account</button>
      </form>
    </div>
    </span>
  );
};



export default SignUp;

// function App()
// {
//     return (
//     <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
