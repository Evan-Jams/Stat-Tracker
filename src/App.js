import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'

function App() {
  return (
    <>
      <h1>Welcome to Golf Stats Tracker</h1>
      <p>Simply Login or Sign Up, and begin tracking all your stats in one conveinent location !</p>
      <div className="home-page">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Router>
      </div>
    </>
  );
}

export default App;
