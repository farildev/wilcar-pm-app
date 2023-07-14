import React from 'react'

function Tables({detail}) {
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th className="col">#</th>
      <th className="col">Ad</th>
      <th className="col">Qiymət</th>
      <th className="col">Alış</th>
      <th className="col">Satış</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="row">{detail?.id}</th>
      <td name="title">{detail?.title}</td>
      <td name="price">{detail?.price}</td>
      <td name="buy">{detail?.buy}</td>
      <td name="sell">{detail?.sell}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Tables