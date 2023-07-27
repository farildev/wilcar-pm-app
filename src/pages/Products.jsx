import React , {useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Card from '../components/Card';
import "../assets/css/products.css";

function Products() {
  const [products , setProducts] = useState([]);
  const [search , setSearch] = useState("");

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
          <input onChange={(e) => setSearch(e.target.value)} className='form-control bg-dark text-white border border-dark col-12' type="search" name="search" placeholder='Axtarış' />
        </div>
      </div>
      </div>
      <div className="col-12">
      <div className="row mt-3">
        <table className='table table-dark table-hover table-striped shadow-lg mt-4 '>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Malın adı</th>
                            <th>Alış qiyməti</th>
                            <th>Satış qiyməti</th>
                            <th>Qab Nömrəsi</th>
                            <th>Əməliyyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.filter((index) =>{
                              return search.toLowerCase() === "" ? index : index.title.toLowerCase().includes(search)
                            }).map((index,key) => (
                                <tr className='col-12' key={key}>
                                    <td className='col-1'>{key + 1}</td>
                                    <td className='col-4'>{index?.title}</td>
                                    <td className='col-2'>{index?.buy}</td>
                                    <td className='col-2'>{index?.sell}</td>
                                    <td className='col-2'>{index?.number}</td>
                                    <td className='col-1'>
                                            <div className="btn btn-danger" onClick={()=>deleteItem(index?.id)}>Delete</div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
      </div>
      </div>
   </div>
  )
}

export default Products