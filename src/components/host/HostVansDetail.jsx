import React from 'react'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'

import { vansData } from '../../vanData'
import '../../styles/HostVansDetail.css'


const HostVansDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const vanDetail = vansData.find(van => van.id === parseInt(id))

  const { imgUrl, name, price, type } = vanDetail

  const activeStyle = {
    color: 'orangered',
    textDecoration: 'underline'
  }


  return (
    <section className='container_default'>
        
        <Link 
          to='..'
          relative="path"  
          className='btn-back'          
        >
          &#8592; Back to all van
        </Link>

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
                to="."
                end
                style={({ isActive }) => isActive ? activeStyle : null}
              >
                Details
              </NavLink>

              <NavLink 
                // style={({ isActive }) => isActive ? activeLink : null} 
                to="pricing"
                style={({ isActive }) => isActive ? activeStyle : null}
              >
                Price
              </NavLink>

              <NavLink 
                // style={({ isActive }) => isActive ? activeLink : null} 
                to="photos"
                style={({ isActive }) => isActive ? activeStyle : null}
              >
                Photos
              </NavLink>
            </nav>
          </div>

          <Outlet context={{ vanDetail }} /> 

        </div>
    </section>
  )
}

export default HostVansDetail