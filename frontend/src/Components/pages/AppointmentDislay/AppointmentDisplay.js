import React from "react";
// import dog1 from './images/appDisplayDog.jpg';
// import dog2 from './images/appDisplayDog2.jpg';
import '../BookingPage/BookingDoggy.css'
// import useFetch from "../../useFetch";
import './AppointmentDisplay.css';

const AppointmentDisplay = () => {

    return (
        <>
            <br />
            <br />
            <br />
            <h1 className="appHeader text-center">Appointment Requests</h1>
            <div className="container">
                <div class="row">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <h2 className="appContent border rounded text-center" >Appointment</h2>
                        <div className="appointmentParagraphs text-center">
                            <p>Pet Parent Name: Davey Crockett</p>
                            <p>Pet Name: Lassie Crockett</p>
                            <p>Appointment Start Time: 8am</p>
                            <p>Appointment End Time: 10am</p>
                            <p>Appointment Start Date: 8/29/23</p>
                            <p>Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 appContent mt-3">
                        <h2 className="appContent border border-info rounded text-center">Appointment</h2>

                        <div className="appointmentParagraphs text-center">
                            <p>Pet Parent Name: Davey Crockett</p>
                            <p>Pet Name: Lassie Crockett</p>
                            <p>Appointment Start Time: 8am</p>
                            <p>Appointment End Time: 10am</p>
                            <p>Appointment Start Date: 8/29/23</p>
                            <p>Appointment End Date: 8/30/23</p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AppointmentDisplay;