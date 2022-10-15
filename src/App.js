import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AddTripForm from "./components/AddTripForm/AddTripForm";
import SetGoals from "./pages/SetGoals/SetGoals";
import Trips from "./pages/Trips/Trips";

function App() {
  const initialFormData = {
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
      </Routes>
    </div>
  );
}

export default App;
