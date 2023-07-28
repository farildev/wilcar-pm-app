import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import Card from '../components/Card';
import "../assets/css/products.css";
import { motion } from "framer-motion";
import httpService from "../services/httpService.ts";


function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    httpService.post("/products")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const deleteItem = (id) => {
    httpService.del(`/products/${id}`)
      .then((response) => {
        if (response.result) {
          toast.error("Product successfully deleted!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setProducts(products.filter((e) => e.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting product:", error));
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
      className="products container"
    >
      <ToastContainer />
      <motion.div variants={item} className="col-12 mt-3">
        <div className="row">
          <div className="col-10">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="form-control bg-dark text-white border border-dark col-12"
              type="search"
              name="search"
              placeholder="Axtarış"
            />
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="col-12">
        <div className="row mt-3">
          <table className="table table-dark table-hover table-striped shadow-lg mt-4 ">
            <thead>
              <tr>
                <th>#</th>
                <th>Malın adı</th>
                <th>Alış qiyməti</th>
                <th>Satış qiyməti</th>
                <th>Qab Nömrəsi</th>
                <th>Əməliyyat</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((index) => {
                  return search.toLowerCase() === ""
                    ? index
                    : index.title.toLowerCase().includes(search);
                })
                .map((index, key) => (
                  <tr className="col-12" key={key}>
                    <td className="col-1">{key + 1}</td>
                    <td className="col-3">{index?.title}</td>
                    <td className="col-2">{index?.buy}</td>
                    <td className="col-2">{index?.sell}</td>
                    <td className="col-2">{index?.number}</td>
                    <td className="col-2 buttons">
                      <Link
                        to={`/products/${index?.id}/edit`}
                        className="btn btn-dark border border-danger text-danger col-5 "
                      >
                        Dəyiş
                      </Link>
                      <div
                        className="btn btn-danger col-6"
                        onClick={() => deleteItem(index?.id)}
                      >
                        Sil
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Products;