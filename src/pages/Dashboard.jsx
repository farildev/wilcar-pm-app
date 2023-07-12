import React from 'react';
import {useState} from "react";
import "../assets/css/dashboard.css";

function Dashboard() {
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const handleInput = ()=>{
    
  }
  return (
    <div className='dashboard'>
      <div className="row p-2">
        <div className="header">
          <h2 className='fw-bolder'>Add Products</h2>
        </div>
        <form className="form__control">
          <div className="row">
            <div className="col-6 mt-2">
            <input type="text" className="form-control"  placeholder="Enter product name"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" className="form-control"  placeholder="Enter product name"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" className="form-control"  placeholder="Enter product name"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" className="form-control"  placeholder="Enter product name"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" className="form-control"  placeholder="Enter product name"/>
            </div>
          </div>
          <div className="col-12 mt-4">
            <button onClick={handleSubmit} className='btn btn-primary'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard