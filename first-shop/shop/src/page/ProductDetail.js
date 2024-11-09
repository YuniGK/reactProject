import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {
  const [producItem, setProducItem] = useState([]);

  const {id} = useParams();

  const getProduct = async () => {
    let url = `http://localhost:4000/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    
    setProducItem(data);
  };
  
  useEffect(()=>{
    getProduct();
  },[]);

  return (
    <div>

    </div>
  )
}

export default ProductDetail