import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TripForm from "../components/TripForm"
import { useAsyncFn } from '../../hooks/useAsync'
import { updateTrip } from '../../services/userTrips'

export default function EditTripPage({ userId }) {
    const location = useLocation()
    const { trip } = location.state
    const tripId = trip.id

    const initialData = {
        from: trip.departure_airport_code,
        to: trip.destination_airport_code,
        date: trip.date,
        flightClass: trip.class,
        flightNumber: trip.flight_number,
        holdLuggageCheckbox: trip.hold_luggage == 0 ? false : true,
        holdLuggageWeightAllowance: trip.hold_luggage_weight_allowance,
        holdLuggageGoal: trip.hold_luggage_goal,
        carbonFootprint: trip.carbon_footprint
    }

    const { loading, error, execute: updateTripFn } = useAsyncFn(updateTrip)
    const navigate = useNavigate()

    function onTripUpdate(trip) {
        return updateTripFn({
            userId: userId,
            tripId: tripId,
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
            <h2>Edit Trip</h2>
            <h4 className='tripform--subtitle'>Enter Flight Details</h4>

            <TripForm userId={userId} initialData={initialData} onSubmitFn={onTripUpdate}/>
        </div>
    )
}