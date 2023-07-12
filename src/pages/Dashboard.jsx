import React from 'react'
import "../assets/css/dashboard.css";

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="row p-2">
        <div className="header">
          <h2>Add Products</h2>
        </div>
        <div className="form__control col-6 mt-2">
          <input type="text" className="p-2"  placeholder="Enter product name"/>
          <input type="text" className="p-2"  placeholder="Enter product price"/>
          <input type="text" className="p-2"  placeholder="Enter product description"/>
          <input type="text" className="p-2"  placeholder="Enter product id"/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard