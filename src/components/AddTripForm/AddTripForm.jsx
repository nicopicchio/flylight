import React from "react";
import './AddTripForm.css'

export default function AddTripForm() {

  

  const initialFormData = {
    destination: "",
    date: "",
    class: "",
    carryOnCheckBox: true,
    carryOnWeight: '',
    holdCheckBox: true,
    holdWeight: ''
  };

  const [formData, setFormData] = React.useState(initialFormData)

  console.log('formData:', formData)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted...')
    return
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="addtripform">
      <h1 className="addtripform--title">Add Trip</h1>
      <h3 className="addtripform--subtitle">Enter Flight Details</h3>
      <form className="addtripform--form" onSubmit={handleSubmit}>
        <input type="text" id="addtrip--form--destination" name="destination" onChange={handleChange}/>
        <input type="date" id="addtrip--form--date" name="date" onChange={handleChange}/>
        <select className="addtrip--form--dropdown" name="class" onChange={handleChange}>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
        <input
          type="checkbox"
          id="addtrip--form--carryon--checkbox"
          name="carryOnCheckBox"
          onChange={handleChange}
        />
        <label htmlFor="carryOnCheckBox">Carry-on luggage</label>
        <input
          type="number"
          id="addtrip--form--carryon--weight"
          name="carryOnWeight"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          id="addtrip--form--hold--checkbox"
          name="holdCheckBox"
          onChange={handleChange}
        />
        <label htmlFor="carryOnCheckBox">Hold luggage</label>
        <input
          type="number"
          id="addtrip--form--hold--weight"
          name="holdWeight"
          onChange={handleChange}
        />
      <input className='addtripform--form--submit' type='submit' value='Next'/>
      </form>
    </div>
  );
}
