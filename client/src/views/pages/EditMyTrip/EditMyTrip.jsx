import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import Header from '../../components/Header/Header';
import useMultiStepForm from './useMultiStepForm';
import AddTripForm from "../../components/AddTripForm/AddTripForm";
import SetGoalForm from "../../components/AddTripForm/SetGoalForm";

import useUserTrips from "../../../hooks/useUserTrips";

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

export default function EditMyTrip({ user }) {
    const navigate = useNavigate();
    let { id } = useParams();
    const { getTrip } = useUserTrips(user);
    const [tripData, setTripData] = useState(INITIAL_DATA);

    /* 
    Retrieve the trip from the database
    */
    useEffect(() => {
        getTrip(id);
        // console.log("TRIP: " + JSON.stringify( getTrip(id)));
        // setTripData(getTrip(id));
    }, [id]);

    function updateFields(fields) {
        const { name, value, type, checked } = fields.target;
        setTripData(prev => {
            return {
                ...prev, 
                ...fields, 
                [name]: type === "checkbox" ? checked : value 
            }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <AddTripForm {...tripData} typeOfForm="edit" updateFields={updateFields} />, 
        <SetGoalForm {...tripData} typeOfForm="edit" updateFields={updateFields} />
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

        /* Edit trip in the database */

        // addTrip(tripData.from, tripData.to, tripData.date, tripData.flightClass, tripData.flightNumber, tripData.hasHoldLuggage, tripData.holdLuggageWeightAllowance, tripData.holdLuggageGoal, tripData.carbonFootprint)
        // .then((data) => {
        //     if (data) {
        //         console.log(JSON.stringify(data));
        //         alert("Succesful submit");
        //         navigate("/home");
        //     } else {
        //         console.log("Request error");
        //     }
        // });
        
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