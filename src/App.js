import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import AddTripForm from "./pages/AddTripForm/AddTripForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/addtrip" element={<AddTripForm />} />
      </Routes>
    </div>
  );
}

export default App;
