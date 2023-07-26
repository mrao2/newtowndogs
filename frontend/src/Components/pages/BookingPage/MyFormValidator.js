import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';


const MyFormValidator = () => {

    const [test_text, setTest_text] = useState("");

    const test_form = document.getElementById("test_form");

    fetch("/api/appointments", {
        method: "POST",
        body: JSON.stringify(form.serializeArray()),
    })

    return (
        <form id="test_form">
            <input type="text" name="test_text" className="form-control" />

            <Button type="submit" >Submit</Button>
        </form>
    )

}

export default MyFormValidator;