import { useState } from "react";

export default function SetGoals() {
  const [luggageGoal, setLuggageGoal] = useState(15);

  return (
    <div>
      <div>
        <h1>Set Goal</h1>
      </div>
      <div>
        <p>My carbon footprint for this flight is</p>
        <h2>xxxx kg</h2>
        <p>of CO2</p>
      </div>
      <div>
        <p>My carry-on luggage goal</p>
        <p>{luggageGoal}</p>
        <input
          type='range'
          min='0'
          max='23'
          value={luggageGoal}
          onChange={(e) => setLuggageGoal(e.target.value)}
        />
      </div>
    </div>
  );
}
