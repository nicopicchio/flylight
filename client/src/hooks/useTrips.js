/**
 * A container component (data and behaviour)
 */

import { useEffect, useState } from "react";

export default function useTrips() {
  const [trips, setTrips] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
   fetch('http://localhost:3001/api/users/2/trips') // Now loading trips for user 2
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
        setTrips(data.trips);
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
    isLoading,
    trips,
    error
  };
}