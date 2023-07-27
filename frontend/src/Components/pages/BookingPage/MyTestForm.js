import React, { useState } from 'react';


const MyTestForm = () => {

    const textInput = document.getElementById("textbox");
    return (
        <form>
            <input id="textbox" type="text"></input>
            <button type="submit">Submit</button>
        </form>
    );

}

export default MyTestForm;