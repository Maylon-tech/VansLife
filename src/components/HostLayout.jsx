import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/HostLayout.css'

const HostLayout = () => {
  return (
    <>
        <nav className='navigation-layout'>
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
        </nav>

        <Outlet />
    </>
  )
}

export default HostLayout