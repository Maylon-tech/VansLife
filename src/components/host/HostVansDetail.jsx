import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { vansData } from '../../vanData'
import '../../styles/HostVansDetail.css'


const HostVansDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const vanDetail = vansData.find(van => van.id === parseInt(id))
  console.log(vanDetail)

  const { imgUrl, name, price, type } = vanDetail

  return (
    <section className='container_default'>
      
        <button 
          className='btn-back'
          onClick={() => navigate('/host/vans')}
        >
          &#8592; Back to all van
        </button>

        <div className="container-detail">

          <div className="van-info">
            <div className="van-image">
              <img src={imgUrl} alt="" />
            </div>
            <div className="van-info-detail">
              <span className='van-type'>{type}</span>
              <h2 className='van-name'>{name}</h2>
              <span className='van-price'>${price}/day</span>
            </div>
          </div>

          <div className="van-info-navi">
            <nav className='navigation-layout'>
            <NavLink 
              // style={({ isActive }) => isActive ? activeLink : null} 
              to="/"
              end
            >
              Details
            </NavLink>

            <NavLink 
              // style={({ isActive }) => isActive ? activeLink : null} 
              to="/"
            >
              Price
            </NavLink>

            <NavLink 
              // style={({ isActive }) => isActive ? activeLink : null} 
              to="/"
            >
             Photos
            </NavLink>
        </nav>

        {/* <Outlet /> */}
          </div>
        </div>
    </section>
  )
}

export default HostVansDetail