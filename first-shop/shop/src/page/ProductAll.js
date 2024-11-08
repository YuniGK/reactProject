import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = 'http://localhost:4000/products';

    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  };
  
  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div className='product-all'>
      <ul>
        {
          productList &&
            productList.map((item) => (
              <li key={item.id}>
                <ProductCard item={item} />
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ProductAll