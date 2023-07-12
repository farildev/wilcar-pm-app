import React from 'react'
import "../assets/css/dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="row p-2">
        <div className="header">
          <h1>Add Products</h1>
        </div>
        <div className="form__control col-4 mt-2">
          <input type="text" className="p-2"  placeholder="Enter product name"/>
          <input type="text"  placeholder="Enter product name"/>
          <input type="text"  placeholder="Enter product name"/>
          <input type="text"  placeholder="Enter product name"/>
        </div>
      </div>
    </>
  )
}

export default Dashboard