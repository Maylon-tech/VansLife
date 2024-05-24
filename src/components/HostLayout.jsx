import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/HostLayout.css'

const HostLayout = () => {
  const activeLink = {
    fontWeight: 'bold',
    color: "orangered",
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
              to="income"
            >
              Income
            </NavLink>

            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="vans"
            >
             Vans
            </NavLink>

            <NavLink 
              style={({ isActive }) => isActive ? activeLink : null} 
              to="reviews"
            >
              Reviews
            </NavLink>
        </nav>

        <Outlet />
    </>
  )
}

export default HostLayout