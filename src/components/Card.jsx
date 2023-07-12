import React from 'react'
import {Link} from 'react-router-dom';
import "../assets/css/card.css";
function Card({detail}) {
  return (
    <>
        <div className="card shadow col-4 mt-2">
        <img src={detail?.image} className="card-img-top" alt={detail?.title} />
        <div className="card-body">
            <h5 className="card-title">{detail?.title}</h5>
            <p className="card-text">{detail?.description}</p>
        </div>
        <Link to={`/products/${detail?.id}`} className='btn btn-primary'>View</Link>
        </div>
    </>
  )
}

export default Card