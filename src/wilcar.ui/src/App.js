import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./app.css";


const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Products = React.lazy(() => import("./pages/Products"));
const Edit = React.lazy(() => import("./pages/Edit"));

function App() {
  return (
    <div className="wrapper-container">
      <Sidebar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense>} />
          <Route path="/dashboard" element={<React.Suspense fallback={<div>Loading...</div>}><Dashboard /></React.Suspense>} />
          <Route path="/products" element={<React.Suspense fallback={<div>Loading...</div>}><Products /></React.Suspense>} />
          <Route path="/products/:id/edit" element={<React.Suspense fallback={<div>Loading...</div>}><Edit /></React.Suspense>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;