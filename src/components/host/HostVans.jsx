import React, { useEffect, useState } from 'react'
import { vansData } from '../../vanData'
import { Link } from 'react-router-dom'
import '../../styles/HostVans.css'

const HostVans = () => {
  const [vans, setVans] = useState([])
  useEffect(() => {
    setVans(hostVansElem)
  }, [])

  const hostVansElem = vansData.map(van =>(
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className='host-van-link-wrapper'
    >
      <div className="host-vans-single">
        <img src={van.imgUrl} alt="" />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>

      <button className='btn-call'>Alugar</button>
    </Link>
  ))

  return (
    <section>
      <h1>Your Listed Vans</h1>
      <div className="hostVans-Container">
        
            {
              vans.length > 0 ? (
                <section className='hostVans-content'>
                  {vans}
                </section>
              ) : (
                <h2>Loading...</h2>
              )
            }
        
      </div>
    </section>
  )
}

export default HostVans