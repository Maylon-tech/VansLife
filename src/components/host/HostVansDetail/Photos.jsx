import React from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../styles/HostVansDetail.css'

const Photos = () => {
  const { vanDetail } = useOutletContext()

  return (
    <div className='img-container'>
      
      <div className="image">
        <img src={vanDetail.imgUrl} alt="vanImage" />
      </div>

      <div className="image">
        <img src={vanDetail.imgUrl} alt="vanImage" />
      </div>

      <div className="image">
        <img src={vanDetail.imgUrl} alt="vanImage" />
      </div>

      <div className="image">
        <img src={vanDetail.imgUrl} alt="vanImage" />
      </div>

    </div>
  )
}

export default Photos