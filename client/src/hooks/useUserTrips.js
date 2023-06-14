/**
 * A container component (data and behaviour) for Trips
 */

import { useEffect, useState } from "react";

export default function useUserTrips(user) {
  const [userTrips, setUserTrips] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

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

  return {
    tripsIsLoading: isLoading,
    trips: userTrips,
    tripsError: error
  };
}