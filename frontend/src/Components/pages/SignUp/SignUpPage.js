// import './App.css';
import React, { useState } from "react";
import "./SignUp.css";
import { useForm } from 'react-hook-form';


  export const SignUp = () => {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      // setIsPending(true);
  
      fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        // setIsPending(false);
        //history.push('/UserProfile')
      });
    };
  
  
return (
  <span> 
    <div className="App">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
            <label>First Name</label>
            <input 
            type="text" 
            name="first_name" {...register("first_name", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Last Name</label>
            <input type="text" name="last_name" {...register("last_name", {
              required: true
            })} />
        </div>

        <div className="form-control">
            <label>Phone Number</label>
            <input type="text" name="phone" {...register("phone", {
              required: true
            })} />
        </div>

        <div className="form-control">
            <label>Username (this will be used for blog posts)</label>
            <input type="text" name="username" {...register("username", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Email Address</label>
            <input type="text" name="email" {...register("email", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Password</label>
            <input type="text" name="hashed_password" {...register("hashed_password", {
              required: true
            })} />
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
