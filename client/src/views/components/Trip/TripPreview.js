import React from 'react';
import './TripPreview.css';
import GoalChart from '../GoalChart/GoalChart';
import { Link } from 'react-router-dom';

export default function TripPreview(props) {
  return (
    <Link to={`/trips/${props.tripObject.id}`} className="trip__link">
    {/* Ensure it links to the correct trip that is showing */}

        <div className="trip-preview__goal-chart">
          {/* Make percentage dynamic based on goal set for the trip (calcualte both carry-on + hold luggage together */}
          <GoalChart percentage={40} /> 
        </div>

        <div className="trip-preview">
            <div className="trip-preview__trip-info">
                <p className="trip-preview__trip-info__airport-codes">{props.tripObject.departure_airport_code} - {props.tripObject.destination_airport_code}</p>
                <p className="trip-preview__trip-info__date">{props.tripObject.date}</p>
            </div>
            <p className="trip-preview__status">{props.tripObject.verified ? 'Verified' : 'Pending'}</p>
        </div>
        
    </Link>
  )
}
