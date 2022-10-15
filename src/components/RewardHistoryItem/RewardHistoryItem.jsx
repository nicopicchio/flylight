import "./RewardHistoryItem.css";

export default function RewardHistoryItem({ title, pointsDiff, desc, date }) {
  return (
    <div className="reward-history-item">
      <div className="reward-history-item__info-left">
        <p className="reward-history-item__info__title">{title}</p>
        <p className="reward-history-item__info__desc">{desc}</p>
      </div>

      <div className="reward-history-item__info-right">
        <p className="reward-history-item__info__points">{pointsDiff} points</p>
        <p className="reward-history-item__info__date">{date}</p>
      </div>
    </div>
  );
}
