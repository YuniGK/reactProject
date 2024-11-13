import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction'

const ProductAll = () => {
  const productList = useSelector(state=>state.productList);
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || "";
   
    dispatch(productAction.getProducts(searchQuery));
  };
  
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='product-all'>
      <Container>
        <Row>
          {
            productList &&
              productList.map((item) => (              
                  <Col xs={12} md={4} lg={3} key={item.id}>
                    <ProductCard item={item} />
                  </Col>              
              ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll