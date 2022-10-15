import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Slider from "../../components/SetGoals/Slider";
import "./SetGoals.css";

export default function SetGoals({ formData }) {
  const navigate = useNavigate();
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
        {formData.carryOnCheckBox && <Slider weight={formData.carryOnWeight} />}
        {formData.holdCheckBox && <Slider weight={formData.holdWeight} />}
        <div>
          <button
            className='button-turquoise button-turquoise--main'
            onClick={() => navigate("../home")}
          >
            Set Goal
          </button>
        </div>
      </main>
    </div>
  );
}
