import React from 'react';
import './TripPreview.css';
import GoalChart from '../GoalChart/GoalChart';
import { Link } from 'react-router-dom';

export default function TripPreview() {
  return (
    <Link to="/my-trip" className="trip__link">
    {/* Ensure it links to the correct trip that is showing */}

        <div className="trip-preview__goal-chart">
          {/* Make percentage dynamic based on goal set for the trip (calcualte both carry-on + hold luggage together */}
          <GoalChart percentage={40} /> 
        </div>

        <div className="trip-preview">
            <div className="trip-preview__trip-info">
                <p className="trip-preview__trip-info__airport-codes">LGW - AMS</p>
                <p className="trip-preview__trip-info__date">26 Nov. 2022</p>
            </div>
            <p className="trip-preview__status">Pending</p>
        </div>
        
    </Link>
  )
}
