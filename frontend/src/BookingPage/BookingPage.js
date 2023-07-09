import { useState } from 'react';
import React from 'react';
import DatePicker from "react-datepicker";
import './BookingPage.css';
import Form from 'react-bootstrap/Form';




const BookingPage = () => {

    const [date, setDate] = useState(new Date());
    return (
        <>
            <h1>Booking Page</h1>
            <Form>
                <div>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

            </Form>
        </>
    )

}

export default BookingPage;
