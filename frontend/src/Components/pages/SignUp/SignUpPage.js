//import React, { useState } from "react";
import "./SignUp.css";
import { useForm } from 'react-hook-form';
import { useHistory} from "react-router-dom";

const SignUpPage = () => {
    const history = useHistory();
    const {
      register,
      handleSubmit
      //formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
  
      fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((resp) => {
        return resp.json();
      }).then((data) => {
        history.push(`/profile/${data.id}`)
      })
    };


return (
  <span> 
    <div className="signup-page">
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
        <button type="submit" className="createaccount-button">Create Account</button>
      </form>
    </div>
    </span>
  );
    }

    export default SignUpPage;