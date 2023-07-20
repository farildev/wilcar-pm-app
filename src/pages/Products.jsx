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
      <div className="row">
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