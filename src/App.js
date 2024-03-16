// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Dashboard from './Components/Dashboard';
import ProfileManager from './Components/ProfileManager';
import TaskManager from './Components/TaskManager';
import Login from './Components/Login'; // Import the Login component
import axios from 'axios';
import Home from './Components/Home';

const App = () => {
  const[sidebar ,setSidebar] = useState(true);

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by calling a backend route
    axios.get('http://localhost:5001/checkLogin')
      .then(response => {
        if (response.data.loggedIn) {
          setLoggedIn(true);
        }
      })
      .catch(error => console.error('Error checking login status:', error));
  }, []);

  return (
    <>
    
    <Router>
      <Navbar setSidebar ={setSidebar} />
      <Routes>
     
        <Route path="/" element={ <Home sidebar={sidebar}/>  } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/profile" element={ <ProfileManager /> } />
        <Route path="/task" element={ <TaskManager /> } />
      </Routes>
    </Router>
    </>
  );
};

export default App;
