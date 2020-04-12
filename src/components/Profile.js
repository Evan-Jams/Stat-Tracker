import React, {Component} from 'react'
import Round from './Round'


class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
      holes: [],
      handicap: 0,
      holeInOnes: 0,
      eagles: 0,
      birdies: 0,
      pars: 0,
      bogeys: 0,
      doubleBogeys: 0,
      worse: 0
    }
  }
  componentDidMount(){
    this.getHoles()
    this.getUser(sessionStorage.getItem('user'))

  }

  getHoles = async () => {
    let response = await fetch('http://localhost:3000/holes')
    let data = await response.json()
    console.log(data);
    this.setState({ holes: data })
  }

  calcStats = () => {
    let rounds = this.state.currentUser.rounds
    if (this.state.currentUser){
      let total = 0
      for(let x = 0; x < rounds.length; x++){
        let index = x

        for(let i = 1; i <= 18; i++){
          let score = parseInt(rounds[index][`strokes${i}`])
          let par = this.state.holes[i - 1].par

          if (score === 1) {
            this.setState({
              holeInOnes: this.state.holeInOnes += 1
            })
          } else if (score - par === -2) {
            this.setState({
              eagles: this.state.eagles += 1
            })
          } else if (score - par === -1) {
            this.setState({
              birdies: this.state.birdies += 1
            })
          } else if (score === par) {
            this.setState({
              pars: this.state.pars += 1
            })
          } else if (score - par === 1) {
            this.setState({
              bogeys: this.state.bogeys += 1
            })
          } else if (score - par === 2) {
            this.setState({
              doubleBogeys: this.state.doubleBogeys += 1
            })
          } else {
            this.setState({
              worse: this.state.worse += 1
            })
        }
        total += score
      }

      }
      let handicap = Math.round(((total / rounds.length) - 72) * 10) / 10
      this.setState({
        handicap: handicap
      })
    } else {
      return
    }
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
      this.calcStats()
    })
  }

  createRound = async (newData) => {
    let response = await fetch(`http://localhost:3000/rounds`, {
      body: JSON.stringify(newData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
    let data = await response.json()

    console.log(data);
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
                  ? <span>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</span>
                  : 'Name'
                }
                </p>
                <p>Handicap: {this.state.handicap}</p>
              </div>
            </div>
            <div className="stats">
              <h2>Stats</h2>
              <h3>Total Rounds Played: {
                this.state.currentUser
                ? this.state.currentUser.rounds.length
                : null
              }</h3>
              <ul>
                <li>Hole-In-Ones: {this.state.holeInOnes}</li>
                <li>Eagles: {this.state.eagles}</li>
                <li>Birdies: {this.state.birdies}</li>
                <li>Pars: {this.state.pars}</li>
                <li>Bogeys: {this.state.bogeys}</li>
                <li>Double Bogeys: {this.state.doubleBogeys}</li>
                <li>Worse: {this.state.worse}</li>
              </ul>
              <div>
                <button>New Round</button>
              </div>
            </div>
          </div>
          <div className="round-form">
            <Round createRound={this.createRound}/>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
