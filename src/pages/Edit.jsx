import React from 'react';
import { useParams , useNavigate , Link } from 'react-router-dom';
import {useState, useEffect} from "react";
function Edit() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [products , setProducts] = useState({});
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
      fetch(`http://localhost:7000/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
    })

    useEffect(()=>{
      fetch(`http://localhost:7000/products/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data))
    },[id])

    const handleInput = (e)=>{
      const {name , value} = e.target
      setProducts({...products , [name]:value})
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      fetch(`http://localhost:7000/products/${id}` , {
        method: "PATCH",
        headers : {
          "Content-Type" : "Application/json"
        },
        body : JSON.stringify(products),
      })
      .then((res) => {
        if(res.status === 200){
          navigate("/products")
        }
      })
    }
  return (
    <>
        <div className="container">
        <div className="row p-2">
        <div className="col-12">
        <Link className='btn btn-primary' to="/products">Go Back</Link>
      </div>
        <div className="header mt-4">
          <h2 className='fw-bolder text-white'>Edit Products</h2>
        </div>
        <form onSubmit={(e) => {handleSubmit(e)}} className="form__control">
          <div className="row">
            <div className="col-6 mt-2">
            <input defaultValue={products?.title} type="text" name='title' className="form-control bg-dark text-white border border-dark" onChange={(e)=>handleInput(e)}  placeholder="Title"/>
            </div>
            <div className="col-6 mt-2">
            <input defaultValue={products?.description} type="text" name='description' className="form-control bg-dark text-white border border-dark" onChange={(e)=>handleInput(e)}   placeholder="Description"/>
            </div>
            <div className="col-6 mt-2">
            <input defaultValue={products?.price} type="text" name='price' className="form-control bg-dark text-white border border-dark" onChange={(e)=>handleInput(e)}   placeholder="Price"/>
            </div>
            <div className="col-6 mt-2">
            <select defaultValue={products?.category} className='form-select bg-dark text-white border border-dark' name="" id="" onChange={(e)=>handleInput(e)}>
              {
                categories.map((index,key) => (
                  <option className='form-control' key={key} value="option">{index?.name}</option>
                ))
              }
            </select>
            </div>
            <div className="col-6 mt-2">
            <input defaultValue={products?.image} type="text" name='image' className="form-control bg-dark text-white border border-dark" onChange={(e)=>handleInput(e)}   placeholder="Image"/>
            </div>
          </div>
          <div className="col-12 mt-4">
            <button className='btn btn-primary'>Save Product</button>
          </div>
        </form>
      </div>
        </div>
    </>
  )
}

export default Edit