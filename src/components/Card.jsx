import React from 'react'
import {Link} from 'react-router-dom';
import "../assets/css/card.css";
function Card({detail}) {
  return (
    <>
      <div className='row shadow'>
        <div className="card col-4">
        <img src={detail?.image} className="card-img-top" alt={detail.title} />
        <div className="card-body">
            <h5 className="card-title">{detail?.title}</h5>
            <p className="card-text">{detail?.description}</p>
        </div>
        <Link className='btn btn-primary'>View</Link>
        </div>
    </div>
    </>
  )
}

export default Card