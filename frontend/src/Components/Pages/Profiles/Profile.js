// import './App.css';
import React, { useState } from "react";

export const Profile = () => {
    const [ownerFirstName, setOwnerFirstName] = useState('');
    const [ownerLastName, setOwnerLastName] = useState('');
    const [ownerDisplayName, setOwnerDisplayName] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [ownerState, setOwnerState] = useState('');
    const [ownerZip, setOwnerZip] = useState('00000');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');
    const [petType, setPetType] = useState('');
    const [petName, setpetName] = useState('');
    const [petAge, setPetAge] = useState(0);
    const [petGender, setPetGender] = useState('male');
    const [petColor, setPetColor] = useState('');
    const [petBirthdate, setPetBirthdate] = useState('');
    const [petAllergies, setPetAllergies] = useState('');
    const [petWeight, setPetWeight] = useState('');
    const [petFriendly, setPetFriendly] = useState('yes');
    const [amtWalks, setAmtWalks] = useState('');
    const [amtMeals, setAmtMeals] = useState('');
    const [amtPerMeal, setAmtPerMeal] = useState('');
    const [petPottyTrained, setPetPottyTrained] = useState('yes');
    const [petFixed, setpetFixed] = useState('yes');


    const handleSubmit = () => {
        console.log(`The owner's first name is ${ownerFirstName}.`) 
    }

    console.log('petgender :: ', petGender)

    return (
        <div className="App">
            <h1>Owner Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Owner First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={ownerFirstName}
                        onChange={(event) => { setOwnerFirstName(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Owner Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={ownerLastName}
                        onChange={(event) => { setOwnerLastName(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Display Name</label>
                    <input
                        type="text"
                        name="displayName"
                        value={ownerDisplayName}
                        onChange={(event) => { setOwnerDisplayName(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Street Address</label>
                    <input
                        type="text"
                        name="ownerAddress"
                        value={ownerAddress}
                        onChange={(event) => { setOwnerAddress(event.target.value)}}
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="ownerCity"
                        value={ownerCity}
                        onChange={(event) => { setOwnerCity(event.target.value)}}
                    />
                </div>
                <div>
                    <label>State</label>
                    <input
                        type="text"
                        name="ownerState"
                        value={ownerState}
                        onChange={(event) => { setOwnerState(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Zip Code</label>
                    <input
                        type="text"
                        name="ownerZip"
                        value={ownerZip}
                        onChange={(event) => { setOwnerZip(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Email Address</label>
                    <input
                        type="text"
                        name="ownerEmail"
                        value={ownerEmail}
                        onChange={(event) => { setOwnerEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="ownerPhone"
                        value={ownerPhone}
                        onChange={(event) => { setOwnerPhone(event.target.value)}}
                    />
                </div>
                <h1>Pet Information</h1>
                <div>
                    <label>Pet Type</label>
                    <input
                        type="text"
                        name="petType"
                        value={petType}
                        onChange={(event) => { setPetType(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet's Name</label>
                    <input
                        type="text"
                        name="petName"
                        value={petName}
                        onChange={(event) => { setpetName(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Age</label>
                    <input
                        type="text"
                        name="petAge"
                        value={petAge}
                        onChange={(event) => { setPetAge(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Gender</label>
                    <label>
                        <input
                            type="radio"
                            value="male"
                            checked={petGender === 'male'}
                            onChange={(event) => { setPetGender(event.target.value)}}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="female"
                            checked={petGender === 'female'}
                            onChange={(event) => { setPetGender(event.target.value)}}
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label>Pet Color</label>
                    <input
                        type="text"
                        name="petColor"
                        value={petColor}
                        onChange={(event) => { setPetColor(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Birthdate</label>
                    <input
                        type="text"
                        name="petBirthdate"
                        value={petBirthdate}
                        onChange={(event) => { setPetBirthdate(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Allergies</label>
                    <input
                        type="text"
                        name="petAllergies"
                        value={petAllergies}
                        onChange={(event) => { setPetAllergies(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Weight (lbs)</label>
                    <input
                        type="text"
                        name="petWeight"
                        value={petWeight}
                        onChange={(event) => { setPetWeight(event.target.value)}}
                    />
                </div>
                <div>
                <label>Pet Friendly? </label>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={petFriendly === 'yes'}
                            onChange={(event) => { setPetFriendly(event.target.value)}}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={petFriendly === 'no'}
                            onChange={(event) => { setPetFriendly(event.target.value)}}
                        />
                        No
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="unknown"
                            checked={petFriendly === 'unknown'}
                            onChange={(event) => { setPetFriendly(event.target.value)}}
                        />
                        Unknown
                    </label>
                </div>
                <div>
                    <label>Amount of Walks Per Day</label>
                    <input
                        type="text"
                        name="petAllergies"
                        value={amtWalks}
                        onChange={(event) => { setAmtWalks(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Amount of Meals Per Day</label>
                    <input
                        type="text"
                        name="petAllergies"
                        value={amtMeals}
                        onChange={(event) => { setAmtMeals(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Amount of Food per Meal (cups)</label>
                    <input
                        type="text"
                        name="petAllergies"
                        value={amtPerMeal}
                        onChange={(event) => { setAmtPerMeal(event.target.value)}}
                    />
                </div>
                <div>
                    <label>Pet Potty Trained?</label>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={petPottyTrained === 'yes'}
                            onChange={(event) => { setPetPottyTrained(event.target.value)}}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={petPottyTrained === 'no'}
                            onChange={(event) => { setPetPottyTrained(event.target.value)}}
                        />
                        No
                    </label>
                </div>
                <div>
                    <label>Pet Fixed?</label>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={petFixed === 'yes'}
                            onChange={(event) => { setpetFixed(event.target.value)}}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={petFixed === 'no'}
                            onChange={(event) => { setpetFixed(event.target.value)}}
                        />
                        No
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="not applicable"
                            checked={petFixed === 'not applicable'}
                            onChange={(event) => { setpetFixed(event.target.value)}}
                        />
                        Not Applicable
                    </label>
                </div>







                
                
                
                
                
                <button type="submit">Complete Profile</button>            
            </form>
    </div>
    );
}


// function App() 
// {
//     return (
//     <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
