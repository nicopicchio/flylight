import { Link } from 'react-router-dom'
import RewardStatus from '../components/RewardStatus'
// import RewardHistoryItem from "./RewardHistoryItem"

// import formatDate from "../utils/formatDate"

export default function RewardsPage({ userId }) {
//   const { rewardsIsLoading, rewards, rewardsError } = useRewards();
//   const { userRewardsIsLoading, userRewards, userRewardsError } = useUserRewards(user);

  return (
    <>
      <div className="my-rewards__header">
        <h2 className="my-rewards__title">My Rewards</h2>
        <Link
          to="/redeem-points"
          className="my-rewards__redeem-button button-turquoise button-turquoise--small"
        >
          Redeem
        </Link>
      </div>

      <>
        <RewardStatus userId={userId} />
      </>

      <div className="my-rewards__history">
        <h2 className="my-rewards__history__title">History</h2>
        {/* {rewardsIsLoading || userRewardsIsLoading ? (
          <span>Loading...</span>
        ) : rewards && rewards.length > 0 && userRewards && userRewards.length > 0  ? (
          userRewards.map((userReward, index) => (
            <RewardHistoryItem
              key={index}
              rewardItem={rewards.find(obj => obj.id === userReward.reward_id)}
              purchaseDate={formatDate(userReward.purchase_date)}
            />
          ))
        ) : (
          <span>You have no rewards</span>
        )} */}
      </div>
    </>
  )
}
