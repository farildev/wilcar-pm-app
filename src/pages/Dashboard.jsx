import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from '../services/jsonService.ts';

function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(data);
      toast.success('Product successfully added!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error('Failed to add product!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <ToastContainer />
      <motion.div variants={item} className="row p-2">
        <div className="header">
          <h2 className="text-white">Məhsul əlavə et</h2>
        </div>
        <form onSubmit={handleSubmit} className="form__control">
          <div className="row">
            <div className="col-6 mt-2">
              <input
                type="text"
                name="title"
                className="form-control bg-dark text-white border border-dark"
                value={data.title}
                onChange={handleInput}
                placeholder="Malın adı"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="buy"
                className="form-control bg-dark text-white border border-dark"
                value={data.buy}
                onChange={handleInput}
                placeholder="Alış qiyməti"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="sell"
                className="form-control bg-dark text-white border border-dark"
                value={data.sell}
                onChange={handleInput}
                placeholder="Satış qiyməti"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="number"
                className="form-control bg-dark text-white border border-dark"
                value={data.number}
                onChange={handleInput}
                placeholder="Qab nömrəsi"
              />
            </div>
            <div className="col-6 mt-2"></div>
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-danger">
              Məhsul əlavə et
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;