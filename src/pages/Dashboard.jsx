import React from 'react';
import {useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../assets/css/dashboard.css";

function Dashboard() {
  const [data , setData] = useState({})
  const [categories , setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:7000/categories`)
    .then((res) => res.json())
    .then((data) => setCategories(data));
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:7000/products` , {
      method: "POST",
      headers : {
        "Content-Type" : "Application/json"
      },
      body : JSON.stringify(data),
    })
    .then((res) => {
      if(res.status === 201){
        navigate("/products")
      }
    })
  }
  const handleInput = (e)=>{
    const {name , value} = e.target
    setData({...data , [name]:value})
  }
  return (
    <div className='dashboard'>
      <div className="row p-2">
        <div className="header">
          <h2 className='fw-bolder'>Add Products</h2>
        </div>
        <form onSubmit={(e) => {handleSubmit(e)}} className="form__control">
          <div className="row">
            <div className="col-6 mt-2">
            <input type="text" name='title' className="form-control" onChange={(e)=>handleInput(e)}  placeholder="Title"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" name='description' className="form-control" onChange={(e)=>handleInput(e)}   placeholder="Description"/>
            </div>
            <div className="col-6 mt-2">
            <input type="text" name='price' className="form-control" onChange={(e)=>handleInput(e)}   placeholder="Price"/>
            </div>
            <div className="col-6 mt-2">
            <select name="" id="">
              {
                categories.map((index,key) => (
                  <option className='form-control' key={key} value="option">{index?.name}</option>
                ))
              }
            </select>
            </div>
            <div className="col-6 mt-2">
            <input type="text" name='image' className="form-control" onChange={(e)=>handleInput(e)}   placeholder="Image"/>
            </div>
          </div>
          <div className="col-12 mt-4">
            <button className='btn btn-primary'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard