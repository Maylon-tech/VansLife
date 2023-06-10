import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/HostLayout.css'

const HostLayout = () => {
  const activeLink = {
    fontWeight: 'bold',
    color: "orangered",
    textDecoration: "underline",
  }

  return (
    <>
        <nav className='navigation-layout'>
            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="/host"
              end
            >
              Dashboard
            </NavLink>

            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="/host/income"
            >
              Income
            </NavLink>

            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="/host/vans"
            >
             Vans
            </NavLink>

            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="/host/reviews"
            >
              Reviews
            </NavLink>
        </nav>

        <Outlet />
    </>
  )
}

export default HostLayout