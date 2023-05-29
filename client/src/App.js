import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import Home from "./pages/Home/Home";
import MyRewards from "./pages/MyRewards/MyRewards";
import Trips from "./pages/Trips/Trips";
import MyTrip from "./pages/MyTrip/MyTrip";
import AddTrip from "./pages/AddTrip/AddTrip";

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