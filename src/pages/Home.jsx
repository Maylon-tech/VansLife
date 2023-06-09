import React from 'react'
import '../styles/Home.css'


const Home = ({ name, age }) => {
  return (
    <div className='home'>
      <div className="content">
          <h1>
            Yout Got the travel plans, We got the travel Vans.
          </h1>

          <p>
            Add adventure to your life by joining the #vanlife movement. 
            Rent the perfect van to make your perfect road trip.
          </p>
        
          <button className="btn-find">Find Your Van</button>
      </div>
    </div>
  )
}

export default Home