import React from 'react';
import { Link } from 'react-router-dom';
import './TripPreview.css';
import './TripFull.css';
import {ReactComponent as PencilIcon} from '../../../assets/Pencil_icon.svg';

export default function TripFull(props) {
  return (
    <div className="trip">

        <div className="trip-text">
            <div className="trip-preview">
                <div className="trip-preview__trip-info">
                    <p className="trip-preview__trip-info__airport-codes">{props.tripObject.departure_airport_code} - {props.tripObject.destination_airport_code}</p>
                    <p className="trip-preview__trip-info__date">{props.tripObject.date}</p>
                </div>
                <p className="trip-preview__status">{props.tripObject.verified ? 'Verified' : 'Pending'}</p>
            </div>

            <div className="trip__extra-details">
                <div className="trip__extra-details__flight">
                    <p className="trip__extra-details__flight-detail">Flight: {props.tripObject.flight_number}</p>
                    <p className="trip__extra-details__flight-detail">Class {props.tripObject.class}</p>
                    <p className="trip__extra-details__flight-footprint">Footprint: {props.tripObject.carbon_footprint} kg CO2</p>
                </div>

                <div className="trip__extra-details__luggage trip__extra-details__luggage--carry-on">
                    <p>Hold luggage goal:</p>
                    <p>{props.tripObject.hold_luggage_goal} kg max</p>
                    <div className="trip__extra-details__luggage__goal-container">
                        <div className="trip__extra-details__luggage__goal-bar"></div>
                        <p>0kg</p>
                        <p>{props.tripObject.hold_luggage_weight_allowance}kg</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="trip__button-container">
            <Link to={`/edit-trip/${props.tripObject.id}`} className="trip__button--edit-trip button-grey"><PencilIcon /></Link>
        </div>

    </div>
  )
}
