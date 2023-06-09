import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className="menu">
            <li>
                <NavLink 
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-active' : null}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/host"
                    className={({ isActive }) => isActive ? 'nav-active' : null}
                >
                    Host
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? 'nav-active' : null}
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/vans"
                    className={({ isActive }) => isActive ? 'nav-active' : null}
                >
                    Vans
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar