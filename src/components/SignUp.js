import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { useForm } from './useForm'

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
    let response = await fetch('http://localhost:3000/users', {
      body: JSON.stringify(postData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data);
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name</label>
            <input name="first_name" value={this.state.first_name} onChange={this.handleChange} />
          <label htmlFor="last_name">Last Name</label>
            <input name="last_name" value={this.state.last_name} onChange={this.handleChange} />
          <label htmlFor="username">Username</label>
            <input name="username" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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

export default SignUp
