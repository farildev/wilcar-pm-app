import React from 'react'
import {Link} from 'react-router-dom';
import "../assets/css/card.css";
function Card({detail , deleteItem}) {
  return (
    <>
        <div className="card shadow col-4 mt-2">
        <img src={detail?.image} className="card-img-top" alt={detail?.title} />
        <div className="card-body">
            <h5 className="card-title">{detail?.title}</h5>
            <p className="card-text">{detail?.description}</p>
            <span className='card-text'>{detail?.price} $</span>
        </div>
        <div className="col-12">
          <div className="btn-group col-12">
          <Link to={`/products/${detail?.id}/view`} className='btn btn-primary col-6'>View</Link>
          <Link to={`/products/${detail?.id}/edit`} className='btn btn-success col-6'>Edit</Link>
          <button onClick={() => deleteItem()} className='btn btn-danger col-6'>Delete</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default Card