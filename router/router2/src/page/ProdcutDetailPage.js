import React from 'react'
import { useParams } from 'react-router'

const ProdcutDetailPage = () => {
    //파라미터 보내기
    const params = useParams();
    console.log('params ',params);
    //params {id : 1}
  return (
    <div>
        <h2>ProdcutDetailPage</h2>
    </div>
  )
}

export default ProdcutDetailPage