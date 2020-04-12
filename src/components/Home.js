import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {SignUp} from './SignUp'

class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <div className="home-page">
          <h1>Welcome to Golf Stats Tracker</h1>
          <p>Simply Login or Sign Up, and begin tracking all your stats in one conveinent location !</p>
          <SignUp />
          <Link to="/profile">Profile</Link>
        </div>
      </>
    )
  }
}

export default Home
