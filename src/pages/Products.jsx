import React , {useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../components/Card';
import "../assets/css/products.css";

function Products() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:7000/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const deleteItem = (id) => {
    fetch(`http://localhost:7000/products/${id}` , {
      method : "DELETE"
    })
    .then((res) => {
      if(res.status === 200){
        toast.error('Product successfully deleted!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setProducts(products.filter( e => e.id !== id))
      }
    })
  }
  return (
    <div className='products container'>
      <ToastContainer />
      <div className="col-12 mt-3">
      <div className="row">
      <div className="col-10">
          <input className='form-control bg-dark text-white border border-dark col-12' type="search" name="search" placeholder='Axtarış' />
        </div>
        <div className="col-2">
          <button className="btn btn-primary col-12">Axtar</button>
        </div>
      </div>
      </div>
      <div className="row mt-3">
      {
        products.map((index,key)=>(
          <Card key={key} detail = {index} deleteItem = {deleteItem} />
        ))
      }
      </div>
   </div>
  )
}

export default Products