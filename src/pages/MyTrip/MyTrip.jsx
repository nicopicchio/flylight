import React from 'react';
import './MyTrip.css';
import Header from '../../components/Header/Header';
import TripFull from '../../components/Trip/TripFull';

export default function MyTrip() {
  return (
    <div className="my-trip">
        <Header/>
        <h2 className="my-trip__title">My trip</h2>
        <div className="my-trip__item">
            {/* trip item, change to dynamic */}
            <TripFull />
        </div>
      </div>
  )
}
