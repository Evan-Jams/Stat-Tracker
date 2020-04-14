import React, { useState } from 'react'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://golf-stat-tracker-backend.herokuapp.com'
}

export const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = event => setUsername(event.target.value);
  const handlePassword = event => setPassword(event.target.value);

    let handleSubmit = async (event) => {
      event.preventDefault()
      let postData = {
        user: {username: username, password: password}
      }
      let response = await fetch(`${baseURL}/users/login`, {
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if (data.status === 401) {
        return
      }
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', data.user.id);
      props.history.push('/profile')
    }

  return (
    <>
      <div className="home-container">
        <div className="home-page">
          <h1>Welcome to Golf Stats Tracker</h1>
          <p id="app-description">Simply Login or Sign Up, and begin tracking all your stats in one conveinent location !</p>
          <form onSubmit={handleSubmit} id="login-form">
            <label htmlFor="username">Username</label>
            <input name="username" value={username} onChange={handleUsername} required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword} required/>
            <p id="forgot-pass">Forgot Your Password?
              <br/>
              <a href="#">Click Here</a>
            </p>
            <input id="submit" type="submit" value="Log In" />
          </form>
        </div>
      </div>

    </>
  )
}
// export default Login;
