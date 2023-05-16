import React , {useState , useEffect} from 'react';

function Products() {
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='products container'>
      
   </div>
  )
}

export default Products