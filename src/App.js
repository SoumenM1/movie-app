// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import MovieList from './components/MovieList.js';

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </>
   
  );
};

export default App;
