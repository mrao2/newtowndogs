import { useState } from 'react';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingPage.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReturnCustomerForm from './ReturnCustomerForm';
import ConsultationForm from './ConsultationForm';


const BookingPage = () => {

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <h1>Book Your Dog Sitter</h1>
            <div className="isConsultation">
                <input type="checkbox" id="isConsultation" name="isConsultation" value="isConsultation" checked={isChecked} onChange={handleOnChange} />
                Please check this box if this is your first visit.
            </div>
            <div className="result" >
                {isChecked ? "This is your first visit." : "You are a returning customer."}
            </div>
            <br />
            <div>
                {isChecked ? <ConsultationForm /> : <ReturnCustomerForm />}
            </div>




        </>
    )

}

export default BookingPage;
