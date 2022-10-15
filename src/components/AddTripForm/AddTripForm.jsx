import React from 'react';
import './AddTripForm.css';

export default function AddTripForm() {
  const initialFormData = {
    destination: '',
    date: '',
    class: '',
    carryOnCheckBox: false,
    carryOnWeight: '',
    holdCheckBox: false,
    holdWeight: '',
  };

  const [formData, setFormData] = React.useState(initialFormData);

  console.log('formData:', formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted...');
    return;
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
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
        <div className="addtripform--form--checkbox">
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
        <div className="addtripform--form--checkbox">
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
