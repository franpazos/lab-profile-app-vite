import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'

import './App.css'

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
