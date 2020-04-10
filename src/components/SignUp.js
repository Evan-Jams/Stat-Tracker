import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from './useForm'

export function SignUp() {
  const [values, handleChange] = useForm({ username: '', password: '', firstName: '', lastName: '' })

  return(
    <>
      <form>
        <label htmlFor="firstName">First Name</label>
          <input name="firstName" value={values.first_name} onChange={handleChange} />
        <label htmlFor="lastName">Last Name</label>
          <input name="lastName" value={values.last_name} onChange={handleChange} />
        <label htmlFor="username">Username</label>
          <input name="username" value={values.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
        <div className="submit-container">
          <input id="submit" type="submit" value="Sign Up" />
          or
          <Link id="login" to="/login">Login</Link>
        </div>
      </form>
    </>
  )
}
