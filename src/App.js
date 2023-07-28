import React from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import "./app.css";
function App() {
  return (
    <>
    <div className="wrapper-container">
      <Sidebar/>
      <div className="wrapper">
      <Routes>  
      <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id/edit" element = {<Edit />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
