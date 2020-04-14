import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { useForm } from './useForm'
import Axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  let baseURL = 'http://localhost:3000'
} else {
  let baseURL = 'https://golf-stat-tracker-backend.herokuapp.com'
}

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createUser()
  }

  createUser = async () => {
    let postData = {user: this.state}
    let response = await Axios.post(`${baseURL}/users`, postData)
    this.props.history.push('/login')
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit} id="signup-form">
          <label htmlFor="first_name">First Name</label>
            <input name="first_name" value={this.state.first_name} onChange={this.handleChange} required/>
          <label htmlFor="last_name">Last Name</label>
            <input name="last_name" value={this.state.last_name} onChange={this.handleChange} required/>
          <label htmlFor="username">Username</label>
            <input name="username" value={this.state.username} onChange={this.handleChange} required/>
          <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
          <div className="submit-container">
            <input id="submit" type="submit" value="Sign Up" />
            or
            <Link id="login" to="/login">Login</Link>
          </div>
        </form>
      </>
    )
  }
}

export default withRouter(SignUp)
