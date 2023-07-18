import React from 'react';
import {NavLink} from "react-router-dom";
import "../assets/css/sidebar.css";
import logo from "../assets/img/Faril Mammadov 1.png";
function Sidebar() {
  return (
    <>
      <div className='sidebar__main'>
        <div className="sidebar__container">
          <div className="logo">
          <img src={logo} alt="Logo" />
          </div>
          <div className="side__nav">
            <ul className="nav__list">
              <li className="nav__item w-100">
                <NavLink to="/">Dashboard</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/categories">Categories</NavLink>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar