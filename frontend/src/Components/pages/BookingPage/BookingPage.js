import { useState } from 'react';
import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './BookingPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TimePicker from './TimePicker';


const BookingPage = () => {

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    }

    return (
        <>
            <h1>Booking Page</h1>


            <Form>
                <div className="clientEmail">
                    <p>Please enter your contact email.</p>
                    <Form.Group className="clientEmail" controlId="clientEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <p>Please select the date(s) you need a dog sitter.</p>
                <div id="appDatePicker">
                    <DatePicker className="appDatePicker" selected={startDate} onChange={handleChange} startDate={startDate} endDate={endDate} selectsRange />
                    <TimePicker />
                </div>

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
