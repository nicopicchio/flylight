import React from 'react'

// Code adapted from https://dev.to/jackherizsmith/making-a-progress-circle-in-react-3o65

// Ensure number is usable as percentage
const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : + percentage;
}

// Create Circle component
const Circle = ({ colour, percentage }) => {
  const r = 19;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={177}
      cy={23}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={".5rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      // stroke-linecap="round" // for rounded edges on progress bar
    ></circle>
  )
}

// Create GoalChart component with two Circles; one full for background + one progress/percentage circle
const GoalChart = ({ percentage }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={46} height={46}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="#D9D9D9" />
        <Circle colour='#00BBB0' percentage={pct} />
      </g>
    </svg>
  )
}

export default GoalChart