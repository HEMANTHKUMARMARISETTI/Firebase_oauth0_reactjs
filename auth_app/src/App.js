import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterAndLogin from './Admin/Login';
import HomeScreen from './Home';
import ForgotPassword from './Admin/Forgot';

const App = () => {
  return (
   
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<RegisterAndLogin/>} />
            <Route path="/home" element={<HomeScreen/>} />
            <Route path="/reset" element={<ForgotPassword></ForgotPassword>} />
        </Routes>
        </Router>
    </div>


    
  )
}

export default App


