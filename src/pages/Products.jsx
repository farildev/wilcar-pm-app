import React , {useState , useEffect} from 'react';
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
        setProducts(products.filter( e => e.id !== id))
      }
    })
  }
  return (
    <div className='products container'>
      {
        products.map((index,key)=>(
          <Card key={key} detail = {index} deleteItem = {deleteItem} />
        ))
      }
   </div>
  )
}

export default Products