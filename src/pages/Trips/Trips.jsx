import React from 'react';
import { Link } from 'react-router-dom';
import './Trips.css';
import Header from '../../components/Header/Header';
import TripPreview from '../../components/Trip/TripPreview';
import {ReactComponent as PlusIcon} from '../../assets/Plus_icon.svg';

export default function Trips() {
  return (
    <div className="my-trips">
        <Header/>
        <div className="my-trips__header">
          <h2 className="my-trips__title">My trips</h2>
          <Link to="/add-trip" className="my-trips__button--add-trip button-grey"><PlusIcon /></Link>
        </div>
        <div className="my-trips__items">
          {/* trip items, change to dynamic */}
          <TripPreview />
          <TripPreview />
          <TripPreview />
          <TripPreview />
          <TripPreview />
        </div>
      </div>
  )
}
