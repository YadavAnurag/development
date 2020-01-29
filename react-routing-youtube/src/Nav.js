import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


const navStyle = {
  color: 'white',
  textDecoration: 'none'
}

const NavBar = ()=>{
  return(
    <nav className='nav'>
      <Link to='/' style={navStyle}>
        <h3>Logo</h3>
      </Link>
      <ul className='navLinks'>
        <Link to='/about' style={navStyle}>
          <li>About Page</li>
        </Link>
        <Link to='/shop' style={navStyle}>
          <li>Shop Page</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar