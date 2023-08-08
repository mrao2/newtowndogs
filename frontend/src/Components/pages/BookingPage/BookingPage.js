import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ReturnCustomerForm from "./ReturnCustomerForm";
import ConsultationForm from "./ConsultationForm";
import "./BookingPage.css";

const BookingPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bookingpage">
      <h1 className="pageHeader">Book Your Dog Sitter</h1>
      <div className="isConsultation">
        <input
          type="checkbox"
          id="isConsultation"
          name="isConsultation"
          value="isConsultation"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label for="isConsultation">
          {" "}
          Please check this box if this is your first visit.
        </label>
      </div>
      <div className="result">
        {isChecked
          ? "This is your first visit."
          : "You are a returning customer."}
      </div>
      <br />
      <div>{isChecked ? <ConsultationForm /> : <ReturnCustomerForm />}</div>
    </div>
  );
};



export default BookingPage;
