import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import Header from './views/components/Header'
import Start from './views/pages/StartPage'
import Home from './views/pages/HomePage'
import TripsList from './views/components/TripsList'
import TripPage from './views/pages/TripPage'
import AddTripPage from './views/pages/AddTripPage'
import EditTripPage from './views/pages/EditTripPage'
import RewardsPage from './views/pages/RewardsPage'

function App() {

  const currentUserId = Number(useUser()?.id)
  console.log("Current user: " + JSON.stringify(currentUserId))

  return (
    <div className='App'>
        <Header />

        <Routes>          
          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home userId={currentUserId} />} />
          <Route path='/trips' element={<TripsList userId={currentUserId} />} />
          <Route path='/trips/:id' element={<TripPage userId={currentUserId} />} />
          <Route path='/add-trip'element={<AddTripPage userId={currentUserId} />} />
          <Route path='/edit-trip/:id' element={<EditTripPage userId={currentUserId} />} />
          <Route path='/rewards' element={<RewardsPage userId={currentUserId} />} />
        </Routes>
    </div>
  )
}

export default App