/**
 * A container component (data and behaviour) for all Rewards
 */

import { useEffect, useState } from "react";

export default function useRewards() {
  const [rewards, setRewards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
   fetch('http://localhost:3001/api/rewards')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(data => {
        setRewards(data.rewards);
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
    rewards,
    error
  };
}