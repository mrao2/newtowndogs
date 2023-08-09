import React from "react";
import '../BookingPage/BookingDoggy.css'
import useFetch from "../../useFetch";
import './AppointmentDisplay.css';
import AppointmentList from './AppointmentList';

const AppointmentDisplay = () => {

    const { data: appointments, isPending, error } = useFetch('/api/appointments');

    return (
        <>
            <br />
            <br />
            <br />
            <h1 className="appHeader text-center">Appointment Requests</h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {appointments && <AppointmentList appointments={appointments} title="All Appointments" />}
            {console.log(appointments)}
            <div className="container">


            </div>

        </>
    )
}

export default AppointmentDisplay;