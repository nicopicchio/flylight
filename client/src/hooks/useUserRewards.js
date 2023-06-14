/**
 * A container component (data and behaviour) for User's Rewards
 */

import { useEffect, useState } from "react";

export default function useUserRewards(user) {
  const [userRewards, setUserRewards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${user.id}/rewards`) // Now loading rewards for user 2
      .then(response => {
          if (response.ok) {
              return response.json()
          }
          throw response;
      })
      .then(data => {
          setUserRewards(data.rewards);
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
    userRewardsIsLoading: isLoading,
    userRewards: userRewards,
    userRewardsError: error
  };
}