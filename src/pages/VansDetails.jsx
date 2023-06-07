import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../styles/VanDetail.css'
import { vansData } from '../vanData'

const VansDetails = () => {
    // const [vans, setVans] = useState(null)
    const { productId } = useParams()

    const singleVanDetail = vansData.find(van => van.id === parseInt(productId))
    console.log(singleVanDetail)
  
    const { name, price, imgUrl, type, description } = singleVanDetail
    // setVans(singleVanDetail)
    // useEffect(() => {

    //     const singleVan = vansData.map(van => (`/vans/${params.id}`))
    //     setVans(singleVan)
    // }, [params.id])


  return (
    <div className='van-details-container'>

      <div className="van-detail">

        <div className="image-container">
          <img src={imgUrl} alt='img' />
        </div>

        <div className="info-container">
          <span className="van-type">{type}</span>
          <h2>{name}</h2>
          <p className='van-price'>
            <strong>${price}</strong><span>/day
            </span></p>
          <p className='van-description'>{description}</p>
          <button className='link-button'>Rent this Van</button>
        </div>

      </div> 

    </div>
  )
}

export default VansDetails