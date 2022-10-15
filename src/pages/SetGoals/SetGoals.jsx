import Header from "../../components/Header/Header";
import Slider from "../../components/SetGoals/Slider";
import "./SetGoals.css";

export default function SetGoals() {
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
          <p className='text--thin'>of CO₂</p>
        </div>
        <Slider />
        <div>
          <button className='button-turquoise button-turquoise--main'>
            Set Goal
          </button>
        </div>
      </main>
    </div>
  );
}
