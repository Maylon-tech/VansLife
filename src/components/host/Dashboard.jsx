import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../styles/HostDashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-info">

        <div className="top">
          <div className="top-right">
            <h1>Welcome!</h1>
            <h3>Income last <span>30 days</span></h3>
            <h2 className="price-dash">$2,260</h2>
          </div>
          <div className="top-left">
            <span>Details</span>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-right">
            
            <h3>Review score 
              <span> 5.0/5</span>
            </h3>
            
          </div>
          <div className="bottom-left">
            <span>Details</span>
          </div>
        </div>

      </div>

      <Outlet />
    </>
  )
}

export default Dashboard