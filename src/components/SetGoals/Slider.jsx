import { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [luggageGoal, setLuggageGoal] = useState(15);

  return (
    <div className='slider'>
      <p className='text--thick'>My carry-on luggage goal</p>
      <h2>{luggageGoal} kg</h2>
      <div className='slider-input_container'>
        <input
          type='range'
          min='0'
          max='23'
          value={luggageGoal}
          onChange={(e) => setLuggageGoal(e.target.value)}
        />
        <div className='luggage-goal-weight_container'>
          <p className='text--thin'>0kg</p>
          <p className='text--thin'>23kg</p>
        </div>
      </div>
    </div>
  );
}
