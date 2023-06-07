import React from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            #VANLIFE
        </div>

        <Navbar />

        <div className="btn">
            <button className='login-btn'>LOGIN</button>
        </div>
    </div>
  )
}

export default Header