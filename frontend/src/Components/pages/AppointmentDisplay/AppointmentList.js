import React from "react";
import { Link } from "react-router-dom";
import './AppointmentDisplay.css';

const AppointmentList = ({ appointments }) => {
    return (
        <>
            <div class="appointment-list row">
                {appointments.data.map((appointment) => (
                    <div className="appointment-preview" key={appointment.appointment_id}>
                        <Link to={`/appointments/${appointment.AppointmentId}`} />

                        <div className="col-sm-12 col-md-6 mt-3 border">
                            <h2 className="appContent border rounded text-center">Appointment {appointment.appointment_id}</h2>
                            <div className="appointmentParagraphs text-center">
                                <p className="apptIsConsultation">Consultation Appointment? {appointment.is_consultation ? "Yes" : "No"}</p>
                                <p className="petParentName">Pet Parent Name: </p>
                                <p className="petName">Pet Name: </p>
                                <p className="apptStartTime">Appointment Start Time: {appointment.start_time}</p>
                                <p className="apptEndTime">Appointment End Time: {appointment.end_time}</p>
                                <p className="apptStartDate">Appointment Start Date: {appointment.start_date}</p>
                                <p className="apptEndDate">Appointment End Date: {appointment.end_date}</p>
                                <p className="apptDescription">Pet Parent Appointment Notes: {appointment.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default AppointmentList;