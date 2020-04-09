import React from 'react'
import { useForm } from './useForm'

export function Form(){
  const [values, handleChange] = useForm({ username: '', password: '' })

  return(
    <div>
      <label htmlFor="username">Username</label>
      <input name="username" value={values.username} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={values.password} onChange={handleChange} />
    </div>
  )
}
