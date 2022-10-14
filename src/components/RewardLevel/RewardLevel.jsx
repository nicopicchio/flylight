import React from 'react';
import './RewardLevel.css';

export default function RewardLevel() {
  return (
    <div className="reward-level">
        <div className="reward-level__badge"></div>
        <div className="reward-level__text">
            <div className="reward-level__text__left-comp">
                <p className="reward-level__text__title">Silver <span class="reward-level__text__small">(Level 2)</span></p>
                <p className="reward-level__text__next-level">1090 points to Gold</p>
            </div>
            <p className="reward-level__text__points">2,010 <span class="reward-level__text__small">points</span></p>
        </div>
    </div>
  )
}