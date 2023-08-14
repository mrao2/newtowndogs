import React from "react";
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

export const Profile = () => {
  const {id} = useParams();
  const { data: userProfileData, isPending, error } = useFetch(`/api/profile/${id}`);
  const values = userProfileData ? 
  {
    ...userProfileData.data[0],
    dogFriendly: userProfileData.data[0].dogFriendly === 1 ? "yes" : "no",
    dogFixed: userProfileData.data[0].dogFixed === 1 ? "yes" : "no",
    dogPottyTrained: userProfileData.data[0].dogPottyTrained === 1 ? "yes" : "no"
  }
  : null
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({values});

  const onSubmit = (data) => {
    const profileData = {
      ownerAddress: data.ownerAddress,
      ownerCity: data.ownerCity,
      ownerState: data.ownerState,
      ownerZip: data.ownerZip,
      dogName: data.dogName,
      dogAge: data.dogAge,
      dogBreed: data.dogBreed,
      dogGender: data.dogGender,
      dogColor: data.dogColor,
      dogBirthday: data.dogBirthdate,
      dogAllergies: data.dogAllergies,
      dogWeight: data.dogWeight,
      amtMeals: data.amtMeals,
      amtPerMeal: data.amtPerMeal,
      amtWalks: data.amtWalks,
      dogFriendly: data.dogFriendly === 'yes' ? 1 : 0,
      dogFixed: data.dogFixed === 'yes' ? 1 : 0,
      dogPottyTrained: data.dogPottyTrained === 'yes' ? 1 : 0
    }
    const userData = {
    phone: data.phone,
    username: data.username,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName
      // dogFriendly: data.dogFriendly === 'yes' ? 1 : 0,
      // dogFixed: data.dogFixed === 'yes' ? 1 : 0
    }
    fetch(`/api/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then((resp) => {
      return resp.json();
    })

    fetch(`/api/profile/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    }).then((resp) => {
      return resp.json();
    })
  };


  return (
    <div className="App" style={{ paddingTop: '100px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>

        <h1>Owner Information</h1>
        {isPending ? <div>Loading...</div> : 
        <span>
        <div className="form-control">
            <label>First Name</label>
            <input 
            type="text" 
            name="firstName" {...register("firstName", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Last Name</label>
            <input type="text" name="lastName" {...register("lastName", {
              required: true
            })} />
        </div>

        <div className="form-control">
            <label>Username</label>
            <input type="text" name="username" {...register("username", {
              required: true
            })} />
        </div>


        <div className="form-control">
            <label>Street Address</label>
            <input type="text" name="ownerAddress" {...register("ownerAddress", {
              required: true
            })} />
        </div>

        <div className="form-control">
            <label>City</label>
            <input type="text" name="ownerCity" {...register("ownerCity", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>State</label>
            <input type="text" name="ownerState" {...register("ownerState", {
              required: true
            })} />

        </div>
        
        <div className="form-control">
            <label>Zip Code</label>
            <input type="text" name="ownerZip" {...register("ownerZip", {
              required: true,
              minLength: 5,
              maxLength: 5
            })} />

        </div>
        
        <div className="form-control">
            <label>Email Address</label>
            <input type="text" name="email" {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.ownerEmail && errors.ownerEmail.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.ownerEmail && errors.ownerEmail.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        
        <div className="form-control">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="(xxx) xxx-xxxx" {...register("phone", {
              required: true
            })} />

        </div>

        <h1>Dog Information</h1>

        <div className="form-control">
            <label>Dog's Name</label>
            <input type="text" name="dogName" {...register("dogName", {
              required: true
          })} />
        </div>
        
        <div className="form-control">
            <label>Dog Breed</label>
            <input type="text" name="dogBreed" {...register("dogBreed", {
              required: true
          })} />
        </div>
        
        <div className="form-control">
            <label>Dog Age</label>
            <input type="text" name="dogAge" placeholder="age in years" {...register("dogAge")} />
        </div>
        
        <div className="form-control">
            <label>Dog Gender</label>
            <input type="text" name="dogGender" {...register("dogGender")} />
        </div>
        
        <div className="form-control">
            <label>Dog Color</label>
            <input type="text" name="dogColor" {...register("dogColor")} />
        </div>
        
        <div className="form-control">
            <label>Dog Birthdate</label>
            <input type="text" name="dogBirthdate" placeholder="mm/dd" {...register("dogBirthdate", {
              required: true
            })} />


          {errors.dogBirthdate && errors.dogBirthdate.type === "pattern" && (
            <p className="errorMsg">Enter date in mm/dd format</p>
          )}
            
        </div>
        
        <div className="form-control">
            <label>Dog Allergies</label>
            <input type="text" name="dogAllergies" placeholder="if none, enter 'n/a'" {...register("dogAllergies", {
              required: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Dog Weight</label>
            <input type="number" name="dogWeight" placeholder="pounds" {...register("dogWeight", {
              required: true,
              valueAsNumber: true
            })} />
        </div>

        <div className="form-control">
          <label>Dog Friendly? </label>
          <label>
        <input
          type="radio"
          label="Yes"
          value="yes"
          {...register("dogFriendly", {
            required: "Dog Friendly?"
          })}
        />
        Yes
        </label>
        <label>
        <input
          type="radio"
          label="No"
          value="no"
        {...register("dogFriendly")}
        />
        No
        </label>
        </div>

        <div className="form-control">
          <label>Dog Potty Trained? </label>
          <label>
        <input
          type="radio"
          label="Yes"
          value="yes"
          {...register("dogPottyTrained", {
            required: "Dog Potty Trained?"
          })}
        />
        Yes
        </label>
        <label>
        <input
          type="radio"
          label="No"
          value="no"
        {...register("dogPottyTrained")}
        />
        No
        </label>
        </div>
        
        <div className="form-control">
            <label>Amount of Walks Per Day</label>
            <input type="number" name="amtWalks" {...register("amtWalks", {
              required: true,
              valueAsNumber: true
            })} />
        </div>

        <div className="form-control">
            <label>Amount of Meals Per Day</label>
            <input type="number" name="amtMeals" {...register("amtMeals", {
              required: true,
              valueAsNumber: true
            })} />
        </div>
        
        <div className="form-control">
            <label>Amount of Food Per Meal</label>
            <input type="text" name="amtPerMeal" placeholder="in cups" {...register("amtPerMeal", {
              required: true,
              valueAsNumber: true
            })} />
        </div>

        <div className="form-control">
          <label>Dog Fixed? </label>
          <label>
        <input
          type="radio"
          label="Yes"
          value="yes"
          {...register("dogFixed", {
            required: "Dog Fixed?"
          })}
        />
        Yes
        </label>
        <label>
        <input
          type="radio"
          label="No"
          value="no"
          {...register("dogFixed", {
            required: "Dog Fixed?"
          })}
        />
        No
        </label>
        </div>

        <div className="form-control">
            <button type="submit">Complete Profile</button>
        </div>
        </span>
        }
        </form>
    </div>
  );
};


