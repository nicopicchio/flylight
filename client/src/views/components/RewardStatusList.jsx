import { Link } from 'react-router-dom'
import RewardStatus from './RewardStatus'

export default function RewardStatusList({ userId, isRewardPage }) {
    return (
        <div className="home__my-rewards">

            <div className="home__my-rewards__header">
                <h2 className="home__my-rewards__title">My rewards</h2>

                {!isRewardPage && 
                    <Link to="/rewards" className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</Link>
                }
                {isRewardPage && 
                    <Link to="/redeem" className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">Redeem</Link>
                }
            </div>

            <div className="home__my-rewards__items">
                <RewardStatus userId={userId} />
            </div>

        </div>
    )
}