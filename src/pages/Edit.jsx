import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getProduct, updateProduct, deleteProduct } from '../services/jsonService.ts';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getProduct(id)
          .then(data => setProducts(data))
          .catch(error => console.error("Error fetching product:", error));
    }, [id]);

    const handleInput = (e) => {
      const { name, value } = e.target;
      setProducts(prevProducts => ({ ...prevProducts, [name]: value }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, products)
        .then(() => {
            navigate("/products");
        })
        .catch(error => console.error("Error updating product:", error));
}

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container"
      >
        <div className="row p-2">
          <div className="col-12">
            <Link
              className="btn btn-dark text-danger border border-danger border-1"
              to="/products"
            >
              Geri qayıt
            </Link>
          </div>
          <div className="header mt-4">
            <h2 className="fw-bolder text-white">Məhsulu redaktə et</h2>
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
                  defaultValue={products?.title}
                  type="text"
                  name="title"
                  className="form-control bg-dark text-white border border-dark"
                  onChange={(e) => handleInput(e)}
                  placeholder="Malın adı"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  defaultValue={products?.buy}
                  type="text"
                  name="description"
                  className="form-control bg-dark text-white border border-dark"
                  onChange={(e) => handleInput(e)}
                  placeholder="Alış qiyməti"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  defaultValue={products?.sell}
                  type="text"
                  name="price"
                  className="form-control bg-dark text-white border border-dark"
                  onChange={(e) => handleInput(e)}
                  placeholder="Satış qiyməti"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  defaultValue={products?.number}
                  type="text"
                  name="price"
                  className="form-control bg-dark text-white border border-dark"
                  onChange={(e) => handleInput(e)}
                  placeholder="Satış qiyməti"
                />
              </div>
              <div className="col-6 mt-2"></div>
            </div>
            <div className="col-12 mt-4">
              <button className="btn btn-danger">Qeyd et</button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Edit;