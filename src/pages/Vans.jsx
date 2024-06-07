import React, { useState } from 'react'
import '../styles/Vans.css'
import { vansData } from '../vanData'
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {

    // useEffect(() => {    ONLY IF I USE API FOR FETCHING DATA.
    //   fetch("/api/vans")
    //     .then(res => res.json())
    //     .then(data => {
    //       setVans(data.vans)
    //     })

    // }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState(vansData)


  const typeFilter = searchParams.get("type")
  console.log(typeFilter)

  const displayedVans = typeFilter  
    ? Vans.filter(van => van.type === typeFilter)
    : vans

  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-tile'>
      
      <Link to={`/vans/${van.id}`}>
        <div className='img-container'>
          <img src={van.imgUrl}  alt='img' />
        </div>

        <div className="van-info">
          <h3>{van.name}</h3>
          <p>{van.price}<span>/day</span></p>
        </div>

        <button className="van-type">{van.type}</button>
      </Link>
    </div>
  ))

  return (
    <>
      <h1 className='vans-title'>Explore our van options</h1>
      <div className='vans'>
          {
            vanElements
          }
      </div>
    </>
  )
}

export default Vans