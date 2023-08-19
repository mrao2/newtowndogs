//import React, { useState } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch("/api/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        return resp.json();
        // .catch(error => {
        //   setError('apiError', { message: error });
      })
      .then((data) => {
        history.push(`/profile/${data.id}`);
      });
  };

  return (
    <span>
      <div className="signup-page">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>First Name</label>
            <input
              className="boxSpace"
              type="text"
              name="first_name"
              {...register("first_name", {
                required: true,
                maxLength: 20,
              })}
            />
          </div>
          {errors.first_name && (
            <p className="error-message">Please enter a first name</p>
          )}
          <div className="form-control">
            <label>Last Name</label>
            <input
              className="boxSpace"
              type="text"
              name="last_name"
              {...register("last_name", {
                required: true,
                maxLength: 20,
              })}
            />
          </div>
          {errors.last_name && (
            <p className="error-message">Please enter a last name</p>
          )}
          <div className="form-control">
            <label>Phone Number</label>
            <input
              className="boxSpace"
              type="text"
              name="phone"
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
          </div>
          {errors.phone && (
            <p className="error-message">Please enter a phone number</p>
          )}
          <div className="form-control">
            <label>Username (this will be used for blog posts)</label>
            <input
              className="boxSpace"
              type="text"
              name="username"
              {...register("username", {
                required: true,
              })}
            />
          </div>
          {errors.username && (
            <p className="error-message">Please enter a username</p>
          )}
          <div className="form-control">
            <label>Email Address</label>
            <input
              className="boxSpace"
              type="text"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
          </div>
          {errors.email && (
            <p className="error-message">Please enter a valid email</p>
          )}
          <div className="form-control">
            <label>Password</label>
            <input
              className="boxSpace"
              type="text"
              name="hashed_password"
              {...register("hashed_password", {
                required: true,
              })}
            />
            {errors.hashed_password && (
              <p className="error-message">Please enter a password</p>
            )}
          </div>

          {/* add validation for comfirm password field */}

          <button
            type="submit"
            className="createaccount-button"
            style={{ marginTop: "10px" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </span>
  );
};

export default SignUpPage;
