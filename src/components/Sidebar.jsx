import React from 'react';
import {NavLink} from "react-router-dom";
import "../assets/css/sidebar.css";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src="" alt="Wrist Media Logo" />
      </div>
      <div className="side__nav">
        <ul className="nav__list">
          <li className="nav__item w-100">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar