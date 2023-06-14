import React from 'react'
import '../../styles/HostIncome.css'

const Income = () => {
  return (
    <div>
      
      <div className="income-top">

        <div className="info">
          <h1>Income</h1>
          <h3>Last 30 days</h3>
          <div className="price-tags">
            $2,260
          </div>
        </div>

        <div className="graph">
          Graph here
        </div>
      </div>

      <div className="income-bottom">
        <div className="income-header">
          <h2>Your Transactions (3)</h2>
          <span>last 30 days</span>
        </div>

        <div className="trans-items">
          <div className="transaction">
            <h2>$720</h2>
            <span className="date">1/12/2022</span>
          </div>
          <div className="transaction">
            <h2>$560</h2>
            <span className="date">10/11/2022</span>
          </div>
          <div className="transaction">
            <h2>$980</h2>
            <span className="date">23/11/2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Income