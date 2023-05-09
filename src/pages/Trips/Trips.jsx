import React from 'react';
import { Link } from 'react-router-dom';
import './Trips.css';
import Header from '../../components/Header/Header';
import TripPreview from '../../components/Trip/TripPreview';
import {ReactComponent as PlusIcon} from '../../assets/Plus_icon.svg';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import {trips} from '../../data/tripData';

export default function Trips() {
  return (
    <div className="my-trips">
        <Header/>

        <div className="my-trips__header">
          <h2 className="my-trips__title">My trips</h2>
          <Link to="/add-trip" className="my-trips__button--add-trip button-grey"><PlusIcon /></Link>
        </div>

        <div className="my-trips__items">
          {trips.length === 0 && (
            <div className="my-trips__items__empty">
            <p>You don't have any trips yet, <br/>
            click here to add a new trip!</p>
            <div className="my-trips__items__empty__arrow-container">
              <Arrow />
            </div>
          </div>
          )}

          {trips.map((trip, index) => 
            <TripPreview key={index} tripObject={trip} />
          )}
        </div>
      </div>
  )
}
