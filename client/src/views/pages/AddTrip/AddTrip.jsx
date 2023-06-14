import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from '../../components/Header/Header';
import useMultiStepForm from './useMultiStepForm';
import AddTripForm from "../../components/AddTripForm/AddTripForm";
import SetGoalForm from "../../components/AddTripForm/SetGoalForm";
import {trips} from '../../../data/tripData';

const INITIAL_DATA = {
    from: '',
    to: '',
    date: '',
    flightClass: 'economy',
    flightNumber: '',
    holdLuggageCheckbox: false,
    holdLuggageWeightAllowance: 0,
    holdLuggageGoal: 0,
    carbonFootprint: 0
}

let nextId = 6;

export default function Form() {
    const navigate = useNavigate();
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields) {
        const { name, value, type, checked } = fields.target;
        setData(prev => {
            return {
                ...prev, 
                ...fields, 
                [name]: type === "checkbox" ? checked : value 
            }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <AddTripForm {...data} updateFields={updateFields} />, 
        <SetGoalForm {...data} updateFields={updateFields} />
    ]);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) {

            if (isFirstStep) {
                // FETCH FROM API TO GET CARBON FOOTPRINT

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

            }

            return next();
        }

        alert("Succesful submit");
        trips.push({
            id: nextId++,
            from: data.from,
            to: data.to,
            date: data.date,
            class: data.flightClass,
            flightNumber: data.flightNumber,
            holdLuggage: data.holdLuggage,
            holdLuggageWeightAllowance: data.holdLuggageWeightAllowance,
            holdLuggageGoal: data.holdLuggageGoal,
            carbonFootprint: data.carbonFootprint,
            verified: false
        });
        console.log(trips);
        navigate("/home");
    }

return (
    <div className="add-trip">
        <Header />

        <form onSubmit={onSubmit}>
            <div>{currentStepIndex + 1} / {steps.length}</div>

            {step}

            <div className="buttonsContainer">
                {!isFirstStep && (<button className="button-turquoise button-turquoise--small button-back" type="button" onClick={back}>Back</button>)}
                <button className="button-turquoise button-turquoise--small" type="submit">{isLastStep ? "Set Goal" : "Next" }</button>
            </div>
        </form>
    </div>
)}