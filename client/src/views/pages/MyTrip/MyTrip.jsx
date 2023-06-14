import React from 'react';
import './MyTrip.css';
import Header from '../../components/Header/Header';
import TripFull from '../../components/Trip/TripFull';
import {trips} from '../../../data/tripData';
import { useParams } from "react-router-dom";

export default function MyTrip() {

  const routeParams = useParams();
  const tripId = Number(routeParams.id);

  return (
    <div className="my-trip">
        <Header/>
        <h2 className="my-trip__title">My trip</h2>
        <div className="my-trip__item">
            {trips.filter(trip => trip.id === tripId).map((trip, index) => 
              <TripFull key={index} tripObject={trip} />
            )}
        </div>
      </div>
  )
}
