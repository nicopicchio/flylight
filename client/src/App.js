import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./views/pages/StartScreen/StartScreen";
import Home from "./views/pages/Home/Home";
import MyRewards from "./views/pages/MyRewards/MyRewards";
import Trips from "./views/pages/Trips/Trips";
import MyTrip from "./views/pages/MyTrip/MyTrip";
import EditMyTrip from "./views/pages/EditMyTrip/EditMyTrip";
import AddTrip from "./views/pages/AddTrip/AddTrip";

import useUser from "./hooks/useUser";

function App() {
  const { userIsLoading, user, userError } = useUser();

  return (
    <div className='App'>
      {userIsLoading ? (
        <span>Loading...</span>
      ) : user ? (
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/home' element={<Home user={user} />} />
          <Route path='/add-trip'element={<AddTrip user={user} />} />
          <Route path='/my-trips-summary' element={<Trips user={user} />} />
          <Route path='/trips/:id' element={<MyTrip user={user} />} />
          <Route path='/edit-trip/:id' element={<EditMyTrip user={user} />} />
          <Route path='/my-rewards' element={<MyRewards user={user} />} />
        </Routes>
      ) : (
        <span>{JSON.stringify(userError)}</span>
      )}
    </div>
  );
}

export default App;