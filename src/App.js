import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Form } from './components/Form'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
}

export default App;
