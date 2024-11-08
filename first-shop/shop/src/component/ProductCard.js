import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='item-box'>
        <img src={item.img} alt={item.title} />
        {item.choice && <div className=''>Choice</div>}
        <div className='title-box'>
            <h2>{item.title}</h2>
            <h4>{item.price}</h4>
        </div>
        {item.new && <div className=''>New</div>}
    </div>
  )
}

export default ProductCard