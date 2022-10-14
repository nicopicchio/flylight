import React from "react";
import './AddTripForm.css'

export default function AddTripForm() {
  return (
    <div className="addtripform">
      <h1 className="addtripform--title">Add Trip</h1>
      <h3 className="addtripform--subtitle">Enter Flight Details</h3>
      <form className="addtripform--form">
        <input type="text" id="addtrip--form--destination" name="destination" />
        <input type="date" id="addtrip--form--date" name="date" />
        <select className="addtrip--form--dropdown" name="class">
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
        <input
          type="checkbox"
          id="addtrip--form--carryon--checkbox"
          name="carryOnCheckBox"
        />
        <label for="carryOnCheckBox">Carry-on luggage</label>
        <input
          type="number"
          id="addtrip--form--carryon--weight"
          name="carryOnWeight"
        />
        <input
          type="checkbox"
          id="addtrip--form--hold--checkbox"
          name="holdCheckBox"
        />
        <label for="carryOnCheckBox">Hold luggage</label>
        <input
          type="number"
          id="addtrip--form--hold--weight"
          name="holdWeight"
        />
      </form>
      <button>Next</button>
    </div>
  );
}
