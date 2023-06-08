import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <Link to="/">#VANLIFE</Link>
        </div>

        <Navbar />

        <div className="btn">
            <button className='login-btn'>LOGIN</button>
        </div>
    </div>
  )
}

export default Header