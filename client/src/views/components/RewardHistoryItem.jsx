export default function RewardHistoryItem({ rewardItem, purchaseDate }) {
    return (
        <div className="reward-history-item">
            <div className="reward-history-item__info-left">
                <p className="reward-history-item__info__title">{rewardItem.name}</p>
                <p className="reward-history-item__info__desc">{rewardItem.company}</p>
            </div>

            <div className="reward-history-item__info-right">
                <p className="reward-history-item__info__points">- {rewardItem.cost_in_points} points</p>
                <p className="reward-history-item__info__date">{purchaseDate}</p>
            </div>
        </div>
    )
}
