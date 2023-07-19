import { useState } from 'react';
import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './BookingPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConsultationForm = () => {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [startTime, setStartTime] = useState('09:00');



    const handleChange = (startDate) => {

        setStartDate(startDate);

    };

    const handleStartTimeChange = () => {

        setStartTime(startTime);

    };




    return (
        <>
            <Form className="isNotConsultation">
                <div className="clientName">
                    <div className="clientFirstName">

                        <Form.Group className="clientFirstName" controlId="clientFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </div>
                    <div className="clientLastName">

                        <Form.Group className="clientLastName" controlId="clientLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </div>
                </div>

                <br />
                <div className="clientPhoneNumber">

                    <Form.Group className="clientPhoneNumber" controlId="clientPhoneNumber">
                        <Form.Label>Phone Number: </Form.Label>
                        <Form.Control type="tel" placeholder="555-555-5555" pattern="[0-9]{10}" />
                    </Form.Group>
                </div>
                <br />
                <div className="clientEmail">

                    <Form.Group className="clientEmail" controlId="clientEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <br />
                <div>
                    <p className="consultationNotice">Please note, all first-time consultation appointments are 1 hour long.</p>
                    <label>Select Appointment Start Time: </label>
                    <TimePicker value={startTime} onChange={handleStartTimeChange} disableClock={true} />
                </div>
                <br />
                <div id="appDatePicker">
                    <p>Please select the date you would like to have your consultation.</p>
                    <DatePicker className="appDatePicker" selected={startDate} onChange={handleChange} />
                </div>
                <br />
                <div className="appSpecialRequirements">
                    <Form.Group className="appSpecialRequirements" controlId="appSpecialRequirements">
                        <Form.Label>Special Requirements: </Form.Label>

                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <br />
                <Button className="bookingSubmitButton" >Submit Appointment Request</Button>

            </Form>
        </>

    )
}

export default ConsultationForm;