import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../styles/HostVansDetail.css'

const Pricing = () => {
  const { vanDetail } = useOutletContext()

  return (
    <div className='pricing-content'>
      <div className="content-price"> 
        <h2>$ {vanDetail.price}<span>/day</span> </h2>
        <h2>Descount: <span>30%</span></h2>
        <h2>Credid Card: <span>Master / Visa</span></h2>
      </div>
    </div>
  )
}

export default Pricing