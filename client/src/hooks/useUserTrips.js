/**
 * A container component (data and behaviour) for Trips
 */

import { useEffect, useState } from "react";

export default function useUserTrips(user) {
  const [userTrips, setUserTrips] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  /* 
  Retrieve user's trips from the database 
  */
  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${user.id}/trips`)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
        setUserTrips(data.trips);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error);
    })
    .finally(() => {
        setIsLoading(false);
    })
  }, []);

  /* 
  Add a new trip to the database 
  */
  async function addTrip(depAirport, destAirport, date, flightClass, flightNumber, hasHoldLuggage, holdLuggageWeightAllowance, holdLuggageGoal, carbonFootprint) {
    const response = await fetch(`http://localhost:3001/api/users/${user.id}/trips`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
          "trip": {
                  "departure_airport_code": depAirport,
                  "destination_airport_code": destAirport,
                  "date": date,
                  "class": flightClass,
                  "flight_number": flightNumber,
                  "hold_luggage": hasHoldLuggage ? 1 : 0,
                  "hold_luggage_weight_allowance": holdLuggageWeightAllowance,
                  "hold_luggage_goal": holdLuggageGoal,
                  "carbon_footprint": carbonFootprint || 0,
              }
        })
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw new Error('Request failed!');
    })
    .catch(error => {
        console.error("Error posting data: ", error);
        setError(error);
    })
    .finally(() => {
        setIsLoading(false);
    })

    return response.json();
  };

  return {
    trips: userTrips,
    tripsIsLoading: isLoading,
    tripsError: error,
    addTrip
  };
}