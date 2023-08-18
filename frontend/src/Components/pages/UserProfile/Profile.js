import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./UserProfile.css";

export const Profile = () => {
  const { id } = useParams();
  const {
    data: userProfileData,
    isPending,
    error,
  } = useFetch(`/api/profile/${id}`);
  const values = userProfileData
    ? {
        ...userProfileData.data[0],
        dogFriendly: userProfileData.data[0].dogFriendly === 1 ? "yes" : "no",
        dogFixed: userProfileData.data[0].dogFixed === 1 ? "yes" : "no",
        dogPottyTrained:
          userProfileData.data[0].dogPottyTrained === 1 ? "yes" : "no",
      }
    : null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values });

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
      dogFriendly: data.dogFriendly === "yes" ? 1 : 0,
      dogFixed: data.dogFixed === "yes" ? 1 : 0,
      dogPottyTrained: data.dogPottyTrained === "yes" ? 1 : 0,
    };
    const userData = {
      phone: data.phone,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      // dogFriendly: data.dogFriendly === 'yes' ? 1 : 0,
      // dogFixed: data.dogFixed === 'yes' ? 1 : 0
    };
    fetch(`/api/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then((resp) => {
      return resp.json();
    });

    fetch(`/api/profile/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    }).then((resp) => {
      return resp.json();
    });
  };

  return (
    <div className="user-profile-page" style={{ paddingTop: "100px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Owner Information</h1>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <span>
            <div className="form-control">
              <label>First Name</label>
              <input
                className="boxSpace"
                type="text"
                name="firstName"
                {...register("firstName", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Last Name</label>
              <input
                className="boxSpace"
                type="text"
                name="lastName"
                {...register("lastName", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Username</label>
              <input
                className="boxSpace"
                type="text"
                name="username"
                {...register("username", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Street Address</label>
              <input
                className="boxSpace"
                type="text"
                name="ownerAddress"
                {...register("ownerAddress", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>City</label>
              <input
                className="boxSpace"
                type="text"
                name="ownerCity"
                {...register("ownerCity", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>State</label>
              <select
                className="boxSpace"
                type="text"
                name="ownerState"
                placeholder="Select State"
                {...register("ownerState", {
                  required: true,
                })}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="NI">NI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>

            <div className="form-control">
              <label>Zip Code</label>
              <input
                className="boxSpace"
                type="text"
                name="ownerZip"
                {...register("ownerZip", {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                })}
              />
            </div>

            <div className="form-control">
              <label>Email Address</label>
              <input
                className="boxSpace"
                type="text"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
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
              <input
                className="boxSpace"
                type="text"
                name="phone"
                placeholder="(xxx) xxx-xxxx"
                {...register("phone", {
                  required: true,
                })}
              />
            </div>

            <h1 style={{ marginTop: "25px" }}>Dog Information</h1>

            <div className="form-control">
              <label>Dog's Name</label>
              <input
                className="boxSpace"
                type="text"
                name="dogName"
                {...register("dogName", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Dog Breed</label>
              <input
                className="boxSpace"
                type="text"
                name="dogBreed"
                {...register("dogBreed", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Dog Age</label>
              <input
                className="boxSpace"
                type="text"
                name="dogAge"
                placeholder="age in years"
                {...register("dogAge")}
              />
            </div>

            <div className="form-control">
              <label>Dog Gender</label>
              <input
                className="boxSpace"
                type="text"
                name="dogGender"
                {...register("dogGender")}
              />
            </div>

            <div className="form-control">
              <label>Dog Color</label>
              <input
                className="boxSpace"
                type="text"
                name="dogColor"
                {...register("dogColor")}
              />
            </div>

            <div className="form-control">
              <label>Dog Birthdate</label>
              <input
                className="boxSpace"
                type="text"
                name="dogBirthdate"
                placeholder="mm/dd"
                {...register("dogBirthdate", {
                  required: true,
                })}
              />

              {errors.dogBirthdate &&
                errors.dogBirthdate.type === "pattern" && (
                  <p className="errorMsg">Enter date in mm/dd format</p>
                )}
            </div>

            <div className="form-control">
              <label>Dog Allergies</label>
              <input
                className="boxSpace"
                type="text"
                name="dogAllergies"
                placeholder="if none, enter 'n/a'"
                {...register("dogAllergies", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Dog Weight</label>
              <input
                className="boxSpace"
                type="number"
                name="dogWeight"
                placeholder="in pounds"
                {...register("dogWeight", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Dog Friendly? </label>
              <label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  label="Yes"
                  value="yes"
                  {...register("dogFriendly", {
                    required: "Dog Friendly?",
                  })}
                />
                Yes
              </label>
              <label>
                <input
                  style={{ marginLeft: "10px" }}
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
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  label="Yes"
                  value="yes"
                  {...register("dogPottyTrained", {
                    required: "Dog Potty Trained?",
                  })}
                />
                Yes
              </label>
              <label>
                <input
                  style={{ marginLeft: "10px" }}
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
              <input
                className="boxSpace"
                type="number"
                name="amtWalks"
                {...register("amtWalks", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Amount of Meals Per Day</label>
              <input
                className="boxSpace"
                type="number"
                name="amtMeals"
                {...register("amtMeals", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Amount of Food Per Meal</label>
              <input
                className="boxSpace"
                type="text"
                name="amtPerMeal"
                placeholder="in cups"
                {...register("amtPerMeal", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            <div className="form-control">
              <label>Dog Fixed? </label>
              <label>
                <input
                  style={{ marginLeft: "5px" }}
                  type="radio"
                  label="Yes"
                  value="yes"
                  {...register("dogFixed", {
                    required: "Dog Fixed?",
                  })}
                />
                Yes
              </label>
              <label>
                <input
                  style={{ marginLeft: "5px" }}
                  type="radio"
                  label="No"
                  value="no"
                  {...register("dogFixed", {
                    required: "Dog Fixed?",
                  })}
                />
                No
              </label>
            </div>

            <button
              type="submit"
              className="savechanges-button"
              style={{ marginTop: "10px" }}
            >
              Save Changes
            </button>
          </span>
        )}
      </form>
    </div>
  );
};
