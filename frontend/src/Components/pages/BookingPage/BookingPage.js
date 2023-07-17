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


const BookingPage = () => {

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('21:00');


    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleStartTimeChange = () => {

        setStartTime(startTime);

    };


    const handleEndTimeChange = () => {

        setEndTime(endTime);

    };

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <h1>Booking Page</h1>
            <div className="isConsultation">
                <input type="checkbox" id="isConsultation" name="isConsultation" value="isConsultation" checked={isChecked} onChange={handleOnChange} />
                Please check this box if this is your first visit.
            </div>
            <div className="result" >
                {isChecked ? "This is your first visit." : "You are a returning customer."}
            </div>
            <br />

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
                    <label>Select Appointment Start Time: </label>
                    <TimePicker value={startTime} onChange={handleStartTimeChange} disableClock={true} />
                </div>

                <div>
                    <label>Select Appointment End Time: </label>
                    <TimePicker value={endTime} onChange={handleEndTimeChange} disableClock={true} />
                </div>
                <br />
                <div id="appDatePicker">
                    <p>Please select the date(s) you need a dog sitter.</p>
                    <DatePicker className="appDatePicker" selected={startDate} onChange={handleChange} startDate={startDate} endDate={endDate} selectsRange />
                </div>
                <br />
                <div className="appSpecialRequirements">
                    <Form.Group className="appSpecialRequirements" controlId="appSpecialRequirements">
                        <Form.Label>Special Requirements: </Form.Label>

                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <br />
                <Button className="bookingSubmit" variant="outline-primary">Submit Appointment Request</Button>

            </Form>
        </>
    )

}

export default BookingPage;
