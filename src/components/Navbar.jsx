import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/host">Host</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/vans">Vans</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar