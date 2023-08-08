import React, { useEffect, useState } from "react";
// import dog1 from './images/appDisplayDog.jpg';
// import dog2 from './images/appDisplayDog2.jpg';
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
                <div class="row">
                    <div className="col-sm-12 col-md-6 mt-3 border">
                        <h2 className="appContent border rounded text-center" >Appointment</h2>
                        <div className="appointmentParagraphs text-center">
                            <p className="petParentName">Pet Parent Name: Davey Crockett</p>
                            <p className="petName">Pet Name: Lassie Crockett</p>
                            <p className="apptStartTime">Appointment Start Time: 8am</p>
                            <p className="apptEndTime">Appointment End Time: 10am</p>
                            <p className="apptStartDate">Appointment Start Date: 8/29/23</p>
                            <p className="apptEndDate">Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-3 border">
                        <h2 className="appContent border border-info rounded text-center">Appointment</h2>

                        <div className="appointmentParagraphs text-center">
                            <p className="petParentName">Pet Parent Name: Davey Crockett</p>
                            <p className="petName">Pet Name: Lassie Crockett</p>
                            <p className="apptStartTime">Appointment Start Time: 8am</p>
                            <p className="apptEndTime">Appointment End Time: 10am</p>
                            <p className="apptStartDate">Appointment Start Date: 8/29/23</p>
                            <p className="apptEndDate">Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div className="col-sm-12 col-md-6 mt-3 border">
                        <h2 className="appContent border rounded text-center" >Appointment</h2>
                        <div className="appointmentParagraphs text-center">
                            <p className="petParentName">Pet Parent Name: Davey Crockett</p>
                            <p className="petName">Pet Name: Lassie Crockett</p>
                            <p className="apptStartTime">Appointment Start Time: 8am</p>
                            <p className="apptEndTime">Appointment End Time: 10am</p>
                            <p className="apptStartDate">Appointment Start Date: 8/29/23</p>
                            <p className="apptEndDate">Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-3 border">
                        <h2 className="appContent border border-info rounded text-center">Appointment</h2>

                        <div className="appointmentParagraphs text-center">
                            <p className="petParentName">Pet Parent Name: Davey Crockett</p>
                            <p className="petName">Pet Name: Lassie Crockett</p>
                            <p className="apptStartTime">Appointment Start Time: 8am</p>
                            <p className="apptEndTime">Appointment End Time: 10am</p>
                            <p className="apptStartDate">Appointment Start Date: 8/29/23</p>
                            <p className="apptEndDate">Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AppointmentDisplay;