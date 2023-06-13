import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../styles/HostVansDetail.css'

const Detail = () => {
  const { vanDetail } = useOutletContext()

  return (
    <div className='detail'>
      <h1>
        Name: 
        <span>{vanDetail.name}</span>
      </h1>

      <h2>
        Category: 
        <span>{vanDetail.type}</span>
      </h2>

      <p>
        Description: 
        <span>{vanDetail.description}</span>
      </p>

      <h2>
        Visibility: 
        <span>Public</span>
      </h2>

    </div>
  )
}

export default Detail