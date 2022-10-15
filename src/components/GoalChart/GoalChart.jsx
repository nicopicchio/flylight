import React from 'react';
import './GoalChart.css';

export default function GoalChart() {
  return (
    <div className="goal-chart goal-chart--container">
        <div className="goal-chart goal-chart--progress-bar"></div>
        <div className="goal-chart goal-chart--offset-bar"></div>
    </div>
  )
}