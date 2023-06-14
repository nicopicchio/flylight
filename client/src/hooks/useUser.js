/**
 * A container component (data and behaviour) for User
 */

import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
   fetch('http://localhost:3001/api/users/1') // Now loading user 1
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
        setUser(data.user);
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
    user,
    error
  };
}