import React, { useState, Component } from 'react'
import { useForm } from './useForm'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      currentUser: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.setState({
      currentUser: this.state.currentUser
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // console.log(data);

  handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(values);
    let postData = {user: this.state}
    let response = await fetch('http://localhost:3000/users/login', {
      body: JSON.stringify(postData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (data.status === 401){
      return
    }

    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('user', data.user.id);
    this.props.history.push('/profile')
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <input id="submit" type="submit" value="Log In" />
        </form>
      </>
    )
  }
}
