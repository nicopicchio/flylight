import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as PencilIcon } from '../../assets/Pencil_icon.svg'
import { useAsyncFn } from '../../hooks/useAsync'
import { deleteTrip } from '../../services/userTrips'

export default function TripPage({ userId }) {

    const location = useLocation()
    const { trip } = location.state
    const tripId = trip.id

    const { loading, error, execute: deleteTripFn } = useAsyncFn(deleteTrip)
    const navigate = useNavigate()

    function onTripDelete() {
        if (window.confirm("Are you sure you want to delete this trip?")) {
            return deleteTripFn({
                userId: userId,
                tripId: tripId
            }).then(
                // navigate('/trips', {state: {navBackTarget: '/home'}, replace: true})
                navigate('/trips')
            ).catch(error => {
                console.log("Error: " + error)
            })
        } else {
            console.log("Trip not deleted")
            return
        }
    }

    return (
        <div className="my-trip">
            <h2 className="my-trip__title">To {trip.destination_airport_code}</h2>

            <div className="my-trip__item">
                <div className="trip">

                    <div className="trip-text">
                        <div className="trip-preview">
                            <div className="trip-preview__trip-info">
                                <p className="trip-preview__trip-info__airport-codes">{trip.departure_airport_code} - {trip.destination_airport_code}</p>
                                <p className="trip-preview__trip-info__date">{trip.date}</p>
                            </div>
                            <p className="trip-preview__status">{trip.verified ? 'Verified' : 'Pending'}</p>
                        </div>

                        <div className="trip__extra-details">
                            <div className="trip__extra-details__flight">
                                <p className="trip__extra-details__flight-detail">Flight: {trip.flight_number}</p>
                                <p className="trip__extra-details__flight-detail">Class {trip.class}</p>
                                <p className="trip__extra-details__flight-footprint">Footprint: {trip.carbon_footprint} kg CO2</p>
                            </div>

                            <div className="trip__extra-details__luggage trip__extra-details__luggage--carry-on">
                                <p>Hold luggage goal:</p>
                                <p>{trip.hold_luggage_goal} kg max</p>
                                <div className="trip__extra-details__luggage__goal-container">
                                    <div className="trip__extra-details__luggage__goal-bar"></div>
                                    <p>0kg</p>
                                    <p>{trip.hold_luggage_weight_allowance}kg</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="trip__button-container">
                        <button onClick={onTripDelete}>Delete</button>
                        <Link to={`/edit-trip/${trip.id}`} state={{trip: trip}} className="trip__button--edit-trip button-grey"><PencilIcon /></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
