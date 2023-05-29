import React from "react";
import "./AddTripForm.css";

export default function AddTripForm({ from, to, date, flightClass, holdLuggageCheckbox, holdLuggageWeightAllowance, updateFields }) {
return (
    <div className="addtripform--form">
        <h2>Add Trip</h2>
        <h4 className='addtripform--subtitle'>Enter Flight Details</h4>

        <input
            type='text'
            id='addtrip--form--departure'
            name='from'
            onChange={updateFields}
            placeholder='Departure Airport..'
        />

        <input
            type='text'
            id='addtrip--form--destination'
            name='to'
            onChange={updateFields}
            placeholder='DEST AIRPORT...'
        />

        <input
            type='date'
            id='addtrip--form--date'
            name='date'
            onChange={updateFields}
        />

        <select
            className='addtrip--form--dropdown'
            name='flightClass'
            onChange={updateFields}
            value={flightClass}
        >
            <option value='economy'>Economy</option>
            <option value='business'>Business</option>
            <option value='first'>First</option>
        </select>

        <div className='addtripform--form--checkbox'>
            <input
            type='checkbox'
            id='addtrip--form--hold--checkbox'
            name='holdLuggageCheckbox'
            onChange={updateFields}
            checked={holdLuggageCheckbox}
            />
            <label htmlFor='carryOnCheckBox'>Hold luggage</label>
        </div>

        {holdLuggageCheckbox && (
            <input
            type='number'
            id='addtrip--form--hold--weight'
            name='holdLuggageWeightAllowance'
            onChange={updateFields}
            value={holdLuggageWeightAllowance}
            placeholder='Weight in Kg..'
            />
        )}
    </div>
);
}
