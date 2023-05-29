import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import RewardLevel from "../../components/RewardLevel/RewardLevel";
import RewardHistoryItem from "../../components/RewardHistoryItem/RewardHistoryItem";
import formatDate from "../../utils/formatDate";
import "./MyRewards.css";

// Hardcoded data, for development
const hardCodedHistoryItems = [
  {
    title: "A tree planted",
    description: "Saving the Amazon",
    points: -100,
    date: "11/08/2022",
  },
  {
    title: "Achieved goal",
    description: "LGW - AMS",
    points: +63,
    date: "11/08/2022",
  },
  {
    title: "Achieved goal",
    description: "ARN - OSL",
    points: +17,
    date: "02/03/2022",
  },
];

export default function MyRewards() {
  return (
    <>
      <Header />

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
        <RewardLevel />
      </>

      <div className="my-rewards__history">
        <h2 className="my-rewards__history__title">History</h2>

        {hardCodedHistoryItems.map((item) => (
          <RewardHistoryItem
            title={item.title}
            desc={item.description}
            pointsDiff={item.points > 0 ? `+${item.points}` : item.points}
            date={formatDate(item.date)}
          />
        ))}
      </div>
    </>
  );
}
