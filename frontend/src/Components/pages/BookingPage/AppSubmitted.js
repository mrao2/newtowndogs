import React from "react";
import "./BookingPage.css";
import BookingDoggy from "./BookingDoggy";
import "./BookingPage.css";

const AppSubmitted = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <h1 className="appSubConf">Appointment Request Submitted!</h1>
                <BookingDoggy />
                <a class="bookingDoggySource" href="https://codepen.io/narendrashetty/pen/YwypNo" target="_blank" rel="noreferrer">Click here for Booking Doggy's original source code!</a>
                <p class="bookingDoggySource">Booking Doggy was created by&nbsp;<a href="https://codepen.io/narendrashetty">Narendra N. Shetty</a>.</p>
            </div>

        </>
    )
}

export default AppSubmitted;