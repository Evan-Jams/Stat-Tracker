import React from 'react'
import {Link} from 'react-router-dom'

export function Home(){
  return(
    <>
      <Link to="/login">Login</Link>
      <Link to="/signUp">Sign Up</Link>
    </>
  )
}
