import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdInventory } from "react-icons/md";
import { IconContext } from "react-icons";
import { BiSolidExit } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";
import { motion } from "framer-motion";

import "../assets/css/sidebar.css";
import logo from "../assets/img/wilcar-logo.png";


function Sidebar() {
  const handleCloseWindow = () => {
    window.location.href = "about:blank";
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="sidebar__main bg-danger">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="sidebar__container"
        >
          <motion.div variants={item} className="logo">
            <img src={logo} alt="Logo" />
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="side__nav"
          >
            <ul className="nav__list">
              <IconContext.Provider value={{ size: "24px", className: "mr-3" }}>
                <motion.li variants={item} className="nav__item  w-100">
                  <NavLink to="/">
                    {<AiTwotoneHome />}
                    <span>Ana Səhifə</span>
                  </NavLink>
                </motion.li>
                <motion.li variants={item} className="nav__item  w-100">
                  <NavLink to="/dashboard">
                    {<MdDashboard />}
                    <span>Əlavə et</span>
                  </NavLink>
                </motion.li>
                <motion.li variants={item} className="nav__item">
                  <NavLink to="/products">
                    {<MdInventory />}
                    <span>Məhsullar</span>
                  </NavLink>
                </motion.li>
              </IconContext.Provider>
            </ul>
          </motion.div>
          <motion.div variants={item} className="auth">
            <button onClick={handleCloseWindow}>{<BiSolidExit />}Çıxış et</button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Sidebar;