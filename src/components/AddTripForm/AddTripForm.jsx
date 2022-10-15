import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddTripForm.css";

export default function AddTripForm({ formData, setFormData }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    // fetch(
    //   `https://partner-test.api.chooose.today/v1/footprint/flights/route/${formData.departure}/${formData.destination}`
    // )
    //   .then((res) => res.json())
    //   .then((co2FootprintData) => console.log(co2FootprintData));
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
      <h3 className='addtripform--subtitle'>Enter Flight Details</h3>
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
          placeholder='Destination Airport..'
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
        <input
          type='checkbox'
          id='addtrip--form--carryon--checkbox'
          name='carryOnCheckBox'
          onChange={handleChange}
          checked={formData.carryOnCheckBox}
        />
        <label htmlFor='carryOnCheckBox'>Carry-on luggage</label>
        {formData.carryOnCheckBox && (
          <input
            type='number'
            id='addtrip--form--carryon--weight'
            name='carryOnWeight'
            onChange={handleChange}
            value={formData.carryOnWeight}
          />
        )}
        <input
          type='checkbox'
          id='addtrip--form--hold--checkbox'
          name='holdCheckBox'
          onChange={handleChange}
          checked={formData.holdCheckBox}
        />
        <label htmlFor='carryOnCheckBox'>Hold luggage</label>
        {formData.holdCheckBox && (
          <input
            type='number'
            id='addtrip--form--hold--weight'
            name='holdWeight'
            onChange={handleChange}
            value={formData.holdWeight}
          />
        )}
        <input
          className='button-turquoise button-turquoise--main'
          type='submit'
          value='Next'
        />
      </form>
    </div>
  );
}
