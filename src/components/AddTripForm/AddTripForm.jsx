import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddTripForm.css";

export default function AddTripForm({ formData, setFormData }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    /*  --- CAN'T FETCH DUE TO CORS POLICY --- */
    // fetch(
    //   `https://partner-test.api.chooose.today/v1/footprint/flights/route/${formData.departure}/${formData.destination}`,
    //   {
    //     method: "GET",
    //     redirect: "follow",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((co2FootprintData) => console.log(co2FootprintData))
    //   .catch((error) => console.log("error", error));

    navigate("../set-goals");
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className='addtripform'>
      <h2 className='addtripform--title'>Add Trip</h2>
      <h4 className='addtripform--subtitle'>Enter Flight Details</h4>
      <form className='addtripform--form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='addtrip--form--departure'
          name='departure'
          onChange={handleChange}
          placeholder='Departure Airport..'
        />
        <input
          type='text'
          id='addtrip--form--destination'
          name='destination'
          onChange={handleChange}
          placeholder='DEST AIRPORT...'
        />
        <input
          type='date'
          id='addtrip--form--date'
          name='date'
          onChange={handleChange}
        />
        <select
          className='addtrip--form--dropdown'
          name='class'
          onChange={handleChange}
          value={formData.class}
        >
          <option value='Economy'>Economy</option>
          <option value='Business'>Business</option>
          <option value='First'>First</option>
        </select>
        <div className='addtripform--form--checkbox'>
          <input
            type='checkbox'
            id='addtrip--form--carryon--checkbox'
            name='carryOnCheckBox'
            onChange={handleChange}
            checked={formData.carryOnCheckBox}
          />
          <label htmlFor='carryOnCheckBox'>Carry-on luggage</label>
        </div>
        {formData.carryOnCheckBox && (
          <input
            type='number'
            id='addtrip--form--carryon--weight'
            name='carryOnWeight'
            onChange={handleChange}
            value={formData.carryOnWeight}
            placeholder='Weight in Kg..'
          />
        )}
        <div className='addtripform--form--checkbox'>
          <input
            type='checkbox'
            id='addtrip--form--hold--checkbox'
            name='holdCheckBox'
            onChange={handleChange}
            checked={formData.holdCheckBox}
          />
          <label htmlFor='carryOnCheckBox'>Hold luggage</label>
        </div>
        {formData.holdCheckBox && (
          <input
            type='number'
            id='addtrip--form--hold--weight'
            name='holdWeight'
            onChange={handleChange}
            value={formData.holdWeight}
            placeholder='Weight in Kg..'
          />
        )}

        <button
          className='button-turquoise button-turquoise--main'
          type='submit'
          value='Next'
        >
          Add
        </button>
      </form>
    </div>
  );
}
