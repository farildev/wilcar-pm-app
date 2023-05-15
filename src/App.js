import React from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import "./app.css";
function App() {
  return (
    <div className="wrapper-container">
      <Sidebar/>
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/add" exact={true} element={<AddProducts/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
