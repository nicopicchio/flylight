import React from 'react';
import './MyTrip.css';
import Header from '../../components/Header/Header';
import TripFull from '../../components/Trip/TripFull';
import { useParams } from "react-router-dom";

import useTrips from "../../../hooks/useUserTrips";

export default function MyTrip({ user }) {

  const routeParams = useParams();
  const tripId = Number(routeParams.id);
  
  const { trips, isLoading, error } = useTrips(user);

  return (
    <div className="my-trip">
        <Header/>
        <h2 className="my-trip__title">My trip</h2>
        <div className="my-trip__item">
            {isLoading ? (
              <span>Loading...</span>
            ) : trips && trips.length > 0  ? (
              trips.filter(trip => trip.id === tripId).map((trip, index) => 
                <TripFull key={index} tripObject={trip} />
              )
            ) : (
              <span>{JSON.stringify(error)}</span>
            )}
        </div>
      </div>
  )
}
