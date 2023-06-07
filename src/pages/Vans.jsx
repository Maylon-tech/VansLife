import React from 'react'
import '../styles/Vans.css'
import { vansData } from '../vanData'
import { Link } from 'react-router-dom'

const Vans = () => {

    // useEffect(() => {
    //   fetch("/api/vans")
    //     .then(res => res.json())
    //     .then(data => {
    //       setVans(data.vans)
    //     })

    // }, [])


  const vanElements = vansData.map(van => (

    <div key={van.id} className='van-tile'>

      <Link to={`/vans/${van.id}`}>
        
        <img src={van.imgUrl}  alt='img' />

        <div className="van-info">
          <h3>{van.name}</h3>
          <p>{van.price}<span>/day</span></p>
        </div>

        <button className="van-type">{van.type}</button>

      </Link>


    </div>

  ))


  return (
    <div className='vans'>
        
        {
          vanElements
        }
    </div>
  )
}

export default Vans