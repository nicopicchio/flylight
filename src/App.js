import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import AddTripForm from "./pages/AddTripForm/AddTripForm";
import MyTrips from "./pages/MyTrips/MyTrips"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/add-trip" element={<AddTripForm />} />
        <Route path="/my-trips-summary" element={<MyTrips />} />
      </Routes>
    </div>
  );
}

export default App;
