// import './App.css';
import React, { useState } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
    const {id} = useParams();
    let firstName = "Maggie";
    let lastName = "Hollander";
    let ownerPhone = "";
    let username = "";
    let ownerEmail = "maggie.hollander@gmail.com";
    let ownerAddress = "";
    let ownerCity = "";
    let ownerState = "";
    let ownerZip = "";
    let dogName = "";
    let dogBreed = "";
    let dogAge = "";
    let dogGender = "";
    let dogColor = "";
    let dogBirthdate = "";
    let dogAllergies = "";
    let dogWeight = "";
    let dogFriendly = "";
    let amtWalks = "";
    let amtMeals = "";
    let amtPerMeal = "";
    let dogPottyTrained = "";
    let dogFixed = ""


// const handleSubmit = () => {
//     console.log(`The owner's first name is ${ownerFirstName}.`);
// };

return (
    <div className="App">
        <h1>Owner Information</h1>
        <div>
            <div>First Name: {id}</div>
            <div>Last Name: {lastName}</div>
            <div>Phone Number: {ownerPhone}</div>
            <div>Username: {username}</div>
            <div>Email Address: {ownerEmail}</div>
            <div>Address: {ownerAddress}</div>
            <div>City: {ownerCity}</div>
            <div>State: {ownerState}</div>
            <div>Zip Code: {ownerZip}</div>
        <h1>Dog Information</h1>
            <div>Dog's name: {dogName}</div>
            <div>Dog breed: {dogBreed}</div>
            <div>Dog age: {dogAge}</div>
            <div>Dog gender: {dogGender}</div>
            <div>Dog's birthdate: {dogBirthdate}</div>
            <div>Dog color: {dogColor}</div>
            <div>Dog's allergies: {dogAllergies}</div>
            <div>Dog eeight: {dogWeight}</div>
            <div>Dog friendly?: {dogFriendly}</div>
            <div>Amount of walks per day: {amtWalks}</div>
            <div>Amount of meals per day: {amtMeals}</div>
            <div>Amount of food per meal: {amtPerMeal}</div>
            <div>Dog potty trained?: {dogPottyTrained}</div>
            <div>Dog fixed: {dogFixed}</div>
        </div>
        <Link to="/editprofile">
        <button className="createaccount-button">Edit Profile</button>
        </Link>
    </div>
);
};

export default Profile;

