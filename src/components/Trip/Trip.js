import React from 'react';
import './Trip.css';
import GoalChart from '../../components/GoalChart/GoalChart';

export default function Trip() {
  return (
    <div className="trip">
      <div className="trip__goal-chart">
        <GoalChart />
      </div>
      <div className="trip__text">
        <div className="trip__text__trip-info">
          <p className="trip__text__trip-info__airport-codes">LGW - AMS</p>
          <p className="trip__text__trip-info__date">26 Nov. 2022</p>
        </div>
        <p className="trip__text__status">Pending</p>
      </div>
    </div>
  )
}
