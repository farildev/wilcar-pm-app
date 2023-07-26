import React from 'react';
import {NavLink} from "react-router-dom";
import "../assets/css/sidebar.css";
import logo from "../assets/img/Faril Mammadov 1.png";
import {MdDashboard} from "react-icons/md";
import {MdInventory} from "react-icons/md";
import {MdCategory} from "react-icons/md";
import {MdSell} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";
import {IconContext} from "react-icons";

function Sidebar() {
  return (
    <>
      <div className='sidebar__main bg-primary'>
        <div className="sidebar__container">
          <div className="logo">
          <img src={logo} alt="Logo" />
          </div>
          <div className="side__nav">
            <ul className="nav__list">
              <IconContext.Provider value={{size : "24px" , className : "mr-5"}}>
              <li className="nav__item  w-100">
                <NavLink to="/">
                {<MdDashboard/>}
                  Əlavə et
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/products">
                {<MdInventory/>}
                  Məhsullar
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/categories">
                {<MdCategory/>}
                  Kateqoriya
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/selling">
                {<MdSell/>}
                  Satış
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/configuration">
                {<AiFillSetting/>}
                  Parametrlər
                  </NavLink>
              </li>
              </IconContext.Provider>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar