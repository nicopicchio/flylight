import React from 'react'
import { useNavigate } from 'react-router-dom'
import TripForm from '../components/TripForm'
import { createTrip } from '../../services/userTrips'
import { useAsyncFn } from '../../hooks/useAsync'

export default function AddTripPage({ userId }) {
    const { loading, error, execute: createTripFn } = useAsyncFn(createTrip)
    const navigate = useNavigate()

    function onTripCreate(trip) {
        return createTripFn({
            userId: userId,
            depAirport: trip.from, 
            destAirport: trip.to,
            date: trip.date,
            flightClass: trip.flightClass,
            flightNumber: trip.flightNumber,
            hasHoldLuggage: trip.hasHoldLuggage,
            holdLuggageWeightAllowance: trip.holdLuggageWeightAllowance,
            holdLuggageGoal: trip.holdLuggageGoal,
            carbonFootprint: trip.carbonFootprint || 0
        }).then((data) => {
            if (!data) console.log("Request error")
            navigate(`/trips/${data.id}`, {state: {trip: data}})
            return "success"
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    return (
        <div className="trip-form">
            <h2>Add Trip</h2>
            <h4 className='tripform--subtitle'>Enter Flight Details</h4>

            <TripForm userId={userId} onSubmitFn={onTripCreate}/>
        </div>
    )
}