import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/MyInput'>My Input</Link>
    </div>
  )
}

export default Menu