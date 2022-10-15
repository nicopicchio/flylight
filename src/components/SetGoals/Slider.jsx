import { useState } from "react";
import "./Slider.css";

export default function Slider({ weight }) {
  const [luggageGoal, setLuggageGoal] = useState(weight / 2);

  return (
    <div className='slider'>
      <p className='text--thick'>My carry-on luggage goal</p>
      <h2>{luggageGoal} kg</h2>
      <div className='slider-input_container'>
        <input
          type='range'
          min='0'
          max={weight}
          value={luggageGoal}
          onChange={(e) => setLuggageGoal(e.target.value)}
        />
        <div className='luggage-goal-weight_container'>
          <p className='text--thin'>0kg</p>
          <p className='text--thin'>{`${weight}kg`}</p>
        </div>
      </div>
    </div>
  );
}
