import React, {Component} from 'react'
import Round from './Round'


class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }
  componentDidMount(){
    this.getUser(sessionStorage.getItem('user'))
  }

  getUser = async (id) => {
    let response = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
    let user = await response.json()
    this.setState({ currentUser: user }, () => {
      console.log(this.state.currentUser);
    })
  }

  createRound = async () => {

  }

  render(){
    return(
      <>
        <div className="profile-page">
          <div className="main">
            <div className="info">
              <div className="photo">
                Photo
              </div>
              <div>
                <p>
                {
                  this.state.currentUser
                  ? this.state.currentUser.username
                  : 'Name'
                }
                </p>
                <p>Age</p>
                <p>Handicap</p>
              </div>
            </div>
            <div className="stats">
              <h2>Stats</h2>
              <h3>Total Rounds Played: {}</h3>
              <ul>
                <li>Hole-In-Ones: </li>
                <li>Eagles: </li>
                <li>Birdies: </li>
                <li>Pars: </li>
                <li>Bogeys: </li>
                <li>Double Bogeys: </li>
                <li>Worse: </li>
              </ul>
              <div>
                <button>New Round</button>
              </div>
            </div>
          </div>
          <div className="round-form">
            <Round />
          </div>
        </div>
      </>
    )
  }
}

export default Profile
