import React from 'react'
import { useForm } from './useForm'

export function Login() {
  const [values, handleChange] = useForm({ username: '', password: '' })

  return(
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input name="username" value={values.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </form>
    </>
  )
}
