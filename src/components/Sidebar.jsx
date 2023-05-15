import React from 'react';
import {NavLink} from "react-router-dom";
import "../assets/css/sidebar.css";
import logo from "../assets/img/Wrıst media logo 1.png";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={logo} alt="Wrist Media Logo" />
      </div>
      <div className="side__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/products/add">Add Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar