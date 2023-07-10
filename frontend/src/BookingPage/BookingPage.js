import { useState } from 'react';
import React from 'react';
import DatePicker from "react-datepicker";
import './BookingPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookingPage = () => {

    const [date, setDate] = useState(new Date());
    return (
        <>
            <h1>Booking Page</h1>

            <p>Please select the date you need a dog sitter.</p>
            <Form>
                <div id="appDatePicker">
                    <DatePicker className="appDatePicker" selected={date} onChange={(date) => setDate(date)} />
                </div>
                <div className="clientEmail">
                    <Form.Group className="clientEmail" controlId="clientEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <div className="appSpecialRequirements">
                    <Form.Group className="appSpecialRequirements" controlId="appSpecialRequirements">
                        <Form.Label>Special Requirements: </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <Button variant="outline-primary">Submit Appointment Request</Button>

            </Form>
        </>
    )

}

export default BookingPage;
