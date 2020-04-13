import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Login} from './Login'
import SignUp from './SignUp'

class Home extends Component{
  render(){
    return(
      <>
        <div className="home-container">
          <div className="home-page">
            <h1>Welcome to Golf Stats Tracker</h1>
            <p id="app-description">Simply Login or Sign Up, and begin tracking all your stats in one conveinent location !</p>
            <SignUp />
          </div>
        </div>
      </>
    )
  }
}

export default Home
