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
import { useHistory } from "react-router-dom";



const ReturnCustomerForm = ({ setSubmit }) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('21:00');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState("");
    const [isConsultation, setIsConsultation] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();




    const handleSubmit = (e) => {
        e.preventDefault();
        const appointment = { first_name: firstName, last_name: lastName, email: email, start_date: startDate, start_time: startTime, is_consultation: isConsultation, description, end_date: endDate, end_time: endTime };
        setIsPending(true);
        console.log(appointment)

        fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointment),
        }).then(() => {
            setIsPending(false);
            history.push('/AppSubmitted')
        });
    }

    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const handleStartTimeChange = (startTime) => {
        setStartTime(startTime);
    };


    const handleEndTimeChange = (endTime) => {
        setEndTime(endTime);
    };


    return (
        <>
            <Form className="isNotConsultation" onSubmit={handleSubmit}>
                <div className="clientName">
                    <div className="clientFirstName">

                        <Form.Group className="clientFirstName" controlId="clientFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                    </div>
                    <div className="clientLastName">

                        <Form.Group className="clientLastName" controlId="clientLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <br />
                <div className="clientContactInfo">
                    <div className="clientPhoneNumber">

                        <Form.Group className="clientPhoneNumber" controlId="clientPhoneNumber">
                            <Form.Label>Phone Number: </Form.Label>
                            <Form.Control type="tel" placeholder="555-555-5555" pattern="[0-9]{10}" required value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                        </Form.Group>
                    </div>
                    <br />
                    <div className="clientEmail">

                        <Form.Group className="clientEmail" controlId="clientEmail">
                            <Form.Label>Email address: </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </div>

                </div>
                <br />
                <div>
                    <label className="timePicker">Select Appointment Start Time: </label>
                    <TimePicker className="timePicker" value={startTime} onChange={handleStartTimeChange} disableClock={true} />
                </div>

                <div>
                    <label className="timePicker">Select Appointment End Time: </label>
                    <TimePicker className="timePicker" value={endTime} onChange={handleEndTimeChange} disableClock={true} />
                </div>
                <br />
                <div id="appDatePicker">
                    <p>Please select the date(s) you need a dog sitter.</p>
                    <DatePicker className="appDatePicker" selected={startDate} onChange={handleChange} startDate={startDate} endDate={endDate} selectsRange />
                </div>
                <br />
                <div className="appSpecialRequirements">
                    <Form.Group className="appSpecialRequirements" controlId="appSpecialRequirements">
                        <Form.Label className="specialReqLabel">Special Requirements: </Form.Label>

                        <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </div>
                <br />
                {!isPending && <Button className="bookingSubmitButton" type="submit" onClick={() => {

                    setSubmit(true);
                    setIsConsultation(false);

                }}>Submit Appointment Request</Button>}
                {isPending && <button>Submitting Appointment Request...</button>}

            </Form>
        </>

    )
}

export default ReturnCustomerForm;