import React from 'react'
import { Link } from 'gatsby'
import './menu.css'

const Menu = () => {
  return (
    <div className='Menu'>
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  )
}

export default Menu
