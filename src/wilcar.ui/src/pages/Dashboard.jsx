import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Product successfully added!", {
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
      }
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="form__control"
        >
          <div className="row">
            <div className="col-6 mt-2">
              <input
                type="text"
                name="title"
                className="form-control bg-dark text-white border border-dark"
                onChange={(e) => handleInput(e)}
                placeholder="Malın adı"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="buy"
                className="form-control bg-dark text-white border border-dark"
                onChange={(e) => handleInput(e)}
                placeholder="Alış qiyməti"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="sell"
                className="form-control bg-dark text-white border border-dark"
                onChange={(e) => handleInput(e)}
                placeholder="Satış qiyməti"
              />
            </div>
            <div className="col-6 mt-2">
              <input
                type="text"
                name="number"
                className="form-control bg-dark text-white border border-dark"
                onChange={(e) => handleInput(e)}
                placeholder="Qab nömrəsi"
              />
            </div>
            <div className="col-6 mt-2"></div>
          </div>
          <div className="col-12 mt-4">
            <button className="btn btn-danger">Məhsul əlavə et</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
