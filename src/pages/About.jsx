import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/images/about-hero.png'



const About = () => {
  return (
    <div className='about'>
        <div className="img-container">
          <img src={aboutImg} alt="about" />
        </div>

        <h2 className='about-title'>
          Don't squeeze in a sedan when you could relax in a van.
        </h2>

        <p className="info-about">
          Our mission is to enliven your road trip with the perfect travel van rental. Our
          vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra )
        </p>
    </div>
  )
}

export default About