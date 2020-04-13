import React, {Component} from 'react'
import Round from './Round'


class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
      holes: [],
      scorecard: false,
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
  async componentDidMount(){
    await this.getHoles()
    this.calcStats()

  }

  getHoles = async () => {
    let response = await fetch('http://localhost:3000/holes')
    let data = await response.json()
    console.log(data);
    this.setState({ holes: data })
  }

  calcStats = async () => {
    await this.getUser(sessionStorage.getItem('user'))
    let rounds = this.state.currentUser.rounds
    if (this.state.currentUser){
      let total = 0
      let currentState = {
        ...this.state,
        handicap: 0,
        holeInOnes: 0,
        eagles: 0,
        birdies: 0,
        pars: 0,
        bogeys: 0,
        doubleBogeys: 0,
        worse: 0
      }
      for(let x = 0; x < rounds.length; x++){
        let index = x

        for(let i = 1; i <= 18; i++){
          let score = parseInt(rounds[index][`strokes${i}`])

          if (score > 0) {
            let par = this.state.holes[i - 1].par

            if (score === 1) {
              currentState.holeInOnes += 1

            } else if (score - par <= -2) {
              currentState.eagles += 1

            } else if (score - par === -1) {
              currentState.birdies += 1

            } else if (score === par) {
              currentState.pars += 1

            } else if (score - par === 1) {
              currentState.bogeys += 1

            } else if (score - par === 2) {
              currentState.doubleBogeys += 1

            } else {
              currentState.worse += 1
            }
            total += score
          }
        }
      }
      console.log(currentState);
      this.setState({
        ...this.state,
        handicap: currentState.handicap,
        holeInOnes: currentState.holeInOnes,
        eagles: currentState.eagles,
        birdies: currentState.birdies,
        pars: currentState.pars,
        bogeys: currentState.bogeys,
        doubleBogeys: currentState.doubleBogeys,
        worse: currentState.worse
      })
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
    })
  }

  createRound = async (newData) => {
    let response = await fetch(`http://localhost:3000/rounds`, {
      body: JSON.stringify(newData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    })
    let data = await response.json()
    console.log('calcStats called!');
    this.calcStats()
    console.log(data);
  }

  toggleScorecard = () => {
    this.setState({
      scorecard: !this.state.scorecard
    })
  }

  render(){
    return(
      <>
        <div className="profile-page">
          <div className="main">
            <div className="info">
              <div className="photo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="personal photo" />
              </div>
              <div>
                <p>
                {
                  this.state.currentUser
                  ? <span className="name-handicap">
                      {this.state.currentUser.first_name} {this.state.currentUser.last_name}
                    </span>
                  : 'Name'
                }
                </p>
                <p className="name-handicap">Handicap:
                  <span>
                    {this.state.handicap}
                  </span>
                </p>
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
                <li>Hole-In-Ones:
                  <span>
                    {this.state.holeInOnes}
                  </span>
                </li>
                <li>Eagles:
                  <span>
                    {this.state.eagles}
                  </span>
                </li>
                <li>Birdies:
                  <span>
                    {this.state.birdies}
                  </span>
                </li>
                <li>Pars:
                  <span>
                    {this.state.pars}
                  </span>
                </li>
                <li>Bogeys:
                  <span>
                    {this.state.bogeys}
                  </span>
                </li>
                <li>Double Bogeys:
                  <span>
                    {this.state.doubleBogeys}
                  </span>
                </li>
                <li>Worse:
                  <span>
                    {this.state.worse}
                  </span>
                </li>
              </ul>
              <div>
                <button onClick={() => this.toggleScorecard()}>New Round</button>
              </div>
            </div>
          </div>
          {
            this.state.scorecard
            ? <Round createRound={this.createRound} holes={this.state.holes} toggleScorecard={this.toggleScorecard}/>
            : null
          }

        </div>
      </>
    )
  }
}

export default Profile
