import React from 'react';
import { Link } from 'react-router-dom';
import './TripPreview.css';
import './TripFull.css';
import {ReactComponent as PencilIcon} from '../../assets/Pencil_icon.svg';


export default function TripFull() {
  return (
    <div className="trip">

        <div className="trip-text">
            <div className="trip-preview">
                <div className="trip-preview__trip-info">
                    <p className="trip-preview__trip-info__airport-codes">LGW - AMS</p>
                    <p className="trip-preview__trip-info__date">26 Nov. 2022</p>
                </div>
                <p className="trip-preview__status">Pending</p>
            </div>

            <div className="trip__extra-details">
                <div className="trip__extra-details__flight">
                    <p className="trip__extra-details__flight-detail">Flight: BA 2764</p>
                    <p className="trip__extra-details__flight-detail">Class economy</p>
                    <p className="trip__extra-details__flight-footprint">Footprint: 110 kg CO2</p>
                </div>

                <div className="trip__extra-details__luggage trip__extra-details__luggage--carry-on">
                    <p>Carry-on luggage goal:</p>
                    <p>below 15 kg</p>
                    <div className="trip__extra-details__luggage__goal-container">
                        <div className="trip__extra-details__luggage__goal-bar"></div>
                        <p>0kg</p>
                        <p>23kg</p>
                    </div>
                </div>

                {/* Add hold luggage */}
                
            </div>
        </div>

        <div className="trip__button-container">
            <Link to="/edit-trip" className="trip__button--edit-trip button-grey"><PencilIcon /></Link>
        </div>

    </div>
  )
}
