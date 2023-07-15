import React from 'react'
import { Link } from 'react-router-dom'
import GoalChart from './GoalChart'

export default function TripPreview({ trip }) {
  return (
    <Link to={`/trips/${trip.id}`} state={{trip: trip}} className="trip__link">
    {/* Ensure it links to the correct trip that is showing */}

        <div className="trip-preview__goal-chart">
          {/* Make percentage dynamic based on goal set for the trip (calcualte both carry-on + hold luggage together */}
          <GoalChart percentage={40} /> 
        </div>

        <div className="trip-preview">
            <div className="trip-preview__trip-info">
                <p className="trip-preview__trip-info__airport-codes">{trip.departure_airport_code} - {trip.destination_airport_code}</p>
                <p className="trip-preview__trip-info__date">{trip.date}</p>
            </div>
            <p className="trip-preview__status">{trip.verified ? 'Verified' : 'Pending'}</p>
        </div>
        
    </Link>
  )
}
