import React from 'react'
import {Link} from 'react-router-dom';

function Card({detail}) {
  return (
    <>
      <div className='row'>
        <div className="card">
        <img src={detail?.image} className="card-img-top" alt={detail.title} />
        <div className="card-body">
            <h5 className="card-title">{detail?.title}</h5>
            <p className="card-text">{detail?.description}</p>
        </div>
        <Link className=''></Link>
        </div>
    </div>
    </>
  )
}

export default Card