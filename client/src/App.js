import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./views/pages/StartScreen/StartScreen";
import Home from "./views/pages/Home/Home";
import MyRewards from "./views/pages/MyRewards/MyRewards";
import Trips from "./views/pages/Trips/Trips";
import MyTrip from "./views/pages/MyTrip/MyTrip";
import AddTrip from "./views/pages/AddTrip/AddTrip";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-trip'element={<AddTrip />} />
        <Route path='/my-trips-summary' element={<Trips />} />
        <Route path='/trips/:id' element={<MyTrip />} />
        <Route path='/my-rewards' element={<MyRewards />} />
      </Routes>
    </div>
  );
}

export default App;