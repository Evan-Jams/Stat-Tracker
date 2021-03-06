import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import {Login} from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Router>
    </>
  );
}

export default App;
