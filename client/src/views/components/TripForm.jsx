import React, { useState } from 'react'
import useMultiStepForm from '../../services/useMultiStepForm'
import { fetchCarbonFootprint } from '../../services/carbonFootprint'

/*
 * FlightForm is step 1 of the TripForm
 */
function FlightForm({ from, to, date, flightClass, flightNumber, holdLuggageCheckbox, holdLuggageWeightAllowance, updateFields }) {
    return (
        <div className="tripform--form">
            <input
                type='text'
                id='addtrip--form--departure'
                name='from'
                value={from}
                onChange={updateFields}
                placeholder='Departure airport'
            />

            <input
                type='text'
                id='addtrip--form--destination'
                name='to'
                value={to}
                onChange={updateFields}
                placeholder='Destination airport'
            />

            <input
                type='text'
                id='addtrip--form--flightnumber'
                name='flightNumber'
                value={flightNumber}
                onChange={updateFields}
                placeholder='Flight number'
            />

            <input
                type='date'
                id='addtrip--form--date'
                name='date'
                value={date}
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
    )
}

/*
 * GoalForm is step 2 of the TripForm
 */
function GoalForm({ holdLuggageWeightAllowance, holdLuggageGoal, updateFields }) {
    return (
        <>
            <h2>Set Goal</h2>

            <div>
                <p className='text--thick'>
                My carbon footprint for this
                <br /> flight is
                </p>
                <h2>xxxx kg</h2>
                <p className='text--thin'>of CO₂</p>
            </div>

            {holdLuggageWeightAllowance && (
                <div className='slider'>
                    <p className='text--thick'>My hold luggage goal</p>
                    <h2>{holdLuggageGoal} kg</h2>
                    <div className='slider-input_container'>
                        <input
                        type='range'
                        name='holdLuggageGoal'
                        min='0'
                        max={holdLuggageWeightAllowance}
                        step='1'
                        value={holdLuggageGoal}
                        onChange={updateFields}
                        />
                        <div className='luggage-goal-weight_container'>
                            <p className='text--thin'>0kg</p>
                            <p className='text--thin'>{`${holdLuggageWeightAllowance}kg`}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

/*
 * Main component TripForm which contains FlightForm as step 1 and GoalForm as step 2
 */
export default function TripForm({ userId, initialData, onSubmitFn }) {
    const INITIAL_DATA = {
        from: '',
        to: '',
        date: '',
        flightClass: 'economy',
        flightNumber: '',
        holdLuggageCheckbox: false,
        holdLuggageWeightAllowance: null,
        holdLuggageGoal: null,
        carbonFootprint: 0
    }

    const [tripData, setTripData] = useState(initialData || INITIAL_DATA)

    function updateFields(fields) {
        const { name, value, type, checked } = fields.target
        setTripData(prev => {
            return {
                ...prev, 
                ...fields, 
                [name]: type === "checkbox" ? checked : value 
            }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <FlightForm {...tripData} updateFields={updateFields} />, 
        <GoalForm {...tripData} updateFields={updateFields} />
    ])

    function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) {
            if (isFirstStep) {
                fetchCarbonFootprint()
            }
            return next()
        }
        if (onSubmitFn(tripData) == "success") setTripData(INITIAL_DATA)
    }

    return (
        <form onSubmit={onSubmit}>

            {step}

            <div>{currentStepIndex + 1} / {steps.length}</div>

            <div className="buttonsContainer">
                {!isFirstStep && (<button className="button-turquoise button-turquoise--small button-back" type="button" onClick={back}>Back</button>)}
                <button className="button-turquoise button-turquoise--small" type="submit">{isLastStep ? "Set Goal" : "Next" }</button>
            </div>

        </form>
    )
}