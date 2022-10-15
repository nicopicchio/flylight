import React from 'react';
import './RewardLevel.css';
import SilverBadge from '../../assets/Silver_status.png';

export default function RewardLevel() {
  return (
    <div className="reward-level">
        <div className="reward-level__badge">
          <img className="reward-level__badge__img" src={SilverBadge} alt="Silver level badge"/>
        </div>
        <div className="reward-level__text">
            <div className="reward-level__text__left-comp">
                <p className="reward-level__text__title">Silver <span className="reward-level__text__small">(Level 2)</span></p>
                <p className="reward-level__text__next-level">1090 points to Gold</p>
            </div>
            <p className="reward-level__text__points">2,010 <span className="reward-level__text__small">points</span></p>
        </div>
    </div>
  )
}