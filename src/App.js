import React from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Categories from "./pages/Categories";
import Configuration from "./pages/Configuration";
import Selling from "./pages/Selling";
import Edit from "./pages/Edit";
import "./app.css";
function App() {
  return (
    <div className="wrapper-container">
      <Sidebar/>
      <div className="wrapper">
      <Routes>  
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/categories" element={<Categories/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id/view" element = {<Details />} />
        <Route path="/products/:id/edit" element = {<Edit />} />
        <Route path="/selling" element = {<Selling />} />
        <Route path="/configuration" element = {<Configuration />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
