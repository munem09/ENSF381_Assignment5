import React from 'react';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router and Routes
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginForm from './components/LoginForm'; // Corrected import path
import SignupForm from './components/SignupForm'; // Corrected import path


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupForm />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
