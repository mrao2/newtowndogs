import React, { useEffect, useState } from "react";
import './AppointmentDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import useFetch from "../../useFetch";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const AppointmentList = ({ appointments }) => {

    const history = useHistory();
    // const { data: appointment, isPending, error } = useFetch(`/api/appointments/${appointment_id}`);
    const [appointmentBeingDeleted, setAppointmentBeingDeleted] = useState(null);
    const [appointment_id, setAppointmentId] = useState(null);
    // const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        const appointmentId = appointments.data.find(
            (c) => c.appointment_id === appointmentBeingDeleted
        );
        if (appointmentId) {
            setAppointmentId(appointmentId.appointment_id)
        }
    }, [appointmentBeingDeleted]);


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch("/api/appointments/" + appointmentId, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(appointment),
    //     })
    //         .then(() => {

    //             window.location.reload();
    //         })
    //         .catch((error) => {
    //             console.error("Error updating appointment:", error);

    //         });
    // };

    const handleTrashClick = () => {

        console.log('Deleting clicked....')
        fetch(`/api/appointments/` + appointment_id, {
            method: "DELETE",
        }).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.error("Error deleting appointment:", error);
        });
    };


    return (
        <>{appointments.data.map((appointment) => (
            <div class="appointment_list col-sm-12 col-md-6 mt-3">

                <div className="appointment-preview" key={appointment.appointment_id}>


                    <div className="border">
                        <Link to={`/appointments/${appointment.appointment_id}`}>  <h2 className="appContent border rounded text-center">Appointment {appointment.appointment_id}</h2></Link>
                        <div className="appointmentParagraphs  text-center">
                            <p className="apptIsConsultation">Consultation Appointment? {appointment.is_consultation ? "Yes" : "No"}</p>
                            <p className="petParentName">Pet Parent Name: {appointment.first_name} {appointment.last_name}</p>
                            <p className="petName">Pet Name: ---</p>
                            <p className="apptStartTime">Appointment Start Time: {appointment.start_time} </p>
                            <p className="apptEndTime">Appointment End Time: {!appointment.end_date ? "---" : appointment.end_date.substring(0, 10)}</p>
                            <p className="apptStartDate">Appointment Start Date: {appointment.start_date.substring(0, 10)}</p>
                            <p className="apptEndDate">Appointment End Date: {!appointment.end_date ? "---" : appointment.end_date.substring(0, 10)}</p>
                            <p className="apptDescription">Pet Parent Appointment Notes: {!appointment.description ? "---" : appointment.description}</p>
                            <button className="confirmApptBtn btn"><a className="confirmRejectLink" href={`mailto:${appointment.email}?subject=NewTown Dogs - Confirming Your Appointment!`}>Confirm Appointment</a></button>
                            <button className="rejectApptBtn btn"><a className="confirmRejectLink" href={`mailto:${appointment.email}?subject=NewTown Dogs - Appointment Cannot Be Confirmed Yet`}>Reject Appointment</a></button>
                            <button value={appointment.appointment_id} onMouseEnter={() => (setAppointmentBeingDeleted(appointment.appointment_id), console.log(appointment.appointment_id))} onClick={(e) => handleTrashClick(e.target.value)}>
                                <FontAwesomeIcon className="trashCan" icon={faTrashCan} /></button>
                        </div>
                    </div>
                </div>

            </div>
        ))}
        </>

    )
}

export default AppointmentList;