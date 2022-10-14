import { useState } from "react";
import Header from "../../components/Header/Header";
import "./SetGoals.css";

export default function SetGoals() {
  const [luggageGoal, setLuggageGoal] = useState(15);

  return (
    <div className='set-goals'>
      <Header />
      <main className='set-goals_main'>
        <div>
          <h2>Set Goal</h2>
        </div>
        <div>
          <p className='text--thick'>
            My carbon footprint for this
            <br /> flight is
          </p>
          <h2>xxxx kg</h2>
          <p className='text--thin'>of CO2</p>
        </div>
        <div className='hi'>
          <p className='text--thick'>My carry-on luggage goal</p>
          <h2>{luggageGoal} kg</h2>
          <div className='slider_container'>
            <input
              type='range'
              min='0'
              max='23'
              value={luggageGoal}
              onChange={(e) => setLuggageGoal(e.target.value)}
              className='slider'
            />
            <div className='luggage-goal-weight_container'>
              <p className='text--thin'>0kg</p>
              <p className='text--thin'>23kg</p>
            </div>
          </div>
        </div>
        <div>
          <button className='button-turquoise button-turquoise--large'>
            Set Goal
          </button>
        </div>
      </main>
    </div>
  );
}
