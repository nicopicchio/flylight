import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AddTripForm from "./components/AddTripForm/AddTripForm";
import SetGoals from "./pages/SetGoals/SetGoals";
import MyRewards from "./pages/MyRewards/MyRewards";
import Trips from "./pages/Trips/Trips";
import MyTrip from "./pages/MyTrip/MyTrip";

function App() {
  const initialFormData = {
    departure: "",
    destination: "",
    date: "",
    class: "",
    carryOnCheckBox: true,
    carryOnWeight: "",
    holdCheckBox: true,
    holdWeight: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/home' element={<Home />} />
        <Route
          path='/add-new-trip'
          element={
            <>
              <Header />
              <AddTripForm formData={formData} setFormData={setFormData} />
            </>
          }
        />
        <Route path='/my-trips-summary' element={<Trips />} />
        <Route path='/set-goals' element={<SetGoals formData={formData} />} />
        <Route path='/my-trip' element={<MyTrip />} />
        <Route path='/my-rewards' element={<MyRewards />} />
      </Routes>
    </div>
  );
}

export default App;
