import React from "react";
import { Link } from "react-router-dom";
import './AppointmentDisplay.css';

const AppointmentList = ({ appointments }) => {
    return (
        <div className="appointment-list">
            {appointments.data.map((appointment) => (
                <div className="appointment-preview" key={appointment.AppointmentId}>
                    <Link to={`/appointments/${appointment.AppointmentId}`} />
                    <h2>{appointment.AppointmentId}</h2>
                </div>
            ))}
        </div>
    )
}

export default AppointmentList;